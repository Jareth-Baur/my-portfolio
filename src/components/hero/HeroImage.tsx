"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

import FloatingBadge from "./FloatingBadge";

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

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="relative flex w-full items-center justify-center">
      {/* Floating Tech Badges */}
      <div className="pointer-events-none absolute inset-0">
        {/* Outer Orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          {/* Top */}
          <FloatingBadge
            icon={<SiNextdotjs />}
            title="Next.js"
            className="left-1/2 -top-8 -translate-x-1/2"
            reverseDuration={35}
            reverseDirection={-1}
          />

          {/* Top Right */}
          <FloatingBadge
            icon={<SiLaravel />}
            title="Laravel"
            className="right-10 top-6"
            reverseDuration={35}
            reverseDirection={-1}
          />

          {/* Right Upper */}
          <FloatingBadge
            icon={<SiTypescript />}
            title="TypeScript"
            className="right-0 top-1/4"
            reverseDuration={35}
            reverseDirection={-1}
          />

          {/* Right */}
          <FloatingBadge
            icon={<SiReact />}
            title="React"
            className="right-0 top-1/2 -translate-y-1/2"
            reverseDuration={35}
            reverseDirection={-1}
          />

          {/* Bottom Right */}
          <FloatingBadge
            icon={<SiPython />}
            title="Python"
            className="right-10 bottom-6"
            reverseDuration={35}
            reverseDirection={-1}
          />

          {/* Bottom */}
          <FloatingBadge
            icon={<SiFastapi />}
            title="FastAPI"
            className="left-1/2 -translate-x-1/2 -bottom-8"
            reverseDuration={35}
            reverseDirection={-1}
          />

          {/* Bottom Left */}
          <FloatingBadge
            icon={<FaJava />}
            title="Java"
            className="left-10 bottom-6"
            reverseDuration={35}
            reverseDirection={-1}
          />

          {/* Left */}
          <FloatingBadge
            icon={<SiGit />}
            title="Git"
            className="left-0 top-1/2 -translate-y-1/2"
            reverseDuration={35}
            reverseDirection={-1}
          />

          {/* Left Upper */}
          <FloatingBadge
            icon={<SiMysql />}
            title="MySQL"
            className="left-0 top-1/4"
            reverseDuration={35}
            reverseDirection={-1}
          />

          {/* Upper Left */}
          <FloatingBadge
            icon={<SiGithub />}
            title="GitHub"
            className="left-10 top-6"
            reverseDuration={35}
            reverseDirection={-1}
          />
        </motion.div>
      </div>

      {/* Profile */}
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[380px] lg:w-[380px]"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-sky-500/30 blur-3xl" />

        {/* Rotating Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-blue-500/20"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-4 rounded-full border border-cyan-400/20 sm:inset-5"
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
          className="absolute inset-8 rounded-full border border-white/10 sm:inset-10"
        />

        {/* Profile Image */}
        <div className="absolute inset-6 overflow-hidden rounded-full border-4 border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.35)] transition-all duration-500 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_120px_rgba(59,130,246,0.7)] sm:inset-8">
          <Image
            src="/next.JPG"
            alt="Jareth Baur"
            fill
            priority
            sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 380px"
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
