"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (textRef.current) {
      const chars = textRef.current.querySelectorAll('.char')
      
      gsap.fromTo(chars, 
        { opacity: 0.1, color: "#ffffff" },
        {
          opacity: 1,
          color: "#FF4D00",
          stagger: 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
          }
        }
      )
    }
  }, [])

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
    ))
  }

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-12 lg:px-24 min-h-screen flex items-center justify-center relative bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-accent/5 to-[#0A0A0A] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-8">
          <p className="text-accent-blue font-mono text-sm tracking-widest uppercase mb-8">What is BSSOC?</p>
          <h2 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight uppercase">
            {splitText("NO FAKE CONTRIBUTIONS. NO RESUME FLUFF. ONLY REAL WORK.")}
          </h2>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6 font-mono text-white/70 text-lg md:text-xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            We build open-source products that scale. Real startup-level ideas, gamified contributor rankings, and a final showcase.
          </motion.p>
          <motion.p
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            Not a college club. An elite program focusing on real-world product building.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
