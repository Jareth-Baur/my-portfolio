import SkillCard, { IconName } from "./SkillCard";

interface Skill {
  name: string;
  icon: IconName;
}

interface Props {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({
  title,
  skills,
}: Props) {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold">
        {title}
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
}