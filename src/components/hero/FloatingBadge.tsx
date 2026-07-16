"use client";

import { motion } from "framer-motion";

interface FloatingBadgeProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
  reverseDuration?: number;
  reverseDirection?: 1 | -1;
}

export default function FloatingBadge({
  icon,
  title,
  className = "",
  reverseDuration = 35,
  reverseDirection = -1,
}: FloatingBadgeProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.12,
        y: -4,
      }}
      animate={{
        scale: [1, 1.03, 1],
        rotate: reverseDirection * 360,
      }}
      transition={{
        rotate: {
          duration: reverseDuration,
          repeat: Infinity,
          ease: "linear",
        },
        scale: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`
        absolute
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-slate-900/70
        px-4
        py-2
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300
        hover:border-blue-400
        hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
        ${className}
      `}
    >
      <span className="text-lg text-blue-400">{icon}</span>

      <span className="whitespace-nowrap text-sm font-medium">
        {title}
      </span>
    </motion.div>
  );
}