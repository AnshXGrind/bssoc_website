"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Cpu, Server, Code, Bitcoin } from "lucide-react"

const tracks = [
  {
    id: "01",
    title: "AI/ML",
    description: "Train models, build intelligent systems, and integrate LLMs into robust applications.",
    icon: <Cpu className="w-12 h-12 text-accent" />,
    color: "#FF4D00",
  },
  {
    id: "02",
    title: "Full Stack",
    description: "Architect scalable backend services and responsive frontends that delight users.",
    icon: <Code className="w-12 h-12 text-accent-blue" />,
    color: "#00E5FF",
  },
  {
    id: "03",
    title: "Systems",
    description: "Low-level performance, distributed networks, and core infrastructure engineering.",
    icon: <Server className="w-12 h-12 text-white" />,
    color: "#FFFFFF",
  },
  {
    id: "04",
    title: "Web3",
    description: "Smart contracts, decentralized protocols, and next-gen blockchain solutions.",
    icon: <Bitcoin className="w-12 h-12 text-purple-500" />,
    color: "#A855F7",
  },
]

export default function Tracks() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section ref={containerRef} className="py-32 px-4 md:px-12 lg:px-24 bg-[#0A0A0A] relative z-10">
      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col md:flex-row justify-between md:items-end gap-6"
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Tracks</span>
          </h2>
          <p className="text-white/50 font-mono max-w-sm uppercase text-sm tracking-widest leading-relaxed">
            Choose your domain. Build with the best tools. Ship production-ready code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="glass-card group relative p-8 h-[400px] flex flex-col justify-between overflow-hidden"
              style={{"--hover-color": track.color} as React.CSSProperties}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--hover-color)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex justify-between items-start mb-8">
                <span className="font-mono text-5xl font-black text-white/10 group-hover:text-[var(--hover-color)] transition-colors duration-500">
                  {track.id}
                </span>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  {track.icon}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold uppercase tracking-wide mb-4 group-hover:text-[var(--hover-color)] transition-colors">
                  {track.title}
                </h3>
                <p className="text-white/60 font-mono text-sm leading-relaxed">
                  {track.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}