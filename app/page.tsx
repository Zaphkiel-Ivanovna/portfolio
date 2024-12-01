import { Hero } from "@/components/home/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Career } from "@/components/sections/career";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Background } from "@/components/layout/background";

export default function Home() {
  return (
    <main className="relative">
      <Background />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Career />
      <Projects />
      <Contact />
    </main>
  );
}