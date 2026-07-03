"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

import FloatingBadge from "./FloatingBadge";

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
    // Skip mouse tracking on touch devices
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
      <FloatingBadge title="Next.js" className="-left-10 top-10" />
      <FloatingBadge title="Python" className="-right-6 top-0" />
      <FloatingBadge title="YOLOv8" className="-left-8 bottom-12" />
      <FloatingBadge title="Kotlin" className="-right-8 bottom-20" />
      <FloatingBadge title="TypeScript" className="left-24 -bottom-10" />

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
          animate={{ rotate: -360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-4 sm:inset-5 rounded-full border border-cyan-400/20"
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
          className="absolute inset-8 sm:inset-10 rounded-full border border-white/10"
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