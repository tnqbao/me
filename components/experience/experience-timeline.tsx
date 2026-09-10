"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="timeline">
      {experiences.map((experience, index) => {
        const open = openIndex === index;
        const projectsLabel = `${experience.projects.length} ${experience.projects.length === 1 ? "project" : "projects"}`;
        return (
          <article className={`timeline-entry${open ? " open" : ""}${experience.compact ? " compact" : ""}`} key={experience.company}>
            <span className="timeline-node" aria-hidden="true" />
            <button
              type="button"
              className="timeline-summary"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              aria-controls={`experience-${index}`}
            >
              <span className="timeline-heading">
                <span>
                  <strong>{experience.company}</strong>
                  <span className="timeline-role">{experience.role}</span>
                </span>
                <span className="timeline-meta">
                  <span>{experience.period}</span>
                  <span className="project-count">{projectsLabel}</span>
                </span>
              </span>
              <span className="timeline-tech">{experience.technologies.join(" · ")}</span>
              <span className="timeline-toggle">
                {open ? "Hide projects" : "View projects"}
                <ChevronDown className={open ? "rotated" : undefined} size={17} aria-hidden="true" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`experience-${index}`}
                  className="experience-projects"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.27, ease: [0.2, 0, 0, 1] }}
                >
                  {experience.projects.map((project) => (
                    <div className="experience-project" key={project.name}>
                      <div className="project-title-row">
                        <h3>{project.name}</h3>
                        {project.href && (
                          <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                            Visit <ExternalLink size={14} aria-hidden="true" />
                          </a>
                        )}
                      </div>
                      <p>{project.description}</p>
                      <p className="project-technologies">{project.technologies.join(" · ")}</p>
                      {project.focus.length > 0 && (
                        <ul className="project-focus" aria-label={`${project.name} technical focus`}>
                          {project.focus.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
