"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex w-[95%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-5 py-4 backdrop-blur-xl sm:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Jareth<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-colors duration-300 hover:text-blue-400"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-auto mt-3 w-[95%] max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col py-2">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 transition-colors hover:bg-white/5 hover:text-blue-400"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}