interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ProjectSection({
  title,
  children,
}: Props) {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      {/* Section Title */}
      <div className="mb-6 flex items-center gap-4 sm:mb-8">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.6)] sm:h-10" />

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-4xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
        {children}
      </div>
    </section>
  );
}