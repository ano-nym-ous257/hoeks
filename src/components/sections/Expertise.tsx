import { ArrowUpRight } from "lucide-react";
import { capabilities } from "@/data/capabilities";

export default function Expertise() {
  return (
    <section
      className="container section editorial-section expertise-section"
      id="expertise"
    >
      <div className="editorial-section-number">02</div>

      <div className="editorial-section-grid">
        <div className="editorial-section-label">
          <span>Expertise</span>
          <div className="editorial-label-line" />
        </div>

        <div className="editorial-section-content">
          <p className="editorial-overline">
            Security · Cloud · Networks · Support
          </p>

          <h2 className="editorial-section-title">
            Supporting the full
            <span> technology environment.</span>
          </h2>

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
        </div>
      </div>
    </section>
  );
}
