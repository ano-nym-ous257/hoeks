import {
  ArrowDownRight,
  ArrowUpRight,
  Cloud,
  GitBranch,
  Network,
  ShieldCheck,
} from "lucide-react";

const disciplines = [
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
  },
  {
    title: "AWS Cloud",
    icon: Cloud,
  },
  {
    title: "Networking",
    icon: Network,
  },
];

export default function Hero() {
  return (
    <section className="container hero editorial-hero" id="top">
      <div className="hero-outline-word" aria-hidden="true">
        GAMEFREAK
      </div>

      <div className="hero-layout">
        <div className="hero-main">
          <div className="availability editorial-availability">
            <span className="availability-dot" />
            Open to professional opportunities
          </div>

          <p className="hero-kicker">
            Secure infrastructure · Intelligent software
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
            <a className="primary-button editorial-primary" href="#projects">
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
        </div>

        <aside className="hero-visual" aria-label="Technical disciplines">
          <div className="hero-red-block hero-red-block-large">
            <span>GF</span>
          </div>

          <div className="hero-discipline-list">
            {disciplines.map((discipline, index) => {
              const Icon = discipline.icon;

              return (
                <div className="hero-discipline" key={discipline.title}>
                  <span className="hero-discipline-number">
                    0{index + 1}
                  </span>

                  <Icon size={20} />

                  <span>{discipline.title}</span>

                  <ArrowUpRight size={17} />
                </div>
              );
            })}
          </div>

          <div className="hero-visual-grid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </aside>
      </div>

      <div className="hero-bottom-line">
        <span>gamefreakdev.xyz</span>
        <span>Cybersecurity · AWS · Networks · Software</span>
      </div>
    </section>
  );
}
