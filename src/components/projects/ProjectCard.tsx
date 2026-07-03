"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import TechBadge from "./TechBadge";

interface Props {
  project: any;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        group overflow-hidden rounded-3xl
        border border-white/10
        bg-slate-900/60 backdrop-blur-xl
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="
            h-52 w-full object-cover
            sm:h-60 md:h-64 lg:h-72
            transition duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6 md:p-8">
        <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
          {project.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
          {project.technologies.map((tech: string) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 sm:mt-8">
          <Link
            href={project.github}
            target="_blank"
            className="
              flex items-center justify-center gap-2
              rounded-xl border border-white/10
              px-4 py-3 sm:px-5
              transition
              hover:border-blue-500 hover:bg-white/5
              focus:outline-none focus:ring-2 focus:ring-blue-400
              w-full sm:w-auto
            "
          >
            <FaGithub size={18} />
            GitHub
          </Link>

          <Link
            href={`/projects/${project.slug}`}
            className="
              flex items-center justify-center gap-2
              rounded-xl bg-blue-600
              px-4 py-3 sm:px-5
              transition
              hover:bg-blue-500
              focus:outline-none focus:ring-2 focus:ring-blue-400
              w-full sm:w-auto
            "
          >
            Case Study
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}