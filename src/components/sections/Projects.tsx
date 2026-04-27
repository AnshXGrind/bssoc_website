"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI Agent Framework",
    track: "AI / ML",
    url: "#",
    color: "from-accent",
  },
  {
    title: "Decentralized Exchange",
    track: "Web3",
    url: "#",
    color: "from-purple-500",
  },
  {
    title: "High-Performance RPC",
    track: "Systems",
    url: "#",
    color: "from-white",
  },
  {
    title: "Next.js SaaS Boilerplate",
    track: "Full Stack",
    url: "#",
    color: "from-accent-blue",
  },
]

export default function Projects() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-[#0f172a] relative z-10 max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col md:flex-row justify-between md:items-end gap-6"
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Projects</span>
          </h2>
          <p className="text-white/50 font-mono max-w-sm uppercase text-sm tracking-widest leading-relaxed">
            We don&apos;t toy around. View previous high-impact open source repositories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="glass-card group relative p-12 h-[300px] flex flex-col justify-end overflow-hidden cursor-none"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                <ExternalLink className="text-white/50 group-hover:text-accent w-5 h-5" />
              </div>
              
              <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
                <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3">
                  {project.track}
                </div>
                <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-wide">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}