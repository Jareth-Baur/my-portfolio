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

    window.addEventListener("mousemove", move, { passive: true });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed hidden h-[320px] w-[320px] rounded-full bg-blue-500/15 blur-3xl xl:block"
    />
  );
}
