"use client";

import { Circle } from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
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
  lines: TerminalLine[];
  className?: string;
  typingSpeed?: number;
  lineDelay?: number;
}

interface RenderedLine {
  command: string;
  output: string[];
}

export function Terminal({
  title = "gamefreak@portfolio:~",
  lines,
  className,
  typingSpeed = 34,
  lineDelay = 360,
}: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(terminalRef, {
    amount: 0.35,
    margin: "-8% 0px -8% 0px",
  });
  const reduceMotion = useReducedMotion();

  const [renderedLines, setRenderedLines] = useState<RenderedLine[]>([]);
  const [activeCommand, setActiveCommand] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const runId = useRef(0);

  const normalizeLines = useCallback(
    () =>
      lines.map((line) => ({
        command: line.command ?? "",
        output: Array.isArray(line.output)
          ? line.output
          : line.output
            ? [line.output]
            : [],
      })),
    [lines],
  );

  useEffect(() => {
    runId.current += 1;
    const currentRun = runId.current;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const isCancelled = () => currentRun !== runId.current;

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        const timer = setTimeout(resolve, duration);
        timers.push(timer);
      });

    const reset = () => {
      setRenderedLines([]);
      setActiveCommand("");
      setIsComplete(false);
    };

    if (!isInView) {
      reset();

      return () => {
        timers.forEach(clearTimeout);
      };
    }

    if (reduceMotion) {
      setRenderedLines(normalizeLines());
      setActiveCommand("");
      setIsComplete(true);

      return () => {
        timers.forEach(clearTimeout);
      };
    }

    const typeText = async (text: string) => {
      setActiveCommand("");

      for (let index = 0; index < text.length; index += 1) {
        if (isCancelled()) return;

        setActiveCommand(text.slice(0, index + 1));
        await wait(typingSpeed);
      }
    };

    const runSequence = async () => {
      reset();

      for (const line of normalizeLines()) {
        if (isCancelled()) return;

        await typeText(line.command);

        if (isCancelled()) return;

        await wait(160);

        setRenderedLines((current) => [
          ...current,
          line,
        ]);

        setActiveCommand("");
        await wait(lineDelay);
      }

      if (!isCancelled()) {
        setIsComplete(true);
      }
    };

    void runSequence();

    return () => {
      runId.current += 1;
      timers.forEach(clearTimeout);
    };
  }, [
    isInView,
    lineDelay,
    normalizeLines,
    reduceMotion,
    typingSpeed,
  ]);

  return (
    <motion.div
      ref={terminalRef}
      className={cn("terminal-window", className)}
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
        className="terminal-body"
        aria-label="Animated technical terminal"
        aria-live="polite"
      >
        {renderedLines.map((line, index) => (
          <div className="terminal-entry" key={`${line.command}-${index}`}>
            {line.command ? (
              <p className="terminal-command">
                <span className="terminal-prompt">$</span>
                {line.command}
              </p>
            ) : null}

            {line.output.map((output, outputIndex) => (
              <p
                className="terminal-output"
                key={`${output}-${outputIndex}`}
              >
                {output}
              </p>
            ))}
          </div>
        ))}

        {isInView ? (
          <p className="terminal-command terminal-active-line">
            <span className="terminal-prompt">$</span>
            {!isComplete ? <span>{activeCommand}</span> : null}
            <span className="terminal-cursor" aria-hidden="true" />
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
