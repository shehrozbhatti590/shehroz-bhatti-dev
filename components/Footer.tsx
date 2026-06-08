import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(15,23,42,0.72)] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="font-[family-name:var(--font-space-mono)] text-xl font-bold text-[var(--accent)] inline-flex items-center gap-1 mb-2"
          >
            <span>&lt;</span>
            <span>Shehroz Bhatti</span>
            <span>/&gt;</span>
          </Link>
          <p className="text-sm text-[var(--text2)]">
            Frontend Developer specializing in React.js, Next.js & TypeScript
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="mailto:shehrozbhatti590@gmail.com"
            aria-label="Email"
            className="h-10 w-10 rounded-full border border-[var(--border2)] bg-[var(--chip-bg)] text-[var(--chip-text)] flex items-center justify-center hover:border-[var(--accent)] transition-colors"
          >
            @
          </a>
          <a
            href="https://www.linkedin.com/in/shehroz-bhatti-2729121b5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-10 w-10 rounded-full border border-[var(--border2)] bg-[var(--chip-bg)] text-[var(--chip-text)] flex items-center justify-center hover:border-[var(--accent)] transition-colors"
          >
            in
          </a>
          <Link
            href="/"
            aria-label="Back to top"
            className="h-10 w-10 rounded-full border border-[var(--border2)] bg-[var(--chip-bg)] text-[var(--chip-text)] flex items-center justify-center hover:border-[var(--accent)] transition-colors"
          >
            ^
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-[var(--border)] py-6 text-center">
        <p className="text-sm text-[var(--text3)]">
          © 2026 Shehroz Saeed Bhatti. Built with Next.js, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
