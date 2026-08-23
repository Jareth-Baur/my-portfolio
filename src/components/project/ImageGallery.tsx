"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  images: string[];
  type?: "web" | "mobile" | "desktop";
}

export default function ImageGallery({
  images,
  type = "web",
}: Props) {
  if (type === "mobile") {
    return (
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <MobileScreenshot
            key={image}
            image={image}
            index={index}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8">
      {images.map((image, index) => (
        <DesktopScreenshot
          key={image}
          image={image}
          index={index}
        />
      ))}
    </div>
  );
}

function MobileScreenshot({
  image,
  index,
}: {
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="flex justify-center"
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          w-full
          max-w-[300px]
          rounded-[2.5rem]
          border
          border-white/15
          bg-slate-950
          p-2
          shadow-[0_20px_80px_rgba(0,0,0,0.4)]
        "
      >
        {/* Speaker */}

        <div className="absolute left-1/2 top-4 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-900" />

        {/* Screenshot */}

        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-slate-900">
          <Image
            src={image}
            alt={`Mobile project screenshot ${index + 1}`}
            fill
            sizes="300px"
            className="object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function DesktopScreenshot({
  image,
  index,
}: {
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        shadow-xl
      "
    >
      {/* Browser Bar */}

      <div className="flex h-11 items-center gap-2 border-b border-white/10 px-4">
        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />

        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />

        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />

        <div className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
      </div>

      {/* Screenshot */}

      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={`Project screenshot ${index + 1}`}
          fill
          sizes="
            (max-width: 1024px) 100vw,
            900px
          "
          className="
            object-contain
            transition-transform
            duration-700
            hover:scale-[1.02]
          "
        />
      </div>
    </motion.div>
  );
}
