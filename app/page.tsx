import Image from "next/image";
import { Terminal, Wrench } from "lucide-react";
import { SectionReveal } from "@/components/motion/section-reveal";
import { siteUrl } from "./site";
import "./portfolio.css";

const jobs = [
  {
    company: "KAMORA",
    logo: "/images/kamora.png",
    role: "Software Engineer / DevOps",
    period: "10/2025 — 09/2026",
    responsibilities: [
      "Developed and maintained backend services and production application features.",
      "Built and maintained Kubernetes deployment configurations and CI/CD workflows with GitHub Actions.",
      "Automated API testing with Python and integrated tests into the delivery workflow.",
      "Investigated production issues using logs and metrics and supported application monitoring with Grafana.",
    ],
    technologies: "Backend · Kubernetes · GitHub Actions · Python · Grafana",
  },
  {
    company: "AGILITYIO",
    logo: "/images/agilityio-logo-v2.png",
    role: "Software Engineer Intern",
    period: "06/2025 — 09/2025",
    responsibilities: [
      "Built responsive web interfaces and reusable application components.",
      "Integrated application screens with backend services and APIs.",
      "Tested features, investigated issues and fixed application bugs.",
      "Supported development environments, application builds and deployments.",
    ],
  },
] as const;

const skillGroups = [
  { name: "Languages", skills: ["Go", "Java", "Python", "TypeScript"] },
  { name: "Frontend", skills: ["React", "Next.js"] },
  { name: "Backend & Data", skills: ["Spring Boot", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"] },
  { name: "DevOps", skills: ["Docker", "Kubernetes", "Argo CD", "GitHub Actions"] },
  { name: "Cloud & Infrastructure", skills: ["AWS", "Terraform", "Linux", "Nginx"] },
  { name: "Tools & Observability", skills: ["K9s", "Codex", "Prometheus", "Grafana", "Loki", "OpenTelemetry"] },
] as const;

const skillIcons: Record<string, string> = {
  Go: "go", Java: "java", Python: "python", TypeScript: "typescript",
  React: "react", "Next.js": "nextjs", "Spring Boot": "spring",
  PostgreSQL: "postgresql", MongoDB: "mongodb", Redis: "redis", RabbitMQ: "rabbitmq",
  AWS: "amazonwebservices", Docker: "docker", Kubernetes: "kubernetes",
  "GitHub Actions": "githubactions", "Argo CD": "argocd", Terraform: "terraform",
  Linux: "linux", Nginx: "nginx", Grafana: "grafana", Prometheus: "prometheus",
  Loki: "loki", OpenTelemetry: "opentelemetry",
};

function SkillIcon({ skill }: { skill: string }) {
  const icon = skillIcons[skill];
  if (icon) {
    return <Image
      className="skill-icon"
      src={`/icons/skills/${icon}.${icon === "loki" ? "png" : "svg"}`}
      alt=""
      width={18}
      height={18}
    />;
  }
  return skill === "K9s"
    ? <Terminal className="skill-icon" size={18} aria-hidden="true" />
    : <Wrench className="skill-icon" size={18} aria-hidden="true" />;
}

function ProjectScreenshot({ name, alt }: { name: string; alt: string }) {
  return <div className="product-preview"><Image
    src={`/images/projects/${name}-screenshot.webp`}
    alt={alt}
    fill
    sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1100px) 400px, 400px"
    className="project-screenshot"
  /></div>;
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tran Nguyen Quoc Bao",
  url: `${siteUrl}/`,
  jobTitle: "Software / DevOps Engineer",
  sameAs: ["https://github.com/tnqbao", "https://www.linkedin.com/in/tnqbao/"],
};

export default function Home() {
  return (
    <div className="portfolio" id="top">
      <SectionReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="p-nav">
        <nav className="p-container" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">My Project</a>
          <a href="#skills">Skills</a>
          <a href="/resume" target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main">
        <section className="p-hero p-container" aria-labelledby="hero-title">
          <div className="portrait-wrap">
            <Image src="/images/bao-portrait.png" alt="Tran Nguyen Quoc Bao wearing a white shirt with his arms crossed" width={1024} height={1536} priority sizes="(max-width: 700px) 85vw, 520px" />
          </div>
          <div className="p-hero-copy">
            <h1 className="lit-title" id="hero-title">Tran Nguyen<br />Quoc Bao</h1>
            <p className="p-roles">Software / DevOps Engineer</p>
            <p className="p-hero-support">I build backend systems and the infrastructure that runs them.</p>
            <div className="p-hero-actions">
              <a className="work-link" href="#projects">View my work <span aria-hidden="true">↓</span></a>
              <a className="work-link" href="/resume" target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="p-section p-about p-container" id="about" aria-labelledby="about-title">
          <h2 className="lit-title" id="about-title">About</h2>
          <div className="about-copy">
            <p>I&apos;m Bao, a software engineer with nearly two years of experience building backend systems and application infrastructure. I work across databases, messaging, CI/CD, Kubernetes and observability to take software from development into production.</p>
            <p>Outside work, I build and operate personal projects like Gauas and HunterJob on my own infrastructure.</p>
          </div>
        </section>

        <section className="p-section p-container" id="experience" aria-labelledby="experience-title">
          <h2 className="lit-title" id="experience-title">Experience</h2>
          <div className="p-timeline">
            {jobs.map((job) => (
              <article className="p-job" key={job.company}>
                <div className={`company-logo ${job.company === "AGILITYIO" ? "agility-logo" : ""}`}>
                  <Image src={job.logo} alt={`${job.company} logo`} width={80} height={80} sizes="64px" />
                </div>
                <span className="p-timeline-point" aria-hidden="true" />
                <div className="job-copy">
                  <div className="job-heading"><h3>{job.company}</h3><time>{job.period}</time></div>
                  <p className="job-role">{job.role}</p>
                  <p className="job-location">Da Nang, Vietnam</p>
                  <ul className="job-responsibilities">{job.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
                  {"technologies" in job && <p className="job-technologies">{job.technologies}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="p-section p-container" id="projects" aria-labelledby="projects-title">
          <h2 className="lit-title" id="projects-title">My Project</h2>
          <div className="p-projects">
            <a className="p-project" href="https://gauas.com" target="_blank" rel="noopener noreferrer">
              <ProjectScreenshot name="gauas" alt="Gauas website homepage" />
              <div className="project-content">
                <div className="project-top"><Image className="project-logo project-logo-wide" src="/images/projects/gauas-logo.webp" alt="" width={96} height={32} /><h3 className="sr-only">Gauas</h3><span className="project-arrow" aria-hidden="true">↗</span></div>
                <p>Application platform for building, deploying and operating cloud-native services.</p>
                <span className="project-stackline">Go · Kubernetes · PostgreSQL · Redis · MinIO</span>
                <span className="project-domain">gauas.com</span>
              </div>
            </a>
            <a className="p-project" href="https://hunterjob.gauas.com" target="_blank" rel="noopener noreferrer">
              <ProjectScreenshot name="hunterjob" alt="HunterJob website sign-in screen" />
              <div className="project-content">
                <div className="project-top"><Image className="project-logo project-logo-light" src="/images/projects/hunterjob-logo.webp" alt="" width={32} height={32} /><h3>HunterJob</h3><span className="project-arrow" aria-hidden="true">↗</span></div>
                <p>AI-powered job discovery agent for roles matching position, experience and location.</p>
                <span className="project-stackline">Go · Next.js · MongoDB · Redis</span>
                <span className="project-domain">hunterjob.gauas.com</span>
              </div>
            </a>
            <a className="p-project" href="https://cloud.gauas.com" target="_blank" rel="noopener noreferrer">
              <ProjectScreenshot name="gaucloude" alt="Gauas Cloud website homepage" />
              <div className="project-content">
                <div className="project-top"><Image className="project-logo project-logo-light" src="/images/projects/gaucloude-logo.webp" alt="" width={32} height={32} /><h3>Gauas Cloud</h3><span className="project-legacy">Legacy</span><span className="project-arrow" aria-hidden="true">↗</span></div>
                <p>A self-hosted cloud platform for compute and object storage.</p>
                <span className="project-stackline">Go · Kubernetes · MinIO</span>
                <span className="project-domain">cloud.gauas.com</span>
              </div>
            </a>
          </div>
        </section>

        <section className="p-section p-container" id="skills" aria-labelledby="skills-title">
          <h2 className="lit-title" id="skills-title">Skills</h2>
          <div className="p-toolbox">
            {skillGroups.map(({ name, skills }) => (
              <div className="skill-block" key={name}>
                <h3>{name}</h3>
                <ul className="skill-tags">{skills.map((skill) => <li key={skill}><SkillIcon skill={skill} /><span>{skill}</span></li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="p-contact p-container" id="contact" aria-labelledby="contact-title">
          <h2 className="lit-title" id="contact-title">Let&apos;s build something useful.</h2>
          <p>I&apos;m open to software engineering opportunities and interesting technical projects.</p>
          <div className="p-contact-links">
            <a className="p-primary" href="mailto:tnqb.job106204@gmail.com">Email <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/tnqbao/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/tnqbao" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <a className="contact-email-address" href="mailto:tnqb.job106204@gmail.com">tnqb.job106204@gmail.com</a>
        </section>
      </main>
      <footer className="p-footer p-container">© 2026 Tran Nguyen Quoc Bao</footer>
    </div>
  );
}
