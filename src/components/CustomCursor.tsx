import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 350, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 350, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [role='button'], .cursor-hover"));
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        animate={{
          opacity: hidden ? 0 : 1,
          scale: hovering ? 1.6 : 1,
        }}
        transition={{ duration: 0.18 }}
      >
        <div
          className={`h-3 w-3 rounded-full transition-colors duration-200 ${
            hovering ? "bg-fuchsia-400" : "bg-white"
          } shadow-[0_0_12px_rgba(192,132,252,0.8)]`}
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        animate={{
          opacity: hidden ? 0 : 0.5,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{ duration: 0.25 }}
      >
        <div className="h-10 w-10 rounded-full border border-white/30 backdrop-blur-sm" />
      </motion.div>
    </>
  );
}