import { motion } from "framer-motion";
import { about } from "../data";
import { Code2, Cpu, Globe, Zap } from "lucide-react";

const traits = [
  { icon: Code2, label: "Systems Thinker", desc: "Designing for scale, observability and reliability." },
  { icon: Cpu, label: "AI Engineer", desc: "LLMs, RAG, embeddings, MCP and NLP-to-SQL." },
  { icon: Globe, label: "Full Stack", desc: "From Next.js frontends to Node + cloud backends." },
  { icon: Zap, label: "Performance Obsessed", desc: "Latency, tokens, and request-time budgets." },
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="01 — About" title="Engineer by craft. Builder by obsession." />

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-lg leading-relaxed text-white/70">{about.summary}</p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {about.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-gradient relative overflow-hidden rounded-2xl glass p-5"
                >
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/40">{h.label}</div>
                  <div className="mt-1 font-display text-3xl font-bold text-white">{h.value}</div>
                  <div className="mt-1 text-xs text-white/50">{h.note}</div>
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 blur-2xl" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="space-y-3">
              {traits.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-4 rounded-2xl glass p-4 transition hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 ring-1 ring-white/10">
                    <t.icon className="h-5 w-5 text-fuchsia-300" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-white">{t.label}</div>
                    <div className="text-sm text-white/55">{t.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/60"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-3 text-white/60">{subtitle}</motion.p>}
    </div>
  );
}