"use client";

import Image from "next/image";
import Link from "next/link";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  Variants,
} from "framer-motion";

import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

import TechBadge from "./TechBadge";

interface Props {
  project: any;
  index: number;
}

const cardVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,

    x: index % 2 === 0
      ? -60
      : 60,

    y: 40,

    scale: 0.95,
  }),

  visible: {
    opacity: 1,

    x: 0,

    y: 0,

    scale: 1,

    transition: {
      duration: 0.8,

      ease: [0.22, 1, 0.36, 1],

      when: "beforeChildren",

      staggerChildren: 0.08,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
    },
  },
};

export default function ProjectCard({
  project,
  index,
}: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlight = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(59, 130, 246, 0.12),
      transparent 80%
    )
  `;

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      event.clientX - rect.left
    );

    mouseY.set(
      event.clientY - rect.top
    );
  }

  const projectNumber = String(
    index + 1
  ).padStart(2, "0");

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -10,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        backdrop-blur-xl
        transition-colors
        duration-500
        hover:border-blue-500/40
      "
    >
      {/* Mouse Spotlight */}

      <motion.div
        style={{
          background: spotlight,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Top Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-20
          h-px
          w-2/3
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-blue-400/0
          to-transparent
          transition-all
          duration-500
          group-hover:via-blue-400/70
        "
      />

      {/* IMAGE */}

      <motion.div
        variants={contentVariants}
        className="relative overflow-hidden"
      >
        <div className="relative h-52 w-full sm:h-60 md:h-64 lg:h-72">

          <Image
            src={project.cover}
            alt={`${project.title} project preview`}
            fill
            sizes="
              (max-width: 1024px) 100vw,
              50vw
            "
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-110
            "
          />

        </div>

        {/* Dark gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

        {/* Blue overlay */}

        <div
          className="
            absolute
            inset-0
            bg-blue-500/0
            transition
            duration-500
            group-hover:bg-blue-500/5
          "
        />

        {/* Project Number */}

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            absolute
            right-5
            top-5
            z-10
            rounded-full
            border
            border-white/10
            bg-slate-950/60
            px-3
            py-1.5
            text-xs
            font-semibold
            text-slate-300
            backdrop-blur-xl
          "
        >
          {projectNumber}
        </motion.div>

        {/* View Project Hover Indicator */}

        <div
          className="
            absolute
            bottom-5
            right-5
            z-10
            flex
            h-11
            w-11
            translate-y-4
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-slate-950/70
            opacity-0
            backdrop-blur-xl
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <ExternalLink
            size={17}
            className="text-blue-400"
          />
        </div>

      </motion.div>

      {/* CONTENT */}

      <div className="relative z-30 p-5 sm:p-6 md:p-8">

        {/* Title */}

        <motion.div
          variants={contentVariants}
          className="flex items-start justify-between gap-4"
        >
          <h2
            className="
              text-xl
              font-bold
              transition-colors
              duration-300
              group-hover:text-blue-400
              sm:text-2xl
              md:text-3xl
            "
          >
            {project.title}
          </h2>

          <motion.div
            whileHover={{
              rotate: 45,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <ArrowUpRight
              size={22}
              className="
                text-slate-600
                transition-colors
                group-hover:text-blue-400
              "
            />
          </motion.div>
        </motion.div>

        {/* Description */}

        <motion.p
          variants={contentVariants}
          className="mt-3 text-sm leading-6 text-slate-400 sm:text-base"
        >
          {project.description}
        </motion.p>

        {/* Technologies */}

        <motion.div
          variants={contentVariants}
          className="mt-5 flex flex-wrap gap-2 sm:mt-6"
        >
          {project.technologies.map(
            (
              tech: string,
              techIndex: number
            ) => (
              <motion.div
                key={tech}
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
                }}
                transition={{
                  duration: 0.3,
                  delay:
                    techIndex * 0.05,
                }}
                whileHover={{
                  y: -2,
                }}
              >
                <TechBadge
                  tech={tech}
                />
              </motion.div>
            )
          )}
        </motion.div>

        {/* Divider */}

        <motion.div
          variants={contentVariants}
          className="my-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent sm:my-8"
        />

        {/* Actions */}

        <motion.div
          variants={contentVariants}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          {/* GitHub */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="w-full sm:w-auto"
          >
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/10
                px-4
                py-3
                transition
                duration-300
                hover:border-blue-500/50
                hover:bg-blue-500/5
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
                sm:w-auto
                sm:px-5
              "
            >
              <FaGithub
                size={18}
              />

              GitHub
            </Link>
          </motion.div>

          {/* Case Study */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="w-full sm:w-auto"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="
                group/button
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-4
                py-3
                transition
                duration-300
                hover:bg-blue-500
                hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
                sm:w-auto
                sm:px-5
              "
            >
              Case Study

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:-translate-y-0.5
                  group-hover/button:translate-x-0.5
                "
              />
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </motion.article>
  );
}