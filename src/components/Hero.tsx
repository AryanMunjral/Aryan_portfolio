import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import Hero3D from "./Hero3D";
import { profile, roles } from "../data";
import { useTypewriter } from "../hooks";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export default function Hero() {
  const typed = useTypewriter(roles, 75, 1500);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 aurora" />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay" />

      {/* 3D scene */}
      <div className="absolute inset-0">
        <Hero3D />
      </div>

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-32 h-96 w-96 rounded-full bg-fuchsia-600/30 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-[5.5rem]"
        >
          <span className="block text-white">Hi, I'm {profile.name.split(" ")[0]}.</span>
          <span className="block text-gradient animate-gradient">{typed}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base"
        >
          Software Developer passionate about building scalable products, AI-powered applications,
          and exceptional user experiences. A graduate of Delhi Technological University (DTU) with
          internship experience building full-stack applications, backend systems, and real-world
          products that solve meaningful problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            <Sparkles className="h-4 w-4" />
            View My Work
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-fuchsia-300/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { v: "1500+", l: "DSA Solved" },
            { v: "1875", l: "LeetCode Rating" },
            { v: "Top 5.2%", l: "Globally" },
            { v: "Top 100", l: "SparkPlug" },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-2xl glass px-4 py-4 text-left transition hover:bg-white/[0.07]"
            >
              <div className="font-display text-2xl font-bold text-white">{s.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{s.l}</div>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 transition hover:text-white"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}