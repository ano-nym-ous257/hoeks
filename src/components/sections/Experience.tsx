import { ArrowUpRight, Check, Radio } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { experienceItems } from "@/data/experience";

export default function Experience() {
  return (
    <section
      className="container section editorial-section experience-section"
      id="experience"
    >
      <SectionHeading
        number="05"
        label="Technical experience"
        overline="Projects · Labs · Troubleshooting · Documentation"
        title="Practical experience"
        accent="across modern technology environments."
      />

      <div className="experience-console">
        <div className="experience-console-header">
          <div>
            <Radio size={16} />
            <span>Experience log</span>
          </div>

          <StatusBadge>Continuous development</StatusBadge>
        </div>

        <div className="experience-timeline">
          {experienceItems.map((item, index) => (
            <article className="experience-entry" key={item.title}>
              <div className="experience-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="experience-period">
                <span>{item.period}</span>
                <strong>{item.status}</strong>
              </div>

              <div className="experience-content">
                <p className="experience-area">{item.area}</p>
                <h3>{item.title}</h3>
                <p className="experience-description">{item.description}</p>

                <div className="experience-highlights">
                  {item.highlights.map((highlight) => (
                    <span key={highlight}>
                      <Check size={13} />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowUpRight
                className="experience-entry-icon"
                size={19}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
