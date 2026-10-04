"use client";

import { useEffect } from "react";

/** Enhances server-rendered content without hiding it or tracking scroll events. */
export function SectionReveal() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const animations = new Map<Element, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches || entry.target.contains(document.activeElement)) continue;

          const animation = entry.target.animate(
            [
              { opacity: 0, transform: "translateY(24px)", offset: 0 },
              { opacity: 1, transform: "translateY(-4px)", offset: 0.72 },
              { opacity: 1, transform: "translateY(0)", offset: 1 },
            ],
            { duration: 580, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
          );
          animations.set(entry.target, animation);
          animation.onfinish = () => animations.delete(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );

    document.querySelectorAll(".portfolio main > section").forEach((section) => {
      // Keep the initially visible content steady, especially the hero/LCP image.
      if (section.getBoundingClientRect().top >= window.innerHeight) observer.observe(section);
    });

    const cancelAnimations = () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const onPreferenceChange = () => {
      if (preference.matches) cancelAnimations();
    };
    const onFocus = (event: FocusEvent) => {
      for (const [section, animation] of animations) {
        if (event.target instanceof Node && section.contains(event.target)) {
          animation.cancel();
          animations.delete(section);
        }
      }
    };
    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("focusin", onFocus);
    return () => {
      cancelAnimations();
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);

  return null;
}
