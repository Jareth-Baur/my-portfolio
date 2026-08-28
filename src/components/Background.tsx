type Particle = {
  left: number;
  top: number;
  duration: number;
};

const particles: Particle[] = [
  { left: 8, top: 12, duration: 7 },
  { left: 19, top: 34, duration: 10 },
  { left: 31, top: 76, duration: 8 },
  { left: 44, top: 22, duration: 12 },
  { left: 57, top: 61, duration: 9 },
  { left: 68, top: 15, duration: 11 },
  { left: 79, top: 47, duration: 7 },
  { left: 91, top: 83, duration: 10 },
];

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Grid */}
      <div className="grid-bg absolute inset-0" />

      {/* Top Left Glow */}
      <div
        className="mobile-ambient blur-circle absolute h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px]"
        style={{
          background: "#2563eb",
          top: "-150px",
          left: "-120px",
        }}
      />

      {/* Bottom Right Glow */}
      <div
        className="mobile-ambient blur-circle absolute h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px]"
        style={{
          background: "#0ea5e9",
          bottom: "-220px",
          right: "-120px",
          animationDelay: "6s",
        }}
      />

      {/* Floating Particles */}
      <div className="mobile-particles absolute inset-0 opacity-20">
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