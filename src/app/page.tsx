import Background from "@/components/Background";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main>
      <Background />

      <MouseGlow />

      <Navbar />

      <Hero />
      
      <Projects />

    </main>
  );
}
