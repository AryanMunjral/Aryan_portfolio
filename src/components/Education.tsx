import { motion } from "framer-motion";
import { education } from "../data";
import { SectionHeader } from "./About";
import { GraduationCap, School } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap, School,
};

export default function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="06 — Education"
          title="Academic foundation."
          subtitle="A rigorous CS education paired with consistent top-tier competitive results."
        />

        <div className="relative mt-14 grid gap-5 md:grid-cols-2">
          {/* connecting line on md+ */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />

          {education.map((e, i) => {
            const Icon = iconMap[i === 0 ? "GraduationCap" : "School"] ?? GraduationCap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-gradient relative overflow-hidden rounded-3xl glass p-7"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-sky-500/30 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold text-white">{e.school}</h3>
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-500/30">
                        {e.gpa}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-white/65">{e.degree}</div>
                    <div className="mt-1 font-mono text-xs text-cyan-300/80">{e.period}</div>

                    <ul className="mt-5 space-y-2">
                      {e.details.map((d, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-white/65">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}