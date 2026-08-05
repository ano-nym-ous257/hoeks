import { Check, Cpu, Radio, ShieldCheck } from "lucide-react";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/effects/Stagger";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      className="container section editorial-section skills-system-section"
      id="skills"
    >
      <SectionHeading
        number="04"
        label="Technical skills"
        overline="Security · Infrastructure · Support · Software"
        title="Technical capabilities"
        accent="across the complete system."
      />

      <div className="system-status-bar">
        <div>
          <Radio size={17} />
          <span>System capabilities</span>
        </div>

        <StatusBadge>All modules operational</StatusBadge>
      </div>

      <StaggerGroup
        className="system-skills-grid"
        delay={0.08}
        stagger={0.11}
      >
        {skillGroups.map((group, groupIndex) => {
          const Icon = group.icon;

          return (
            <StaggerItem key={group.title}>
              <article className="system-skill-module">
                <div className="system-skill-header">
                  <div className="system-skill-title">
                    <span className="system-skill-index">
                      0{groupIndex + 1}
                    </span>

                    <Icon size={22} />

                    <h3>{group.title}</h3>
                  </div>

                  <span className="system-module-state">
                    <span />
                    Online
                  </span>
                </div>

                <div className="system-skill-body">
                  {group.skills.map((skill) => (
                    <div className="system-skill-row" key={skill}>
                      <Check size={14} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="system-skill-footer">
                  <span>
                    <Cpu size={14} />
                    Module active
                  </span>

                  <span>{group.skills.length} capabilities</span>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      <div className="skills-summary-panel">
        <div>
          <ShieldCheck size={26} />

          <div>
            <p>Engineering approach</p>
            <h3>
              Security-first, systems-focused and operationally aware.
            </h3>
          </div>
        </div>

        <p>
          Every capability is applied with attention to reliability, access
          control, troubleshooting, documentation and long-term
          maintainability.
        </p>
      </div>
    </section>
  );
}
