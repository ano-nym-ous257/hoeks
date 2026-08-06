"use client";

import { Circle } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";
import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export interface TerminalLine {
  command?: string;
  output?: string | string[];
}

interface TerminalProps {
  title?: string;
  lines?: TerminalLine[];
  className?: string;
  typingSpeed?: number;
}

interface HistoryEntry {
  command?: string;
  output: string[];
  tone?: "normal" | "success" | "error" | "accent";
  preformatted?: boolean;
}

const ASCII_BANNER = String.raw`
  ██████╗  █████╗ ███╗   ███╗███████╗███████╗██████╗ ███████╗ █████╗ ██╗  ██╗
 ██╔════╝ ██╔══██╗████╗ ████║██╔════╝██╔════╝██╔══██╗██╔════╝██╔══██╗██║ ██╔╝
 ██║  ███╗███████║██╔████╔██║█████╗  █████╗  ██████╔╝█████╗  ███████║█████╔╝
 ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  ██╔══╝  ██╔══██╗██╔══╝  ██╔══██║██╔═██╗
 ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗██║     ██║  ██║███████╗██║  ██║██║  ██╗
  ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
`;

const COMMANDS = [
  "help",
  "whoami",
  "about",
  "home",
  "projects",
  "skills",
  "experience",
  "contact",
  "resume",
  "linkedin",
  "github",
  "email",
  "status",
  "pwd",
  "date",
  "ls",
  "cat about.txt",
  "cat skills.txt",
  "cat contact.txt",
  "banner",
  "coffee",
  "sudo hire alex",
  "clear",
  "exit",
] as const;

