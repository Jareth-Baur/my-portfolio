"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 2,
        ease: "easeOut",
      }}
      className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
    >
      <motion.span
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500"
      >
        Scroll
      </motion.span>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="group flex flex-col items-center"
      >
        <div className="relative flex h-12 w-7 justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur-sm transition-colors group-hover:border-blue-400/50">
          <motion.div
            animate={{
              y: [3, 20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]"
          />
        </div>

        <motion.div
          animate={{
            y: [0, 4, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ChevronDown
            size={15}
            className="mt-1 text-blue-400"
          />
        </motion.div>
      </motion.a>
    </motion.div>
  );
}