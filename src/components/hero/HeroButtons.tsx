export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <a
        href="#projects"
        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-blue-500"
      >
        View Projects
      </a>

      <a
        href="/resume.pdf"
        className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur hover:border-blue-400"
      >
        Download Resume
      </a>

    </div>
  );
}