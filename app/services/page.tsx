import Link from "next/link";

const services = [
  {
    icon: "⚡",
    name: "Custom Web Development",
    desc: "Production-ready web applications built with scalable architecture, reusable components, and clean, maintainable code.",
    chips: ["React.js", "Next.js", "TypeScript", "SSR / SSG", "Component Architecture", "Clean Code"],
  },
  {
    icon: "🎨",
    name: "Responsive UI & Design Systems",
    desc: "Consistent, accessible, and pixel-perfect interfaces built with design-system driven components across all devices.",
    chips: ["Tailwind CSS", "MUI", "Ant Design", "Responsive UI", "WCAG / A11y", "Design Systems"],
  },
  {
    icon: "🔗",
    name: "API Integration & State Management",
    desc: "Reliable REST API integration with predictable state management for scalable, smooth, and maintainable data flows.",
    chips: ["REST APIs", "Redux Toolkit", "RTK Query", "React Query", "Authentication (JWT)", "Error Handling"],
  },
  {
    icon: "🚀",
    name: "Performance & SEO Optimization",
    desc: "Improve Core Web Vitals, load speed, and SEO using modern rendering strategies and performance best practices.",
    chips: ["Core Web Vitals", "Code Splitting", "Lazy Loading", "SSR Optimization", "SEO Best Practices", "Lighthouse"],
  },
  {
    icon: "📊",
    name: "SaaS Dashboards & Admin Panels",
    desc: "Data-driven SaaS dashboards with charts, tables, filters, and role-based workflows designed for real enterprise products.",
    chips: ["Role-Based UI", "Admin Workflows", "Data Tables", "Analytics UI", "ApexCharts", "Filters & Reporting"],
  },
  {
    icon: "🧪",
    name: "Testing & Code Quality",
    desc: "Maintainable codebases with testing, best practices, and review-friendly structure to reduce bugs and scale confidently.",
    chips: ["Jest", "React Testing Library", "Unit & Integration Tests", "Code Reviews", "Best Practices", "Git & GitHub"],
  },
];

export default function ServicesPage() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <p className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--accent)] tracking-[0.18em] mb-3">
        {"// SERVICES"}
      </p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
        Frontend Development for Modern Web Products
      </h2>
      <p className="text-[var(--text2)] max-w-xl mb-12 leading-relaxed">
        I help businesses build fast, scalable, and user-friendly web applications using React,
        Next.js, and TypeScript — with clean UI, smooth performance, and reliable API integration.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div
            key={s.name}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-7 hover:border-[var(--accent2)] transition-colors duration-200"
          >
            <div className="inline-block text-2xl mb-4 p-2.5 bg-[rgba(78,205,196,0.1)] rounded-lg">
              {s.icon}
            </div>
            <p className="font-semibold text-lg mb-2">{s.name}</p>
            <p className="text-sm text-[var(--text2)] leading-relaxed mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.chips.map((c) => (
                <span
                  key={c}
                  className="font-[family-name:var(--font-space-mono)] text-xs px-2 py-1 rounded bg-[rgba(78,205,196,0.08)] text-[var(--accent2)] border border-[rgba(78,205,196,0.15)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-[var(--card)] border border-[var(--border)] rounded-xl p-10 text-center">
        <h3 className="text-2xl font-semibold mb-3">Have a project in mind?</h3>
        <p className="text-[var(--text2)] mb-6">
          Let&apos;s discuss your requirements and build something impactful together.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="font-[family-name:var(--font-space-mono)] text-xs px-8 py-3.5 rounded bg-[var(--accent)] text-white hover:bg-[#9585ff] transition-colors tracking-wide"
          >
            Let&apos;s Work Together
          </Link>
          <Link
            href="/projects"
            className="font-[family-name:var(--font-space-mono)] text-xs px-8 py-3.5 rounded border border-[var(--border2)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors tracking-wide"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
