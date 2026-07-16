"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface Props {
  project: any;
}

export default function ProjectHero({ project }: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10"
    >
      {/* Cover */}

      <motion.div
        initial={{
          scale: 1.08,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="relative h-[400px] sm:h-[480px] md:h-[550px] lg:h-[650px]"
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-500/10" />

      {/* Back */}

      <motion.div
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.4,
        }}
        className="absolute left-5 top-5 sm:left-8 sm:top-8"
      >
        <Link
          href="/#projects"
          className="
            group
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-slate-950/60
            px-4
            py-2.5
            text-sm
            backdrop-blur-xl
            transition
            hover:border-blue-400/50
            hover:bg-slate-900
          "
        >
          <ArrowLeft
            size={17}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>
      </motion.div>

      {/* Content */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 lg:p-12"
      >
        <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
          {project.year}
        </p>

        <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {project.title}
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
          {project.tagline}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            {project.role}
          </span>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            {project.status}
          </span>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                transition
                hover:border-blue-400/50
                hover:bg-blue-500/10
              "
            >
              <FaGithub size={16} />
              View GitHub
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}
