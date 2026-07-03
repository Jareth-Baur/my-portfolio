import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";

export default function HeroSocials() {
  return (
    <div className="mt-12 flex gap-5">
      <a
        href="https://github.com/Jareth-Baur"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="rounded-full border border-white/10 p-4 transition hover:border-blue-500 hover:bg-blue-500/20"
      >
        <FaGithub size={22} />
      </a>

      <a
        href="https://www.linkedin.com/in/jareth-baur/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="rounded-full border border-white/10 p-4 transition hover:border-blue-500 hover:bg-blue-500/20"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href="mailto:jarethbaur0223@gmail.com"
        aria-label="Email"
        className="rounded-full border border-white/10 p-4 transition hover:border-blue-500 hover:bg-blue-500/20"
      >
        <Mail size={22} />
      </a>
    </div>
  );
}