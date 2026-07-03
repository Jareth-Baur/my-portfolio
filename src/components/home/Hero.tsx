export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-blue-400 font-semibold">
          BS Information Technology
        </p>

        <h1 className="mt-4 text-6xl font-black text-white">
          Hi, I'm
          <span className="text-blue-500"> Jareth.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          I build AI-powered applications, web systems, and mobile
          experiences that solve real-world problems.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
            View Projects
          </button>

          <button className="rounded-lg border border-white/20 px-6 py-3 text-white transition hover:border-blue-500">
            Download Resume
          </button>

        </div>

      </div>

    </section>
  );
}