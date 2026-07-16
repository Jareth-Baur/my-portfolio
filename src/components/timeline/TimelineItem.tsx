"use client";

import { motion } from "framer-motion";

import {
  GraduationCap,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

import type {
  TimelineType,
} from "@/data/timeline";

interface Props {
  year: string;
  title: string;
  description: string;
  type: TimelineType;
  index: number;
}

const typeConfig = {
  education: {
    label: "Education",
    icon: GraduationCap,
  },

  project: {
    label: "Project",
    icon: Code2,
  },

  career: {
    label: "Career",
    icon: BriefcaseBusiness,
  },
};

export default function TimelineItem({
  year,
  title,
  description,
  type,
  index,
}: Props) {
  const config = typeConfig[type];

  const Icon = config.icon;

  const isLeft =
    index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -50 : 50,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        grid
        pl-12
        md:grid-cols-2
        md:gap-16
        md:pl-0
      "
    >
      {/* Timeline Dot */}

      <motion.div
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        className="
          absolute
          left-0
          top-6
          z-20
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          border
          border-blue-400/50
          bg-slate-950
          shadow-[0_0_20px_rgba(59,130,246,0.4)]
          md:left-1/2
          md:-translate-x-1/2
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-2 w-2 rounded-full bg-blue-400"
        />
      </motion.div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -5,
        }}
        className={`
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-slate-900/50
          p-6
          backdrop-blur-xl
          transition-colors
          duration-500
          hover:border-blue-500/40
          hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]
          sm:p-8

          ${
            isLeft
              ? "md:col-start-1 md:text-right"
              : "md:col-start-2"
          }
        `}
      >
        {/* Hover Glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-blue-500/0
            to-cyan-500/0
            transition
            duration-500
            group-hover:from-blue-500/5
            group-hover:to-cyan-500/5
          "
        />

        <div className="relative z-10">

          {/* Top */}

          <div
            className={`
              flex
              flex-wrap
              items-center
              gap-3

              ${
                isLeft
                  ? "md:justify-end"
                  : ""
              }
            `}
          >
            {/* Type */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-3
                py-1.5
                text-xs
                font-medium
                text-blue-300
              "
            >
              <Icon size={14} />

              {config.label}
            </span>

            {/* Year */}

            <span className="font-mono text-sm font-medium text-blue-400">
              {year}
            </span>

          </div>

          {/* Title */}

          <h3
            className="
              mt-5
              text-xl
              font-bold
              transition-colors
              group-hover:text-blue-400
              sm:text-2xl
            "
          >
            {title}
          </h3>

          {/* Description */}

          <p className="mt-3 leading-7 text-slate-400">
            {description}
          </p>

        </div>
      </motion.div>

    </motion.div>
  );
}