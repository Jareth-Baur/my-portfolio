import Background from "@/components/Background";
import MouseGlow from "@/components/MouseGlow";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Timeline from "@/components/timeline/Timeline";
import Contact from "@/components/contact/Contact";

import Reveal from "@/components/animations/Reveal";

import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />

      <CustomCursor />

      <Background />

      <MouseGlow />

      <Navbar />

      <Hero />

      <About />

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Timeline />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </main>
  );
}
