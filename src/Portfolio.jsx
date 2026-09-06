import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  ArrowUpRight,
  ArrowUp,
  Download,
  Menu,
  X,
  MapPin,
  GraduationCap,
  Award,
  Send,
} from "lucide-react";

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

/* ---------------------------------- data ---------------------------------- */

const PHOTO_SRC = "/photo.png";
const RESUME_SRC = "/resume.pdf";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Python", "Java", "C", "C++"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "React Router", "Axios"],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "MongoDB", "Mongoose"],
  },
  {
    title: "APIs & Auth",
    items: ["REST APIs", "GitHub REST API", "Google Gemini API", "JWT", "bcrypt"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Postman", "Vite"],
  },
];

const PROJECTS = [
  {
    name: "README AI",
    tagline: "AI-powered GitHub README generator",
    description:
      "A full-stack MERN app that analyzes public GitHub repositories and uses Google's Gemini API to generate professional README documentation, complete with a live Markdown editor and preview.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "JWT"],
    link: "https://github.com/Omraje101",
    featured: true,
  },
  {
    name: "CampusCompass",
    tagline: "College discovery & decision-making platform",
    description:
      "A full-stack college discovery platform with server-side search, filtering and comparison, plus a deterministic predictor that scores SAFE, MODERATE and REACH picks from exam rank and cutoff data.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zustand"],
    link: "https://github.com/Omraje101",
    featured: true,
  },
  {
    name: "Momentum",
    tagline: "Task management, refined",
    description:
      "A responsive to-do app with priorities, categories, due dates, search, progress tracking, dark mode and drag-and-drop — all persisted locally.",
    tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    link: "https://github.com/Omraje101/Momentum-TodoList-webApp",
  },
  {
    name: "DineSync Elite",
    tagline: "Restaurant discovery & reservations",
    description:
      "A premium restaurant discovery and reservation concept built during an AI website-building competition — the entire build used only five AI prompts.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/Omraje101/5x-Battle-DineSync-ELite",
  },
  {
    name: "Async Search Control Center",
    tagline: "Multi-source search, three ways",
    description:
      "A multi-source search app supporting Parallel, Sequential and Fastest modes, with debouncing, AbortController-based cancellation and full loading, error and timeout states.",
    tech: ["JavaScript", "Fetch API", "AbortController"],
    link: "https://github.com/Omraje101/Async-Search-Control-Center",
  },
  {
    name: "PlanNGo",
    tagline: "Travel planning, personalized",
    description:
      "A responsive travel planner where users sign up, explore curated travel packages and generate personalized trip itineraries.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/Omraje101/PlanNGo-Travel-Planner",
  },
  {
    name: "Twitter Clone",
    tagline: "Desktop UI, rebuilt",
    description:
      "A responsive Twitter (X) desktop UI clone covering sign-up, login and the home feed, rebuilt with careful attention to layout and spacing.",
    tech: ["HTML5", "Tailwind CSS"],
    link: "https://github.com/Omraje101/Twitter-desktop-ui-clone",
  },
];

const EXPERIENCE = {
  role: "Data Science Intern",
  org: "Cognifyz Technologies",
  location: "Remote",
  period: "June 2025 — July 2025",
  bullets: [
    "Cleaned, preprocessed and analyzed restaurant datasets containing 9,500+ records using Python, Pandas and NumPy.",
    "Performed exploratory data analysis and built visualizations using Matplotlib and Seaborn.",
    "Developed analytical and problem-solving skills by working through real-world, messy datasets.",
  ],
};

const EDUCATION = {
  degree: "B.Tech in Information Technology",
  school: "Pimpri Chinchwad College of Engineering (PCCOE), Pune",
  year: "2026",
};

const ACHIEVEMENTS = [
  "Winner — 5X AI Prompt Battle, an AI-powered web development competition",
  "Runner-up — Spectrum Tech Event, PCCOE",
  "Solved 100+ DSA problems on LeetCode",
  "Earned a 5★ Python badge on HackerRank",
  "Meta: Introduction to Front-End Development, Coursera",
  "Programming with Java — Infosys Springboard · DBMS — Scaler Academy",
];

