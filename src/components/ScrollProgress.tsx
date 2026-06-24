import { useScrollProgress } from "../hooks";

export default function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div className="fixed left-0 right-0 top-0 z-[100] h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_18px_rgba(192,132,252,0.6)] transition-[width] duration-100"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}