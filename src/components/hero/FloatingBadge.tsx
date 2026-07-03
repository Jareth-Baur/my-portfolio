"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  className: string;
}

export default function FloatingBadge({
  title,
  className,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute hidden rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium whitespace-nowrap text-white shadow-lg backdrop-blur-xl lg:flex ${className}`}
    >
      {title}
    </motion.div>
  );
}