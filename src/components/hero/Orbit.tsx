"use client";

import { motion } from "framer-motion";

interface OrbitProps {
  children: React.ReactNode;
  radius: number;
  duration: number;
  tilt?: number;
  className?: string;
}

export default function Orbit({
  children,
  radius,
  duration,
  tilt = 12,
  className = "",
}: OrbitProps) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 ${className}`}
      style={{
        width: radius * 2,
        height: radius * 1.05,
        transform: `translate(-50%, -50%) rotate(${tilt}deg)`,
      }}
    >
      {/* Visible orbit path */}
      <div className="absolute inset-0 rounded-[50%] border border-blue-400/10" />

      {/* Rotating orbital system */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}