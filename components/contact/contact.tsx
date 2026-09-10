import { ArrowUpRight, CodeXml, FileText } from "lucide-react";

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">Interested in working together?</h2>
          <a className="contact-email" href="mailto:tnqb.job106204@gmail.com">
            tnqb.job106204@gmail.com <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-links">
          <a href="https://github.com/tnqbao" target="_blank" rel="noreferrer"><CodeXml size={17} /> GitHub</a>
          <a href="/resume"><FileText size={17} /> Resume</a>
        </div>
      </div>
    </section>
  );
}
