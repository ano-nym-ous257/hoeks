import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/data/capabilities";

export default function Expertise() {
  return (
    <section
      className="container section editorial-section expertise-section"
      id="expertise"
    >
      <SectionHeading
        number="02"
        label="Expertise"
        overline="Security · Cloud · Networks · Support"
        title="Supporting the full"
        accent="technology environment."
      />

      <div className="editorial-capabilities">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;

          return (
            <article
              className={`editorial-capability ${
                index === 0 ? "editorial-capability-featured" : ""
              }`}
              key={capability.title}
            >
              <div className="editorial-capability-top">
                <span>0{index + 1}</span>
                <ArrowUpRight size={18} />
              </div>

              <Icon size={30} />

              <div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
