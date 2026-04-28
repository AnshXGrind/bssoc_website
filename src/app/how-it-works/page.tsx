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
      <div className="palmer-bar">
        <span>THE PROCESS</span>
        <span className="hidden md:inline-block">HOW TO CONTRIBUTE</span>
        <span>STEP BY STEP</span>
      </div>

      <section className="page-hero-section">
        <motion.div {...reveal} className="w-full">
          <h1 className="palmer-huge-title mb-16 text-white">
            HOW IT<br />
            <span className="text-white/60">WORKS.</span>
          </h1>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-0 border-y border-white/20 text-white/80 font-mono text-base uppercase">
            <li className="p-8 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between aspect-square">
              <span className="text-white/40 text-sm mb-8 md:mb-0">01</span>
              <span>Apply - Submit your application.</span>
            </li>
            <li className="p-8 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between aspect-square">
              <span className="text-white/40 text-sm mb-8 md:mb-0">02</span>
              <span>Selection - Only committed builders are selected.</span>
            </li>
            <li className="p-8 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between aspect-square">
              <span className="text-white/40 text-sm mb-8 md:mb-0">03</span>
              <span>Build - Work on real-world projects with structure.</span>
            </li>
            <li className="p-8 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between aspect-square">
              <span className="text-white/40 text-sm mb-8 md:mb-0">04</span>
              <span>Contribute - Push meaningful code, not small fixes.</span>
            </li>
            <li className="p-8 flex flex-col justify-between aspect-square">
              <span className="text-white/40 text-sm mb-8 md:mb-0">05</span>
              <span>Showcase - End with projects you can actually show.</span>
            </li>
          </ol>
        </motion.div>
      </section>

      <section className="page-alt-section pt-0">
        <motion.div {...reveal} className="w-full">
          <div className="palmer-bar mb-16 border-t-0">
             <span>CATEGORIES</span>
             <span>PROGRAM TRACKS</span>
          </div>
          <h2 className="palmer-title mb-10 text-white uppercase">Choose<br/>Your Track.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-white/20 font-mono uppercase text-lg">
             <div className="p-8 border-b md:border-r border-white/20 text-white/80">AI/ML - Build intelligent systems, not just notebooks.</div>
             <div className="p-8 border-b border-white/20 text-white/80">Web Dev - Create production-ready applications, not clones.</div>
             <div className="p-8 border-b md:border-b-0 md:border-r border-white/20 text-white/80">Systems - Understand how things work under the hood.</div>
             <div className="p-8 border-white/20 text-white/80">Open Source - Contribute where it actually matters.</div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}