"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface Props {
  project: any;
}

const navigation = [
  {
    name: "Overview",
    href: "#overview",
  },
  {
    name: "Problem",
    href: "#problem",
  },
  {
    name: "Solution",
    href: "#solution",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
];

export default function ProjectSidebar({ project }: Props) {
  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900/50
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
        lg:sticky
        lg:top-24
        lg:p-8
      "
    >
      {/* Project Info */}

      <div className="mb-8 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400" />

        <h3 className="text-xl font-bold">Project Info</h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
        <InfoItem label="Role" value={project.role} />

        <InfoItem label="Status" value={project.status} />

        <InfoItem label="Year" value={project.year} />
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-white/10" />

      {/* Navigation */}

      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        On this page
      </p>

      <nav className="space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="
              group
              flex
              items-center
              justify-between
              rounded-xl
              px-3
              py-2.5
              text-sm
              text-slate-400
              transition
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            {item.name}

            <ArrowUpRight
              size={14}
              className="
                opacity-0
                transition-all
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:opacity-100
              "
            />
          </Link>
        ))}
      </nav>

      {/* GitHub */}

      {project.github && (
        <>
          <div className="my-8 h-px bg-white/10" />

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
              bg-blue-600
              px-5
              py-3
              font-medium
              transition
              hover:bg-blue-500
              hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
            "
          >
            <FaGithub size={16} />
            View Source
          </Link>
        </>
      )}
    </motion.aside>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="font-medium text-slate-200">{value}</p>
    </div>
  );
}
