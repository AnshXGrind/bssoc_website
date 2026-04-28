"use client"

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import { useEffect, useRef } from "react"

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Text is clamped in the middle parallax depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Mouse Parallax Layer - removed for normal devices to not be laggy, 
  // keeping it very minimal and stripped of `transformStyle: "preserve-3d"`
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Small throttle/requestAnimationFrame could be used here but keeping logic light
      const { innerWidth, innerHeight } = window
      const x = e.clientX / innerWidth - 0.5
      const y = e.clientY / innerHeight - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }

    // Only enable parallax on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
       window.addEventListener("mousemove", handleMouseMove)
    }
    
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center w-full h-full pointer-events-none">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full flex flex-col items-center justify-center pointer-events-auto"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter leading-[1.05] text-white text-center max-w-6xl px-4"
        >
          BoyScript Summer of Code
        </motion.h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-24 flex items-center gap-4 z-10 pointer-events-auto"
      >
        <div className="w-12 h-[1px] bg-white/30" />
        <span className="text-xs font-medium uppercase tracking-widest text-white/50">Scroll</span>
      </motion.div>
    </div>
  )
}