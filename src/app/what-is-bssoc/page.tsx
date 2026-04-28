"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export default function WhatIsBssocPage() {
  return (
    <main className="page-shell">
      <div className="palmer-bar">
        <span>ABOUT PROGRAM</span>
        <span className="hidden md:inline-block">BOYSCRIPT SUMMER OF CODE</span>
        <span>2026 EDITION</span>
      </div>
      
      <section className="page-hero-section">
        <motion.div {...reveal} className="w-full">
          <h1 className="palmer-huge-title mb-8 text-white">
            THE<br />
            <span className="text-white/60">VISION.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 border-t border-white/10 pt-12">
             <div className="text-white/90 font-mono text-xl md:text-2xl leading-relaxed uppercase">
                BoyScript Summer of Code (BSSOC) is a premier 3-month open source program designed to bridge the gap between academic learning and industry building.
             </div>
             <div className="text-white/70 font-mono text-lg md:text-xl leading-relaxed uppercase">
                We believe that the best way to learn is by contributing to real-world infrastructure. BSSOC provides the structure, mentorship, and community needed to make your first meaningful commit.
             </div>
          </div>
        </motion.div>
      </section>

      <section className="page-alt-section py-24">
        <motion.div {...reveal} className="w-full">
          <div className="palmer-bar mb-16 border-t-0">
             <span>THE MANIFESTO</span>
             <span>OUR CORE VALUES</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="palmer-title mb-8 text-white uppercase">Beyond the<br/>Commit.</h2>
              <p className="text-white/60 font-mono text-lg mb-8 uppercase leading-relaxed">
                Most students get stuck in the cycle of building clones—Spotify clones, Netflix clones, Todo lists. While these help with basics, they don't teach you how to maintain production systems.
              </p>
              <p className="text-white/60 font-mono text-lg uppercase leading-relaxed">
                BSSOC is different. You work on existing repositories with thousands of users. You deal with edge cases, CI/CD pipelines, and rigorous code reviews.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="border-l-2 border-accent pl-8 py-2">
                <h3 className="text-white text-2xl font-black uppercase mb-3 tracking-tighter">Radical Transparency</h3>
                <p className="text-white/40 font-mono text-sm uppercase">Every decision, PR, and discussion is public. Learn how global software is actually debated and delivered.</p>
              </div>
              <div className="border-l-2 border-white/20 pl-8 py-2">
                <h3 className="text-white text-2xl font-black uppercase mb-3 tracking-tighter">Project Ownership</h3>
                <p className="text-white/40 font-mono text-sm uppercase">You don't just fix typos. You take ownership of features, documentation, and performance optimizations.</p>
              </div>
              <div className="border-l-2 border-white/20 pl-8 py-2">
                <h3 className="text-white text-2xl font-black uppercase mb-3 tracking-tighter">Elite Mentorship</h3>
                <p className="text-white/40 font-mono text-sm uppercase">Get guided by contributors from top tech firms and established open source foundations.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="page-hero-section py-32 border-t border-white/5">
        <motion.div {...reveal} className="w-full text-center max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-12">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Future.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass-card p-6 border-white/5">
              <div className="text-accent text-4xl font-black mb-2">100+</div>
              <div className="text-white/40 font-mono text-[10px] tracking-widest uppercase">Projects</div>
            </div>
            <div className="glass-card p-6 border-white/5">
              <div className="text-accent text-4xl font-black mb-2">5000+</div>
              <div className="text-white/40 font-mono text-[10px] tracking-widest uppercase">Contributors</div>
            </div>
            <div className="glass-card p-6 border-white/5">
              <div className="text-accent text-4xl font-black mb-2">20k+</div>
              <div className="text-white/40 font-mono text-[10px] tracking-widest uppercase">Commits</div>
            </div>
            <div className="glass-card p-6 border-white/5">
              <div className="text-accent text-4xl font-black mb-2">50+</div>
              <div className="text-white/40 font-mono text-[10px] tracking-widest uppercase">Mentors</div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}