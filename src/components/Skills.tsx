import { motion } from "framer-motion";
import { skillGroups } from "../data";
import { SectionHeader } from "./About";
import {
  Code2, Layers, Database, Sparkles, Wrench,
} from "lucide-react";
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Layers, Database, Sparkles, Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="02 — Skills"
          title="The stack I build with."
          subtitle="A curated toolkit spanning languages, frameworks, AI, and infrastructure — refined through real production work."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="border-gradient group relative overflow-hidden rounded-3xl glass p-6"
              >
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${group.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/75 transition hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Specializations highlight card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600/30 via-fuchsia-600/20 to-cyan-500/20 p-6 ring-1 ring-white/10"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/30 blur-3xl" />
            <div className="font-mono text-[10px] uppercase tracking-wider text-white/60">Specializations</div>
            <h3 className="mt-3 font-display text-xl font-semibold text-white">What I'm best at</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {["Data Structures & Algorithms", "System Architecture", "NLP & LLM Integration", "RAG Pipelines", "Embeddings & Vector Search"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Marquee strip */}
        <div className="relative mt-16 overflow-hidden rounded-2xl glass">
          <div className="flex animate-marquee gap-12 whitespace-nowrap py-5 text-sm text-white/40">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex shrink-0 gap-12">
                {["TypeScript", "Python", "Next.js", "React", "Node.js", "CosmosDB", "MongoDB", "Grafana", "Kubernetes", "LLMs", "RAG", "MCP", "Tailwind CSS", "Framer Motion"].map((t) => (
                  <span key={t} className="flex items-center gap-3">
                    <span className="h-1 w-1 rounded-full bg-fuchsia-400" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}