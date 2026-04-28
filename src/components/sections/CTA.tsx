"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Magnetic from "../layout/Magnetic"

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section ref={containerRef} className="py-32 px-4 md:px-12 lg:px-24 bg-[#0f172a] relative z-10 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-[#0f172a] to-[#0f172a]" />
      
      <div className="max-w-4xl mx-auto relative z-20 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-accent/30 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-mono tracking-widest uppercase mb-12">
            Claim Your Spot
          </div>
          
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-12">
            Apply <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Now</span>
          </h2>
          <Magnetic strength={0.3}>
            <Link href="/how-to-join">
              <motion.button
                data-hover="true"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-white transition-all duration-300 ease-in-out bg-accent rounded-full hover:bg-[#00E5FF] overflow-hidden shadow-[0_0_40px_rgba(255,77,0,0.4)] hover:shadow-[0_0_60px_rgba(0,229,255,0.6)]"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                <span className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_transparent_100%)] transition-opacity duration-300 pointer-events-none" />
                <span className="relative flex items-center gap-3 text-lg font-mono uppercase tracking-widest">
                  Join BSSOC 2026
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-between px-12 font-mono text-xs uppercase tracking-widest text-white/30 z-20">
        <span>BSSOC Â© {new Date().getFullYear()}</span>
        <span>Built to Scale</span>
      </div>
    </section>
  )
}