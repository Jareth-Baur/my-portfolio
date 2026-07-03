"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import FloatingBadge from "./FloatingBadge";
import Image from "next/image";

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
    const move = (e: MouseEvent) => {
      mouseX.set((window.innerWidth / 2 - e.clientX) / 40);
      mouseY.set((e.clientY - window.innerHeight / 2) / 40);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
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
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-[380px] w-[380px]"
      >
        {/* Background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-sky-500/30 blur-3xl" />

        {/* Animated outer rings */}
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
          className="absolute inset-5 rounded-full border border-cyan-400/20"
        />

        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-10 rounded-full border border-white/10"
        />

        {/* Image */}
        <div className="absolute inset-8 overflow-hidden rounded-full border-4 border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.35)] transition-all duration-500 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_120px_rgba(59,130,246,0.7)]">
          <Image
            src="/next.JPG"
            alt="Jareth Baur"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
