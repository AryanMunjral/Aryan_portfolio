import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 14 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 380);
      }
      setProgress(p);
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#05050a]"
        >
          <div className="absolute inset-0 aurora opacity-60" />
          <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-70 blur-xl" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 font-display text-2xl font-bold text-white shadow-2xl">
                AM
              </div>
              <div className="absolute inset-0 rounded-2xl pulse-ring" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 font-display text-2xl font-semibold text-white"
          >
            Aryan Munjral
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-1 font-mono text-xs text-white/50"
          >
            initializing portfolio.ts
          </motion.div>

          <div className="relative mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
            <div className="absolute inset-0 shimmer" />
          </div>
          <div className="mt-2 font-mono text-[10px] text-white/40">{Math.floor(progress)}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}