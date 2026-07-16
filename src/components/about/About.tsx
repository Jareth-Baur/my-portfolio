"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Smartphone,
  GraduationCap,
} from "lucide-react";

const interests = [
  {
    icon: Code2,
    title: "Full Stack",
    description:
      "Building modern and responsive web applications.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent systems that solve real-world problems.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating practical and accessible mobile experiences.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            About <span className="text-blue-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <h3 className="text-3xl font-bold leading-tight">
              Turning ideas into
              <span className="text-blue-400">
                {" "}real-world solutions.
              </span>
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              I'm an Information Technology student passionate about
              building software that combines modern development
              technologies with practical problem-solving.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My interests include full-stack development, artificial
              intelligence, machine learning, and mobile development.
              I enjoy turning ideas into functional applications and
              continuously learning new technologies along the way.
            </p>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <GraduationCap />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Education
                </p>

                <p className="font-semibold">
                  Bachelor of Science in Information Technology
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="grid gap-5"
          >
            {interests.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                  }}
                  className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-colors hover:border-blue-500/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}