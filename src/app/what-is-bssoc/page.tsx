"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function WhatIsBssocPage() {
  return (
    <main className="page-shell">
      <section className="page-hero-section">
        <div className="max-w-7xl mx-auto">
          <motion.div {...reveal}>
            <div className="page-pill">
              About Program
            </div>
            <h1 className="page-title mb-8">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">BSSOC</span>
            </h1>
            <p className="text-white/75 font-mono text-lg max-w-3xl leading-relaxed">
              BSSOC is a focused open source program where developers stop consuming and start building.
            </p>
            <p className="text-white/75 font-mono text-lg max-w-3xl mt-4 leading-relaxed">
              You work on real projects, solve real problems, and create work that actually matters.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-alt-section">
        <div className="max-w-7xl mx-auto">
          <motion.div {...reveal}>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">Why BSSOC</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 font-mono">
              <div className="glass-card p-5">No fake contributions.</div>
              <div className="glass-card p-5">No resume padding.</div>
              <div className="glass-card p-5">No endless tutorials.</div>
              <div className="glass-card p-5">Only real building.</div>
            </div>
            <p className="text-white/70 font-mono mt-8 text-lg">This is where you actually learn by doing.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}