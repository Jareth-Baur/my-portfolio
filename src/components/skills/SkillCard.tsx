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
}

export default function SkillCard({
  name,
  icon,
  description,
  level,
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
        y: 20,
        scale: 0.98,
      }}
      whileInView={{
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      onMouseMove={handleMouseMove}
      className="
        group
        relative
        h-full
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white/80
        p-5
        shadow-sm
        backdrop-blur-xl
        transition-colors
        duration-500

        dark:border-white/10
        dark:bg-slate-900/60
        dark:shadow-none

        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]

        sm:p-6
      "
    >
      {/* Desktop Mouse Glow */}

      <motion.div
        style={{
          background: spotlight,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          opacity-0
          transition-opacity
          duration-500

          md:block
          md:group-hover:opacity-100
        "
      />

      {/* Top Glow */}

      <div
        className="
          pointer-events-none
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

      <div className="relative z-10 min-w-0">

        {/* Icon + Level */}

        <div className="flex min-w-0 items-start justify-between gap-3">

          {/* Icon */}

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
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-slate-100
              transition-colors
              duration-300

              dark:border-white/10
              dark:bg-white/5

              group-hover:border-blue-500/30
              group-hover:bg-blue-500/10

              sm:h-14
              sm:w-14
            "
          >
            <Icon
              size={28}
              className="
                text-slate-600
                transition-colors
                duration-300

                dark:text-slate-300

                group-hover:text-blue-600
                dark:group-hover:text-blue-400
              "
            />
          </motion.div>

          {/* Level */}

          <span
            className="
              max-w-[120px]
              shrink-0
              truncate
              rounded-full
              border
              border-slate-200
              bg-slate-100
              px-2.5
              py-1
              text-[9px]
              font-medium
              uppercase
              tracking-wider
              text-slate-500

              dark:border-white/10
              dark:bg-white/5

              sm:px-3
              sm:text-[11px]
            "
          >
            {level}
          </span>

        </div>

        {/* Name */}

        <h3
          className="
            mt-5
            break-words
            text-lg
            font-bold
            text-slate-900
            transition-colors
            duration-300

            dark:text-white

            group-hover:text-blue-600
            dark:group-hover:text-blue-400
          "
        >
          {name}
        </h3>

        {/* Description */}

        <p
          className="
            mt-2
            break-words
            text-sm
            leading-6
            text-slate-600

            dark:text-slate-400
          "
        >
          {description}
        </p>

      </div>
    </motion.div>
  );
}