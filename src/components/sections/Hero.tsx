"use client"

import { Canvas } from "@react-three/fiber"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroScene from "../3d/HeroScene"
import { useRef } from "react"
import { Environment } from "@react-three/drei"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <HeroScene />
          <Environment preset="city" />
        </Canvas>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block border border-accent/30 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium tracking-widest uppercase mb-6"
        >
          BSSOC 2026
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6"
        >
          Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue">Ship.</span><br />
          Scale.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-white/60 font-mono max-w-2xl"
        >
          Join the most execution-focused open source program. Not everyone ships. We do.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  )
}