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

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-[var(--border)] bg-[rgba(15,23,42,0.78)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-space-mono)] text-lg font-bold text-[var(--accent)] tracking-wide flex items-center gap-1"
        >
          <span>&lt;</span>
          <span>SSB</span>
          <span>/&gt;</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 list-none h-full">
          {links.map((link) => (
            <li key={link.href} className="h-full flex items-center">
              <Link
                href={link.href}
                className={`group relative px-4 py-2 text-[15px] transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[var(--accent)] font-semibold"
                    : "text-[var(--text2)] hover:text-[var(--text)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-[var(--accent)] transition-transform duration-300 ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden h-10 w-10 rounded-full border border-[var(--accent)] bg-[var(--accent)] text-white text-xl leading-none"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "x" : "="}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[rgba(15,23,42,0.96)] backdrop-blur-xl">
          <ul className="flex flex-col list-none px-6 py-4 gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-[family-name:var(--font-space-mono)] text-xs tracking-widest transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-[var(--accent)]"
                      : "text-[var(--text2)] hover:text-[var(--accent)]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
