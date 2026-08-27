export type TimelineType =
  | "education"
  | "project"
  | "career";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: TimelineType;
}

export const timeline: TimelineItem[] = [
  {
    year: "2022",
    title: "Started My IT Journey",
    description:
      "Began pursuing a Bachelor of Science in Information Technology, building a foundation in programming, databases, software development, and information systems.",
    type: "education",
  },

  {
    year: "2024",
    title: "Queue Management System",
    description:
      "Developed a desktop-based queue management application using Java and JavaFX, gaining hands-on experience in object-oriented programming, database integration, and desktop application development.",
    type: "project",
  },

  {
    year: "2025",
    title: "TalkTiles",
    description:
      "Built an Android AAC mobile application using Kotlin and Jetpack Compose, featuring a customizable tile-based communication interface, text-to-speech, and local data management.",
    type: "project",
  },

  {
    year: "2025 — 2026",
    title: "CropEye",
    description:
      "Developed an AI-powered crop disease detection platform as a capstone project, combining drone imagery, YOLOv8, computer vision, Python, and full-stack web technologies.",
    type: "project",
  },

  {
    year: "2026",
    title: "Attendify",
    description:
      "Developed a QR-based attendance management system for educational institutions using Next.js, TypeScript, Prisma, PostgreSQL, and Neon, with features for student management, attendance tracking, and reporting.",
    type: "project",
  },

  {
    year: "2026",
    title: "UniKit",
    description:
      "Built an all-in-one web utility platform using React, JavaScript, Vite, Tailwind CSS, and a Python FastAPI backend, integrating tools such as image background removal and OCR-based text extraction.",
    type: "project",
  },

  {
    year: "2026",
    title: "Building What's Next",
    description:
      "Continuing to strengthen my skills in full-stack development, artificial intelligence, machine learning, and software engineering while pursuing professional opportunities.",
    type: "career",
  },
];