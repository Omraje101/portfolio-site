/**
 * All site content lives here. Edit this file to update the portfolio.
 *
 * Screenshots: drop images into /public/screenshots and set `src` on the
 * matching entry (e.g. "/screenshots/campus-compass-search.webp"). While `src`
 * is null, a clearly marked placeholder slot is rendered instead.
 */

export type Screenshot = {
  src: string | null;
  alt: string;
  /** What to capture, shown inside the placeholder slot. */
  hint: string;
  width: number;
  height: number;
};

export type StackLayer = {
  layer: string;
  tech: string[];
};

export type FeatureGroup = {
  id: string;
  title: string;
  points: string[];
};

export type FeaturedProject = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  stack: StackLayer[];
  features: FeatureGroup[];
  live: string;
  code: string;
  hosting?: string;
  screenshots: Screenshot[];
};

export type SmallProject = {
  slug: string;
  title: string;
  summary: string;
  highlight?: string;
  tags: string[];
  live?: string;
  code: string;
  screenshot: Screenshot;
};

export const site = {
  name: "Om Waghmare",
  role: "Full Stack Developer",
  focus: "MERN & Next.js",
  location: "Pune, India",
  // Production URL on Vercel. Change this if you connect a custom domain.
  url: "https://portfolio-site-om-2885.vercel.app",
  email: "omrajewaghmare6969@gmail.com",
  resume: "/Om_Waghmare_Resume.pdf",
  photo: "/photo.png",
  socials: {
    github: "https://github.com/Omraje101",
    linkedin: "https://www.linkedin.com/in/om-waghmare-633ab1323",
  },
  description:
    "Om Waghmare is a full stack developer in Pune, India, building MERN and Next.js apps end to end: REST APIs, auth and databases through to polished, responsive interfaces.",
};

export const hero = {
  // U+2011 is a non-breaking hyphen, so "full-stack" never splits across lines.
  headline: "I build full‑stack web apps, end to end.",
  subtext:
    "I’m Om Waghmare, a MERN and Next.js developer in Pune, taking apps from REST APIs and auth to responsive interfaces.",
  /** The layers drawn in the hero cross-section, top (what users see) to bottom. */
  stack: [
    { layer: "Interface", tech: ["React", "Next.js", "Tailwind CSS"] },
    { layer: "State & validation", tech: ["Zustand", "Zod", "TypeScript"] },
    { layer: "API & auth", tech: ["Node.js", "Express", "REST", "JWT"] },
    { layer: "Data", tech: ["PostgreSQL", "Prisma", "MongoDB"] },
  ] satisfies StackLayer[],
};

