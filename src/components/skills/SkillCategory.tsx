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
    <section className="w-full min-w-0">

      {/* Category Header */}

      <motion.div
        initial={{
          y: 20,
        }}
        whileInView={{
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mb-8
          flex
          w-full
          min-w-0
          flex-col
          gap-4
          border-b
          border-slate-200
          pb-6

          dark:border-white/10

          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        <div className="min-w-0">

          {/* Number + Title */}

          <div className="flex min-w-0 items-center gap-2 sm:gap-3">

            <span
              className="
                shrink-0
                font-mono
                text-xs
                text-blue-600

                dark:text-blue-400

                sm:text-sm
              "
            >
              {categoryNumber}
            </span>

            <motion.div
              initial={{
                width: 16,
              }}
              whileInView={{
                width: 32,
              }}
              viewport={{
                once: true,
                amount: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                h-px
                shrink-0
                bg-blue-600

                dark:bg-blue-400
              "
            />

            <h2
              className="
                min-w-0
                break-words
                text-xl
                font-bold
                leading-tight
                text-slate-900

                dark:text-white

                sm:text-2xl
                md:text-3xl
              "
            >
              {title}
            </h2>

          </div>

          {/* Description */}

          <p
            className="
              mt-3
              max-w-2xl
              break-words
              text-sm
              leading-6
              text-slate-600

              dark:text-slate-400

              sm:text-base
            "
          >
            {description}
          </p>

        </div>

        {/* Technology Count */}

        <span
          className="
            shrink-0
            text-xs
            text-slate-500

            sm:text-sm
          "
        >
          {skills.length}{" "}
          {skills.length === 1
            ? "Technology"
            : "Technologies"}
        </span>

      </motion.div>

      {/* Skills Grid */}

      <div
        className="
          grid
          w-full
          min-w-0
          grid-cols-1
          gap-4

          sm:grid-cols-2
          sm:gap-5

          lg:grid-cols-3

          xl:grid-cols-4
        "
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            {...skill}
          />
        ))}
      </div>

    </section>
  );
}
