import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Education } from "@/components/education/education";
import { Experience } from "@/components/experience/experience";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Navigation } from "@/components/navigation/navigation";
import { FeaturedProject } from "@/components/projects/featured-project";
import { Skills } from "@/components/skills/skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProject />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
