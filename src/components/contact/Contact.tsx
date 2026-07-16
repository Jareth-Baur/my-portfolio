import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import ContactCard from "./ContactCard";
import GitHubStats from "./GitHubStats";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-32">
      <SectionTitle
        title="Let's Build Something Together"
        subtitle="I'm always interested in software engineering, AI, and full-stack development opportunities."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <ContactCard
          title="Email"
          value="jareth.baur.dev@gmail.com"
          href="mailto:jareth.baur.dev@gmail.com"
          icon={<Mail />}
        />

        <ContactCard
          title="GitHub"
          value="github.com/Jareth-Baur"
          href="https://github.com/Jareth-Baur"
          icon={<FaGithub size={22} />}
        />

        <ContactCard
          title="LinkedIn"
          value="linkedin.com/in/jareth-baur"
          href="https://www.linkedin.com/in/jareth-baur/"
          icon={<FaLinkedin size={22} />}
        />

        <ContactCard
          title="Resume"
          value="Download Resume"
          href="/resume.pdf"
          icon={<FileText />}
        />
      </div>

      <div className="mt-24">
        <SectionTitle title="GitHub Activity" />
        <GitHubStats />
      </div>
    </section>
  );
}