const SOCIALS = {
  github: "https://github.com/Omraje101",
  linkedin: "https://www.linkedin.com/in/om-waghmare-633ab1323/",
  email: "omrajewaghmare6969@gmail.com",
  phone: "+91 93704 40769",
};

/* --------------------------------- helpers --------------------------------- */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function LiquidButton({ href, children, icon, variant = "solid", download, onClick }) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      download={download}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`liquid-btn ${variant === "solid" ? "liquid-btn--solid" : "liquid-btn--ghost"}`}
    >
      <span className="liquid-btn__label">
        {children}
        {icon}
      </span>
    </Comp>
  );
}

function useTilt(strength = 8) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -strength;
    const ry = (px - 0.5) * strength;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  }

  return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave };
}

function TiltCard({ children, className = "", style = {} }) {
  const tilt = useTilt(8);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`tilt-card ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function Tilt3D({ children, strength = 10, className = "", style = {} }) {
  const tilt = useTilt(strength);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`tilt-3d ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* --------------------------------- component --------------------------------- */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 400;
      setShowTopBtn(nearBottom);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleFormChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`;
  }

  function handleNavClick(id) {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="portfolio-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap');

        .portfolio-root {
          --bg: #0c0f0d;
          --bg-soft: #121512;
          --panel: rgba(255,255,255,0.045);
          --panel-strong: rgba(255,255,255,0.07);
          --border: rgba(240,235,222,0.12);
          --border-soft: rgba(240,235,222,0.07);
          --ink: #f2eee4;
          --ink-dim: #a8a296;
          --ink-faint: #766f63;
          --gold: #c9a24e;
          --gold-soft: #e3c785;
          --jade: #3a8067;
          --jade-soft: #63a98c;
          --coral: #d98a6f;
          font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
          background: var(--bg);
          color: var(--ink);
          position: relative;
          overflow-x: hidden;
          min-height: 100vh;
          isolation: isolate;
        }

        .portfolio-root * { box-sizing: border-box; }

        .portfolio-root .serif {
          font-family: 'Fraunces', ui-serif, Georgia, serif;
        }

        .portfolio-root a { color: inherit; text-decoration: none; }

        .bg-scene {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .bg-scene::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(1100px 600px at 12% -8%, rgba(201,162,78,0.16), transparent 60%),
            radial-gradient(900px 700px at 100% 10%, rgba(58,128,103,0.20), transparent 55%),
            radial-gradient(800px 600px at 20% 100%, rgba(217,138,111,0.10), transparent 55%);
        }
        .grain {
          position: fixed;
          inset: 0;
          z-index: 60;
          pointer-events: none;
          opacity: 0.035;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .blob {
          position: absolute;
          border-radius: 999px;
          filter: blur(70px);
          opacity: 0.55;
          animation: float 22s ease-in-out infinite;
        }
        .blob--gold { width: 420px; height: 420px; background: radial-gradient(circle, rgba(201,162,78,0.55), transparent 70%); top: -120px; right: 8%; animation-duration: 26s; }
        .blob--jade { width: 460px; height: 460px; background: radial-gradient(circle, rgba(58,128,103,0.55), transparent 70%); top: 30%; left: -160px; animation-duration: 30s; animation-delay: -6s; }
        .blob--coral { width: 360px; height: 360px; background: radial-gradient(circle, rgba(217,138,111,0.4), transparent 70%); bottom: -80px; right: 18%; animation-duration: 24s; animation-delay: -12s; }

        @keyframes float {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-40px) scale(1.08); }
          66% { transform: translate(-25px,30px) scale(0.96); }
        }

        .content-layer { position: relative; z-index: 1; }

        /* ---------- nav ---------- */
        .nav-wrap {
          position: fixed;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          width: min(920px, calc(100% - 32px));
        }
        .nav-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 14px 10px 20px;
          border-radius: 999px;
          background: rgba(16,18,16,0.55);
          border: 1px solid var(--border-soft);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .nav-wrap.scrolled .nav-pill {
          background: rgba(14,16,14,0.78);
          border-color: var(--border);
          box-shadow: 0 12px 40px -20px rgba(0,0,0,0.6);
        }
        .nav-logo { font-family: 'Fraunces', serif; font-size: 1.05rem; letter-spacing: 0.01em; }
        .nav-links { display: none; align-items: center; gap: 28px; font-size: 0.86rem; color: var(--ink-dim); }
        .nav-links button { background: none; border: none; cursor: pointer; color: inherit; font-family: inherit; font-size: inherit; padding: 4px 2px; position: relative; transition: color 0.25s ease; }
        .nav-links button:hover { color: var(--ink); }
        .nav-links button::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -4px;
          height: 1px;
          background: linear-gradient(90deg, var(--gold), var(--jade-soft));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .nav-links button:hover::after { transform: scaleX(1); }
        .nav-cta { display: none; }
        .nav-burger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px; height: 34px;
          border-radius: 999px;
          border: 1px solid var(--border-soft);
          background: transparent;
          color: var(--ink);
          cursor: pointer;
        }
        @media (min-width: 840px) {
          .nav-links { display: flex; }
          .nav-cta { display: inline-flex; }
          .nav-burger { display: none; }
        }
        .mobile-menu {
          margin-top: 10px;
          padding: 18px;
          border-radius: 22px;
          background: rgba(14,16,14,0.9);
          border: 1px solid var(--border);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .mobile-menu button {
          background: none; border: none; color: var(--ink); text-align: left;
          font-family: 'Manrope', sans-serif; font-size: 1rem; padding: 6px 4px; cursor: pointer;
        }

        /* ---------- glass panel ---------- */
        .glass {
          background: var(--panel);
          border: 1px solid var(--border-soft);
          backdrop-filter: blur(22px) saturate(150%);
          -webkit-backdrop-filter: blur(22px) saturate(150%);
        }

        /* ---------- buttons ---------- */
        .liquid-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          overflow: hidden;
          border-radius: 999px;
          padding: 14px 26px;
          cursor: pointer;
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: 0.92rem;
          isolation: isolate;
          transition: transform 0.35s cubic-bezier(.16,1,.3,1), border-color 0.35s ease;
        }
        .liquid-btn:active { transform: scale(0.97); }
        .liquid-btn__label {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.35s ease;
        }
        .liquid-btn--solid {
          border: 1px solid rgba(201,162,78,0.55);
          color: #12140f;
          background: linear-gradient(135deg, var(--gold-soft), var(--gold) 55%, var(--jade-soft));
        }
        .liquid-btn--solid::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, var(--jade), var(--gold));
          transform: scale(0);
          transform-origin: center;
          border-radius: inherit;
          transition: transform 0.55s cubic-bezier(.16,1,.3,1);
          z-index: 1;
        }
        .liquid-btn--solid:hover::before { transform: scale(1); }
        .liquid-btn--solid:hover .liquid-btn__label { color: #f4f0e6; }
        .liquid-btn--ghost {
          color: var(--ink);
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.03);
        }
        .liquid-btn--ghost::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(201,162,78,0.35), transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        .liquid-btn--ghost:hover::before { opacity: 1; }
        .liquid-btn--ghost:hover { border-color: rgba(201,162,78,0.5); }

        /* ---------- section basics ---------- */
        .section { padding: 128px 0; position: relative; }
        .section-inner { width: min(1120px, 100% - 48px); margin: 0 auto; }
        .section-label {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--gold-soft);
          margin: 0 0 14px 0;
        }
        .section-title {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin: 0 0 20px 0;
          max-width: 720px;
        }
        .section-desc {
          color: var(--ink-dim);
          font-size: 1.02rem;
          line-height: 1.7;
          max-width: 620px;
        }

        .reveal { opacity: 0; transform: translateY(26px); transition: opacity 0.85s ease, transform 0.85s cubic-bezier(.16,1,.3,1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        /* ---------- hero ---------- */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 150px 0 80px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
          align-items: center;
        }
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1.15fr 0.85fr; gap: 40px; }
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--ink-dim);
          margin-bottom: 22px;
        }
        .eyebrow-dot {
          width: 7px; height: 7px; border-radius: 999px;
          background: var(--jade-soft);
          box-shadow: 0 0 0 4px rgba(58,128,103,0.18);
        }
        .hero-title {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: clamp(2.6rem, 6vw, 4.4rem);
          line-height: 1.02;
          letter-spacing: -0.015em;
          margin: 0 0 20px 0;
        }
        .hero-title em {
          font-style: italic;
          font-weight: 400;
          background: linear-gradient(120deg, var(--gold-soft), var(--jade-soft));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-bio {
          color: var(--ink-dim);
          font-size: 1.08rem;
          line-height: 1.75;
          max-width: 520px;
          margin-bottom: 36px;
        }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 44px; }
        .hero-meta { display: flex; flex-wrap: wrap; gap: 22px; color: var(--ink-faint); font-size: 0.88rem; }
        .hero-meta span { display: inline-flex; align-items: center; gap: 6px; }

        .photo-stage {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          min-height: 420px;
          perspective: 1200px;
        }
        .photo-glow {
          position: absolute;
          width: 76%;
          aspect-ratio: 1;
          left: 50%;
          top: 8%;
          transform: translateX(-50%);
          border-radius: 999px;
          background:
            radial-gradient(circle at 40% 30%, rgba(201,162,78,0.38), transparent 60%),
            radial-gradient(circle at 65% 70%, rgba(58,128,103,0.4), transparent 60%);
          filter: blur(60px);
          animation: glowPulse 9s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.85; }
          50% { transform: translateX(-50%) scale(1.08); opacity: 1; }
        }
        .tilt-3d {
          --rx: 0deg; --ry: 0deg;
          transform: perspective(1000px) rotateX(var(--ry)) rotateY(var(--rx));
          transition: transform 0.25s ease-out;
          position: relative;
        }
        .cutout-photo {
          position: relative;
          z-index: 1;
          width: min(400px, 80vw);
          height: auto;
          display: block;
          filter:
            drop-shadow(0 30px 40px rgba(0,0,0,0.55))
            drop-shadow(0 0 50px rgba(201,162,78,0.14));
          -webkit-mask-image: linear-gradient(to bottom, black 74%, transparent 99%);
          mask-image: linear-gradient(to bottom, black 74%, transparent 99%);
        }

        /* ---------- about ---------- */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 860px) {
          .about-grid { grid-template-columns: 1fr 1fr; gap: 60px; }
        }
        .stat-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 36px; }
        .stat-card {
          padding: 22px 20px;
          border-radius: 20px;
        }
        .stat-number {
          font-family: 'Fraunces', serif;
          font-size: 2rem;
          color: var(--gold-soft);
        }
        .stat-label { color: var(--ink-dim); font-size: 0.85rem; margin-top: 4px; }

        /* ---------- skills ---------- */
        .skills-panel { border-radius: 32px; padding: 44px; }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 34px;
          margin-top: 12px;
        }
        @media (min-width: 720px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1080px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .skill-group-title {
          font-family: 'Fraunces', serif;
          font-style: italic;
          color: var(--jade-soft);
          font-size: 1rem;
          margin-bottom: 14px;
        }
        .pill-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .pill {
          padding: 7px 14px;
          border-radius: 999px;
          font-size: 0.82rem;
          color: var(--ink-dim);
          border: 1px solid var(--border-soft);
          background: rgba(255,255,255,0.02);
          transition: border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }
        .pill:hover { color: var(--ink); border-color: var(--gold); transform: translateY(-2px); }

        /* ---------- projects ---------- */
        .project-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
          margin-top: 20px;
        }
        @media (min-width: 780px) {
          .project-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .tilt-card {
          --rx: 0deg; --ry: 0deg; --mx: 50%; --my: 50%;
          transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
          transition: transform 0.25s ease-out, border-color 0.3s ease;
          border-radius: 26px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .tilt-card.featured { grid-column: span 1; }
        @media (min-width: 780px) {
          .tilt-card.featured { padding: 36px; }
        }
        .tilt-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(320px circle at var(--mx) var(--my), rgba(201,162,78,0.10), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .tilt-card:hover::before { opacity: 1; }
        .tilt-card:hover { border-color: rgba(201,162,78,0.35); }
        .project-name {
          font-family: 'Fraunces', serif;
          font-size: 1.4rem;
          margin: 0 0 6px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .project-link-icon {
          width: 34px; height: 34px;
          border-radius: 999px;
          display: inline-flex; align-items: center; justify-content: center;
          border: 1px solid var(--border);
          color: var(--ink-dim);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .tilt-card:hover .project-link-icon { color: #12140f; background: var(--gold-soft); border-color: transparent; transform: rotate(45deg); }
        .project-tagline { color: var(--jade-soft); font-size: 0.86rem; margin-bottom: 12px; }
        .project-desc { color: var(--ink-dim); font-size: 0.92rem; line-height: 1.65; margin-bottom: 20px; flex-grow: 1; }
        .tech-row { display: flex; flex-wrap: wrap; gap: 6px; }
        .tech-chip {
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 999px;
          color: var(--ink-faint);
          border: 1px solid var(--border-soft);
        }

        /* ---------- experience timeline ---------- */
        .timeline { position: relative; margin-top: 40px; padding-left: 34px; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 7px; top: 6px; bottom: 6px;
          width: 1px;
          background: linear-gradient(180deg, var(--gold), var(--jade-soft) 60%, transparent);
        }
        .timeline-item { position: relative; padding-bottom: 46px; }
        .timeline-item:last-child { padding-bottom: 0; }
        .timeline-dot {
          position: absolute;
          left: -34px; top: 4px;
          width: 15px; height: 15px;
          border-radius: 999px;
          background: var(--bg);
          border: 2px solid var(--gold-soft);
        }
        .timeline-role { font-family: 'Fraunces', serif; font-size: 1.3rem; margin: 0 0 4px 0; }
        .timeline-meta { color: var(--jade-soft); font-size: 0.88rem; margin-bottom: 14px; }
        .timeline-item ul { margin: 0; padding-left: 20px; color: var(--ink-dim); font-size: 0.95rem; line-height: 1.8; }

        .edu-card, .achieve-card { border-radius: 24px; padding: 30px; }
        .achieve-list { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .achieve-list li { display: flex; gap: 12px; color: var(--ink-dim); font-size: 0.94rem; line-height: 1.6; }
        .achieve-list svg { flex-shrink: 0; margin-top: 3px; color: var(--gold-soft); }

        /* ---------- contact ---------- */
        .contact-panel {
          border-radius: 36px;
          padding: 64px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .contact-title {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          line-height: 1.08;
          margin: 0 auto 20px;
          max-width: 640px;
        }
        .contact-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; margin: 36px 0; }
        .social-row { display: flex; justify-content: center; gap: 14px; }
        .social-btn {
          width: 46px; height: 46px;
          border-radius: 999px;
          display: inline-flex; align-items: center; justify-content: center;
          border: 1px solid var(--border);
          color: var(--ink-dim);
          transition: all 0.3s ease;
        }
        .social-btn:hover { color: #12140f; background: var(--gold-soft); border-color: transparent; transform: translateY(-3px); }

        .contact-form {
          text-align: left;
          max-width: 640px;
          margin: 8px auto 40px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-bottom: 18px;
        }
        @media (min-width: 640px) {
          .form-row { grid-template-columns: 1fr 1fr; }
        }
        .form-field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; }
        .form-row .form-field { margin-bottom: 0; }
        .form-field label {
          font-size: 0.74rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-faint);
        }
        .form-field input,
        .form-field textarea {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          color: var(--ink);
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 14px 16px;
          outline: none;
          resize: vertical;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .form-field input::placeholder,
        .form-field textarea::placeholder { color: var(--ink-faint); }
        .form-field input:focus,
        .form-field textarea:focus {
          border-color: var(--gold);
          background: rgba(255,255,255,0.05);
        }
        .form-submit {
          width: 100%;
          justify-content: center;
          padding: 15px 26px;
          margin-top: 4px;
        }
        .form-caption {
          text-align: center;
          color: var(--ink-faint);
          font-size: 0.82rem;
          margin: 14px 0 0;
        }

        .back-to-top {
          position: fixed;
          right: 22px;
          bottom: 22px;
          width: 48px;
          height: 48px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(16,18,16,0.7);
          border: 1px solid var(--border);
          backdrop-filter: blur(16px);
          color: var(--ink);
          cursor: pointer;
          opacity: 0;
          transform: translateY(14px) scale(0.9);
          pointer-events: none;
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(.16,1,.3,1), border-color 0.3s ease, background 0.3s ease;
          z-index: 55;
        }
        .back-to-top.visible { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
        .back-to-top:hover { border-color: var(--gold); background: rgba(201,162,78,0.14); transform: translateY(-3px) scale(1.03); }

        footer {
          padding: 36px 0 48px;
          text-align: center;
          color: var(--ink-faint);
          font-size: 0.82rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .blob, .photo-wrap, .photo-ring { animation: none !important; }
          .reveal { transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div className="bg-scene">
        <div className="blob blob--gold" />
        <div className="blob blob--jade" />
        <div className="blob blob--coral" />
      </div>
      <div className="grain" />

      {/* ---------------- nav ---------------- */}
      <div className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-pill">
          <span className="nav-logo">Om Waghmare</span>
          <nav className="nav-links">
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => handleNavClick(l.id)}>
                {l.label}
              </button>
            ))}
          </nav>
          <div className="nav-cta">
            <LiquidButton href={RESUME_SRC} download="Om_Waghmare_Resume.pdf" variant="ghost">
              Resume <Download size={15} />
            </LiquidButton>
          </div>
          <button className="nav-burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => handleNavClick(l.id)}>
                {l.label}
              </button>
            ))}
            <LiquidButton href={RESUME_SRC} download="Om_Waghmare_Resume.pdf" variant="solid">
              Download Resume <Download size={15} />
            </LiquidButton>
          </div>
        )}
      </div>

      <div className="content-layer">
        {/* ---------------- hero ---------------- */}
        <section className="hero section-inner">
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                Hi I am Om —<br />
                <em>Full Stack</em> Developer
              </h1>
              <p className="hero-bio">
                I build fast, thoughtful full-stack products — from REST APIs and
                authentication to AI-powered features — using React, Node.js and
                modern tooling.
              </p>
              <div className="hero-actions">
                <LiquidButton onClick={() => handleNavClick("work")} variant="solid">
                  View my work <ArrowUpRight size={16} />
                </LiquidButton>
                <LiquidButton href={RESUME_SRC} download="Om_Waghmare_Resume.pdf" variant="ghost">
                  Download résumé <Download size={16} />
                </LiquidButton>
              </div>
              <div className="hero-meta">
                <span>
                  <MapPin size={14} /> Pune, India
                </span>
                <span>
                  <Mail size={14} /> {SOCIALS.email}
                </span>
              </div>
            </div>

            <div className="photo-stage">
              <div className="photo-glow" />
              <img src={PHOTO_SRC} alt="Om Waghmare" className="cutout-photo" />
            </div>
          </div>
        </section>

        {/* ---------------- about ---------------- */}
        <section id="about" className="section">
          <div className="section-inner">
            <Reveal>
              <SectionLabel>a little about me</SectionLabel>
            </Reveal>
            <div className="about-grid">
              <Reveal>
                <h2 className="section-title">
                  I care about clean code, considered design, and products that
                  actually work.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="section-desc">
                  I'm a full-stack developer with hands-on experience building
                  responsive, production-style web applications using React,
                  Node.js, Express and MongoDB. I enjoy working across the whole
                  stack — designing REST APIs, wiring up authentication, and
                  integrating third-party and AI APIs like Google Gemini to make
                  applications genuinely useful. Outside of shipping projects, I've
                  spent time in data analysis, solved 100+ DSA problems, and picked
                  up a habit of finishing what I start.
                </p>
                <div className="stat-row">
                  <Tilt3D strength={12} className="stat-card glass">
                    <div className="stat-number">7+</div>
                    <div className="stat-label">Shipped projects</div>
                  </Tilt3D>
                  <Tilt3D strength={12} className="stat-card glass">
                    <div className="stat-number">100+</div>
                    <div className="stat-label">DSA problems solved</div>
                  </Tilt3D>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- skills ---------------- */}
        <section id="skills" className="section">
          <div className="section-inner">
            <Reveal>
              <SectionLabel>what I work with</SectionLabel>
              <h2 className="section-title">A stack built for shipping full products end to end.</h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="skills-panel glass">
                <div className="skills-grid">
                  {SKILL_GROUPS.map((group) => (
                    <div key={group.title}>
                      <div className="skill-group-title">{group.title}</div>
                      <div className="pill-row">
                        {group.items.map((item) => (
                          <span className="pill" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- projects ---------------- */}
        <section id="work" className="section">
          <div className="section-inner">
            <Reveal>
              <SectionLabel>selected work</SectionLabel>
              <h2 className="section-title">Seven projects, from AI tooling to full-stack platforms.</h2>
            </Reveal>
            <div className="project-grid">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.name} delay={(i % 2) * 100} className={p.featured ? "featured" : ""}>
                  <TiltCard className={`glass ${p.featured ? "featured" : ""}`}>
                    <h3 className="project-name">
                      {p.name}
                      <a
                        className="project-link-icon"
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${p.name} on GitHub`}
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </h3>
                    <div className="project-tagline">{p.tagline}</div>
                    <p className="project-desc">{p.description}</p>
                    <div className="tech-row">
                      {p.tech.map((t) => (
                        <span className="tech-chip" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- experience ---------------- */}
        <section id="experience" className="section">
          <div className="section-inner">
            <Reveal>
              <SectionLabel>where I've worked</SectionLabel>
              <h2 className="section-title">Experience &amp; education</h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <h3 className="timeline-role">{EXPERIENCE.role}</h3>
                  <div className="timeline-meta">
                    {EXPERIENCE.org} · {EXPERIENCE.location} · {EXPERIENCE.period}
                  </div>
                  <ul>
                    {EXPERIENCE.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <div className="about-grid" style={{ marginTop: 48 }}>
              <Reveal>
                <Tilt3D strength={6} className="edu-card glass">
                  <div className="skill-group-title" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <GraduationCap size={18} color="var(--gold-soft)" /> Education
                  </div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.15rem", marginBottom: 6 }}>
                    {EDUCATION.degree}
                  </div>
                  <div style={{ color: "var(--ink-dim)", fontSize: "0.92rem" }}>
                    {EDUCATION.school} · {EDUCATION.year}
                  </div>
                </Tilt3D>
              </Reveal>
              <Reveal delay={100}>
                <Tilt3D strength={6} className="achieve-card glass">
                  <div className="skill-group-title" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Award size={18} color="var(--gold-soft)" /> Achievements
                  </div>
                  <ul className="achieve-list">
                    {ACHIEVEMENTS.map((a) => (
                      <li key={a}>
                        <Award size={14} />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </Tilt3D>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- contact ---------------- */}
        <section id="contact" className="section">
          <div className="section-inner">
            <Reveal>
              <div className="contact-panel glass">
                <SectionLabel>get in touch</SectionLabel>
                <h2 className="contact-title">Let's build something worth shipping.</h2>
                <p className="section-desc" style={{ margin: "0 auto" }}>
                  I'm open to full-time roles, freelance work, and interesting
                  collaborations. The fastest way to reach me is email.
                </p>
                <div className="contact-actions">
                  <LiquidButton href={`mailto:${SOCIALS.email}`} variant="solid">
                    Say hello <Mail size={16} />
                  </LiquidButton>
                  <LiquidButton href={RESUME_SRC} download="Om_Waghmare_Resume.pdf" variant="ghost">
                    Download résumé <Download size={16} />
                  </LiquidButton>
                </div>

                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="cf-name">Name</label>
                      <input
                        id="cf-name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="cf-email">Email</label>
                      <input
                        id="cf-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-message">Message</label>
                    <textarea
                      id="cf-message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity…"
                      value={form.message}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <button type="submit" className="liquid-btn liquid-btn--solid form-submit">
                    <span className="liquid-btn__label">
                      Get In Touch <Send size={16} />
                    </span>
                  </button>
                  <p className="form-caption">This opens your email app — no data is stored.</p>
                </form>

                <div className="social-row">
                  <a className="social-btn" href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GithubIcon size={18} />
                  </a>
                  <a className="social-btn" href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LinkedinIcon size={18} />
                  </a>
                  <a className="social-btn" href={`mailto:${SOCIALS.email}`} aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <footer>© {new Date().getFullYear()} Om Waghmare. Built with React &amp; a lot of coffee.</footer>
      </div>

      <button
        className={`back-to-top ${showTopBtn ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
