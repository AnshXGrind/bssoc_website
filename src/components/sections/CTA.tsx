"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Magnetic from "../layout/Magnetic"
import Link from "next/link"

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section id="join" ref={containerRef} className="py-20 md:py-24 px-6 md:px-12 bg-[#0A0A0A] relative z-10 overflow-hidden max-w-full flex flex-col items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-[#0A0A0A] to-[#0A0A0A]" />
      
      <div className="max-w-4xl mx-auto relative z-20 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-accent/30 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-mono tracking-widest uppercase mb-12">
            Execution Starts Here
          </div>
          
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-12">
            Ready to build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">something real?</span>
          </h2>
          <p className="text-white/70 font-mono text-base md:text-xl mb-8">Stop consuming. Start shipping.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link
                href="/how-to-join"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/20 text-white/90 font-mono uppercase tracking-widest text-sm hover:border-white/50 transition-colors"
              >
                Open Application Form
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-between px-12 font-mono text-xs uppercase tracking-widest text-white/30 z-20">
        <span>BSSOC © {new Date().getFullYear()}</span>
        <span>Built to Scale</span>
      </div>
    </section>
  )
}
