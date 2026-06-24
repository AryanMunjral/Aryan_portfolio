import { motion } from "framer-motion";
import { experience } from "../data";
import { SectionHeader } from "./About";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="03 — Experience"
          title="Where I've shipped real systems."
          subtitle="Built and scaled AI-powered internal platforms at one of the world's largest retailers."
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-fuchsia-500/60 via-indigo-500/30 to-transparent md:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-7 hidden h-3 w-3 rounded-full bg-fuchsia-400 ring-4 ring-fuchsia-500/20 md:block">
                  <div className="absolute inset-0 animate-ping rounded-full bg-fuchsia-400/60" />
                </div>

                <div className="border-gradient relative overflow-hidden rounded-3xl glass p-7">
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-600/30 ring-1 ring-white/10">
                        <Briefcase className="h-5 w-5 text-blue-300" />
                      </div>
                      <div>
                        <div className="font-display text-xl font-semibold text-white">{job.company}</div>
                        <div className="text-sm text-white/60">{job.role}</div>
                        <div className="mt-1 font-mono text-xs text-fuchsia-300/80">{job.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs text-white/70">{job.period}</div>
                      <div className="mt-1 inline-flex rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-500/30">
                        {job.duration}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {job.bullets.map((b, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 + i * 0.1 }}
                        className="flex gap-3 text-sm text-white/75"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-fuchsia-400 to-indigo-400" />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}