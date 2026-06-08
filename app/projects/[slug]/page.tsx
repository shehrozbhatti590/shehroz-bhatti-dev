import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "../data";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Shehroz Saeed Bhatti`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] mb-8 hover:text-[var(--accent2)] transition-colors"
      >
        &lt;- Back to Projects
      </Link>

      <header className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-10 items-center mb-14">
        <div>
          <p className="font-[family-name:var(--font-space-mono)] text-sm uppercase tracking-[0.18em] text-[var(--text2)] mb-3">
            Case Study
          </p>
          <h1 className="hero-name text-4xl md:text-6xl font-bold tracking-tight mb-5">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-[var(--text2)] leading-relaxed mb-7">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-lg bg-[var(--accent)] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#8c7cff]"
            >
              Live Project
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-lg border border-[var(--border2)] px-7 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Discuss Similar Work
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] aspect-video">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-contain"
          />
        </div>
      </header>

      <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
        <div className="space-y-6">
          <CaseSection title="Overview">{project.description}</CaseSection>
          <CaseSection title="The Problem">{project.problem}</CaseSection>
          <CaseSection title="Approach & Architecture">{project.approach}</CaseSection>

          <section className="detail-panel">
            <h2 className="text-2xl font-semibold tracking-tight mb-5">Key Features</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li key={feature} className="rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-4 text-sm text-[var(--text2)]">
                  <span className="mr-2 text-[var(--accent)]">-</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <CaseSection title="Impact & Results">{project.impact}</CaseSection>
        </div>

        <aside className="detail-panel lg:sticky lg:top-24">
          <h2 className="text-xl font-semibold mb-5">Technology Stack</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[rgba(124,111,255,0.08)] p-5">
            <h3 className="font-semibold mb-2">Interested in Similar Work?</h3>
            <p className="text-sm text-[var(--text2)] leading-relaxed mb-4">
              Let&apos;s discuss how I can help bring your product idea to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-white"
            >
              Get in Touch
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="detail-panel">
      <h2 className="text-2xl font-semibold tracking-tight mb-3">{title}</h2>
      <p className="text-[var(--text2)] leading-relaxed">{children}</p>
    </section>
  );
}
