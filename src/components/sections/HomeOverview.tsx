"use client"

import Link from "next/link"

const quickLinks = [
  { label: "What is BSSOC", href: "/what-is-bssoc" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "How to Join", href: "/how-to-join" },
]

export default function HomeOverview() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-[#0f172a] border-t border-white/10 max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
          Focused. Structured. Execution-first.
        </h2>
        <p className="text-white/70 font-mono text-base md:text-lg max-w-3xl leading-relaxed">
          Built for developers who are done watching and ready to ship real work.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="glass-card px-4 py-4 text-center text-sm font-semibold uppercase tracking-widest text-white/85 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}