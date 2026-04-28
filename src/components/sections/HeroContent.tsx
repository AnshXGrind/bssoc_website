"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Text is clamped in the middle parallax depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center w-full h-full pointer-events-none">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full flex flex-col items-center justify-center pointer-events-auto px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[90px] font-medium tracking-tight leading-[1.05] text-white mb-6 max-w-4xl"
        >
          Start building real projects today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white/80 font-mono text-sm md:text-base mb-10 max-w-2xl"
        >
          No fake contributions. Only committed builders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link href="/how-to-join" className="inline-block bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
            GET STARTED
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-24 flex items-center gap-4 z-10 pointer-events-none"
      >
        <div className="w-12 h-[1px] bg-white/30" />
        <span className="text-xs font-medium uppercase tracking-widest text-white/50">Scroll</span>
      </motion.div>
    </div>
  )
}