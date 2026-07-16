"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

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

import type {
  SkillIcon,
  SkillLevel,
} from "@/data/skills";

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

interface Props {
  name: string;
  icon: SkillIcon;
  description: string;
  level: SkillLevel;
  index: number;
}

export default function SkillCard({
  name,
  icon,
  description,
  level,
  index,
}: Props) {
  const Icon = iconMap[icon];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlight = useMotionTemplate`
    radial-gradient(
      250px circle at ${mouseX}px ${mouseY}px,
      rgba(59, 130, 246, 0.15),
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

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      onMouseMove={handleMouseMove}
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        p-6
        backdrop-blur-xl
        transition-colors
        duration-500
        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]
      "
    >
      {/* Mouse Glow */}

      <motion.div
        style={{
          background: spotlight,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Top Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
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

      <div className="relative z-10">

        {/* Icon + Level */}

        <div className="flex items-start justify-between gap-4">

          <motion.div
            whileHover={{
              rotate: [0, -8, 8, 0],
              scale: 1.1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              transition-colors
              duration-300
              group-hover:border-blue-500/30
              group-hover:bg-blue-500/10
            "
          >
            <Icon
              size={30}
              className="
                text-slate-300
                transition-colors
                duration-300
                group-hover:text-blue-400
              "
            />
          </motion.div>

          <span
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-3
              py-1
              text-[11px]
              font-medium
              uppercase
              tracking-wider
              text-slate-500
              transition-colors
              group-hover:border-blue-500/20
              group-hover:text-blue-300
            "
          >
            {level}
          </span>

        </div>

        {/* Name */}

        <h3
          className="
            mt-5
            text-lg
            font-bold
            transition-colors
            duration-300
            group-hover:text-blue-400
          "
        >
          {name}
        </h3>

        {/* Description */}

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {description}
        </p>

      </div>
    </motion.div>
  );
}