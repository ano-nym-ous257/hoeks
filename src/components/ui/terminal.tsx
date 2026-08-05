import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TerminalLine {
  command?: string;
  output?: string | string[];
}

interface TerminalProps {
  title?: string;
  lines: TerminalLine[];
  className?: string;
}

export function Terminal({
  title = "gamefreak@portfolio:~",
  lines,
  className,
}: TerminalProps) {
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

      <div className="terminal-body">
        {lines.map((line, index) => (
          <div className="terminal-entry" key={`${line.command}-${index}`}>
            {line.command ? (
              <p className="terminal-command">
                <span className="terminal-prompt">$</span>
                {line.command}
              </p>
            ) : null}

            {typeof line.output === "string" ? (
              <p className="terminal-output">{line.output}</p>
            ) : null}

            {Array.isArray(line.output)
              ? line.output.map((output) => (
                  <p className="terminal-output" key={output}>
                    {output}
                  </p>
                ))
              : null}
          </div>
        ))}

        <p className="terminal-command terminal-active-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cursor" aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}
