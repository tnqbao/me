import { Award } from "lucide-react";

export function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container education-layout">
        <div>
          <p className="section-kicker">Education</p>
          <h2 className="section-heading" id="education-title">Duy Tan University</h2>
          <p className="education-program">Software Engineering — CMU Program</p>
          <p className="education-meta">2022 — 2026 · GPA 3.62</p>
        </div>
        <ul className="achievements" aria-label="Academic achievements">
          <li><Award size={18} aria-hidden="true" /><span>Graduated with Excellent Honors</span></li>
          <li><Award size={18} aria-hidden="true" /><span>Second Prize in the University Scientific Research Competition</span></li>
        </ul>
      </div>
    </section>
  );
}
