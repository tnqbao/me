"use client";

import { CodeXml, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export function Navigation() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -62%", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main navigation">
        <a href="#top" className="wordmark" aria-label="Bao, back to top">
          Bao<span>.</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? "active" : undefined}
              aria-current={active === link.href.slice(1) ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href="https://github.com/tnqbao"
            className="icon-button"
            aria-label="Open Bao's GitHub profile"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <CodeXml size={18} aria-hidden="true" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="icon-button mobile-menu-button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-nav" id="mobile-navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
                {active === link.href.slice(1) && <span>Current</span>}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
