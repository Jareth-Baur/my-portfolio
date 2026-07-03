export default function Background() {
  return (
    <>
      <div className="grid-bg" />

      <div
        className="blur-circle"
        style={{
          background: "#2563eb",
          top: "-150px",
          left: "-120px",
        }}
      />

      <div
        className="blur-circle"
        style={{
          background: "#0ea5e9",
          bottom: "-250px",
          right: "-100px",
          animationDelay: "6s",
        }}
      />
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 8}s infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}