const BOOT_STEPS = [
  "Initializing Gamefreak Engineering Terminal...",
  "Loading portfolio modules...",
  "Checking secure connection...",
  "Mounting project index...",
  "Loading professional profile...",
  "System ONLINE.",
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function Terminal({
  title = "visitor@gamefreak:~",
  className,
  typingSpeed = 24,
}: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const runId = useRef(0);

  const isInView = useInView(terminalRef, {
    amount: 0.3,
    margin: "-8% 0px -8% 0px",
  });

  const reduceMotion = useReducedMotion();

  const [bootHistory, setBootHistory] = useState<HistoryEntry[]>([]);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [activeBootText, setActiveBootText] = useState("");
  const [bootComplete, setBootComplete] = useState(false);

  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const resetBoot = useCallback(() => {
    setBootHistory([]);
    setActiveBootText("");
    setBootComplete(false);
  }, []);

  useEffect(() => {
    runId.current += 1;
    const currentRun = runId.current;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const cancelled = () => currentRun !== runId.current;

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        const timer = setTimeout(resolve, duration);
        timers.push(timer);
      });

    if (!isInView) {
      resetBoot();

      return () => {
        timers.forEach(clearTimeout);
      };
    }

    if (reduceMotion) {
      setBootHistory([
        {
          output: [ASCII_BANNER],
          tone: "accent",
          preformatted: true,
        },
        {
          output: [
            "Gamefreak Engineering Terminal v1.0",
            ...BOOT_STEPS,
            'Type "help" to view available commands.',
          ],
          tone: "success",
        },
      ]);
      setBootComplete(true);

      return () => {
        timers.forEach(clearTimeout);
      };
    }

    async function typeLine(text: string) {
      setActiveBootText("");

      for (let index = 0; index < text.length; index += 1) {
        if (cancelled()) return;

        setActiveBootText(text.slice(0, index + 1));
        await wait(typingSpeed);
      }

      if (cancelled()) return;

      setBootHistory((current) => [
        ...current,
        {
          output: [text],
        },
      ]);

      setActiveBootText("");
    }

    async function runBootSequence() {
      resetBoot();

      await wait(180);

      setBootHistory([
        {
          output: [ASCII_BANNER],
          tone: "accent",
          preformatted: true,
        },
        {
          output: ["Gamefreak Engineering Terminal v1.0"],
          tone: "accent",
        },
      ]);

      await wait(450);

      for (const step of BOOT_STEPS) {
        if (cancelled()) return;

        await typeLine(step);
        await wait(170);
      }

      if (cancelled()) return;

      setBootHistory((current) => [
        ...current,
        {
          output: ['Type "help" to view available commands.'],
          tone: "success",
        },
      ]);

      setBootComplete(true);

      const focusTimer = setTimeout(() => {
        inputRef.current?.focus();
      }, 180);

      timers.push(focusTimer);
    }

    void runBootSequence();

    return () => {
      runId.current += 1;
      timers.forEach(clearTimeout);
    };
  }, [isInView, reduceMotion, resetBoot, typingSpeed]);

  useEffect(() => {
    bodyRef.current?.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [activeBootText, bootHistory, history]);

  function createNavigationResult(
    command: string,
    section: string,
    label: string,
  ): HistoryEntry {
    scrollToSection(section);

    return {
      command,
      output: [`Opening ${label} module...`, "Navigation request accepted."],
      tone: "success",
    };
  }

  function executeCommand(rawCommand: string): HistoryEntry | null {
    const command = rawCommand.trim();
    const normalized = command.toLowerCase().replace(/\s+/g, " ");

    switch (normalized) {
      case "help":
        return {
          command,
          output: [
            "AVAILABLE COMMANDS",
            "",
            "help               Show command directory",
            "whoami             Display professional profile",
            "home               Return to the hero",
            "about              Open About",
            "projects           Open selected projects",
            "skills             Open technical skills",
            "experience         Open experience log",
            "contact            Open contact channel",
            "resume             Open résumé PDF",
            "linkedin           Open LinkedIn profile",
            "github             Open GitHub profile",
            "email              Start an email",
            "status             Display system status",
            "pwd                Print working directory",
            "date               Display local date and time",
            "ls                 List portfolio files",
            "cat about.txt      Read professional summary",
            "cat skills.txt     Read technical skills",
            "cat contact.txt    Read contact information",
            "banner             Print the Gamefreak banner",
            "clear              Clear command history",
          ],
          tone: "accent",
        };

      case "whoami":
        return {
          command,
          output: [
            "Alex Agyei",
            "IT Support · Cybersecurity · AWS Cloud · Networking",
            "Building secure systems, reliable infrastructure, and modern software.",
            "Available for remote paid internships and junior opportunities.",
          ],
          tone: "success",
        };

      case "home":
        return createNavigationResult(command, "top", "home");

      case "about":
        return createNavigationResult(command, "about", "About");

      case "projects":
        return createNavigationResult(command, "projects", "Projects");

      case "skills":
        return createNavigationResult(command, "skills", "Skills");

      case "experience":
        return createNavigationResult(command, "experience", "Experience");

      case "contact":
        return createNavigationResult(command, "contact", "Contact");

      case "resume":
        window.setTimeout(() => {
          openExternal("/resume.pdf");
        }, 450);

        return {
          command,
          output: [
            "Locating résumé.pdf...",
            "Résumé loaded successfully.",
            "Opening document...",
          ],
          tone: "success",
        };

      case "linkedin":
        window.setTimeout(() => {
          openExternal(
            "https://www.linkedin.com/in/alex-agyei-81332a2b3/",
          );
        }, 450);

        return {
          command,
          output: [
            "Connecting to LinkedIn...",
            "Profile located.",
            "Redirecting...",
          ],
          tone: "success",
        };

      case "github":
        window.setTimeout(() => {
          openExternal("https://github.com/ano-nym-ous257");
        }, 450);

        return {
          command,
          output: [
            "Connecting to GitHub...",
            "Repository index loaded.",
            "Redirecting...",
          ],
          tone: "success",
        };

      case "email":
        window.setTimeout(() => {
          window.location.href =
            "mailto:alexagyei196@gmail.com?subject=Portfolio%20Enquiry";
        }, 350);

        return {
          command,
          output: [
            "Opening secure email channel...",
            "Recipient: alexagyei196@gmail.com",
          ],
          tone: "success",
        };

      case "status":
        return {
          command,
          output: [
            "Security       ONLINE",
            "AWS            CONNECTED",
            "Network        HEALTHY",
            "Portfolio      RUNNING",
            "Résumé         AVAILABLE",
            "Availability   OPEN TO OPPORTUNITIES",
          ],
          tone: "success",
        };

      case "pwd":
        return {
          command,
          output: ["/home/gamefreak/portfolio"],
        };

      case "date":
        return {
          command,
          output: [new Date().toLocaleString()],
        };

      case "ls":
        return {
          command,
          output: [
            "about.txt",
            "skills.txt",
            "contact.txt",
            "resume.pdf",
            "projects/",
            "experience/",
            "socials/",
          ],
          tone: "accent",
        };

      case "cat about.txt":
        return {
          command,
          output: [
            "Alex Agyei is an early-career IT professional focused on",
            "cybersecurity, AWS cloud computing, networking, IT support,",
            "and modern software engineering.",
          ],
        };

      case "cat skills.txt":
        return {
          command,
          output: [
            "Cybersecurity",
            "AWS Cloud",
            "Networking",
            "IT Support",
            "Windows and macOS troubleshooting",
            "Git and GitHub",
            "React and Next.js",
            "TypeScript and JavaScript",
            "Command-line tools",
          ],
          tone: "accent",
        };

      case "cat contact.txt":
        return {
          command,
          output: [
            "Alex Agyei",
            "Email: alexagyei196@gmail.com",
            "Phone: +233 552 790 089",
            "Portfolio: gamefreakdev.xyz",
            "LinkedIn: alex-agyei-81332a2b3",
            "GitHub: ano-nym-ous257",
          ],
        };

      case "banner":
        return {
          command,
          output: [ASCII_BANNER],
          tone: "accent",
          preformatted: true,
        };

      case "coffee":
        return {
          command,
          output: [
            "☕ Loading caffeine...",
            "Developer productivity increased by 42%.",
          ],
          tone: "success",
        };

      case "sudo hire alex":
        return {
          command,
          output: [
            "Authenticating recruiter...",
            "Permission granted.",
            "Excellent choice.",
          ],
          tone: "success",
        };

      case "exit":
        return {
          command,
          output: [
            "Session termination denied.",
            "There is still more to explore.",
          ],
          tone: "accent",
        };

      case "clear":
        setHistory([]);
        return null;

      default:
        return {
          command,
          output: [
            `Command not found: ${command}`,
            'Type "help" to view available commands.',
          ],
          tone: "error",
        };
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const command = input.trim();

    if (!command) return;

    setCommandHistory((current) => [...current, command]);
    setHistoryIndex(-1);

    const result = executeCommand(command);

    if (result) {
      setHistory((current) => [...current, result]);
    }

    setInput("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) return;

      const nextIndex = Math.min(
        historyIndex + 1,
        commandHistory.length - 1,
      );

      setHistoryIndex(nextIndex);
      setInput(
        commandHistory[commandHistory.length - 1 - nextIndex] ?? "",
      );
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      const nextIndex = historyIndex - 1;

      setHistoryIndex(nextIndex);
      setInput(
        commandHistory[commandHistory.length - 1 - nextIndex] ?? "",
      );
    }

    if (event.key === "Tab") {
      event.preventDefault();

      const normalizedInput = input.toLowerCase();
      const match = COMMANDS.find((command) =>
        command.startsWith(normalizedInput),
      );

      if (match) {
        setInput(match);
      }
    }
  }

  return (
    <div
      ref={terminalRef}
      className={cn("terminal-window terminal-interactive", className)}
      onClick={() => {
        if (bootComplete) {
          inputRef.current?.focus();
        }
      }}
    >
      <div className="terminal-header">
        <div className="terminal-controls" aria-hidden="true">
          <Circle />
          <Circle />
          <Circle />
        </div>

        <span>{title}</span>

        <span className="terminal-status">ONLINE</span>
      </div>

      <div
        ref={bodyRef}
        className="terminal-body"
        aria-label="Interactive Gamefreak engineering terminal"
        aria-live="polite"
      >
        {bootHistory.map((entry, index) => (
          <TerminalEntry
            entry={entry}
            index={index}
            key={`boot-${index}`}
          />
        ))}

        {!bootComplete && activeBootText ? (
          <p className="terminal-output terminal-boot-active">
            {activeBootText}
            <span className="terminal-cursor" aria-hidden="true" />
          </p>
        ) : null}

        {history.map((entry, index) => (
          <TerminalEntry
            entry={entry}
            index={index}
            key={`history-${entry.command}-${index}`}
          />
        ))}

        {bootComplete ? (
          <form className="terminal-input-line" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="terminal-command">
              Enter terminal command
            </label>

            <span className="terminal-user-prompt">
              visitor@gamefreak:~$
            </span>

            <input
              ref={inputRef}
              id="terminal-command"
              name="terminal-command"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              aria-label="Terminal command"
            />

            <span className="terminal-cursor" aria-hidden="true" />
          </form>
        ) : null}
      </div>

      <div className="terminal-footer">
        <span>Type “help” for commands</span>
        <span>Tab autocomplete · ↑↓ history</span>
      </div>
    </div>
  );
}

function TerminalEntry({
  entry,
  index,
}: {
  entry: HistoryEntry;
  index: number;
}) {
  return (
    <div
      className={`terminal-entry terminal-entry-${
        entry.tone ?? "normal"
      }`}
      key={`${entry.command}-${index}`}
    >
      {entry.command ? (
        <p className="terminal-command">
          <span className="terminal-user-prompt">
            visitor@gamefreak:~$
          </span>
          {entry.command}
        </p>
      ) : null}

      {entry.output.map((output, outputIndex) =>
        entry.preformatted ? (
          <pre
            className="terminal-ascii"
            key={`${outputIndex}-${output.slice(0, 12)}`}
          >
            {output}
          </pre>
        ) : (
          <p
            className="terminal-output"
            key={`${output}-${outputIndex}`}
          >
            {output || "\u00A0"}
          </p>
        ),
      )}
    </div>
  );
}
