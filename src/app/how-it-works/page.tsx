"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const processSteps = [
  { index: "01", title: "Apply", desc: "Submit your application and GitHub profile." },
  { index: "02", title: "Get selected", desc: "Our team reviews your skills and portfolio." },
  { index: "03", title: "Choose your track", desc: "Select a project that aligns with your interests." },
  { index: "04", title: "Start contributing / building", desc: "Dive into the code and start making an impact." },
  { index: "05", title: "Earn points", desc: "Get points for every merged PR and contribution." },
  { index: "06", title: "Get recognized", desc: "Top contributors earn certificates and swags." },
];

export default function HowItWorksPage() {
  return (
    <main className="page-shell">
      <div className="palmer-bar">
        <span>THE ARCHITECTURE</span>
        <span className="hidden md:inline-block">PROGRAM WORKFLOW</span>
        <span>STEP BY STEP</span>
      </div>

      <section className="page-hero-section">
        <motion.div {...reveal} className="w-full">
          <div className="flex items-center gap-2 mb-6">
             <div className="w-8 h-[1px] bg-accent" />
             <span className="text-accent font-mono text-xs uppercase tracking-widest">The Process</span>
          </div>
          <h1 className="palmer-huge-title mb-20 text-white">
            HOW IT<br />
            <span className="text-white/60">WORKS.</span>
          </h1>
          
          {/* 6-Step Process from Screenshot */}
          <div className="relative mt-20">
             {/* Desktop Timeline Line */}
             <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/10 z-0" />
             
             <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
                {processSteps.map((step) => (
                  <div key={step.index} className="flex flex-col items-center md:items-start text-center md:text-left">
                     <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)] md:bg-[#0A0A0A]">
                        <span className="text-3xl font-black text-white">{step.index}</span>
                     </div>
                     <h3 className="text-white text-xl font-bold uppercase tracking-tighter mb-4 px-2">{step.title}</h3>
                     <p className="text-white/40 font-mono text-[10px] uppercase leading-relaxed max-w-[150px]">{step.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </section>

      <section className="page-alt-section py-24 border-t border-white/5">
        <motion.div {...reveal} className="w-full">
          <div className="palmer-bar mb-16 border-t-0">
             <span>SCORING SYSTEM</span>
             <span>GAMIFICATION</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="palmer-title mb-8 text-white uppercase">Earn Points. <br/>Level Up.</h2>
                <div className="space-y-6">
                   <div className="glass-card p-6 border-white/5">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-white text-sm font-bold uppercase">Level 1: Novice</span>
                         <span className="text-accent text-xs font-mono">0-500 PTS</span>
                      </div>
                      <p className="text-white/40 font-mono text-[10px] uppercase">Entry level for all new contributors.</p>
                   </div>
                   <div className="glass-card p-6 border-accent/20 bg-accent/5">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-white text-sm font-bold uppercase">Level 2: Architect</span>
                         <span className="text-accent text-xs font-mono">500-2000 PTS</span>
                      </div>
                      <p className="text-white/40 font-mono text-[10px] uppercase">Unlocked after multiple successful PR merges.</p>
                   </div>
                   <div className="glass-card p-6 border-white/5">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-white text-sm font-bold uppercase">Level 3: Legend</span>
                         <span className="text-accent text-xs font-mono">2000+ PTS</span>
                      </div>
                      <p className="text-white/40 font-mono text-[10px] uppercase">Elite status for top-tier contributors and maintainers.</p>
                   </div>
                </div>
             </div>
             
             <div className="bg-white/5 p-12 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full -mr-16 -mt-16" />
                <h3 className="text-white text-2xl font-black uppercase mb-6 tracking-tighter">Meaningful Contribution</h3>
                <ul className="space-y-4 font-mono text-xs uppercase text-white/60">
                   <li className="flex items-center gap-3">
                      <span className="text-accent">âœ“</span> Documentation Fix: 10 Points
                   </li>
                   <li className="flex items-center gap-3">
                      <span className="text-accent">âœ“</span> Minor Bug Fix: 50 Points
                   </li>
                   <li className="flex items-center gap-3">
                      <span className="text-accent">âœ“</span> Feature Implementation: 200 Points
                   </li>
                   <li className="flex items-center gap-3">
                      <span className="text-accent">âœ“</span> Security Patch: 500 Points
                   </li>
                </ul>
                <div className="mt-10 pt-10 border-t border-white/10">
                   <p className="italic text-white/30 text-[10px]">Points are awarded by project maintainers after a thorough code review.</p>
                </div>
             </div>
          </div>
        </motion.div>
      </section>

      <section className="page-hero-section py-24 pb-40">
        <motion.div {...reveal} className="w-full">
          <div className="palmer-bar mb-16 border-t-0">
             <span>CATEGORIES</span>
             <span>PROGRAM TRACKS</span>
          </div>
          
          <h2 className="palmer-title mb-12 text-white uppercase">Focus Areas.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-10 group hover:border-accent/40 transition-colors">
              <h3 className="text-accent text-xl font-black mb-6 uppercase">Web Ecosystem</h3>
              <p className="text-white/50 font-mono text-sm uppercase">Next.js, TypeScript, and high-performance frontend architectures.</p>
            </div>
            <div className="glass-card p-10 group hover:border-accent/40 transition-colors">
              <h3 className="text-accent text-xl font-black mb-6 uppercase">AI & Data</h3>
              <p className="text-white/50 font-mono text-sm uppercase">LLMs, PyTorch implementations, and data engineering pipelines.</p>
            </div>
            <div className="glass-card p-10 group hover:border-accent/40 transition-colors">
              <h3 className="text-accent text-xl font-black mb-6 uppercase">Cloud Native</h3>
              <p className="text-white/50 font-mono text-sm uppercase">Kubernetes, Docker, and scalable backend infrastructure.</p>
            </div>
            <div className="glass-card p-10 group hover:border-accent/40 transition-colors">
              <h3 className="text-accent text-xl font-black mb-6 uppercase">Web3/Crypto</h3>
              <p className="text-white/50 font-mono text-sm uppercase">Smart contracts, decentralized apps, and protocol development.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}