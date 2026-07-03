"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  images: string[];
}

const MotionImage = motion(Image);

export default function ImageGallery({ images }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
      {images.map((image, index) => (
        <motion.div
          key={image}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-lg"
        >
          <MotionImage
            src={image}
            alt={`Project screenshot ${index + 1}`}
            width={1200}
            height={700}
            className="h-56 w-full object-cover sm:h-64 md:h-72 transition-transform duration-500"
          />
        </motion.div>
      ))}
    </div>
  );
}