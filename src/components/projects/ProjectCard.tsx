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
      whileHover={{
        y: -10,
      }}
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-slate-900/60
      backdrop-blur-xl
      "
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-slate-950
          to-transparent
          "
        />
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold">{project.title}</h2>

        <p className="mt-4 text-slate-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href={project.github}
            target="_blank"
            className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            px-5
            py-3
            transition
            hover:border-blue-500
            "
          >
            <FaGithub size={18} />
            GitHub
          </Link>

          <Link
            href={`/projects/${project.slug}`}
            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-3
            transition
            hover:bg-blue-500
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
