import Image from "next/image";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Activity, Bell, Blocks, Database, Network } from "lucide-react";
import "./portfolio.css";

const jobs = [
  {
    company: "KAMORA",
    logo: "/images/kamora.png",
    role: "Software Engineer / DevOps",
    location: "55 Tran Van Du Street, Da Nang, Vietnam",
    mapUrl: "https://www.google.com/maps/@16.0419569,108.2459748,3a,75y,151.71h,125.47t/data=!3m7!1e1!3m5!1sN_Hn3tDQHye6RmSy9FCTwA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-35.46832509018219%26panoid%3DN_Hn3tDQHye6RmSy9FCTwA%26yaw%3D151.7149106815222!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
    period: "Oct 2025 — Sep 2026",
    responsibilities: [
      "Developed and maintained backend services and application features.",
      "Reviewed code, improved existing services and investigated production issues.",
      "Wrote YAML configuration for application deployments.",
      "Built automated API tests and test/build workflows, and supported application releases.",
    ],
  },
  {
    company: "AGILITYIO",
    logo: "/images/agilityio-logo-v2.png",
    role: "Software Engineer Intern",
    location: "604 Nui Thanh Street, Da Nang, Vietnam",
    mapUrl: "https://www.google.com/maps/place/Agility+Vietnam/@16.0304,108.2226966,3a,75y,312.24h,93.65t/data=!3m7!1e1!3m5!1s0uDz4Vrb4oxyYIOgFdxwRg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.6478962622934716%26panoid%3D0uDz4Vrb4oxyYIOgFdxwRg%26yaw%3D312.2403077246483!7i16384!8i8192!4m7!3m6!1s0x314219ee2c76108d:0x2a25291b0bf4a0fe!8m2!3d16.0303972!4d108.2224661!10e5!16s%2Fg%2F11c20cq41l?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
    period: "Jun 2025 — Sep 2025",
    responsibilities: [
      "Built responsive web interfaces and reusable components.",
      "Connected application screens to backend services.",
      "Tested features, investigated issues and fixed application bugs.",
      "Helped set up development environments and supported application builds and deployments.",
    ],
  },
];
const toolbox = [
  { name: "Languages", skills: ["Go", "Java", "Python", "TypeScript", "JavaScript", "SQL"] },
  { name: "Frontend", skills: ["React", "Next.js", "HTML", "CSS"] },
  { name: "Backend & Architecture", skills: ["Spring Boot", "FastAPI", "REST APIs", "Microservices"] },
  { name: "Databases & Messaging", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ"] },
  { name: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Argo CD", "Terraform"] },
  { name: "Systems & Web Servers", skills: ["Linux", "Nginx"] },
  { name: "Observability", skills: ["Grafana", "Prometheus", "Loki", "OpenTelemetry", "Monitoring", "Alerting"] },
];

const skillIcons: Record<string, string> = {
  Go: "go", Java: "java", Python: "python", TypeScript: "typescript", JavaScript: "javascript",
  React: "react", "Next.js": "nextjs", HTML: "html5", CSS: "css3",
  "Spring Boot": "spring", FastAPI: "fastapi", RabbitMQ: "rabbitmq",
  PostgreSQL: "postgresql", MySQL: "mysql", Redis: "redis", MongoDB: "mongodb",
  AWS: "amazonwebservices", Docker: "docker", Kubernetes: "kubernetes",
  "GitHub Actions": "githubactions", "Argo CD": "argocd", Terraform: "terraform",
  Linux: "linux", Nginx: "nginx", Grafana: "grafana", Prometheus: "prometheus",
  Loki: "loki", OpenTelemetry: "opentelemetry",
};
const conceptIcons = { SQL: Database, "REST APIs": Network, Microservices: Blocks, Monitoring: Activity, Alerting: Bell };

function SkillIcon({ skill }: { skill: string }) {
  const icon = skillIcons[skill];
  if (icon) return <Image className={`skill-icon${["nextjs", "opentelemetry", "amazonwebservices"].includes(icon) ? " skill-icon-monochrome" : ""}`} src={`/icons/skills/${icon}.${icon === "loki" ? "png" : "svg"}`} alt="" width={18} height={18} />;
  const Icon = conceptIcons[skill as keyof typeof conceptIcons];
  return Icon ? <Icon className="skill-icon" size={18} aria-hidden="true" /> : null;
}

function ProjectScreenshot({ name, alt }: { name: string; alt: string }) {
  return <div className="product-preview"><Image
    src={`/images/projects/${name}-screenshot.png`}
    alt={alt}
    width={1920}
    height={1080}
    sizes="(max-width: 600px) 90vw, 360px"
    className="project-screenshot"
  /></div>;
}

export default function Home() {
  return <div className="portfolio" id="top">
    <SectionReveal />
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="p-nav p-container"><nav aria-label="Main navigation">{["About", "Experience", "Projects", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item === "Projects" ? "My Project" : item}</a>)}</nav></header>
    <main id="main">
      <section className="p-hero p-container" aria-labelledby="hero-title">
        <div className="portrait-wrap"><Image src="/images/bao-portrait.png" alt="Tran Nguyen Quoc Bao wearing a white shirt with his arms crossed" width={1024} height={1536} priority sizes="(max-width: 700px) 85vw, 440px" /></div>
        <div className="p-hero-copy"><h1 className="lit-title" id="hero-title">Tran Nguyen<br />Quoc Bao</h1><p className="p-roles">Software Engineer <span>·</span> DevOps Engineer</p><a className="work-link" href="#projects">View my work <span aria-hidden="true">↓</span></a></div>
      </section>
      <section className="p-section p-about p-container" id="about" aria-labelledby="about-title"><h2 className="lit-title" id="about-title">About</h2><p>I&apos;m Bao, a software engineer who works on backend services and application delivery. I&apos;ve worked on booking and tournament features, helped maintain production services, and built web interfaces. Outside work, I build personal projects and run my own infrastructure.</p></section>
      <section className="p-section p-container" id="experience" aria-labelledby="experience-title"><h2 className="lit-title" id="experience-title">Experience</h2><div className="p-timeline">{jobs.map((job) => <article className="p-job" key={job.company}>
        <div className={`company-logo ${job.company === "AGILITYIO" ? "agility-logo" : ""}`}><Image src={job.logo} alt={`${job.company} logo`} width={80} height={80} /></div><span className="p-timeline-point" aria-hidden="true" />
        <div className="job-copy"><div className="job-heading"><h3>{job.company}</h3><span>{job.period}</span></div><p className="job-role">{job.role}</p><div className="job-location"><span>{job.location}</span><a className="job-map-link" href={job.mapUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${job.company} address on Google Maps (opens in a new tab)`}>View on Google Maps <span aria-hidden="true">↗</span></a></div><ul className="job-responsibilities">{job.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </article>)}</div></section>
      <section className="p-section p-container" id="projects" aria-labelledby="projects-title"><h2 className="lit-title" id="projects-title">My Project</h2><div className="p-projects">
        <a className="p-project" href="https://gauas.com" target="_blank" rel="noreferrer"><ProjectScreenshot name="gauas" alt="Screenshot of the Gauas website" /><div className="project-content"><div className="project-top"><Image className="project-logo project-logo-wide" src="/images/projects/gauas-logo.png" alt="" width={84} height={28} /><h3 className="sr-only">GAUAS</h3><span className="project-arrow" aria-hidden="true">↗</span></div><p>Websites, applications and internal tools.</p><span className="project-stackline">Go · Kubernetes · PostgreSQL</span><span className="project-domain">gauas.com</span></div></a>
        <a className="p-project" href="https://hunterjob.gauas.com" target="_blank" rel="noreferrer"><ProjectScreenshot name="hunterjob" alt="Screenshot of the HunterJob sign-in page" /><div className="project-content"><div className="project-top"><Image className="project-logo project-logo-light" src="/images/projects/hunterjob-logo.png" alt="" width={32} height={32} /><h3>HunterJob</h3><span className="project-arrow" aria-hidden="true">↗</span></div><p>An AI agent for finding your next engineering role.</p><span className="project-stackline">Go · Next.js · MongoDB</span><span className="project-domain">hunterjob.gauas.com</span></div></a>
        <a className="p-project" href="https://cloud.gauas.com" target="_blank" rel="noreferrer"><ProjectScreenshot name="gaucloude" alt="Screenshot of the GauCloude website" /><div className="project-content"><div className="project-top"><Image className="project-logo project-logo-light" src="/images/projects/gaucloude-logo.svg" alt="" width={32} height={32} /><h3>GauCloude</h3><span className="project-legacy">Legacy</span><span className="project-arrow" aria-hidden="true">↗</span></div><p>A self-hosted cloud platform for compute and object storage.</p><span className="project-stackline">Go · Kubernetes · MinIO</span><span className="project-domain">cloud.gauas.com</span></div></a>
      </div></section>
      <section className="p-section p-container" id="toolbox" aria-labelledby="toolbox-title"><h2 className="lit-title" id="toolbox-title">Skills</h2><div className="p-toolbox">{toolbox.map(({ name, skills }) => <div className="skill-block" key={name}><h3>{name}</h3><ul className="skill-tags">{skills.map((skill) => <li key={skill}><SkillIcon skill={skill} /><span>{skill}</span></li>)}</ul></div>)}</div></section>
      <section className="p-contact p-container" id="contact" aria-labelledby="contact-title"><h2 className="lit-title" id="contact-title">Have something interesting to build?</h2><p>Let&apos;s talk.</p><div className="p-contact-links"><a className="p-primary" href="mailto:tnqb.job106204@gmail.com">Email me <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/tnqbao/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://github.com/tnqbao" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></section>
    </main><footer className="p-footer p-container">© 2026 Tran Nguyen Quoc Bao</footer>
  </div>;
}
