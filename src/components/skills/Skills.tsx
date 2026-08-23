"use client";

import { motion } from "framer-motion";

import {
  Code2,
  BrainCircuit,
  Smartphone,
  Database,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import SkillCategory from "./SkillCategory";

import { skillCategories } from "@/data/skills";

const areas = [
  {
    icon: Code2,
    label: "Full Stack",
  },
  {
    icon: BrainCircuit,
    label: "AI & ML",
  },
  {
    icon: Smartphone,
    label: "Mobile",
  },
  {
    icon: Database,
    label: "Database",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          -z-10
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/5
          blur-[120px]

          sm:h-[600px]
          sm:w-[600px]
          sm:blur-[150px]
        "
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Heading */}

        <motion.div
          initial={{
            y: 30,
          }}
          whileInView={{
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionTitle
            title="Technical Skills"
            subtitle="Technologies and tools I use to turn ideas into functional software across web, mobile, desktop, and AI-driven applications."
          />
        </motion.div>

        {/* Development Areas */}

        <div
          className="
            mb-16
            grid
            w-full
            grid-cols-1
            gap-3

            min-[380px]:grid-cols-2

            sm:mb-20
            sm:flex
            sm:flex-wrap
          "
        >
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.label}
                initial={{
                  y: 15,
                }}
                whileInView={{
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  flex
                  min-w-0
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200
                  bg-white/70
                  px-4
                  py-2.5
                  text-sm
                  text-slate-700
                  shadow-sm
                  backdrop-blur
                  transition-colors

                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-slate-300
                  dark:shadow-none

                  hover:border-blue-500/30
                  hover:text-blue-600

                  dark:hover:text-blue-400

                  sm:justify-start
                "
              >
                <Icon
                  size={16}
                  className="shrink-0"
                />

                <span className="truncate">
                  {area.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Categories */}

        <div className="w-full space-y-20 sm:space-y-24">
          {skillCategories.map(
            (category, index) => (
              <SkillCategory
                key={category.title}
                {...category}
                index={index}
              />
            )
          )}
        </div>

      </div>
    </section>
  );
}
