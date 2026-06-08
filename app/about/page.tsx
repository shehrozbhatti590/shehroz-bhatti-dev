const stats = [
  { num: "4+", label: "Years of Experience" },
  { num: "7+", label: "Projects Delivered" },
  { num: "20%", label: "Faster Load Times" },
  { num: "30%", label: "Bug Reduction" },
];

export default function AboutPage() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <p className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--accent)] tracking-[0.18em] mb-3">
        // ABOUT
      </p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-5 text-[var(--text2)] leading-relaxed">
          <p>
            Highly skilled React.js Developer with 4 years of hands-on experience in building
            scalable, performant, and user-centric web applications. Passionate about clean
            architecture, code reusability, and UI/UX optimization.
          </p>
          <p>
            Experienced in REST API integrations, state management, and delivering responsive,
            cross-browser interfaces for remote and enterprise-level projects. I thrive in Agile
            teams and take pride in improving performance metrics and shipping quality code.
          </p>
          <p>
            BSc in Software Engineering from International Islamic University, Islamabad (2016–2020),
            with a focus on web development, software design patterns, and database systems.
            Final-year project on modern web application architecture using React.js and REST APIs.
          </p>
          <div className="pt-4 space-y-2">
            <p className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--accent2)] tracking-wider">CERTIFICATIONS</p>
            <ul className="space-y-1 text-sm">
              <li>▸ Modern Front-End Development — Udemy</li>
              <li>▸ JavaScript – The Complete Guide — Academind (Maximilian Schwarzmüller)</li>
              <li>▸ React with Redux & Next.js — Academind (Maximilian Schwarzmüller)</li>
              <li>▸ HTML5 & CSS3 Complete Course — Code with Harry</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6"
            >
              <span className="font-[family-name:var(--font-space-mono)] text-3xl font-bold text-[var(--accent)] block mb-1">
                {s.num}
              </span>
              <span className="text-sm text-[var(--text2)]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
