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

import {
  skillCategories,
} from "@/data/skills";

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
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >

      {/* Background */}

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
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/5
          blur-[150px]
        "
      />

      <div className="mx-auto max-w-7xl px-6">

        {/* Main Heading */}

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
          }}
        >
          <SectionTitle
            title="Technical Skills"
            subtitle="Technologies and tools I use to turn ideas into functional software across web, mobile, desktop, and AI-driven applications."
          />
        </motion.div>

        {/* Development Areas */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.5,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mb-20 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
        >
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.label}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2.5
                  text-sm
                  text-slate-300
                  backdrop-blur
                  transition-colors
                  hover:border-blue-500/30
                  hover:text-blue-400
                  sm:justify-start
                "
              >
                <Icon size={16} />

                {area.label}

              </motion.div>
            );
          })}
        </motion.div>

        {/* Categories */}

        <div className="space-y-24">
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