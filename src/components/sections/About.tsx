import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  "Security-conscious",
  "Systems-focused",
  "Built for reliability",
];

export default function About() {
  return (
    <section className="container section editorial-section" id="about">
      <SectionHeading
        number="01"
        label="About"
        overline="Secure systems · Reliable infrastructure · Modern software"
        title="I design technology as a complete system,"
        accent="not a collection of isolated tools."
      />

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
            I focus on how systems communicate, where they fail, how they can
            be secured and how thoughtful engineering can make them easier to
            operate.
          </p>

          <p>
            That means looking beyond the interface and understanding the
            infrastructure, network, access controls and operational decisions
            supporting the final product.
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
    </section>
  );
}
