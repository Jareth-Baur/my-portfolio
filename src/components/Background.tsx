"use client";

import { useEffect, useState } from "react";

type Particle = {
  left: number;
  top: number;
  duration: number;
};

export default function Background() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 25 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 5 + Math.random() * 8,
    }));

    setParticles(generatedParticles);
  }, []);

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
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute h-1 w-1 rounded-full bg-cyan-400"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s ease infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}