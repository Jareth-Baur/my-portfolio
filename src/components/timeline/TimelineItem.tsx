interface Props {
  year: string;

  title: string;

  description: string;
}

export default function TimelineItem({
  year,

  title,

  description,
}: Props) {
  return (
    <div className="relative pl-10">
      <div
        className="
absolute
left-0
top-2
h-4
w-4
rounded-full
bg-blue-500
"
      />

      <div
        className="
absolute
left-[7px]
top-6
h-full
w-px
bg-white/10
"
      />

      <p className="text-blue-400">{year}</p>

      <h3 className="mt-2 text-2xl font-bold">{title}</h3>

      <p className="mt-2 text-slate-400">{description}</p>
    </div>
  );
}
