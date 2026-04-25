"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Basic scroll translation instead of parallax depth layers globally
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Mouse Parallax Layer - removed for normal devices to not be laggy, 
  // keeping it very minimal and stripped of `transformStyle: "preserve-3d"`
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5])

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

  const headingText = "Build. Ship. Get Recognized."
  const splitHeading = ["Build.", "Ship.", "Get Recognized."]

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center w-full h-full pointer-events-none">
      <motion.div 
        style={{ y, opacity, rotateX, rotateY }}
        className="relative z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center pointer-events-auto"
      >
        <div className="flex flex-col items-center justify-center mb-8 gap-2">
          {splitHeading.map((word, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.6, 
                    delay: 0.4 + (i * 0.1), 
                    ease: "easeOut"
                  }
                }
              }}
              className={`text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] ${i === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-blue' : 'text-white'}`}
            >
              {word}
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-xl text-white/60 font-mono max-w-2xl mt-4"
        >
          BoyScript Summer of Code (BSSOC) is a structured program where developers build real-world projects.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8 font-mono text-sm md:text-base text-white/80"
        >
          <li className="flex items-center gap-2"><span className="text-accent">•</span> Real projects</li>
          <li className="flex items-center gap-2"><span className="text-accent">•</span> Structured workflow</li>
          <li className="flex items-center gap-2"><span className="text-accent">•</span> Output-driven</li>
        </motion.ul>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1.2 }}
           className="mt-10 flex flex-col items-center gap-4"
        >
          <a href="/how-to-join" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-in-out bg-accent rounded-full hover:bg-[#00E5FF] overflow-hidden shadow-[0_0_40px_rgba(255,77,0,0.4)] hover:shadow-[0_0_60px_rgba(0,229,255,0.6)] uppercase tracking-widest text-sm">
            Apply Now
          </a>
          <span className="text-xs md:text-sm text-white/50 font-mono tracking-wide mt-2">
            8–12 weeks • Remote • Project-based • Portfolio-ready
          </span>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-auto"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </div>
  )
}