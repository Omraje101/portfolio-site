# Om Waghmare — Portfolio

My personal portfolio site: who I am, what I build, and how to reach me.

**🔗 Live:** [portfolio-site-om-2885.vercel.app](https://portfolio-site-om-2885.vercel.app)

## Sections

- **About:** a short intro and my resume (downloadable PDF)
- **Skills:** languages, frontend, backend and databases, APIs and auth, tools
- **Work:** featured full-stack projects (README AI, CampusCompass) plus frontend projects, each linked to its repo
- **Experience:** my Data Science internship at Cognifyz Technologies, plus education and achievements
- **Contact:** a contact form that opens a pre-filled email, and social links

## Tech stack

| Area | Tools |
|---|---|
| UI | React 19 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) and custom CSS |
| Icons | lucide-react |
| Build | Vite |
| Linting | ESLint |
| Hosting | Vercel |

## Run locally

```bash
git clone https://github.com/Omraje101/portfolio-site.git
cd portfolio-site
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # production build into dist/
npm run preview    # preview the production build
npm run lint       # run ESLint
```

## Project structure

```
portfolio-site/
├── public/
│   ├── photo.png        # profile photo
│   └── resume.pdf       # downloadable resume
├── src/
│   ├── Portfolio.jsx    # all sections and content (projects, skills and experience live in data arrays at the top)
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js
```

To update the content, edit the `SKILL_GROUPS`, `PROJECTS`, `EXPERIENCE` and `ACHIEVEMENTS` arrays at the top of `src/Portfolio.jsx`.

## Contact

- LinkedIn: [om-waghmare](https://www.linkedin.com/in/om-waghmare-633ab1323/)
- GitHub: [@Omraje101](https://github.com/Omraje101)
