"use client";

import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiSupabase,
  SiMysql,
  SiKotlin,
  SiAndroid,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const iconMap = {
  nextjs: SiNextdotjs,
  react: SiReact,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  python: SiPython,
  supabase: SiSupabase,
  mysql: SiMysql,
  kotlin: SiKotlin,
  android: SiAndroid,
  java: FaJava,
  git: SiGit,
  github: SiGithub,
};
export type IconName = keyof typeof iconMap;

interface Props {
  name: string;
  icon: keyof typeof iconMap;
}

export default function SkillCard({ name, icon }: Props) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      className="
        group
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        p-6
        backdrop-blur-xl
        transition
        hover:border-blue-500
        hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
      "
    >
      <Icon
        size={42}
        className="
          text-slate-300
          transition
          duration-300
          group-hover:text-blue-400
        "
      />

      <h3 className="mt-4 font-semibold">{name}</h3>
    </motion.div>
  );
}
