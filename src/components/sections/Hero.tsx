import {
  ArrowDownRight,
  Download,
} from "lucide-react";
import HeroMotion from "@/components/effects/HeroMotion";
import RotatingRole from "@/components/effects/RotatingRole";
import DeferredTerminal from "@/components/ui/deferred-terminal";
import { StatusBadge } from "@/components/ui/status-badge";

export default function Hero() {
  return (
    <section className="container hero editorial-hero" id="top">
      <div className="hero-outline-word" aria-hidden="true">
        GAMEFREAK
      </div>

      <div className="hero-layout">
        <HeroMotion className="hero-main" variant="content">
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
            I help startups and engineering teams build secure infrastructure,
            reliable networks and modern software with a focus on
            cybersecurity and AWS.
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
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} />
              Résumé
            </a>

            <a
              className="secondary-button editorial-secondary hero-social-button"
              href="https://github.com/ano-nym-ous257"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
            >
              <span className="hero-social-monogram" aria-hidden="true">GH</span>
              <span>GitHub</span>
            </a>

            <a
              className="secondary-button editorial-secondary hero-social-button"
              href="https://www.linkedin.com/in/alex-agyei-81332a2b3/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
            >
              <span className="hero-social-monogram" aria-hidden="true">in</span>
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="hero-trust" aria-label="Professional availability">
            <span>Remote-first</span>
            <span>Documentation-first</span>
            <span>UTC / EST overlap</span>
          </div>

          <p className="sr-only">
            Gamefreak Engineering builds secure systems, AWS cloud
            infrastructure, reliable networks and cybersecurity-focused
            software for startups and remote engineering teams.
          </p>
        </HeroMotion>

        <HeroMotion
          className="hero-terminal-column"
          variant="terminal"
        >
          <DeferredTerminal />
        </HeroMotion>
      </div>

      <HeroMotion className="hero-bottom-line" variant="footer">
        <span>gamefreakdev.xyz</span>
        <span>Cybersecurity · AWS · Networks · Software</span>
      </HeroMotion>
    </section>
  );
}
