import {
  ArrowUpRight,
  GitBranch,
  Globe2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="container hero" id="top">
      <div className="availability">
        <span className="availability-dot" />
        Open to professional opportunities
      </div>

      <p className="eyebrow">
        <Sparkles size={16} />
        Cybersecurity · AWS Cloud · Networking · Software
      </p>

      <h1>
        Building secure, reliable and
        <span> intelligent systems.</span>
      </h1>

      <p className="hero-copy">
        I&apos;m Gamefreak, an IT and software professional working across
        cybersecurity, AWS cloud infrastructure, computer networking,
        technical support and modern application development.
      </p>

      <div className="hero-actions">
        <a className="primary-button" href="#projects">
          Explore my work
          <ArrowUpRight size={18} />
        </a>

        <a
          className="secondary-button"
          href="https://github.com/ano-nym-ous257"
          target="_blank"
          rel="noreferrer"
        >
          <GitBranch size={18} />
          GitHub
        </a>
      </div>

      <div className="hero-meta">
        <span>
          <Globe2 size={16} />
          gamefreakdev.xyz
        </span>

        <span>
          <ShieldCheck size={16} />
          Security-focused engineering
        </span>
      </div>
    </section>
  );
}
