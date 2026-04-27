"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const TYPEFORM_BASE_URL = process.env.NEXT_PUBLIC_TYPEFORM_URL || "https://form.typeform.com/to/GzKVGFkr";

const joinOptions = [
  { label: "Contributor", href: `${TYPEFORM_BASE_URL}?role=contributor`, primary: true },
  { label: "Mentor", href: `${TYPEFORM_BASE_URL}?role=mentor`, primary: false },
  { label: "Project Admin", href: `${TYPEFORM_BASE_URL}?role=project-admin`, primary: false },
];

export default function HowToJoinPage() {
  return (
    <main className="page-shell">
      <section className="page-hero-section">
        <div className="max-w-7xl mx-auto">
          <motion.div {...reveal}>
            <div className="page-pill">
              Join BSSOC
            </div>
            <h1 className="page-title mb-8">
              How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Join</span>
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/75 font-mono mb-10 text-base md:text-lg">
              <li className="glass-card p-5">Developers stuck in tutorial loop.</li>
              <li className="glass-card p-5">People serious about building.</li>
              <li className="glass-card p-5">Anyone who wants real experience.</li>
            </ul>
            <p className="text-white/70 font-mono text-lg max-w-3xl mb-2">Ready to build something real?</p>
            <p className="text-white/70 font-mono text-lg max-w-3xl mb-10">Stop learning. Start building.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {joinOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-mono uppercase tracking-widest text-sm transition duration-300 ${
                    option.primary
                      ? "bg-accent text-white hover:brightness-110"
                      : "border border-white/20 text-white/90 hover:bg-white/10"
                  }`}
                >
                  Join as {option.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}