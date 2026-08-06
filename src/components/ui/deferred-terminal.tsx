"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const InteractiveTerminal = dynamic(
  () =>
    import("@/components/ui/terminal").then(
      (module) => module.Terminal,
    ),
  {
    ssr: false,
    loading: () => <TerminalPlaceholder />,
  },
);

export default function DeferredTerminal() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    const reveal = () => {
      setReady(true);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(reveal, {
        timeout: 1400,
      });
    } else {
      timeoutId = setTimeout(reveal, 900);
    }

    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return ready ? <InteractiveTerminal /> : <TerminalPlaceholder />;
}

function TerminalPlaceholder() {
  return (
    <div
      className="terminal-window terminal-placeholder"
      aria-label="Loading interactive engineering terminal"
      aria-busy="true"
    >
      <div className="terminal-header">
        <div className="terminal-placeholder-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <span>visitor@gamefreak:~</span>

        <span className="terminal-status">BOOTING</span>
      </div>

      <div className="terminal-body">
        <pre className="terminal-placeholder-banner" aria-hidden="true">
{` GAMEFREAK
 ENGINEERING TERMINAL`}
        </pre>

        <p className="terminal-output">
          Initializing secure environment...
        </p>

        <div className="terminal-placeholder-line terminal-placeholder-line-long" />
        <div className="terminal-placeholder-line terminal-placeholder-line-medium" />
        <div className="terminal-placeholder-line terminal-placeholder-line-short" />
      </div>

      <div className="terminal-footer">
        <span>Loading command engine</span>
        <span>System initialization</span>
      </div>
    </div>
  );
}
