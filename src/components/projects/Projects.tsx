"use client";

import { motion, Variants } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "./ProjectCard";

import { projects } from "@/data/projects";

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[150px]"
      />

      {/* Decorative Glow Left */}

      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

      {/* Decorative Glow Right */}

      <div className="pointer-events-none absolute -right-40 bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Title */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionTitle
            title="Featured Projects"
            subtitle="A collection of software, AI, web, mobile, and desktop applications I've built."
          />
        </motion.div>

        {/* Projects Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.1,
          }}
          className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}