"use client";

import { useMemo } from "react";

export default function Background() {
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 5 + Math.random() * 8,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Grid */}
      <div className="grid-bg absolute inset-0" />

      {/* Top Left Glow */}
      <div
        className="blur-circle absolute h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px]"
        style={{
          background: "#2563eb",
          top: "-150px",
          left: "-120px",
        }}
      />

      {/* Bottom Right Glow */}
      <div
        className="blur-circle absolute h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px]"
        style={{
          background: "#0ea5e9",
          bottom: "-220px",
          right: "-120px",
          animationDelay: "6s",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-20">
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute h-1 w-1 rounded-full bg-cyan-400 ${
              i > 14 ? "hidden md:block" : ""
            }`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}