import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";

export default function HeroSocials() {
  return (
    <div className="mt-10 flex justify-center gap-4 lg:justify-start">
      <a
        href="https://github.com/Jareth-Baur"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/jareth-baur/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="mailto:jarethbaur0223@gmail.com"
        aria-label="Email"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}