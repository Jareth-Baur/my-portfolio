import Link from "next/link";

interface Props {
  title: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

export default function ContactCard({ title, value, href, icon }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-slate-900/60
      p-6
      backdrop-blur-xl
      transition
      hover:-translate-y-2
      hover:border-blue-500
      "
    >
      <div className="text-blue-400">{icon}</div>

      <h3 className="mt-6 text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-slate-400 break-all">{value}</p>
    </Link>
  );
}
