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
      "Developed a desktop-based queue management application using Java and JavaFX, gaining hands-on experience in object-oriented programming and desktop application development.",
    type: "project",
  },

  {
    year: "2025",
    title: "TalkTiles",
    description:
      "Built an Android AAC mobile application designed to support communication through an accessible tile-based interface using Kotlin and modern Android development tools.",
    type: "project",
  },

  {
    year: "2025 — 2026",
    title: "CropEye",
    description:
      "Developed an AI-powered crop disease detection platform as a capstone project, combining drone imagery, YOLOv8, computer vision, and full-stack web technologies.",
    type: "project",
  },

  {
    year: "2026",
    title: "Building What's Next",
    description:
      "Continuing to expand my skills in full-stack development, artificial intelligence, machine learning, and mobile development while exploring professional opportunities.",
    type: "career",
  },
];