import Background from "@/components/Background";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Timeline from "@/components/timeline/Timeline";

export default function Home() {
  return (
    <main>
      <Background />

      <MouseGlow />

      <Navbar />

      <Hero />

      <Projects />

      <Skills />

      <Timeline />
    </main>
  );
}
