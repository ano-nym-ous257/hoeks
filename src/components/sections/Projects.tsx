import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      className="container section editorial-section projects-section"
      id="projects"
    >
      <SectionHeading
        number="03"
        label="Selected work"
        overline="Software · Infrastructure · Systems"
        title="Practical work shaped around"
        accent="real technical challenges."
      />

      <div className="editorial-projects">
        {projects.map((project, index) => (
          <article
            className={`editorial-project ${
              project.featured ? "editorial-project-featured" : ""
            }`}
            key={project.title}
          >
            <div className="editorial-project-index">
              <span>0{index + 1}</span>
              <span>{project.category}</span>
            </div>

            <div className="editorial-project-body">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <a
                className="editorial-project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
              >
                View project
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="editorial-project-footer">
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <span className="editorial-project-mark" aria-hidden="true">
                GF
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
