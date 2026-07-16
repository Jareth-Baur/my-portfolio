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

export type SkillLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface Skill {
  name: string;
  icon: SkillIcon;
  description: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description:
      "Technologies I use to build responsive, modern, and interactive user interfaces.",
    skills: [
      {
        name: "Next.js",
        icon: "nextjs",
        description:
          "Building modern full-stack web applications with the React framework.",
        level: "Intermediate",
      },
      {
        name: "React",
        icon: "react",
        description:
          "Creating reusable components and interactive user interfaces.",
        level: "Intermediate",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        description:
          "Designing responsive interfaces using utility-first CSS.",
        level: "Intermediate",
      },
      {
        name: "TypeScript",
        icon: "typescript",
        description:
          "Writing safer and more maintainable JavaScript applications.",
        level: "Intermediate",
      },
    ],
  },

  {
    title: "Backend & Database",
    description:
      "Tools I use for backend development, APIs, databases, and application services.",
    skills: [
      {
        name: "Python",
        icon: "python",
        description:
          "Developing backend services, automation scripts, and AI applications.",
        level: "Intermediate",
      },
      {
        name: "Supabase",
        icon: "supabase",
        description:
          "Using authentication, PostgreSQL databases, and backend services.",
        level: "Intermediate",
      },
      {
        name: "MySQL",
        icon: "mysql",
        description:
          "Designing relational databases and managing application data.",
        level: "Intermediate",
      },
    ],
  },

  {
    title: "Mobile Development",
    description:
      "Technologies I use to develop native Android applications and mobile experiences.",
    skills: [
      {
        name: "Kotlin",
        icon: "kotlin",
        description:
          "Developing modern native Android applications.",
        level: "Intermediate",
      },
      {
        name: "Android",
        icon: "android",
        description:
          "Building Android applications with modern development practices.",
        level: "Intermediate",
      },
    ],
  },

  {
    title: "Programming & Tools",
    description:
      "Programming languages and development tools I use across my projects.",
    skills: [
      {
        name: "Java",
        icon: "java",
        description:
          "Building object-oriented applications and JavaFX desktop systems.",
        level: "Intermediate",
      },
      {
        name: "Git",
        icon: "git",
        description:
          "Managing source code versions and collaborative development workflows.",
        level: "Intermediate",
      },
      {
        name: "GitHub",
        icon: "github",
        description:
          "Managing repositories, projects, and collaborative development.",
        level: "Intermediate",
      },
    ],
  },
];