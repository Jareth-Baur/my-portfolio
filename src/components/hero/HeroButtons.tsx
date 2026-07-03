export default function HeroButtons() {
  return (
    <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
      <a
        href="#projects"
        className="flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto"
      >
        View Projects
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto"
      >
        Download Resume
      </a>
    </div>
  );
}