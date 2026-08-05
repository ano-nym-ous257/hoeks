"use client";

import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
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
  typingSpeed = 38,
  lineDelay = 420,
}: TerminalProps) {
  const [renderedLines, setRenderedLines] = useState<RenderedLine[]>([]);
  const [activeCommand, setActiveCommand] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        const timer = setTimeout(resolve, duration);
        timers.push(timer);
      });

    const typeText = async (text: string) => {
      setActiveCommand("");

      for (let index = 0; index < text.length; index += 1) {
        if (cancelled) return;

        setActiveCommand(text.slice(0, index + 1));
        await wait(typingSpeed);
      }
    };

    const runSequence = async () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        setRenderedLines(
          lines.map((line) => ({
            command: line.command ?? "",
            output: Array.isArray(line.output)
              ? line.output
              : line.output
                ? [line.output]
                : [],
          })),
        );
        setIsComplete(true);
        return;
      }

      setRenderedLines([]);
      setActiveCommand("");
      setIsComplete(false);

      for (const line of lines) {
        if (cancelled) return;

        const command = line.command ?? "";
        const output = Array.isArray(line.output)
          ? line.output
          : line.output
            ? [line.output]
            : [];

        await typeText(command);

        if (cancelled) return;

        await wait(180);

        setRenderedLines((current) => [
          ...current,
          {
            command,
            output,
          },
        ]);

        setActiveCommand("");
        await wait(lineDelay);
      }

      if (!cancelled) {
        setIsComplete(true);
      }
    };

    void runSequence();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [lineDelay, lines, typingSpeed]);

  return (
    <div className={cn("terminal-window", className)}>
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

        {!isComplete ? (
          <p className="terminal-command terminal-active-line">
            <span className="terminal-prompt">$</span>
            <span>{activeCommand}</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </p>
        ) : (
          <p className="terminal-command terminal-active-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </p>
        )}
      </div>
    </div>
  );
}
