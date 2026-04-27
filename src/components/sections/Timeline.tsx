"use client"

import { motion } from "framer-motion"

const phases = [
  { id: "01", title: "Apply", date: "Step 1", desc: "Submit your application." },
  { id: "02", title: "Selection", date: "Step 2", desc: "Only committed builders are selected." },
  { id: "03", title: "Community Phase", date: "Step 3", desc: "Engage and learn with peers." },
  { id: "04", title: "Build", date: "Step 4", desc: "Work on real-world projects with structure." },
  { id: "05", title: "Evaluation", date: "Step 5", desc: "Get code reviewed by mentors." },
  { id: "06", title: "Showcase", date: "Step 6", desc: "Present portfolio-ready output." }
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-24 px-6 md:px-12 bg-[#1e293b] relative border-t border-accent/20 max-w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-24 text-center">
          How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Works</span>
        </h2>

        <div className="relative border-l border-white/10 md:border-none">
          {/* Timeline Center Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

          {phases.map((phase, i) => (
             <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`flex flex-col md:flex-row w-full mb-16 relative items-center pl-8 md:pl-0 ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
             >
               {/* Mobile Timeline Dot */}
               <div className="absolute left-[-5px] top-4 w-2.5 h-2.5 rounded-full bg-accent md:hidden" />

               {/* Desktop Timeline Dot */}
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0f172a] border-2 border-accent hidden md:flex justify-center items-center">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full shadow-[0_0_10px_#00E5FF]" />
               </div>

               <div className={`w-full md:w-[45%] glass-card p-8 group relative overflow-hidden ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="text-accent/30 font-mono text-xl md:text-3xl font-bold mb-2 uppercase group-hover:text-accent transition-colors duration-300">{phase.id}.</div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-2 text-white group-hover:text-accent-blue transition-colors duration-300">{phase.title}</h3>
                  <div className="text-xs font-mono tracking-widest uppercase bg-white/5 inline-block px-3 py-1 rounded-full mb-4 text-white/50">{phase.date}</div>
                  <p className="text-white/60 font-mono text-sm leading-relaxed">{phase.desc}</p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}