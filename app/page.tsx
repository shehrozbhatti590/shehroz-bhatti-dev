import Link from "next/link";

const tags = [
  "React.js", "Next.js", "TypeScript", "Redux Toolkit",
  "Tailwind CSS", "Material UI", "RTK Query",
];

export default function HomePage() {
  return (
    <section className="animate-page min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <p className="animate-kicker font-[family-name:var(--font-space-mono)] text-sm text-[var(--accent2)] tracking-[0.15em] mb-5">
        {"// Hi, I'm"}
      </p>
      <h1 className="animate-title hero-name text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-4">
        Shehroz Saeed<br />
        <span className="text-[var(--text2)]">Bhatti</span>
      </h1>
      <p className="animate-copy text-lg text-[var(--text2)] max-w-xl mb-8 leading-relaxed">
        Front-End Software Engineer specializing in React, Next.js &amp; TypeScript.
        4+ years building scalable, performant, and user-centric web applications
        with a strong focus on clean architecture and UI/UX excellence.
      </p>
      <div className="animate-copy flex flex-wrap gap-2 mb-10">
        {tags.map((t, index) => (
          <span
            key={t}
            className="chip font-[family-name:var(--font-space-mono)] tracking-wide"
            style={{ animationDelay: `${index * 55}ms` }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="animate-actions flex gap-4 flex-wrap">
        <Link
          href="/projects"
          className="magnetic-button font-[family-name:var(--font-space-mono)] text-xs px-8 py-3.5 rounded bg-[var(--accent)] text-white hover:bg-[#9585ff] transition-colors tracking-wide"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="magnetic-button font-[family-name:var(--font-space-mono)] text-xs px-8 py-3.5 rounded border border-[var(--border2)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors tracking-wide"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
