"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import ScrollIndicator from "./ScrollIndicator";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden py-28 lg:min-h-screen lg:py-0">
      {/* Premium background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] lg:h-[700px] lg:w-[700px] lg:blur-[180px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 xl:px-0">
        {/* LEFT */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 font-semibold text-blue-400"
          >
            Available for Opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-black leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
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
            className="mt-6 text-xl font-semibold text-gray-300 sm:text-2xl md:text-3xl lg:text-4xl"
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
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0"
          >
            I build intelligent software that combines modern web
            technologies, mobile development, and artificial intelligence
            to solve real-world problems.
          </motion.p>

          <div className="mt-10 flex justify-center lg:justify-start">
            <HeroButtons />
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <HeroSocials />
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <HeroImage />
        </div>
      </div>

      <div className="hidden lg:block">
        <ScrollIndicator />
      </div>
    </section>
  );
}