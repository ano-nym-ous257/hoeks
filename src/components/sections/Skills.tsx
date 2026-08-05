import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section className="container section" id="skills">
      <div className="section-heading">
        <p>04 / Technical skills</p>
        <h2>Capabilities across security, infrastructure and software.</h2>
      </div>

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
