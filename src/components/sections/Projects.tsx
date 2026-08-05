import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="container section" id="projects">
      <div className="section-heading">
        <p>03 / Selected work</p>
        <h2>Practical projects built around real technical problems.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card ${
              project.featured ? "project-featured" : ""
            }`}
            key={project.title}
          >
            <div className="project-top">
              <span>0{index + 1}</span>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
              >
                <ArrowUpRight size={21} />
              </a>
            </div>

            <div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
