"use client";

import { motion } from "framer-motion";

interface Props {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export default function ProjectSection({
  id,
  title,
  children,
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="scroll-mt-32 pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="mb-6 flex items-center gap-4 sm:mb-8">
        <motion.div
          initial={{
            scaleY: 0,
          }}
          whileInView={{
            scaleY: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="h-8 w-1 origin-top rounded-full bg-gradient-to-b from-blue-400 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.6)] sm:h-10"
        />

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>

      <div className="max-w-4xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
        {children}
      </div>
    </motion.section>
  );
}
