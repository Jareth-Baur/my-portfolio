import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <h2 className="text-xl font-bold">
            Jareth<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Designed & Built with Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/Jareth-Baur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/jareth-baur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>

          <a href="mailto:jarethbaur0223@gmail.com">
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
