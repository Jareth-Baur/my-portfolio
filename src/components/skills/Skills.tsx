import SectionTitle from "../ui/SectionTitle";

import SkillCategory from "./SkillCategory";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-32">
      <SectionTitle
        title="Technical Skills"
        subtitle="Technologies I use to build modern applications."
      />

      <div className="space-y-20">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
