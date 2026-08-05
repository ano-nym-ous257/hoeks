import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      className="container section editorial-section"
      id="skills"
    >
      <SectionHeading
        number="04"
        label="Technical skills"
        overline="Security · Infrastructure · Support · Software"
        title="Capabilities across"
        accent="the complete technology stack."
      />

      <div className="skills-groups">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-heading">
                <Icon size={22} />
                <h3>{group.title}</h3>
              </div>

              <div className="skills-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
