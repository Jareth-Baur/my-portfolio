import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "./ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <SectionTitle
        title="Featured Projects"
        subtitle="A collection of software, AI, web, mobile, and desktop applications I've built."
      />

      <div className="grid gap-10 lg:grid-cols-2">

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