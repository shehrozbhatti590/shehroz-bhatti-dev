import Link from "next/link";
import Image from "next/image";
import { projects } from "./data";

export default function ProjectsPage() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="font-[family-name:var(--font-space-mono)] text-sm text-[var(--text2)] uppercase tracking-[0.18em] mb-3">
          Portfolio
        </p>
        <h1 className="hero-name text-4xl md:text-5xl font-bold tracking-tight mb-5">
          Featured Projects
        </h1>
        <p className="text-lg text-[var(--text2)] leading-relaxed">
          Scalable, high-performance web applications built with React, Next.js, TypeScript,
          RTK Query, and modern UI systems for real business workflows.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="project-card group block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-2xl"
          >
            <div className="relative aspect-video bg-[var(--bg2)] overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h2 className="text-xl md:text-3xl font-semibold tracking-tight mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-[var(--text2)] leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-[var(--border2)] to-transparent" />
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 7).map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                <span>View Case Study</span>
                <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-2">
        {[1, 2].map((page) => (
          <span
            key={page}
            className={`h-10 min-w-10 rounded-lg border px-4 inline-flex items-center justify-center text-sm font-semibold ${
              page === 1
                ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                : "border-[var(--border2)] text-[var(--text2)]"
            }`}
          >
            {page}
          </span>
        ))}
      </div>
    </section>
  );
}
