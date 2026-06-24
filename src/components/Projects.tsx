import { motion } from "framer-motion";
import { projects } from "../data";
import { SectionHeader } from "./About";
import { Brain, Shield, MapPin, ArrowUpRight, GitBranch, ExternalLink } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Shield, MapPin,
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="04 — Projects"
          title="Things I've designed, shipped, and scaled."
          subtitle="A selection of products where I owned the architecture, the code, and the outcome."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Brain;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl glass p-1"
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${p.accent} opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-60`} />

                {/* Visual header */}
                <div className={`relative h-44 overflow-hidden rounded-t-2xl bg-gradient-to-br ${p.accent}`}>
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
                  {/* Floating icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/30">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </motion.div>
                  {/* shine */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-wider text-white/80">
                    0{i + 1} / 0{projects.length}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                      <p className="mt-1 text-sm text-white/55">{p.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/65">{p.description}</p>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {p.metrics.map((m) => (
                      <div key={m} className="rounded-lg border border-white/10 bg-white/[0.02] px-2 py-1.5 text-center">
                        <div className="text-[11px] font-semibold text-white">{m}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/70 ring-1 ring-white/10">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white ring-1 ring-white/10 transition hover:bg-white hover:text-black"
                    >
                      <GitBranch className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                    {p.hasDemo && p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white ring-1 ring-white/10 transition hover:bg-white hover:text-black"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 ring-1 ring-white/10 transition group-hover:bg-white group-hover:text-black"
                      aria-label={`Open ${p.name} on GitHub`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}