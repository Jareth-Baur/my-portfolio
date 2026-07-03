interface Props {
  tech: string;
}

export default function TechBadge({
  tech,
}: Props) {
  return (
    <span
      className="
      rounded-full
      border
      border-blue-500/20
      bg-blue-500/10
      px-3
      py-1
      text-xs
      font-medium
      text-blue-300
      "
    >
      {tech}
    </span>
  );
}