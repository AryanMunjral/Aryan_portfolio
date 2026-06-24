import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { navItems, profile } from "../data";
import { useActiveSection } from "../hooks";

interface Props {
  onOpenCommand: () => void;
}

export default function Navbar({ onOpenCommand }: Props) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between px-4">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="group flex items-center gap-2.5"
        >
          <div className="relative">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 font-display text-sm font-bold text-white shadow-lg shadow-fuchsia-500/30">
              {profile.initials}
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-50 blur-md transition group-hover:opacity-80" />
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold text-white">{profile.name}</span>
            <span className="font-mono text-[10px] text-white/50">software · ai · fullstack</span>
          </div>
        </motion.a>

        <nav className="hidden items-center gap-1 rounded-full glass px-2 py-1.5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                active === item.id ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommand}
            className="hidden items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-white/70 transition hover:text-white sm:flex"
          >
            <Command className="h-3.5 w-3.5" />
            <span className="font-mono">⌘K</span>
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/90 md:block"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full glass md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-4 mt-2 rounded-2xl glass-strong p-3 md:hidden"
          >
            <div className="grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-white/80 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}