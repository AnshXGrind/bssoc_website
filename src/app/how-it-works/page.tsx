"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function HowItWorksPage() {
  return (
    <main className="page-shell">
      <section className="page-hero-section">
        <div className="max-w-7xl mx-auto">
          <motion.div {...reveal}>
            <div className="page-pill">
              Process
            </div>
            <h1 className="page-title mb-10">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Works</span>
            </h1>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/75 font-mono text-base md:text-lg">
              <li className="glass-card p-5">1. Apply - Submit your application.</li>
              <li className="glass-card p-5">2. Selection - Only committed builders are selected.</li>
              <li className="glass-card p-5">3. Build - Work on real-world projects with structure.</li>
              <li className="glass-card p-5">4. Contribute - Push meaningful code, not small fixes.</li>
              <li className="glass-card p-5 md:col-span-2">5. Showcase - End with projects you can actually show.</li>
            </ol>
          </motion.div>
        </div>
      </section>

      <section className="page-alt-section">
        <div className="max-w-7xl mx-auto">
          <motion.div {...reveal}>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Program Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/75 font-mono">
              <div className="glass-card p-5">AI/ML - Build intelligent systems, not just notebooks.</div>
              <div className="glass-card p-5">Web Dev - Create production-ready applications, not clones.</div>
              <div className="glass-card p-5">Systems - Understand how things work under the hood.</div>
              <div className="glass-card p-5">Open Source - Contribute where it actually matters.</div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}