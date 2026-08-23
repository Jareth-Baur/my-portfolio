"use client";

import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import ScrollIndicator from "./ScrollIndicator";
import HeroImage from "./HeroImage";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    x: 50,
  },

  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden py-28 lg:min-h-screen lg:py-0">

      {/* Background Glow */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
        }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/15
            blur-[120px]

            dark:bg-blue-600/10

            sm:h-[500px]
            sm:w-[500px]

            lg:h-[700px]
            lg:w-[700px]
            lg:blur-[120px]
          "
        />
      </motion.div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 xl:px-0">

        {/* LEFT */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >

          {/* Availability */}

          <motion.div
            variants={itemVariants}
            className="mb-5 flex justify-center lg:justify-start"
          >
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                flex
                items-center
                gap-2
                font-semibold
                text-blue-600
                dark:text-blue-400
              "
            >
              <span className="relative flex h-2 w-2">
                <motion.span
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-blue-500
                    dark:bg-blue-400
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-blue-500
                    dark:bg-blue-400
                  "
                />
              </span>

              Available for Opportunities
            </motion.div>
          </motion.div>

          {/* Name */}

          <motion.h1
            variants={itemVariants}
            className="text-5xl font-black leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Jareth{" "}

            <motion.span
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
              className="
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-sky-600
                bg-clip-text
                text-transparent

                dark:from-blue-400
                dark:via-cyan-300
                dark:to-sky-500
              "
            >
              Baur
            </motion.span>
          </motion.h1>

          {/* Type Animation */}

          <motion.div
            variants={itemVariants}
            className="
              mt-6
              min-h-[48px]
              text-xl
              font-semibold
              text-slate-700

              dark:text-gray-300

              sm:text-2xl
              md:text-3xl
              lg:text-4xl
            "
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

          {/* Description */}

          <motion.p
            variants={itemVariants}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-600

              dark:text-slate-400

              sm:text-lg
              lg:mx-0
            "
          >
            I build intelligent software that combines modern web
            technologies, mobile development, and artificial intelligence
            to solve real-world problems.
          </motion.p>

          {/* Buttons */}

          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <HeroButtons />
          </motion.div>

          {/* Socials */}

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center lg:justify-start"
          >
            <HeroSocials />
          </motion.div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <HeroImage />
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
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
          delay: 0.8,
        }}
        className="hidden lg:block"
      >
        <ScrollIndicator />
      </motion.div>

    </section>
  );
}
