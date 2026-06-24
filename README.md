# Aryan Munjral — Portfolio

> **Software Developer & AI Engineer** — building impactful products with clean code, thoughtful design, and scalable engineering.

A modern, futuristic, recruiter-friendly portfolio website for Aryan Munjral — built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion + Three.js**.

---

## ✨ Features

- 🎨 **Premium dark UI** with aurora gradients, glassmorphism, and animated gradient borders
- 🌐 **Interactive 3D hero** powered by Three.js + React Three Fiber
- ⌨️ **⌘K Command palette** for instant section navigation
- 🖱️ **Custom animated cursor** (auto-disabled on touch devices)
- 📊 **Animated scroll progress bar** + back-to-top button
- ✍️ **Typewriter role rotator** in the hero
- 📱 **Fully responsive** — mobile, tablet, and desktop
- 📨 **Working contact form** that delivers messages straight to email
- 🔍 **SEO-optimized** meta tags + Open Graph
- ⚡ **Optimized production build** (~393 KB gzipped, single-file inlined)

---

## 🧱 Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 19 + Vite 7 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| Icons | lucide-react + custom inline SVGs |

---

## 🚀 Quick Start (Local Development)

```bash#1. Clone the repo
git clone https://github.com/AryanMunjral/Aryan_portfolio.git
cd Aryan_portfolio

#2. Install dependencies
npm install

#3. Start the dev server (hot-reload at http://localhost:5173)
npm run dev

#4. Build for production
npm run build

#5. Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
src/
├── App.tsx                  # Main composition + global listeners
├── data.ts                  # Resume content (profile, experience, projects…)
├── hooks.ts                 # Custom hooks (typewriter, scroll, etc.)
├── index.css                # Tailwind + custom utilities
└── components/
 ├── CustomCursor.tsx
 ├── ScrollProgress.tsx
 ├── Navbar.tsx
 ├── Hero.tsx + Hero3D.tsx   # Three.js 3D scene
 ├── About.tsx
 ├── Skills.tsx
 ├── Experience.tsx
 ├── Projects.tsx
 ├── Achievements.tsx
 ├── Education.tsx
 ├── Contact.tsx             # Working contact form
 ├── CommandPalette.tsx      # ⌘K search
 ├── LoadingScreen.tsx
 └── BackToTop.tsx
```

---

## 🛠 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build (output: `dist/`) |
| `npm run preview` | Preview production build locally |

---

## 📜 License

MIT — ©2026 Aryan Munjral. Built with obsession.