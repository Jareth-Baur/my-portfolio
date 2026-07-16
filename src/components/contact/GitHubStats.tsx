"use client";

import Image from "next/image";

import {
  motion,
  Variants,
} from "framer-motion";

import {
  BarChart3,
  Flame,
  Code2,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function GitHubStats() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.1,
      }}
      className="grid gap-6 lg:grid-cols-2"
    >

      {/* GitHub Stats */}

      <StatCard
        title="GitHub Overview"
        description="Public repository and contribution statistics."
        icon={<BarChart3 size={18} />}
      >
        <Image
          src="https://github-readme-stats-one-bice.vercel.app/api?username=Jareth-Baur&show_icons=true&theme=transparent&hide_border=true"
          alt="Jareth Baur GitHub statistics"
          width={700}
          height={350}
          unoptimized
          className="w-full"
        />
      </StatCard>

      {/* Streak */}

      <StatCard
        title="Contribution Streak"
        description="Recent contribution activity across GitHub."
        icon={<Flame size={18} />}
      >
        <Image
          src="https://streak-stats.demolab.com?user=Jareth-Baur&theme=transparent&hide_border=true"
          alt="Jareth Baur GitHub contribution streak"
          width={700}
          height={350}
          unoptimized
          className="w-full"
        />
      </StatCard>

      {/* Languages */}

      <div className="lg:col-span-2">
        <StatCard
          title="Top Languages"
          description="Languages detected across my public GitHub repositories."
          icon={<Code2 size={18} />}
        >
          <Image
            src="https://github-readme-stats-one-bice.vercel.app/api/top-langs/?username=Jareth-Baur&layout=compact&theme=transparent&hide_border=true"
            alt="Top programming languages in Jareth Baur's GitHub repositories"
            width={900}
            height={350}
            unoptimized
            className="mx-auto w-full max-w-3xl"
          />
        </StatCard>
      </div>

    </motion.div>
  );
}

function StatCard({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -5,
      }}
      className="
        group
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/50
        p-5
        backdrop-blur-xl
        transition-colors
        duration-500
        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]
        sm:p-6
      "
    >
      {/* Header */}

      <div className="mb-5 flex items-start gap-3">

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-blue-500/10
            text-blue-400
          "
        >
          {icon}
        </div>

        <div>

          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>

        </div>

      </div>

      {/* Stats */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          transition-transform
          duration-500
          group-hover:scale-[1.01]
        "
      >
        {children}
      </div>

    </motion.div>
  );
}