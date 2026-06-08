"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-[var(--border)] bg-[rgba(10,10,15,0.85)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-space-mono)] text-sm text-[var(--accent)] tracking-wide"
        >
          &lt; <span className="text-[var(--text2)]">SSB</span> /&gt;
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`font-[family-name:var(--font-space-mono)] text-xs tracking-widest transition-colors duration-200 ${
                  pathname === l.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--text2)] hover:text-[var(--accent)]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[var(--text2)] text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg2)]">
          <ul className="flex flex-col list-none px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-[family-name:var(--font-space-mono)] text-xs tracking-widest transition-colors duration-200 ${
                    pathname === l.href
                      ? "text-[var(--accent)]"
                      : "text-[var(--text2)] hover:text-[var(--accent)]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
