"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Journey",
    href: "#journey",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4">
      <nav className="relative mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-slate-200/80 bg-white/75 px-6 py-3 shadow-sm backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/70 dark:shadow-none">
        <Link href="/" className="text-xl font-bold">
          Jareth
          <span className="text-blue-500">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="absolute left-0 top-16 w-full rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 dark:shadow-none md:hidden"
            >
              <div className="flex flex-col gap-5">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
