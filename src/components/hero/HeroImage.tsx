"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
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
  <SiTypescript key="typescript" className="text-[#3178C6]" />,
  <SiMysql key="mysql" className="text-[#4479A1]" />,
  <SiGit key="git" className="text-[#F05032]" />,
  <SiGithub key="github" className="text-white" />,
];

export default function HeroImage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      mouseX.set((window.innerWidth / 2 - e.clientX) / 40);
      mouseY.set((e.clientY - window.innerHeight / 2) / 40);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative flex min-h-[550px] w-full items-center justify-center overflow-visible">
      {/* Orbit Paths */}
      <div
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
          border-blue-400/10
        "
      />

      <div
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
          border-cyan-400/10
        "
      />

      {/* Outer Orbit Icons */}
      {outerTechnologies.map((icon, index) => (
        <OrbitIcon
          key={`outer-${index}`}
          angle={(360 / outerTechnologies.length) * index}
          radiusX={250}
          radiusY={150}
          duration={40}
          tilt={10}
          size={54}
        >
          {icon}
        </OrbitIcon>
      ))}

      {/* Inner Orbit Icons */}
      {innerTechnologies.map((icon, index) => (
        <OrbitIcon
          key={`inner-${index}`}
          angle={
            (360 / innerTechnologies.length) * index +
            360 / innerTechnologies.length / 2
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

      {/* Profile */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          zIndex: 20,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
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
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-sky-500/30 blur-3xl" />

        {/* Rotating Rings */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-0
            rounded-full
            border
            border-blue-500/20
          "
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-4
            rounded-full
            border
            border-cyan-400/20
            sm:inset-5
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-8
            rounded-full
            border
            border-white/10
            sm:inset-10
          "
        />

        {/* Profile Image */}
        <div
          className="
            absolute
            inset-6
            overflow-hidden
            rounded-full
            border-4
            border-white/10
            shadow-[0_0_80px_rgba(59,130,246,0.35)]
            transition-all
            duration-500
            hover:scale-105
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
        </div>
      </motion.div>
    </div>
  );
}