export const about = {
  paragraphs: [
    "I build and ship full-stack web apps end to end: REST APIs, auth and databases through to polished, responsive UIs.",
    "Most of my work is in the MERN stack and in Next.js with TypeScript. I like owning a feature all the way through: the data model, the API, and the interface people use.",
  ],
  availability:
    "Open to full stack and frontend developer roles, and to freelance work.",
  education: {
    degree: "B.Tech in Information Technology",
    school: "Pimpri Chinchwad College of Engineering (PCCOE), Pune",
    years: "2022-2026",
  },
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "campus-compass",
    title: "CampusCompass",
    kind: "College discovery and decision-making platform",
    summary:
      "Helps students find, compare and shortlist colleges, then estimates their admission chances from exam rank and cutoff data.",
    stack: [
      { layer: "Interface", tech: ["Next.js", "React", "Tailwind"] },
      { layer: "State & validation", tech: ["TypeScript", "Zustand", "Zod"] },
      { layer: "API & auth", tech: ["Next.js API", "JWT", "bcrypt"] },
      { layer: "Data", tech: ["PostgreSQL", "Prisma"] },
      { layer: "Quality", tech: ["Vitest"] },
    ],
    features: [
      {
        id: "discovery",
        title: "Discovery",
        points: [
          "Search, filter, sort and paginate colleges",
          "Detailed profiles with course and placement data",
          "Side-by-side comparison of colleges",
        ],
      },
      {
        id: "predictor",
        title: "Admission predictor",
        points: [
          "Deterministic predictor that labels each college SAFE, MODERATE or REACH",
          "Built from the student's exam rank and cutoff data",
        ],
      },
      {
        id: "accounts",
        title: "Accounts and community",
        points: [
          "JWT auth with bcrypt password hashing",
          "Saved colleges, reviews and Q&A",
        ],
      },
      {
        id: "quality",
        title: "Quality",
        points: ["42 unit tests written with Vitest"],
      },
    ],
    live: "https://campus-compass-azure.vercel.app",
    code: "https://github.com/Omraje101/campus-compass",
    screenshots: [
      {
        src: "/screenshots/campus-compass-search.webp",
        alt: "CampusCompass college search filtered to Maharashtra, with state, type and rating filters beside college cards",
        hint: "College search page with a few filters applied and results visible",
        width: 1600,
        height: 876,
      },
      {
        src: "/screenshots/campus-compass-compare.webp",
        alt: "CampusCompass comparing IIT Bombay, VJTI Mumbai and a third college side by side",
        hint: "Comparison view with two or three colleges side by side",
        width: 1600,
        height: 875,
      },
      {
        src: "/screenshots/campus-compass-predictor.webp",
        alt: "CampusCompass admission predictor listing SAFE matches for a JEE Main rank",
        hint: "Predictor results showing SAFE / MODERATE / REACH labels",
        width: 1600,
        height: 874,
      },
    ],
  },
  {
    slug: "readme-ai",
    title: "README AI",
    kind: "AI-powered GitHub README generator",
    summary:
      "Paste a repository URL and get a professional README, written from the repo's actual structure, dependencies and config.",
    stack: [
      { layer: "Interface", tech: ["React", "Vite", "Tailwind"] },
      { layer: "API & auth", tech: ["Node.js", "Express", "JWT"] },
      { layer: "Integrations", tech: ["GitHub REST API", "Gemini API"] },
      { layer: "Data", tech: ["MongoDB", "Mongoose"] },
    ],
    features: [
      {
        id: "analysis",
        title: "Repository analysis",
        points: [
          "Reads a repo's structure, dependencies and config through the GitHub REST API",
        ],
      },
      {
        id: "generation",
        title: "Generation",
        points: ["Google Gemini writes a professional README from that analysis"],
      },
      {
        id: "editor",
        title: "Editing",
        points: [
          "Live Markdown editor to refine the result",
          "Save READMEs to your account and download them",
          "JWT authentication",
        ],
      },
    ],
    live: "https://readme-ai-seven.vercel.app",
    code: "https://github.com/Omraje101/readme_ai",
    screenshots: [
      {
        src: "/screenshots/readme-ai-home.webp",
        alt: "README AI home page with a GitHub repository URL entered",
        hint: "Home screen with a GitHub repo URL pasted in",
        width: 1600,
        height: 873,
      },
      {
        src: "/screenshots/readme-ai-editor.webp",
        alt: "README AI Markdown editor beside a live preview of a generated README",
        hint: "Editor with a generated README, preview visible",
        width: 1600,
        height: 871,
      },
    ],
  },
  {
    slug: "ai-orbit-tools",
    title: "AI Orbit Tools",
    kind: "AI tools discovery platform",
    summary:
      "A searchable directory of AI tools with filters, detail pages, favorites and reviews.",
    stack: [
      { layer: "Interface", tech: ["React", "Vite", "Tailwind", "React Router"] },
      { layer: "API", tech: ["Node.js", "Express"] },
      { layer: "Data", tech: ["MongoDB Atlas", "Mongoose"] },
      { layer: "Delivery", tech: ["Vercel", "Render"] },
    ],
    features: [
      {
        id: "browse",
        title: "Browsing",
        points: [
          "Search with category, pricing and rating filters",
          "Sorting, pagination, and grid or list views",
        ],
      },
      {
        id: "detail",
        title: "Tool pages",
        points: ["Detail pages with related tools", "Favorites and reviews"],
      },
      {
        id: "deploy",
        title: "Deployment",
        points: ["Frontend on Vercel, backend on Render"],
      },
    ],
    live: "https://ai-orbit-tools-murex.vercel.app",
    code: "https://github.com/Omraje101/ai-orbit-tools",
    screenshots: [
      {
        src: "/screenshots/ai-orbit-tools-directory.webp",
        alt: "AI Orbit Tools directory with pricing and rating filters and a grid of tools",
        hint: "Tools grid with the filter panel open",
        width: 1600,
        height: 877,
      },
      {
        src: "/screenshots/ai-orbit-tools-detail.webp",
        alt: "AI Orbit Tools detail page for one tool, with features, tool information and pricing",
        hint: "A tool detail page showing reviews and related tools",
        width: 1600,
        height: 877,
      },
    ],
  },
];

