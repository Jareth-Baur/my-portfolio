export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 p-16 text-center">
        <h2 className="text-5xl font-black">
          Interested in Working Together?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          I'm actively looking for opportunities in software engineering, AI,
          and full-stack development.
        </p>

        <a
          href="mailto:jareth.baur.dev@gmail.com"
          className="mt-10 inline-block rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}