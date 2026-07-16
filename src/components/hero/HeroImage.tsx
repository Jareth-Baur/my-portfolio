"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";
import Image from "next/image";

import OrbitIcon from "./OrbitIcon";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiFastapi,
  SiPython,
  SiMysql,
  SiGit,
  SiGithub,
  SiLaravel,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";

const outerTechnologies = [
  <SiNextdotjs key="next" className="text-white" />,
  <SiReact key="react" className="text-[#61DAFB]" />,
  <SiPython key="python" className="text-[#3776AB]" />,
  <SiFastapi key="fastapi" className="text-[#009688]" />,
  <SiLaravel key="laravel" className="text-[#FF2D20]" />,
  <FaJava key="java" className="text-[#F89820]" />,
];

const innerTechnologies = [
  <SiTypescript
    key="typescript"
    className="text-[#3178C6]"
  />,
  <SiMysql
    key="mysql"
    className="text-[#4479A1]"
  />,
  <SiGit
    key="git"
    className="text-[#F05032]"
  />,
  <SiGithub
    key="github"
    className="text-white"
  />,
];

const particles = [
  { x: "8%", y: "25%", delay: 0 },
  { x: "88%", y: "20%", delay: 0.7 },
  { x: "94%", y: "65%", delay: 1.2 },
  { x: "15%", y: "78%", delay: 1.8 },
  { x: "50%", y: "5%", delay: 2.3 },
  { x: "75%", y: "88%", delay: 2.8 },
];

export default function HeroImage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 100,
    damping: 25,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 100,
    damping: 25,
  });

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouseX.set((centerX - e.clientX) / 50);
      mouseY.set((e.clientY - centerY) / 50);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        x: 60,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex min-h-[550px] w-full items-center justify-center overflow-visible"
      style={{
        perspective: 1000,
      }}
    >
      {/* Ambient Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[100px]"
      />

      {/* Particles */}

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.3, 0.8],
            y: [0, -10, 0],
          }}
          transition={{
            opacity: {
              duration: 3,
              repeat: Infinity,
              delay: particle.delay,
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              delay: particle.delay,
            },
            y: {
              duration: 4,
              repeat: Infinity,
              delay: particle.delay,
            },
          }}
          style={{
            left: particle.x,
            top: particle.y,
          }}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        />
      ))}

      {/* Outer Orbit Path */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.8,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[300px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rotate-[10deg]
          rounded-[50%]
          border
          border-blue-400/15
        "
      />

      {/* Inner Orbit Path */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 1,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[210px]
          w-[390px]
          -translate-x-1/2
          -translate-y-1/2
          -rotate-[8deg]
          rounded-[50%]
          border
          border-cyan-400/15
        "
      />

      {/* Decorative rotating ring */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 360,
        }}
        transition={{
          opacity: {
            duration: 1,
            delay: 1.2,
          },
          scale: {
            duration: 1,
            delay: 1.2,
          },
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="
          pointer-events-none
          absolute
          h-[430px]
          w-[430px]
          rounded-full
          border
          border-dashed
          border-blue-400/10
        "
      />

      {/* Outer Orbit */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="absolute inset-0"
      >
        {outerTechnologies.map((icon, index) => (
          <OrbitIcon
            key={`outer-${index}`}
            angle={
              (360 / outerTechnologies.length) *
              index
            }
            radiusX={250}
            radiusY={150}
            duration={40}
            tilt={10}
            size={54}
          >
            {icon}
          </OrbitIcon>
        ))}
      </motion.div>

      {/* Inner Orbit */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="absolute inset-0"
      >
        {innerTechnologies.map((icon, index) => (
          <OrbitIcon
            key={`inner-${index}`}
            angle={
              (360 / innerTechnologies.length) *
                index +
              360 /
                innerTechnologies.length /
                2
            }
            radiusX={195}
            radiusY={105}
            duration={30}
            tilt={-8}
            size={48}
          >
            {icon}
          </OrbitIcon>
        ))}
      </motion.div>

      {/* Profile Container */}

      <motion.div
        style={{
          rotateX,
          rotateY,
          zIndex: 20,
          transformStyle: "preserve-3d",
        }}
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
            delay: 0.3,
          },

          scale: {
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          },

          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          relative
          h-64
          w-64
          sm:h-72
          sm:w-72
          md:h-80
          md:w-80
          lg:h-[380px]
          lg:w-[380px]
        "
      >
        {/* Animated Glow */}

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-sky-500/30 blur-3xl"
        />

        {/* Ring 1 */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-blue-500/20"
        />

        {/* Ring 2 */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-4 rounded-full border border-cyan-400/20 sm:inset-5"
        />

        {/* Pulse Ring */}

        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-8 rounded-full border border-white/10 sm:inset-10"
        />

        {/* Profile */}

        <motion.div
          whileHover={{
            scale: 1.04,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            absolute
            inset-6
            overflow-hidden
            rounded-full
            border-4
            border-white/10
            shadow-[0_0_80px_rgba(59,130,246,0.35)]
            transition-colors
            duration-500
            hover:border-blue-400
            hover:shadow-[0_0_120px_rgba(59,130,246,0.7)]
            sm:inset-8
          "
        >
          <Image
            src="/next.JPG"
            alt="Jareth Baur"
            fill
            priority
            sizes="
              (max-width: 640px) 256px,
              (max-width: 768px) 320px,
              380px
            "
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}