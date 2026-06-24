# Aryan Munjral — Portfolio

> **Software Developer & AI Engineer** — building impactful products with clean code, thoughtful design, and scalable engineering.

A modern, futuristic, recruiter-friendly portfolio website for Aryan Munjral — built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion + Three.js**.

![Aryan Munjral](https://img.shields.io/badge/built--with-React%20%2B%20Vite%20%2B%20TS-2026-blue)
![Tailwind](https://img.shields.io/badge/styled--with-Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/ready--for-Vercel-000?logo=vercel)

---

## ✨ Features

- 🎨 **Premium dark UI** with aurora gradients, glassmorphism, and animated gradient borders
- 🌐 **Interactive 3D hero** powered by Three.js + React Three Fiber
- ⌨️ **⌘K Command palette** for instant section navigation
- 🖱️ **Custom animated cursor** (auto-disabled on touch devices)
- 📊 **Animated scroll progress bar** + back-to-top button
- ✍️ **Typewriter role rotator** in the hero
- 📱 **Fully responsive** — mobile, tablet, and desktop
- 📨 **Working contact form** that delivers messages straight to email (via FormSubmit.co with `mailto:` fallback)
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
| Deployment | Vercel (one-click) |

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

## 🌐 Deploy to Vercel (Recommended)

The fastest way — Vercel auto-detects Vite projects.

### Option A — One-click deploy (5 minutes)

1. Go to **https://vercel.com** and sign in with **GitHub**.
2. Click **"Add New… → Project"**.
3. Find **`AryanMunjral/Aryan_portfolio`** in the list and select it.
4. Vercel auto-detects Vite — **no configuration needed**. Just click **Deploy**.
5. Wait ~30 seconds. Your site is live at `https://aryan-portfolio.vercel.app`.

### Option B — Vercel CLI (advanced)

```bash#1. Install Vercel CLI
npm i -g vercel

#2. Login & initialize
vercel login
vercel init

#3. Deploy
vercel --prod
```

### Custom domain
Project → **Settings → Domains** → add your domain (e.g. `aryanmunjral.dev`).

---

## 📨 Contact Form — One-time Setup

The contact form uses **FormSubmit.co** (free, no API keys, no backend).

> ⚠️ **First submission only:** You'll receive a confirmation email at `aryanmunjral1001@gmail.com`. Click the activation link **once** — after that, every submission is delivered automatically.

- **Receiving email:** `aryanmunjral1001@gmail.com`
- **Subject format:** `New Portfolio Contact Message - [Subject]`
- **Fallback:** If FormSubmit is unavailable, the form gracefully falls back to opening the visitor's mail client with a pre-filled `mailto:`.

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
 ├── Contact.tsx             # FormSubmit + mailto fallback
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

---

<p align="center">
  <a href="https://github.com/AryanMunjral" target="_blank" rel="noreferrer">GitHub</a>
  ·
  <a href="https://www.linkedin.com/in/aryan-munjral-986551251/" target="_blank" rel="noreferrer">LinkedIn</a>
  ·
  <a href="https://leetcode.com/aryanmunjral" target="_blank" rel="noreferrer">LeetCode</a>
  ·
  <a href="mailto:aryanmunjral1001@gmail.com">Email</a>
</p>