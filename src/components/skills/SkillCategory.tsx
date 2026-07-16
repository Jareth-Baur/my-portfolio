"use client";

import { motion } from "framer-motion";

import SkillCard from "./SkillCard";

import type { Skill } from "@/data/skills";

interface Props {
  title: string;
  description: string;
  skills: Skill[];
  index: number;
}

export default function SkillCategory({
  title,
  description,
  skills,
  index,
}: Props) {
  const categoryNumber = String(
    index + 1
  ).padStart(2, "0");

  return (
    <motion.section
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
        amount: 0.1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      {/* Category Header */}

      <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <span className="font-mono text-sm text-blue-400">
              {categoryNumber}
            </span>

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 32,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.6,
              }}
              className="h-px bg-blue-400"
            />

            <h2 className="text-2xl font-bold sm:text-3xl">
              {title}
            </h2>

          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            {description}
          </p>

        </div>

        <span className="text-sm text-slate-600">
          {skills.length}{" "}
          {skills.length === 1
            ? "Technology"
            : "Technologies"}
        </span>

      </div>

      {/* Skills */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map(
          (skill, skillIndex) => (
            <SkillCard
              key={skill.name}
              {...skill}
              index={skillIndex}
            />
          )
        )}
      </div>

    </motion.section>
  );
}