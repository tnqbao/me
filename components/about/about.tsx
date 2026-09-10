export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about-layout">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-heading" id="about-title">
            Backend work, with operational context.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            My professional work is primarily backend engineering: building services and APIs, mostly with Golang,
            and working with the systems that keep applications running.
          </p>
          <p>
            Alongside development, I work directly with CI/CD, Docker, Kubernetes, deployment environments, Linux,
            Nginx, observability, GitOps, and production troubleshooting.
          </p>
        </div>
      </div>
    </section>
  );
}
