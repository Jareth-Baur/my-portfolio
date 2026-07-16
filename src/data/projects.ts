export const projects = [
  {
    slug: "cropeye",

    title: "CropEye",

    type: "desktop",

    tagline: "AI-powered Crop Disease Detection",

    description:
      "CropEye is a precision agriculture platform that leverages drone imagery and YOLOv8 object detection to identify crop diseases and generate actionable insights for farmers.",

    problem:
      "Traditional crop monitoring requires manual field inspection, making disease detection slow, labor-intensive, and impractical for large agricultural areas.",

    solution:
      "CropEye automates disease detection using drone imagery, YOLOv8 object detection, and a modern web dashboard that enables users to manage flights, detections, and reports efficiently.",

    github: "https://github.com/Jareth-Baur/CropEye",

    demo: "",

    cover: "/projects/cropeye/cropeye.png",

    gallery: [
      "/projects/cropeye/cropeye1.png",
      "/projects/cropeye/cropeye2.png",
      "/projects/cropeye/cropeye3.png",
      "/projects/cropeye/cropeye4.png",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "YOLOv8",
      "OpenCV",
      "Supabase",
    ],

    year: "2026",

    status: "Completed",

    role: "Full Stack Developer",

    featured: true,
  },

  {
    slug: "talktiles",

    title: "TalkTiles",

    type: "mobile",

    tagline: "Assistive Communication Mobile Application",

    description:
      "TalkTiles is an Android AAC (Augmentative and Alternative Communication) application designed to help children with speech impairments communicate through customizable word and category tiles with text-to-speech support.",

    problem:
      "Many AAC applications are expensive or difficult to customize, limiting accessibility for families and educators supporting children with communication challenges.",

    solution:
      "TalkTiles provides an intuitive, customizable communication board with editable categories, favorites, text-to-speech, and secure Parent Mode for managing content.",

    github: "https://github.com/Jareth-Baur/TalkTiles",

    demo: "",

    cover: "/projects/talktiles/talktiles-cover.png",

    gallery: [
      "/projects/talktiles/talktiles1.png",
      "/projects/talktiles/talktiles2.png",
      "/projects/talktiles/talktiles3.png",
      "/projects/talktiles/talktiles4.png",
    ],

    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Room Database",
      "Text-to-Speech",
    ],

    year: "2025",

    status: "Completed",

    role: "Android Developer",

    featured: true,
  },

  {
    slug: "queue-management",

    title: "Queue Management System",

    type: "desktop",

    tagline: "Smart Customer Queue Management",

    description:
      "A desktop-based queue management system that streamlines customer service operations through digital queue tickets, real-time status updates, and efficient service monitoring.",

    problem:
      "Traditional queue systems rely on manual processes that lead to long waiting times, poor customer experience, and inefficient service management.",

    solution:
      "The application digitizes queue handling using JavaFX for the desktop interface and WebSockets for real-time synchronization between service counters and display screens.",

    github:
      "https://github.com/Jareth-Baur/Queue-Management-System",

    demo: "",

    cover: "/projects/qms/qms.png",

    gallery: [
      "/projects/qms/qms1.png",
      "/projects/qms/qms2.png",
      "/projects/qms/qms3.png",
      "/projects/qms/qms4.png",
    ],

    technologies: [
      "Java",
      "JavaFX",
      "WebSockets",
      "MySQL",
    ],

    year: "2025",

    status: "Completed",

    role: "Full Stack Developer",

    featured: true,
  },
];