export const profile = {
  name: "Aryan Munjral",
  initials: "AM",
  title: "Software Developer & AI Engineer",
  tagline:
    "Building impactful products with clean code, thoughtful design, and scalable engineering.",
  location: "India",
  email: "aryanmunjral1001@gmail.com",
  phone: "+91 7665168901",
  socials: {
    github: "https://github.com/aryanmunjral",
    linkedin: "https://www.linkedin.com/in/aryan-munjral-986551251/",
    leetcode: "https://leetcode.com/aryanmunjral",
  },
};

export const roles = [
  "Software Developer",
  "AI Engineer",
  "Full Stack Developer",
];

export const about = {
  summary:
    "I'm a Software Developer and recent graduate of Delhi Technological University (DTU) with 8.54 CGPA. Over 8 months of internship experience at Walmart Global Tech, I built AI-powered internal platforms and full-stack products that shipped to production. I'm passionate about clean code, scalable architecture, and turning meaningful problems into elegant solutions. Selected among the Top 100 innovators out of 20,000+ applicants in Walmart SparkPlug, recognizing strong product thinking, problem-solving skills, and the ability to build impactful solutions.",
  highlights: [
    { label: "DSA", value: "1500+", note: "Problems Solved" },
    { label: "LeetCode", value: "Knight", note: "1875 Rating · Top 5.2%" },
    { label: "SparkPlug", value: "Top 100", note: "of 20,000+ applicants" },
    { label: "JEE Mains", value: "AIR 2875", note: "All India Rank" },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    icon: "Code2",
    color: "from-indigo-500/20 to-violet-500/20",
    items: ["C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "Layers",
    color: "from-fuchsia-500/20 to-pink-500/20",
    items: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Databases & Infra",
    icon: "Database",
    color: "from-cyan-500/20 to-sky-500/20",
    items: ["MySQL", "MongoDB", "CosmosDB", "Kubernetes", "Grafana", "Redis"],
  },
  {
    title: "AI Technologies",
    icon: "Sparkles",
    color: "from-amber-500/20 to-orange-500/20",
    items: ["LLM Integration", "RAG", "Embeddings", "NLP", "NLP-to-SQL", "MCP"],
  },
  {
    title: "Developer Tools",
    icon: "Wrench",
    color: "from-emerald-500/20 to-teal-500/20",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Postman", "Docker"],
  },
];

export const experience = [
  {
    company: "Walmart Global Tech India",
    role: "Software Engineering Intern",
    period: "Jan 2026 — Jul 2026",
    duration: "6 Months",
    type: "Reason Hub — Load Planner & AI Reasoning",
    bullets: [
      "Extended the Reason Hub platform with a Load Planner module integrating CosmosDB and internal APIs.",
      "Reduced troubleshooting effort by 80% via intelligent diagnostic tooling.",
      "Architected MCP and A2A integrations with multilingual support (English, Spanish, French).",
      "Reduced LLM token consumption by 90% through smart prompt engineering & caching.",
      "Improved query latency via optimized retrieval pipelines.",
      "Built Grafana observability dashboards for production reliability.",
    ],
    stack: ["Python", "CosmosDB", "MCP", "A2A", "Grafana", "REST APIs"],
  },
  {
    company: "Walmart Global Tech India",
    role: "Software Engineering Intern",
    period: "Jun 2026 — Aug 2026",
    duration: "Summer",
    type: "Reason Hub — AI Reasoning Engine",
    bullets: [
      "Built the AI reasoning engine (Reason Hub) in Python powering ODIN.",
      "Created a modular MCP server for tool-use and function calling.",
      "Onboarded transportation teams to ODIN — NLP-to-SQL assistant.",
      "Automated complex data retrieval and business summaries.",
    ],
    stack: ["Python", "LLMs", "NLP", "SQL", "MCP"],
  },
];

export const projects = [
  {
    name: "InterviewIQ",
    tagline: "AI-powered interview preparation platform",
    description:
      "Real-time AI feedback on coding interviews with video/audio processing and secure payments. Reduced interview preparation time by 40% for thousands of users.",
    stack: ["Next.js", "React", "Tailwind CSS", "Stripe", "Google Gemini"],
    metrics: ["40% faster prep", "Real-time AI feedback", "Secure payments"],
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
    icon: "Brain",
    github: "https://github.com/AryanMunjral/online-interview-nextjs-app",
    demo: "https://online-interview-nextjs-apps.vercel.app/sign-in",
    hasDemo: true,
  },
  {
    name: "DropFile",
    tagline: "Secure file-sharing for teams",
    description:
      "End-to-end authenticated file sharing built with Clerk. Handles 500+ concurrent requests with sub-100ms response times and a delightful upload experience.",
    stack: ["React", "Next.js", "Clerk", "Node.js", "Express.js"],
    metrics: ["500+ RPS", "40% faster responses", "E2E auth"],
    accent: "from-cyan-500 via-sky-500 to-indigo-500",
    icon: "Shield",
    github: "https://github.com/AryanMunjral/file-sharing-app",
    demo: "https://file-sharing-app-delta.vercel.app/",
    hasDemo: true,
  },
  {
    name: "QuickCab",
    tagline: "Location-based ride-sharing platform",
    description:
      "A modern ride-sharing experience with location-based search and session-based auth. 99.9% data integrity and 30% lower rider wait time.",
    stack: ["React", "Next.js", "Clerk", "Maps API"],
    metrics: ["30% lower wait", "99.9% integrity", "Real-time"],
    accent: "from-amber-500 via-orange-500 to-rose-500",
    icon: "MapPin",
    github: "https://github.com/AryanMunjral/uber-clone-nextjs",
    demo: "",
    hasDemo: false,
  },
];

export const achievements = [
  { title: "1500+", subtitle: "DSA Problems Solved", detail: "Across LeetCode, Codeforces & mock contests", icon: "Flame" },
  { title: "Knight", subtitle: "LeetCode Rating · 1875", detail: "Top 5.2% globally", icon: "Trophy" },
  { title: "Top 100", subtitle: "Walmart SparkPlug", detail: "Selected from 20,000+ applicants", icon: "Award" },
  { title: "AIR 2875", subtitle: "JEE Mains", detail: "All India Rank — Class XII", icon: "Medal" },
];

export const education = [
  {
    school: "Delhi Technological University",
    degree: "B.Tech in Computer Engineering · Graduate",
    period: "2022 —2026",
    gpa: "8.54 CGPA",
    details: [
      "Coursework: Data Structures, Algorithms, Operating Systems, DBMS, Machine Learning, NLP",
      "Active member: Coding Club, AI/ML Society",
      "Built and shipped production AI systems during internship at Walmart Global Tech.",
    ],
  },
  {
    school: "White Leaf Public School",
    degree: "Class XII — CBSE",
    period: "2021 —2022",
    gpa: "90%",
    details: ["Science stream with Mathematics", "Recognized for academic excellence"],
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const CONTACT_EMAIL = "aryanmunjral1001@gmail.com";