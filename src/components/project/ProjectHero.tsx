import Image from "next/image";

interface Props {
  project: any;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10">
      {/* Cover Image */}
      <Image
        src={project.cover}
        alt={project.title}
        width={1600}
        height={900}
        priority
        className="h-[280px] w-full object-cover sm:h-[380px] md:h-[450px] lg:h-[550px]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />

      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-500/10" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 lg:p-12">
        <p className="text-sm font-medium tracking-wider text-blue-400 uppercase">
          {project.year}
        </p>

        <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {project.title}
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
          {project.tagline}
        </p>

        {/* Metadata */}
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            {project.role}
          </span>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            {project.status}
          </span>
        </div>
      </div>
    </section>
  );
}