"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-50 dark:bg-slate-950"
        >
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 1.2,
              opacity: 0,
            }}
          >
            <h1 className="text-5xl font-black">
              Jareth
              <span className="text-blue-500">.</span>
            </h1>

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 1,
              }}
              className="mt-4 h-[2px] bg-blue-500"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
