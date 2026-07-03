import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "./ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      {/* Title */}
      <SectionTitle
        title="Featured Projects"
        subtitle="A collection of software, AI, web, mobile, and desktop applications I've built."
      />

      {/* Grid */}
      <div
        className="
          mt-10 grid gap-6
          sm:gap-8
          lg:gap-10
          grid-cols-1
          lg:grid-cols-2
        "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}