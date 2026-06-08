import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--text3)]">
          © 2026 Shehroz Saeed Bhatti. Built with Next.js & TypeScript.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:shehrozbhatti590@gmail.com"
            className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--text3)] hover:text-[var(--accent)] transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/shehroz-bhatti-2729121b5"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--text3)] hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <Link
            href="/"
            className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--text3)] hover:text-[var(--accent)] transition-colors"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
