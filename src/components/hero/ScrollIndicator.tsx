"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
    >
      <div className="flex h-12 w-7 justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
        <motion.div
          animate={{ y: [2, 18, 2] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
        />
      </div>
    </motion.div>
  );
}