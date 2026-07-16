"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect } from "react";

interface OrbitIconProps {
  children: React.ReactNode;
  angle: number;
  radiusX: number;
  radiusY: number;
  duration: number;
  tilt?: number;
  size?: number;
}

export default function OrbitIcon({
  children,
  angle,
  radiusX,
  radiusY,
  duration,
  tilt = 0,
  size = 52,
}: OrbitIconProps) {
  const progress = useMotionValue(angle);

  useEffect(() => {
    const controls = animate(progress, angle + 360, {
      duration,
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [progress, angle, duration]);

  const x = useTransform(progress, (value) => {
    const radians = (value * Math.PI) / 180;

    const baseX = Math.cos(radians) * radiusX;
    const baseY = Math.sin(radians) * radiusY;

    const tiltRadians = (tilt * Math.PI) / 180;

    return (
      baseX * Math.cos(tiltRadians) -
      baseY * Math.sin(tiltRadians)
    );
  });

  const y = useTransform(progress, (value) => {
    const radians = (value * Math.PI) / 180;

    const baseX = Math.cos(radians) * radiusX;
    const baseY = Math.sin(radians) * radiusY;

    const tiltRadians = (tilt * Math.PI) / 180;

    return (
      baseX * Math.sin(tiltRadians) +
      baseY * Math.cos(tiltRadians)
    );
  });

  // Bottom half = front of profile
  // Top half = behind profile
  const zIndex = useTransform(progress, (value) => {
    const radians = (value * Math.PI) / 180;

    return Math.sin(radians) > 0 ? 30 : 5;
  });

  // Icons become slightly larger when coming toward the viewer
  const scale = useTransform(progress, (value) => {
    const radians = (value * Math.PI) / 180;
    const depth = Math.sin(radians);

    return 0.85 + ((depth + 1) / 2) * 0.3;
  });

  // Back icons become slightly dimmer
  const opacity = useTransform(progress, (value) => {
    const radians = (value * Math.PI) / 180;
    const depth = Math.sin(radians);

    return 0.55 + ((depth + 1) / 2) * 0.45;
  });

  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2"
      style={{
        x,
        y,
        scale,
        opacity,
        zIndex,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
    >
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-slate-950/90
          text-2xl
          shadow-[0_0_25px_rgba(59,130,246,0.2)]
          backdrop-blur-xl
        "
      >
        {children}
      </div>
    </motion.div>
  );
}