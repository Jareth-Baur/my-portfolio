"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    damping: 25,
    stiffness: 250,
  });

  const y = useSpring(mouseY, {
    damping: 25,
    stiffness: 250,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl"
    />
  );
}