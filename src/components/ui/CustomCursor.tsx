"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
  });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX - 8);
      mouseY.set(event.clientY - 8);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-4 w-4 rounded-full border border-blue-400 bg-blue-400/20 lg:block"
    />
  );
}