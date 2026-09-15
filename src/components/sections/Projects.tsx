"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import {
  StaggerGroup,
  StaggerItem,
} from "@/components/effects/Stagger";
import ProjectBook from "@/components/projects/ProjectBook";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <>
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

        <StaggerGroup
          className="editorial-projects"
          delay={0.08}
          stagger={0.16}
        >
          {projects.map((project, index) => (
            <StaggerItem index={index} key={project.title}>
              <article
                className={`editorial-project ${
                  project.featured
                    ? "editorial-project-featured"
                    : ""
                }`}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`Open ${project.title} case study`}
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
                    aria-label={`View ${project.title} source`}
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
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

                  <span
                    className="editorial-project-mark"
                    aria-hidden="true"
                  >
                    GF
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {selectedProject && (
        <ProjectBook
          project={selectedProject}
          open={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
