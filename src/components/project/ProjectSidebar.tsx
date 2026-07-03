interface Props {
  project: any;
}

export default function ProjectSidebar({
  project,
}: Props) {
  return (
    <aside
      className="
        rounded-3xl
        border border-white/10
        bg-slate-900/50
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
        lg:sticky
        lg:top-24
        lg:p-8
      "
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

        <h3 className="text-xl font-bold">
          Project Info
        </h3>
      </div>

      {/* Info */}
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
        <InfoItem
          label="Role"
          value={project.role}
        />

        <InfoItem
          label="Status"
          value={project.status}
        />

        <InfoItem
          label="Year"
          value={project.year}
        />
      </div>
    </aside>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="mb-2 text-sm uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <span
        className="
          inline-flex
          rounded-full
          border border-blue-500/20
          bg-blue-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-blue-300
        "
      >
        {value}
      </span>
    </div>
  );
}