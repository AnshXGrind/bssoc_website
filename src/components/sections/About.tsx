"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-6 md:px-12 min-h-screen flex items-center justify-center relative bg-[#0A0A0A] overflow-hidden max-w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-accent/5 to-[#0A0A0A] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-8">
          <p className="text-accent-blue font-mono text-sm tracking-widest uppercase mb-8">What is BSSOC?</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight uppercase">
            BUILDING REAL THINGS. NO DISTRACTIONS.
          </h2>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6 font-mono text-white/70 text-lg md:text-xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            BSSOC is a focused open source program where developers stop consuming and start building.
          </motion.p>
          <motion.p
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            You work on real projects, solve real problems, and create work that actually matters.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
