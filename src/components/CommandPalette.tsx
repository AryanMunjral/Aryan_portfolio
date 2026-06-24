import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { navItems, profile, projects } from "../data";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Item {
  id: string;
  label: string;
  group: string;
  hint?: string;
  icon?: string;
  action: () => void;
}

export default function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  const items: Item[] = [
    ...navItems.map((n) => ({
      id: n.id,
      label: n.label,
      group: "Sections",
      action: () => {
        document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    })),
    ...projects.map((p) => ({
      id: `proj-${p.name}`,
      label: p.name,
      group: "Projects",
      hint: p.tagline,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    })),
    {
      id: "contact-email",
      label: `Email ${profile.email}`,
      group: "Contact",
      action: () => {
        window.location.href = `mailto:${profile.email}`;
        onClose();
      },
    },
    {
      id: "contact-github",
      label: "Open GitHub",
      group: "Contact",
      action: () => {
        window.open(profile.socials.github, "_blank");
        onClose();
      },
    },
    {
      id: "contact-linkedin",
      label: "Open LinkedIn",
      group: "Contact",
      action: () => {
        window.open(profile.socials.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  const groups = Array.from(new Set(filtered.map((i) => i.group)));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 px-4 pt-[12vh] backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl glass-strong shadow-2xl shadow-fuchsia-500/10"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="h-4 w-4 text-white/50" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, projects, links…"
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />
              <kbd className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/50">
                ESC
              </kbd>
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="px-4 py-12 text-center text-sm text-white/40">
                  No results for "{query}"
                </div>
              ) : (
                groups.map((g) => (
                  <div key={g} className="mb-2">
                    <div className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                      {g}
                    </div>
                    {filtered
                      .filter((i) => i.group === g)
                      .map((item) => (
                        <button
                          key={item.id}
                          onClick={item.action}
                          className="group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition hover:bg-white/5"
                        >
                          <div>
                            <div className="text-sm font-medium text-white">{item.label}</div>
                            {item.hint && (
                              <div className="text-xs text-white/40">{item.hint}</div>
                            )}
                          </div>
                          <ArrowRight className="h-4 w-4 text-white/30 transition group-hover:text-white" />
                        </button>
                      ))}
                  </div>
                ))
              )}
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[11px] text-white/40">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-fuchsia-400" />
                <span>Tip: Press ⌘K anywhere to search</span>
              </div>
              <span className="font-mono">v1.0 · Aryan Munjral</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}