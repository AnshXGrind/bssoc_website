"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const stages = [
  {
    index: "01",
    title: "Application",
    desc: "Submit your profile and GitHub portfolio. Show us what you've built, not just what you've learned."
  },
  {
    index: "02",
    title: "Project Selection",
    desc: "Choose from a curated list of high-impact repositories. From Web3 to Deep Learning."
  },
  {
    index: "03",
    title: "Mentorship",
    desc: "Get paired with experienced maintainers who will guide your contributions and review your code."
  },
  {
    index: "04",
    title: "The Build Phase",
    desc: "10 weeks of intense development. Solve issues, implement features, and optimize performance."
  },
  {
    index: "05",
    title: "Certification",
    desc: "Gain recognition for your work. Top contributors receive exclusive swags and internship opportunities."
  }
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
          <h1 className="palmer-huge-title mb-16 text-white">
            THE<br />
            <span className="text-white/60">PROCESS.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-y border-white/10">
            {stages.map((stage) => (
              <div key={stage.index} className="p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col min-h-[300px]">
                <span className="text-accent text-sm font-mono mb-8">{stage.index}</span>
                <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-4">{stage.title}</h3>
                <p className="text-white/50 font-mono text-sm uppercase leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="page-alt-section py-24">
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
          
          <div className="mt-20 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white/40 font-mono text-sm uppercase max-w-xl">
              Each track is led by a dedicated maintainer ensuring you have the support needed to succeed.
            </div>
            <div className="text-white/80 font-mono text-sm border border-white/20 px-8 py-4 rounded-full uppercase tracking-widest text-center">
              100+ Active Repositories
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}