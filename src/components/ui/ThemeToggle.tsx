"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const {
    resolvedTheme,
    setTheme,
  } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10" />
    );
  }

  const isDark =
    resolvedTheme === "dark";

  return (
    <motion.button
      onClick={() =>
        setTheme(
          isDark
            ? "light"
            : "dark"
        )
      }
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.9,
      }}
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        text-slate-700
        shadow-sm
        transition-colors
        hover:bg-slate-100

        dark:border-white/10
        dark:bg-white/5
        dark:text-slate-300
        dark:shadow-none
        dark:hover:border-blue-500/40
        dark:hover:bg-blue-500/10
        dark:hover:text-blue-400
      "
    >
      <motion.div
        key={isDark ? "sun" : "moon"}
        initial={{
          opacity: 0,
          rotate: -90,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        {isDark ? (
          <Sun size={19} />
        ) : (
          <Moon size={19} />
        )}
      </motion.div>
    </motion.button>
  );
}