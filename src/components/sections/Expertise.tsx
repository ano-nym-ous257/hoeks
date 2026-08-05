import { capabilities } from "@/data/capabilities";

export default function Expertise() {
  return (
    <section className="container section" id="expertise">
      <div className="section-heading">
        <p>02 / Expertise</p>
        <h2>Supporting the full technology environment.</h2>
      </div>

      <div className="capabilities">
        {capabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <article key={capability.title}>
              <Icon size={24} />

              <h3>{capability.title}</h3>

              <p>{capability.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
