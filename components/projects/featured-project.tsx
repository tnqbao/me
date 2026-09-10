import { ArrowRight, CodeXml, ExternalLink } from "lucide-react";
import { gauasCloud } from "@/data/projects";
import { InfrastructureVisual } from "./infrastructure-visual";

export function FeaturedProject() {
  return (
    <section className="section featured-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="featured-header">
          <div>
            <p className="section-kicker">Featured project</p>
            <h2 className="section-heading" id="projects-title">{gauasCloud.name}</h2>
          </div>
          <p>{gauasCloud.subtitle}</p>
        </div>

        <div className="featured-layout">
          <div className="featured-copy">
            <p className="featured-description">{gauasCloud.description}</p>
            <p className="featured-tech">{gauasCloud.technologies.join(" · ")}</p>
            <div className="featured-actions">
              <a className="button button-primary" href="/projects/gauas-cloud">
                Explore Project <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="text-link" href={gauasCloud.website} target="_blank" rel="noreferrer">
                Live <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
            <div className="repository-links" aria-label="Gauas Cloud repositories">
              {gauasCloud.repositories.map((repository) => (
                <a key={repository.href} href={repository.href} target="_blank" rel="noreferrer">
                  <CodeXml size={14} aria-hidden="true" /> {repository.shortLabel}
                </a>
              ))}
            </div>
          </div>
          <InfrastructureVisual />
        </div>
      </div>
    </section>
  );
}
