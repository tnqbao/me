import type { Metadata } from "next";
import { ExternalLink, Mail } from "lucide-react";
import { SubpageNavigation } from "@/components/navigation/subpage-navigation";
import { PrintButton } from "@/components/resume/print-button";
import { experiences } from "@/data/experience";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Tran Nguyen Quoc Bao, Software Engineer.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <div className="resume-nav"><SubpageNavigation /></div>
      <main className="resume-page container">
        <header className="resume-header">
          <div>
            <p className="section-kicker">Resume</p>
            <h1>Tran Nguyen Quoc Bao</h1>
            <p>Software Engineer</p>
            <span>Backend Engineering · DevOps · Cloud Infrastructure</span>
          </div>
          <div className="resume-contact">
            <a href="mailto:tnqb.job106204@gmail.com"><Mail size={14} />tnqb.job106204@gmail.com</a>
            <a href="https://github.com/tnqbao" target="_blank" rel="noreferrer">
              <ExternalLink size={14} />github.com/tnqbao
            </a>
            <PrintButton />
          </div>
        </header>

        <section className="resume-section">
          <h2>Profile</h2>
          <p>
            Software Engineer working mainly with Golang and backend systems, with hands-on experience in Kubernetes,
            GitOps, CI/CD, Linux, and cloud infrastructure. I also work directly with application deployment,
            observability, Nginx, and troubleshooting.
          </p>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-experience-list">
            {experiences.map((experience) => (
              <article key={experience.company}>
                <div className="resume-row">
                  <div><h3>{experience.company}</h3><p>{experience.role}</p></div>
                  <time>{experience.period}</time>
                </div>
                <p className="resume-tech">{experience.technologies.join(" · ")}</p>
                <ul>
                  {experience.projects.map((project) => (
                    <li key={project.name}><strong>{project.name}</strong> — {project.description}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Featured project</h2>
          <div className="resume-row">
            <div><h3>Gauas Cloud</h3><p>Self-hosted Cloud Platform</p></div>
            <a href="https://cloud.gauas.com">cloud.gauas.com</a>
          </div>
          <p className="resume-tech">Golang · Kubernetes · Argo CD · Terraform · Docker · Proxmox · MinIO · Grafana · Next.js</p>
          <p>A self-hosted cloud platform built to explore cloud infrastructure, compute, object storage, container orchestration and distributed systems.</p>
        </section>

        <section className="resume-section resume-skills">
          <h2>Skills</h2>
          <dl>
            {skillGroups.map((group) => (
              <div key={group.category}><dt>{group.category}</dt><dd>{group.skills.join(" · ")}</dd></div>
            ))}
          </dl>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-row">
            <div><h3>Duy Tan University</h3><p>Software Engineering — CMU Program · GPA 3.62</p></div>
            <time>2022 — 2026</time>
          </div>
          <ul>
            <li>Graduated with Excellent Honors</li>
            <li>Second Prize in the University Scientific Research Competition</li>
          </ul>
        </section>
      </main>
    </>
  );
}
