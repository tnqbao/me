import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container skills-layout">
        <div className="skills-heading">
          <p className="section-kicker">Skills</p>
          <h2 className="section-heading" id="skills-title">Tools I work with directly.</h2>
          <p className="section-intro">A practical stack spanning backend development, delivery, operations, and infrastructure.</p>
        </div>
        <dl className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <dt>{group.category}</dt>
              <dd>{group.skills.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
