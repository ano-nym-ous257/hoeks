"use client";

import { motion } from "motion/react";
import {
  ArrowDownRight,
  Download,
} from "lucide-react";
import RotatingRole from "@/components/effects/RotatingRole";
import { StatusBadge } from "@/components/ui/status-badge";
import { Terminal } from "@/components/ui/terminal";

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
          viewport={{
            once: false,
            amount: 0.28,
            margin: "-8% 0px -8% 0px",
          }}
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
            <a className="primary-button editorial-primary" href="#projects">
              View projects
              <ArrowDownRight size={18} />
            </a>

            <a
              className="secondary-button editorial-secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} />
              Résumé
            </a>

            <a
              className="hero-icon-link"
              href="https://github.com/ano-nym-ous257"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .7C5.7.7.6 5.9.6 12.3c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0C18 4.6 19 4.9 19 4.9c.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.4 5.9 18.3.7 12 .7Z" />
              </svg>
            </a>

            <a
              className="hero-icon-link"
              href="https://www.linkedin.com/in/alex-agyei-81332a2b3/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.4 7.9H1.8V22h3.6V7.9ZM3.6 2A2.1 2.1 0 1 0 3.6 6.2 2.1 2.1 0 0 0 3.6 2ZM22.2 13.9c0-4.3-2.3-6.3-5.3-6.3-2.4 0-3.5 1.3-4.1 2.3v-2H9.2V22h3.6v-7c0-1.9.4-3.7 2.7-3.7 2.2 0 2.3 2.1 2.3 3.8V22h3.6l.8-8.1Z" />
              </svg>
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
          viewport={{
            once: false,
            amount: 0.28,
            margin: "-8% 0px -8% 0px",
          }}
          transition={{
            duration: 1.1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Terminal />
        </motion.div>
      </div>

      <motion.div
        className="hero-bottom-line"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
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
