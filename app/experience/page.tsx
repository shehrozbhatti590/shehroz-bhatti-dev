const experiences = [
  {
    role: "Front-End Developer",
    company: "Orcalo Holdings — UK-based, Remote / Pakistan",
    period: "04/2022 – Present",
    points: [
      "Developed and maintained responsive front-end interfaces using React.js, Next.js, and TypeScript.",
      "Implemented reusable components and optimized rendering performance using lazy loading and code splitting.",
      "Integrated REST APIs and handled state management with Redux Toolkit & RTK Query.",
      "Collaborated in Agile sprints, improving delivery speed and reducing bugs by 30%.",
      "Enhanced SEO and user experience, contributing to 20% faster load times across applications.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Tecish Sol — Rawalpindi",
    period: "07/2021 – 04/2022",
    points: [
      "Designed and implemented dynamic, mobile-first web interfaces for marketplace products.",
      "Built modular UI components to improve maintainability and scalability.",
      "Implemented authentication flows and ensured cross-browser compatibility.",
      "Collaborated with designers and backend developers to align UI/UX with product goals.",
    ],
  },
];

const skillCategories = [
  {
    cat: "FRONTEND",
    skills: ["React.js", "Next.js", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    cat: "STATE MANAGEMENT",
    skills: ["Redux", "Redux Toolkit", "RTK Query", "React Query", "Context API"],
  },
  {
    cat: "UI FRAMEWORKS",
    skills: ["Tailwind CSS", "Material UI", "Ant Design", "Bootstrap"],
  },
  {
    cat: "API & DATA",
    skills: ["RESTful APIs", "Axios", "JSON", "Auth Flows", "Role-Based Access"],
  },
  {
    cat: "TESTING",
    skills: ["Jest", "React Testing Library", "Lighthouse Audits", "Lazy Loading"],
  },
  {
    cat: "TOOLS & WORKFLOW",
    skills: ["Git", "GitHub", "Jira", "Figma", "Vercel", "Agile/Scrum"],
  },
];

export default function ExperiencePage() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <p className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--accent)] tracking-[0.18em] mb-3">
        // EXPERIENCE
      </p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
        Work Experience
      </h2>
      <p className="text-[var(--text2)] max-w-xl mb-12 leading-relaxed">
        Professional journey building scalable frontend systems across remote and on-site environments.
      </p>

      <div className="space-y-5 mb-20">
        {experiences.map((e) => (
          <div
            key={e.company}
            className="bg-[var(--card)] border border-[var(--border)] border-l-[3px] border-l-[var(--accent)] rounded-r-xl p-8"
          >
            <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
              <span className="font-semibold text-lg">{e.role}</span>
              <span className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--accent2)]">
                {e.period}
              </span>
            </div>
            <p className="text-sm text-[var(--text2)] mb-5">{e.company}</p>
            <ul className="space-y-2">
              {e.points.map((pt, i) => (
                <li
                  key={i}
                  className="text-sm text-[var(--text2)] pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--accent)] before:text-xs before:top-[3px]"
                >
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills */}
      <p className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--accent)] tracking-[0.18em] mb-3">
        // SKILLS
      </p>
      <h3 className="text-3xl font-semibold tracking-tight mb-10">Core Technical Skills</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((sc) => (
          <div
            key={sc.cat}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5"
          >
            <p className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--accent2)] tracking-widest mb-4">
              {sc.cat}
            </p>
            <div className="flex flex-wrap gap-2">
              {sc.skills.map((sk) => (
                <span
                  key={sk}
                  className="text-sm px-3 py-1 rounded border border-[var(--border2)] text-[var(--text2)]"
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
