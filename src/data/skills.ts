export type SkillIcon =
  | "nextjs"
  | "react"
  | "tailwind"
  | "typescript"
  | "python"
  | "supabase"
  | "mysql"
  | "kotlin"
  | "android"
  | "java"
  | "git"
  | "github";

export interface Skill {
  name: string;
  icon: SkillIcon;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Supabase", icon: "supabase" },
      { name: "MySQL", icon: "mysql" },
    ],
  },

  {
    title: "Mobile",
    skills: [
      { name: "Kotlin", icon: "kotlin" },
      { name: "Android", icon: "android" },
    ],
  },

  {
    title: "Programming",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
];