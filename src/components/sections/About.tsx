import { ArrowUpRight } from "lucide-react";

const principles = [
  "Security-conscious",
  "Systems-focused",
  "Built for reliability",
];

export default function About() {
  return (
    <section className="container section editorial-section" id="about">
      <div className="editorial-section-number">01</div>

      <div className="editorial-section-grid">
        <div className="editorial-section-label">
          <span>About</span>
          <div className="editorial-label-line" />
        </div>

        <div className="editorial-section-content">
          <p className="editorial-overline">
            Secure systems · Reliable infrastructure · Modern software
          </p>

          <h2 className="editorial-section-title">
            I design technology as a complete system,
            <span> not a collection of isolated tools.</span>
          </h2>

          <div className="editorial-about-layout">
            <div className="editorial-about-statement">
              <p>
                My work combines cybersecurity, AWS cloud infrastructure,
                networking, technical support and software engineering.
              </p>

              <a className="editorial-text-link" href="#projects">
                Explore selected work
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="editorial-about-copy">
              <p>
                I focus on how systems communicate, where they fail, how they
                can be secured and how thoughtful engineering can make them
                easier to operate.
              </p>

              <p>
                That means looking beyond the interface and understanding the
                infrastructure, network, access controls and operational
                decisions supporting the final product.
              </p>

              <div className="editorial-principles">
                {principles.map((principle, index) => (
                  <div className="editorial-principle" key={principle}>
                    <span>0{index + 1}</span>
                    <strong>{principle}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
