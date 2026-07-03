"use client";

import Link from "next/link";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-xl font-bold text-white">
          Jareth<span className="text-blue-500">.</span>
        </h1>

        <div className="hidden gap-8 md:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 transition hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}