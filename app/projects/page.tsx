const projects = [
  {
    icon: "🧠",
    name: "PeoplescreedAI",
    desc: "Revolutionize workforce management with an integrated HR platform covering recruitment, onboarding, performance, SSO admin, and analytics.",
    stack: ["Next.js", "TypeScript", "RTK Query", "MUI"],
  },
  {
    icon: "📚",
    name: "Care Library",
    desc: "Platform to promote growth, innovation, and learning for organizations and individuals — a comprehensive knowledge-sharing solution.",
    stack: ["React.js", "TypeScript", "RTK Query", "Ant Design"],
  },
  {
    icon: "🏠",
    name: "Foster App",
    desc: "Innovative platform for placing children in safe, nurturing homes, emphasizing family care and streamlined case management workflows.",
    stack: ["React.js", "Next.js", "TypeScript", "MUI"],
  },
  {
    icon: "⏱️",
    name: "ClockLog",
    desc: "Time tracking and attendance management with real-time reporting — streamlines workforce productivity and scheduling for enterprises.",
    stack: ["React.js", "Next.js", "TypeScript", "RTK Query", "MUI"],
  },
  {
    icon: "💬",
    name: "BuzzHR",
    desc: "Boost employee engagement with real-time communication, polls, and feedback features — strengthening team culture and collaboration.",
    stack: ["React.js", "Next.js", "TypeScript", "RTK Query", "MUI"],
  },
  {
    icon: "🍽️",
    name: "ShareMyDine",
    desc: "Social dining platform connecting kitchen owners with guests for authentic, home-style dining experiences — community-driven food culture.",
    stack: ["React.js", "TypeScript", "MUI"],
  },
  {
    icon: "💰",
    name: "RNDTaxClaims",
    desc: "Tax relief guidance platform for SMEs — helping businesses lower corporate tax liability or receive R&D tax credits with guided workflows.",
    stack: ["React.js", "Next.js", "TypeScript", "RTK Query", "MUI"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <p className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--accent)] tracking-[0.18em] mb-3">
        // PROJECTS
      </p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
        Featured Projects
      </h2>
      <p className="text-[var(--text2)] max-w-xl mb-12 leading-relaxed">
        A selection of scalable, high-performance web applications built with React, Next.js,
        TypeScript, and modern tooling — designed for real-world impact.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-7 hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-11 h-11 rounded-lg bg-[rgba(124,111,255,0.12)] flex items-center justify-center text-xl mb-5">
              {p.icon}
            </div>
            <p className="font-semibold text-lg mb-2">{p.name}</p>
            <p className="text-sm text-[var(--text2)] leading-relaxed mb-5">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-[family-name:var(--font-space-mono)] text-xs px-2.5 py-1 rounded bg-[rgba(124,111,255,0.1)] text-[var(--accent)] border border-[rgba(124,111,255,0.2)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
