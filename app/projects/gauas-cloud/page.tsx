import type { Metadata } from "next";
import { ArrowUpRight, CodeXml, ExternalLink } from "lucide-react";
import { Footer } from "@/components/footer/footer";
import { SubpageNavigation } from "@/components/navigation/subpage-navigation";
import { InfrastructureVisual } from "@/components/projects/infrastructure-visual";
import { gauasCloud } from "@/data/projects";

export const metadata: Metadata = {
  title: "Gauas Cloud",
  description: gauasCloud.description,
  alternates: { canonical: "/projects/gauas-cloud" },
  openGraph: {
    title: "Gauas Cloud — Self-hosted Cloud Platform",
    description: gauasCloud.description,
    url: "/projects/gauas-cloud",
  },
};

const technicalGroups = [
  {
    index: "01",
    title: "Infrastructure",
    description: "The physical and provisioning layer used to run the self-hosted platform.",
    items: ["Proxmox", "Terraform", "Docker", "Infrastructure provisioning"],
  },
  {
    index: "02",
    title: "Kubernetes",
    description: "Container orchestration and application controls within the platform.",
    items: ["Self-hosted Kubernetes", "Container services", "HPA", "RBAC"],
  },
  {
    index: "03",
    title: "GitOps",
    description: "Declarative delivery and synchronization for Kubernetes workloads.",
    items: ["Argo CD", "GitOps workflow", "Kubernetes infrastructure"],
  },
  {
    index: "04",
    title: "Services",
    description: "The application capabilities explored through the cloud platform.",
    items: ["Compute services", "Object storage", "Golang backend services", "Web management console"],
  },
  {
    index: "05",
    title: "Observability",
    description: "Visibility into applications and platform behavior.",
    items: ["Application monitoring", "Grafana"],
  },
] as const;

export default function GauasCloudPage() {
  return (
    <>
      <SubpageNavigation />
      <main>
        <section className="project-hero container">
          <div>
            <p className="section-kicker">Personal infrastructure project</p>
            <h1>Gauas Cloud</h1>
            <p className="project-subtitle">Self-hosted Cloud Platform</p>
            <p className="project-lede">{gauasCloud.description}</p>
            <div className="project-hero-actions">
              <a className="button button-primary" href={gauasCloud.website} target="_blank" rel="noreferrer">
                Open live platform <ExternalLink size={16} aria-hidden="true" />
              </a>
              <a className="button button-tonal" href={gauasCloud.repositories[0].href} target="_blank" rel="noreferrer">
                <CodeXml size={16} aria-hidden="true" /> Source
              </a>
            </div>
          </div>
          <p className="project-stack">{gauasCloud.technologies.join(" · ")}</p>
        </section>

        <section className="project-overview section" aria-labelledby="overview-title">
          <div className="container project-overview-layout">
            <div>
              <p className="section-kicker">Overview</p>
              <h2 className="section-heading" id="overview-title">A practical environment for cloud systems.</h2>
              <p className="section-intro">
                The project brings infrastructure, delivery, backend services, storage, and a web console into one
                self-hosted platform. The overview below reflects the implemented areas without assuming undocumented architecture.
              </p>
            </div>
            <InfrastructureVisual />
          </div>
        </section>

        <section className="section" aria-labelledby="technical-title">
          <div className="container technical-layout">
            <div className="technical-heading">
              <p className="section-kicker">Technical areas</p>
              <h2 className="section-heading" id="technical-title">Platform scope</h2>
            </div>
            <div className="technical-groups">
              {technicalGroups.map((group) => (
                <article className="technical-group" key={group.title}>
                  <span>{group.index}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                    <ul>
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section project-repositories" aria-labelledby="repositories-title">
          <div className="container">
            <p className="section-kicker">Repositories</p>
            <h2 className="section-heading" id="repositories-title">Code and configuration</h2>
            <div className="repository-list">
              {gauasCloud.repositories.map((repository) => (
                <a key={repository.href} href={repository.href} target="_blank" rel="noreferrer">
                  <span><CodeXml size={18} aria-hidden="true" />{repository.label}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
