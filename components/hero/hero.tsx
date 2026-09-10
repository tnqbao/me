import { ArrowDownRight, CodeXml } from "lucide-react";

export function Hero() {
  return (
    <section className="hero container" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow">Software Engineer</p>
        <h1 id="hero-title">Tran Nguyen Quoc Bao</h1>
        <p className="hero-focus">Backend Engineering · DevOps · Cloud Infrastructure</p>
        <p className="hero-description">
          Software Engineer working mainly with Golang and backend systems, with hands-on experience in Kubernetes,
          GitOps, CI/CD, Linux, and cloud infrastructure.
        </p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="button button-primary" href="#projects">
            View Projects <ArrowDownRight size={17} aria-hidden="true" />
          </a>
          <a className="button button-tonal" href="https://github.com/tnqbao" target="_blank" rel="noreferrer">
            <CodeXml size={17} aria-hidden="true" /> GitHub
          </a>
          <a className="button button-outline" href="/resume">
            Resume
          </a>
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true">
        <div className="hero-mark-label">GAUAS</div>
        <div className="hero-mark-grid">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <p>backend / systems / infrastructure</p>
      </div>
    </section>
  );
}
