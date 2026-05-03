"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Magnetic from "../layout/Magnetic"

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section ref={containerRef} className="py-32 px-4 md:px-12 lg:px-24 bg-black relative z-10 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black" />
      
      <div className="max-w-4xl mx-auto relative z-[100] text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-white/30 text-white rounded-full px-5 py-2 text-xs font-mono tracking-widest uppercase mb-12">
            Claim Your Spot
          </div>
          
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-12">
            Apply <br/><span className="text-white/50">Now</span>
          </h2>
          <Magnetic strength={0.3}>
            <Link 
              href="/how-to-join"
              data-hover="true"
              className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-black transition-all duration-300 ease-in-out bg-white rounded-full hover:bg-white/90 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 text-lg font-mono uppercase tracking-widest relative z-10"
              >
                Join BSSOC 2026
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
              <span className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1)_0%,_transparent_100%)] transition-opacity duration-300 pointer-events-none" />
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