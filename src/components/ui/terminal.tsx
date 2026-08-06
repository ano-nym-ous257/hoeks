"use client";

import { Circle } from "lucide-react";
import {
  useInView,
  useReducedMotion,
} from "motion/react";
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
  lineDelay?: number;
}

interface HistoryEntry {
  command: string;
  output: string[];
  tone?: "normal" | "success" | "error";
}

const COMMANDS = [
  "help",
  "whoami",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
  "github",
  "status",
  "pwd",
  "date",
  "clear",
] as const;

type Command = (typeof COMMANDS)[number];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function Terminal({
  title = "gamefreak@portfolio:~",
  lines = [],
  className,
  typingSpeed = 30,
  lineDelay = 300,
}: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(terminalRef, {
    amount: 0.3,
    margin: "-8% 0px -8% 0px",
  });

  const reduceMotion = useReducedMotion();

  const [introHistory, setIntroHistory] = useState<HistoryEntry[]>([]);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [activeCommand, setActiveCommand] = useState("");
  const [input, setInput] = useState("");
  const [introComplete, setIntroComplete] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const runId = useRef(0);

  const normalizedIntro = useCallback(
    () =>
      lines.map((line) => ({
        command: line.command ?? "",
        output: Array.isArray(line.output)
          ? line.output
          : line.output
            ? [line.output]
            : [],
        tone: "normal" as const,
      })),
    [lines],
  );

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

    const resetIntro = () => {
      setIntroHistory([]);
      setActiveCommand("");
      setIntroComplete(false);
    };

    if (!isInView) {
      resetIntro();

      return () => {
        timers.forEach(clearTimeout);
      };
    }

    if (reduceMotion) {
      setIntroHistory(normalizedIntro());
      setIntroComplete(true);

      return () => {
        timers.forEach(clearTimeout);
      };
    }

    const typeCommand = async (command: string) => {
      setActiveCommand("");

      for (let index = 0; index < command.length; index += 1) {
        if (cancelled()) return;

        setActiveCommand(command.slice(0, index + 1));
        await wait(typingSpeed);
      }
    };

    const playIntro = async () => {
      resetIntro();

      for (const line of normalizedIntro()) {
        if (cancelled()) return;

        await typeCommand(line.command);
        await wait(140);

        if (cancelled()) return;

        setIntroHistory((current) => [...current, line]);
        setActiveCommand("");
        await wait(lineDelay);
      }

      if (!cancelled()) {
        setIntroComplete(true);
        setTimeout(() => inputRef.current?.focus(), 150);
      }
    };

    void playIntro();

    return () => {
      runId.current += 1;
      timers.forEach(clearTimeout);
    };
  }, [
    isInView,
    lineDelay,
    normalizedIntro,
    reduceMotion,
    typingSpeed,
  ]);

  useEffect(() => {
    bodyRef.current?.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [activeCommand, history, introHistory]);

  function executeCommand(rawCommand: string): HistoryEntry | null {
    const command = rawCommand.trim().toLowerCase();

    if (!command) return null;

    switch (command as Command) {
      case "help":
        return {
          command: rawCommand,
          output: [
            "Available commands:",
            "help        Show available commands",
            "whoami      Display profile information",
            "about       Navigate to About",
            "projects    Navigate to Projects",
            "skills      Navigate to Skills",
            "experience  Navigate to Experience",
            "contact     Navigate to Contact",
            "github      Open GitHub profile",
            "status      Display system status",
            "pwd         Display current path",
            "date        Display current date and time",
            "clear       Clear terminal history",
          ],
        };

      case "whoami":
        return {
          command: rawCommand,
          output: [
            "Gamefreak",
            "Cybersecurity · AWS Cloud · Networking · Software Engineering",
            "Security-focused systems and infrastructure professional",
          ],
          tone: "success",
        };

      case "about":
        scrollToSection("about");
        return {
          command: rawCommand,
          output: ["Opening About module..."],
          tone: "success",
        };

      case "projects":
        scrollToSection("projects");
        return {
          command: rawCommand,
          output: ["Opening Projects module..."],
          tone: "success",
        };

      case "skills":
        scrollToSection("skills");
        return {
          command: rawCommand,
          output: ["Opening Skills module..."],
          tone: "success",
        };

      case "experience":
        scrollToSection("experience");
        return {
          command: rawCommand,
          output: ["Opening Experience log..."],
          tone: "success",
        };

      case "contact":
        scrollToSection("contact");
        return {
          command: rawCommand,
          output: ["Opening secure contact channel..."],
          tone: "success",
        };

      case "github":
        window.open(
          "https://github.com/ano-nym-ous257",
          "_blank",
          "noopener,noreferrer",
        );

        return {
          command: rawCommand,
          output: ["Opening GitHub profile..."],
          tone: "success",
        };

      case "status":
        return {
          command: rawCommand,
          output: [
            "Security       ONLINE",
            "AWS            CONNECTED",
            "Network        HEALTHY",
            "Portfolio      RUNNING",
          ],
          tone: "success",
        };

      case "pwd":
        return {
          command: rawCommand,
          output: ["/home/gamefreak/portfolio"],
        };

      case "date":
        return {
          command: rawCommand,
          output: [new Date().toLocaleString()],
        };

      case "clear":
        setHistory([]);
        return null;

      default:
        return {
          command: rawCommand,
          output: [
            `Command not found: ${rawCommand}`,
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

      const nextIndex =
        historyIndex < commandHistory.length - 1
          ? historyIndex + 1
          : historyIndex;

      setHistoryIndex(nextIndex);
      setInput(commandHistory[commandHistory.length - 1 - nextIndex] ?? "");
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
      setInput(commandHistory[commandHistory.length - 1 - nextIndex] ?? "");
    }

    if (event.key === "Tab") {
      event.preventDefault();

      const match = COMMANDS.find((command) =>
        command.startsWith(input.toLowerCase()),
      );

      if (match) {
        setInput(match);
      }
    }
  }

  const visibleHistory = [...introHistory, ...history];

  return (
    <div
      ref={terminalRef}
      className={cn("terminal-window terminal-interactive", className)}
      onClick={() => inputRef.current?.focus()}
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
        aria-label="Interactive portfolio terminal"
        aria-live="polite"
      >
        {visibleHistory.map((entry, index) => (
          <div
            className={`terminal-entry terminal-entry-${entry.tone ?? "normal"}`}
            key={`${entry.command}-${index}`}
          >
            {entry.command ? (
              <p className="terminal-command">
                <span className="terminal-prompt">$</span>
                {entry.command}
              </p>
            ) : null}

            {entry.output.map((output, outputIndex) => (
              <p
                className="terminal-output"
                key={`${output}-${outputIndex}`}
              >
                {output}
              </p>
            ))}
          </div>
        ))}

        {!introComplete ? (
          <p className="terminal-command terminal-active-line">
            <span className="terminal-prompt">$</span>
            <span>{activeCommand}</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </p>
        ) : (
          <form
            className="terminal-input-line"
            onSubmit={handleSubmit}
          >
            <label className="sr-only" htmlFor="terminal-command">
              Enter terminal command
            </label>

            <span className="terminal-prompt">$</span>

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
        )}
      </div>

      <div className="terminal-footer">
        <span>Type “help” for commands</span>
        <span>Tab: autocomplete · ↑↓: history</span>
      </div>
    </div>
  );
}
