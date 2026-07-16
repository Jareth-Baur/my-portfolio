import Image from "next/image";

export default function GitHubStats() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* GitHub Stats */}
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-xl transition duration-300 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <Image
          src="https://github-readme-stats-one-bice.vercel.app/api?username=Jareth-Baur&show_icons=true&theme=transparent&hide_border=true"
          alt="GitHub Stats"
          width={700}
          height={350}
          unoptimized
          className="w-full transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Streak */}
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-xl transition duration-300 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <Image
          src="https://streak-stats.demolab.com?user=Jareth-Baur&theme=transparent&hide_border=true"
          alt="GitHub Streak"
          width={700}
          height={350}
          unoptimized
          className="w-full transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Languages */}
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-xl transition duration-300 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] lg:col-span-2">
        <Image
          src="https://github-readme-stats-one-bice.vercel.app/api/top-langs/?username=Jareth-Baur&layout=compact&theme=transparent&hide_border=true"
          alt="Top Languages"
          width={900}
          height={350}
          unoptimized
          className="mx-auto w-full max-w-3xl transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}