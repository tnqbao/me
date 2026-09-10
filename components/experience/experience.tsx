import { ExperienceTimeline } from "./experience-timeline";

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <p className="section-kicker">Experience</p>
        <h2 className="section-heading" id="experience-title">
          Engineering across application and infrastructure layers.
        </h2>
        <p className="section-intro">Select a role to see the project context and areas of technical responsibility.</p>
        <ExperienceTimeline />
      </div>
    </section>
  );
}
