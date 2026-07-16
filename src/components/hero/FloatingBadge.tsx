"use client";

import { motion } from "framer-motion";

interface FloatingBadgeProps {
  icon: React.ReactNode;
  className?: string;
  reverseDuration?: number;
  reverseDirection?: 1 | -1;
}

export default function FloatingBadge({
  icon,
  className = "",
  reverseDuration = 35,
  reverseDirection = -1,
}: FloatingBadgeProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.25,
      }}
      animate={{
        rotate: reverseDirection * 360,
        scale: [1, 1.08, 1],
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
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-slate-900/80
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300
        hover:border-blue-500
        hover:shadow-[0_0_25px_rgba(59,130,246,.45)]
        ${className}
      `}
    >
      <div className="text-3xl">
        {icon}
      </div>
    </motion.div>
  );
}