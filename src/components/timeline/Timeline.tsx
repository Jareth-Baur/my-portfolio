"use client";

import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "./TimelineItem";

import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/5
          blur-[160px]
        "
      />

      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
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
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionTitle
            title="My Journey"
            subtitle="A timeline of my growth as an Information Technology student and developer, from learning the fundamentals to building real-world software projects."
          />
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-16 sm:mt-20">

          {/* Desktop Center Line */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="
              absolute
              left-[11px]
              top-0
              h-full
              w-px
              origin-top
              bg-gradient-to-b
              from-blue-500
              via-blue-500/30
              to-transparent
              md:left-1/2
            "
          />

          <div className="space-y-12 md:space-y-20">
            {timeline.map((item, index) => (
              <TimelineItem
                key={`${item.year}-${item.title}`}
                {...item}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
