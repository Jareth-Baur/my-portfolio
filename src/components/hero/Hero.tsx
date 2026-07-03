"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import ScrollIndicator from "./ScrollIndicator";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      {/* Premium background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 font-semibold text-blue-400"
          >
            Available for Opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl font-black md:text-8xl"
          >
            Jareth{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
              Baur
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-2xl font-semibold text-gray-300 md:text-4xl"
          >
            <TypeAnimation
              sequence={[
                "AI Developer",
                1800,
                "Full Stack Developer",
                1800,
                "Mobile Developer",
                1800,
                "Machine Learning Enthusiast",
                1800,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-400"
          >
            I build intelligent software that combines modern web technologies,
            mobile development, and artificial intelligence to solve real-world
            problems.
          </motion.p>

          <HeroButtons />

          <HeroSocials />
        </div>

        {/* RIGHT */}
        <HeroImage />
      </div>

      <ScrollIndicator />
    </section>
  );
}
