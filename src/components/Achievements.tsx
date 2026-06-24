import { motion } from "framer-motion";
import { achievements } from "../data";
import { SectionHeader } from "./About";
import { Flame, Trophy, Award, Medal } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame, Trophy, Award, Medal,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="05 — Achievements"
          title="Receipts, ranks, and milestones."
          subtitle="A snapshot of competitive and academic milestones that shaped my engineering mindset."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] ?? Trophy;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="border-gradient group relative overflow-hidden rounded-3xl glass p-6"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-amber-500/30 to-rose-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/30 to-rose-500/30 ring-1 ring-white/10">
                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>
                  <div className="mt-5 font-display text-4xl font-bold text-gradient-warm">{a.title}</div>
                  <div className="mt-1 font-display text-base font-semibold text-white">{a.subtitle}</div>
                  <div className="mt-2 text-xs text-white/55">{a.detail}</div>
                </div>

                {/* shine sweep */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}