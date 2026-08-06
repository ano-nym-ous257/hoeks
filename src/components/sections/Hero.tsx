"use client";

import { motion } from "motion/react";
import { ArrowDownRight, GitBranch } from "lucide-react";
import RotatingRole from "@/components/effects/RotatingRole";
import { StatusBadge } from "@/components/ui/status-badge";
import { Terminal } from "@/components/ui/terminal";

const terminalLines = [
  {
    command: "whoami",
    output: ["Gamefreak", "Security · Cloud · Networks · Software"],
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

const viewport = {
  once: false,
  amount: 0.28,
  margin: "-8% 0px -8% 0px",
};

export default function Hero() {
  return (
    <section className="container hero editorial-hero" id="top">
      <div className="hero-outline-word" aria-hidden="true">
        GAMEFREAK
      </div>

      <div className="hero-layout">
        <motion.div
          className="hero-main"
          initial={{ opacity: 0, x: -42, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={viewport}
          transition={{
            duration: 1.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <StatusBadge>
            Systems online · Open to opportunities
          </StatusBadge>

          <p className="hero-kicker">
            <RotatingRole />
          </p>

          <h1 className="editorial-title hero-refined-title">
            Building
            <span>secure systems.</span>
          </h1>

          <p className="hero-copy editorial-copy hero-refined-copy">
            I engineer secure infrastructure, reliable networks and modern
            software with a focus on cybersecurity and AWS.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button editorial-primary"
              href="#projects"
            >
              View projects
              <ArrowDownRight size={18} />
            </a>

            <a
              className="secondary-button editorial-secondary"
              href="https://github.com/ano-nym-ous257"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-terminal-column"
          initial={{
            opacity: 0,
            x: 46,
            scale: 0.975,
            filter: "blur(4px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={viewport}
          transition={{
            duration: 1.1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Terminal lines={terminalLines} />
        </motion.div>
      </div>

      <motion.div
        className="hero-bottom-line"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{
          duration: 0.85,
          delay: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span>gamefreakdev.xyz</span>
        <span>Cybersecurity · AWS · Networks · Software</span>
      </motion.div>
    </section>
  );
}
