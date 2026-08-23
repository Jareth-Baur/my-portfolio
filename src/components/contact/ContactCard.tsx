"use client";

import Link from "next/link";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  Variants,
} from "framer-motion";

import {
  ArrowUpRight,
  Download,
} from "lucide-react";

interface Props {
  title: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  type?: "external" | "email" | "resume";
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.95,
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

export default function ContactCard({
  title,
  value,
  href,
  icon,
  type = "external",
}: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlight = useMotionTemplate`
    radial-gradient(
      250px circle at ${mouseX}px ${mouseY}px,
      rgba(59, 130, 246, 0.15),
      transparent 80%
    )
  `;

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      event.clientX - rect.left
    );

    mouseY.set(
      event.clientY - rect.top
    );
  }

  const isExternal =
    type === "external";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
      }}
      onMouseMove={handleMouseMove}
      className="h-full"
    >
      <Link
        href={href}
        target={
          isExternal
            ? "_blank"
            : undefined
        }
        rel={
          isExternal
            ? "noopener noreferrer"
            : undefined
        }
        className="
          group
          relative
          flex
          h-full
          min-h-[200px]
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white/70
          shadow-sm
          p-6
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-blue-500/40
          hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]
          dark:border-white/10
          dark:bg-slate-900/60
          dark:shadow-none
        "
      >
        {/* Mouse Spotlight */}

        <motion.div
          style={{
            background: spotlight,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Top Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-2/3
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-blue-400/0
            to-transparent
            transition-all
            duration-500
            group-hover:via-blue-400/70
          "
        />

        <div className="relative z-10 flex h-full flex-col">

          {/* Top */}

          <div className="flex items-start justify-between">

            <motion.div
              whileHover={{
                rotate: -8,
                scale: 1.1,
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-blue-500/20
                bg-blue-500/10
                text-blue-400
                transition-colors
                group-hover:bg-blue-500
                group-hover:text-white
              "
            >
              {icon}
            </motion.div>

            <motion.div
              className="text-slate-600 transition-colors group-hover:text-blue-400"
            >
              {type === "resume" ? (
                <Download size={19} />
              ) : (
                <ArrowUpRight
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              )}
            </motion.div>

          </div>

          {/* Content */}

          <div className="mt-auto pt-8">

            <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
              {title}
            </p>

            <h3
              className="
                mt-2
                break-all
                font-semibold
                text-slate-900
                transition-colors
                group-hover:text-blue-400
                dark:text-slate-200
              "
            >
              {value}
            </h3>

          </div>

        </div>
      </Link>
    </motion.div>
  );
}
