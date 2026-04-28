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
      <div className="palmer-bar">
        <span>ABOUT PROGRAM</span>
        <span className="hidden md:inline-block">BOYSCRIPT SUMMER OF CODE</span>
        <span>CURRENT EDITION</span>
      </div>
      
      <section className="page-hero-section">
        <motion.div {...reveal} className="w-full">
          <h1 className="palmer-huge-title mb-8 text-white">
            WHAT IS<br />
            <span className="text-white/60">BSSOC.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 border-t border-white/20 pt-12">
             <div className="text-white/80 font-mono text-xl md:text-2xl leading-relaxed uppercase">
                BSSOC is a focused open source program where developers stop consuming and start building.
             </div>
             <div className="text-white/80 font-mono text-xl md:text-2xl leading-relaxed uppercase">
                You work on real projects, solve real problems, and create work that actually matters.
             </div>
          </div>
        </motion.div>
      </section>

      <section className="page-alt-section pt-0">
        <motion.div {...reveal} className="w-full">
          <div className="palmer-bar mb-16 border-t-0">
             <span>CORE PHILOSOPHY</span>
             <span>WHY BSSOC</span>
          </div>
          <h2 className="palmer-title mb-10 text-white uppercase">No fake<br/>contributions.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-white/20">
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/20 text-white/80 font-mono uppercase text-lg">No resume padding.</div>
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/20 text-white/80 font-mono uppercase text-lg">No endless tutorials.</div>
            <div className="p-8 text-white/80 font-mono uppercase text-lg">Only real building.</div>
          </div>
          <div className="mt-12 text-right text-white/60 font-mono uppercase">
             THIS IS WHERE YOU ACTUALLY LEARN BY DOING.
          </div>
        </motion.div>
      </section>
    </main>
  );
}