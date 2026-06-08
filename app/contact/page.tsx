"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <p className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--accent)] tracking-[0.18em] mb-3">
        // CONTACT
      </p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
        Get in Touch
      </h2>
      <p className="text-[var(--text2)] max-w-xl mb-12 leading-relaxed">
        Have a project in mind? Let&apos;s discuss your requirements and build something impactful together.
      </p>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Let&apos;s Work Together</h3>
          <p className="text-[var(--text2)] leading-relaxed mb-8 text-sm">
            I&apos;m currently open to new opportunities — remote or on-site. Whether it&apos;s a product,
            a startup, or a freelance project, feel free to reach out.
          </p>
          <div className="space-y-4">
            {[
              { icon: "✉️", label: "shehrozbhatti590@gmail.com", href: "mailto:shehrozbhatti590@gmail.com" },
              { icon: "📞", label: "03045576590", href: "tel:03045576590" },
              { icon: "📍", label: "Rawalpindi, Pakistan", href: null },
              { icon: "🔗", label: "LinkedIn Profile", href: "https://www.linkedin.com/in/shehroz-bhatti-2729121b5" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm text-[var(--text2)]">
                <span>{item.icon}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        {sent ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <span className="text-4xl mb-4">✅</span>
            <p className="font-semibold text-lg mb-2">Message Sent!</p>
            <p className="text-sm text-[var(--text2)]">Thanks for reaching out. I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            {[
              { name: "name", placeholder: "Your Name", type: "text" },
              { name: "email", placeholder: "Your Email", type: "email" },
              { name: "subject", placeholder: "Subject", type: "text" },
            ].map((f) => (
              <input
                key={f.name}
                name={f.name}
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.name as keyof typeof form]}
                onChange={handle}
                required
                className="bg-[var(--bg2)] border border-[var(--border2)] rounded-lg px-4 py-3 text-[var(--text)] text-sm placeholder-[var(--text3)] outline-none focus:border-[var(--accent)] transition-colors font-[family-name:var(--font-dm-sans)]"
              />
            ))}
            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              value={form.message}
              onChange={handle}
              required
              className="bg-[var(--bg2)] border border-[var(--border2)] rounded-lg px-4 py-3 text-[var(--text)] text-sm placeholder-[var(--text3)] outline-none focus:border-[var(--accent)] transition-colors resize-none font-[family-name:var(--font-dm-sans)]"
            />
            <button
              type="submit"
              className="font-[family-name:var(--font-space-mono)] text-xs py-3.5 rounded bg-[var(--accent)] text-white hover:bg-[#9585ff] transition-colors tracking-wide mt-1"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
