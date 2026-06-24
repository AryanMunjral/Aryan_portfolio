import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import CommandPalette from "./components/CommandPalette";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";
import { useVisitorCount } from "./hooks";

export default function App() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const visits = useVisitorCount();

  // ⌘K / Ctrl+K command palette
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((v) => !v);
      }
      if (e.key === "Escape") setCmdOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Easter egg: konami code
  useEffect(() => {
    const seq = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === seq[i]) {
        i++;
        if (i === seq.length) {
          document.body.animate(
            [{ filter: "hue-rotate(0deg)" }, { filter: "hue-rotate(360deg)" }, { filter: "hue-rotate(0deg)" }],
            { duration: 2400, iterations: 1 }
          );
          i = 0;
        }
      } else {
        i = 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05050a] text-white">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar onOpenCommand={() => setCmdOpen(true)} />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <BackToTop />

      {/* Visitor counter — bottom-left */}
      <div className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] text-white/70 sm:flex">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="font-mono">{visits?.toLocaleString() ?? "—"} visits</span>
      </div>
    </div>
  );
}