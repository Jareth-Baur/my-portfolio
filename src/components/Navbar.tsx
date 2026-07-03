"use client";

import Link from "next/link";

const links = [
  "About",
  "Skills",
  "Projects",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      <nav className="mx-auto mt-6 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">

        <h1 className="text-xl font-bold">
          Jareth<span className="text-blue-500">.</span>
        </h1>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition hover:text-blue-400"
            >
              {link}
            </Link>
          ))}
        </div>

      </nav>

    </header>
  );
}