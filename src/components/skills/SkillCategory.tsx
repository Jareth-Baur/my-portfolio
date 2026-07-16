"use client";

import {
  motion,
  Variants,
} from "framer-motion";

import SkillCard from "./SkillCard";

import type { Skill } from "@/data/skills";

interface Props {
  title: string;
  description: string;
  skills: Skill[];
  index: number;
}

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

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
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.05,
        margin: "0px 0px -50px 0px",
      }}
      variants={containerVariants}
    >
      {/* Category Header */}

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },

          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="
          mb-8
          flex
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
        <div>
          <div className="flex items-center gap-3">

            {/* Number */}

            <span
              className="
                shrink-0
                font-mono
                text-sm
                text-blue-600

                dark:text-blue-400
              "
            >
              {categoryNumber}
            </span>

            {/* Line */}

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
              className="
                h-px
                shrink-0
                bg-blue-600

                dark:bg-blue-400
              "
            />

            {/* Title */}

            <h2
              className="
                min-w-0
                text-xl
                font-bold
                leading-tight
                text-slate-900

                dark:text-white

                sm:text-3xl
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
            text-sm
            text-slate-500

            dark:text-slate-500
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
          grid-cols-1
          gap-4

          min-[480px]:grid-cols-2

          lg:grid-cols-3

          xl:grid-cols-4
          xl:gap-5
        "
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            {...skill}
          />
        ))}
      </div>
    </motion.section>
  );
}