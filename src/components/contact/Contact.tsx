"use client";

import { motion, Variants } from "framer-motion";
import {
  Mail,
  FileText,
  Code2,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import ContactCard from "./ContactCard";
import GitHubStats from "./GitHubStats";
import SectionTitle from "../ui/SectionTitle";

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
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
          bottom-0
          left-1/2
          -z-10
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/10
          blur-[160px]
        "
      />

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}

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
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionTitle
            title="Let's Build Something Together"
            subtitle="I'm open to software development opportunities, freelance projects, and collaborations involving web, mobile, AI, and full-stack development."
          />
        </motion.div>

        {/* Availability CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            relative
            mb-12
            overflow-hidden
            rounded-3xl
            border
            border-blue-500/20
            bg-gradient-to-br
            from-blue-500/10
            via-slate-900/50
            to-cyan-500/5
            p-6
            sm:p-8
          "
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-[80px]" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                <span className="relative flex h-2.5 w-2.5">
                  <motion.span
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                  />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                Available for opportunities
              </div>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Have a project or opportunity in mind?
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                Feel free to reach out. I'm always interested in discussing
                new projects, development opportunities, and ideas where I
                can contribute and continue growing as a developer.
              </p>
            </div>

            <motion.a
              href="mailto:jareth.baur.dev@gmail.com"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6
                py-3.5
                font-semibold
                transition
                hover:bg-blue-500
                hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
              "
            >
              <Mail size={18} />

              Get In Touch

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </motion.a>

          </div>
        </motion.div>

        {/* Contact Cards */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <ContactCard
            title="Email"
            value="jareth.baur.dev@gmail.com"
            href="mailto:jareth.baur.dev@gmail.com"
            icon={<Mail size={23} />}
            type="email"
          />

          <ContactCard
            title="GitHub"
            value="Jareth-Baur"
            href="https://github.com/Jareth-Baur"
            icon={<FaGithub size={23} />}
            type="external"
          />

          <ContactCard
            title="LinkedIn"
            value="jareth-baur"
            href="https://www.linkedin.com/in/jareth-baur/"
            icon={<FaLinkedin size={23} />}
            type="external"
          />

          <ContactCard
            title="Resume"
            value="View Resume"
            href="/resume.pdf"
            icon={<FileText size={23} />}
            type="resume"
          />
        </motion.div>

        {/* GitHub Activity */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-24"
        >
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
                <Code2 size={17} />

                Open Source & Development
              </div>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                GitHub Activity
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                A snapshot of my public development activity, repositories,
                and technologies across GitHub.
              </p>
            </div>

            <motion.a
              href="https://github.com/Jareth-Baur"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                x: 3,
              }}
              className="
                group
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-400
                transition-colors
                hover:text-blue-400
              "
            >
              View GitHub Profile

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </motion.a>

          </div>

          <GitHubStats />
        </motion.div>

      </div>
    </section>
  );
}