export const moreProjects: SmallProject[] = [
  {
    slug: "dinesync-elite",
    title: "DineSync Elite",
    summary:
      "Restaurant discovery and booking site, built with only five AI prompts and no manual code.",
    highlight: "Won the 5X AI Prompt Battle",
    tags: ["AI-assisted build", "Booking flow"],
    code: "https://github.com/Omraje101/5x-Battle-DineSync-ELite",
    screenshot: {
      src: "/screenshots/dinesync-elite.webp",
      alt: "DineSync Elite trending restaurants, each with rating, wait time and free seats",
      hint: "Restaurant listing or booking page",
      width: 1600,
      height: 868,
    },
  },
  {
    slug: "momentum",
    title: "Momentum",
    summary:
      "To-do app with priorities, categories, drag-and-drop ordering and dark mode.",
    tags: ["Drag and drop", "Dark mode"],
    live: "https://momentum-webapp-101.netlify.app",
    code: "https://github.com/Omraje101/Momentum-TodoList-webApp",
    screenshot: {
      src: "/screenshots/momentum.webp",
      alt: "Momentum task list with priority and category tags",
      hint: "Task list with a few prioritised, categorised tasks",
      width: 1600,
      height: 877,
    },
  },
  {
    slug: "async-search",
    title: "Async Search Control Center",
    summary:
      "Multi-source search with Parallel, Sequential and Fastest modes, debouncing and AbortController cancellation.",
    tags: ["Async JS", "AbortController"],
    code: "https://github.com/Omraje101/Async-Search-Control-Center",
    screenshot: {
      src: "/screenshots/async-search.webp",
      alt: "Async Search Control Center with Parallel, Sequential and Fastest search modes",
      hint: "Search results with the mode switcher visible",
      width: 1600,
      height: 874,
    },
  },
  {
    slug: "planngo",
    title: "PlanNGo",
    summary: "Travel planner with packages and itinerary generation.",
    tags: ["Itineraries", "Packages"],
    code: "https://github.com/Omraje101/PlanNGo-Travel-Planner",
    screenshot: {
      src: "/screenshots/planngo.webp",
      alt: "PlanNGo home page with destination search and featured travel packages",
      hint: "A generated itinerary or the packages page",
      width: 1600,
      height: 781,
    },
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    company: "Cognifyz Technologies",
    mode: "Remote",
    period: "June-July 2025",
    points: [
      "Cleaned and analyzed a restaurant dataset of 9,500+ records",
      "Ran exploratory and geospatial analysis of how pricing and online delivery affect ratings",
      "Built regression models (Linear, Decision Tree, Random Forest) and visualized the results",
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "React Router", "Zustand", "Axios"],
  },
  {
    group: "Backend & data",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "PostgreSQL", "Prisma"],
  },
  {
    group: "APIs, auth & testing",
    items: ["REST APIs", "JWT", "bcrypt", "Zod", "Vitest", "GitHub REST API", "Gemini API"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Vite", "Figma", "Vercel", "Render"],
  },
];

export const achievements = {
  wins: [
    { title: "Winner", event: "5X AI Prompt Battle", by: "AccioJob" },
    { title: "Runner-up", event: "Spectrum Tech Event", by: "PCCOE" },
  ],
  practice: [
    "100+ DSA problems solved on LeetCode",
    "5-star Python badge on HackerRank",
  ],
  certifications: [
    { name: "Meta Front-End Development", issuer: "Coursera" },
    { name: "Programming with Java", issuer: "Infosys Springboard" },
    { name: "DBMS", issuer: "Scaler" },
  ],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
