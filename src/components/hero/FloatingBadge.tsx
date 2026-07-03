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
        repeat: Infinity,
        duration: 3,
      }}
      className={`absolute rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl ${className}`}
    >
      <p className="font-medium">
        {title}
      </p>
    </motion.div>
  );
}   