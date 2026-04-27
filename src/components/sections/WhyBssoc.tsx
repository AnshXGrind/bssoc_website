"use client"

import { motion } from "framer-motion"

const points = [
  "No resume padding.",
  "No fake contributions.",
  "No endless tutorials.",
  "Only real building.",
]

export default function WhyBssoc() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-[#0f172a] border-t border-white/10 max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">
          Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">BSSOC</span>
        </h2>
        <p className="text-white/70 font-mono mb-8">This program is execution-focused.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-6"
            >
              <p className="text-white/80 font-mono text-sm leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}