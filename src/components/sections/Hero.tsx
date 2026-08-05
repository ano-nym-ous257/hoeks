"use client";

import { motion } from "motion/react";
import { ArrowDownRight, GitBranch } from "lucide-react";
import RotatingRole from "@/components/effects/RotatingRole";
import { StatusBadge } from "@/components/ui/status-badge";
import { Terminal } from "@/components/ui/terminal";

const terminalLines = [
  {
    command: "whoami",
    output: [
      "Gamefreak",
      "Cybersecurity · AWS Cloud · Networking · Software",
    ],
  },
  {
    command: "aws sts get-caller-identity",
    output: "AWS environment connected",
  },
  {
    command: "git status --short --branch",
    output: "## main...origin/main",
  },
  {
    command: "systemctl status portfolio",
    output: "Active: running",
  },
];

export default function Hero() {
  return (
    <section className="container hero editorial-hero" id="top">
      <div className="hero-outline-word" aria-hidden="true">
        GAMEFREAK
      </div>

      <div className="hero-layout">
        <motion.div
          className="hero-main"
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <StatusBadge>
            Systems online · Open to opportunities
          </StatusBadge>

          <p className="hero-kicker">
            <RotatingRole />
          </p>

          <h1 className="editorial-title">
            Building systems
            <span> made to perform, scale and endure.</span>
          </h1>

          <p className="hero-copy editorial-copy">
            I work across cybersecurity, AWS cloud infrastructure, networking,
            IT support and software engineering—combining security thinking
            with practical technical execution.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button editorial-primary"
              href="#projects"
            >
              Explore my work
              <ArrowDownRight size={18} />
            </a>

            <a
              className="secondary-button editorial-secondary"
              href="https://github.com/ano-nym-ous257"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={18} />
              View GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 42, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Terminal lines={terminalLines} />
        </motion.div>
      </div>

      <div className="hero-bottom-line">
        <span>gamefreakdev.xyz</span>
        <span>Cybersecurity · AWS · Networks · Software</span>
      </div>
    </section>
  );
}
