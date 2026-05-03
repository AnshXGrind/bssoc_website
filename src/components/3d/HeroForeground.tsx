"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroForeground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Closest foreground moves naturally with the scroll to maintain floor
  // Adding scale for dynamic 3D zoom
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.35])

  return (
    <div ref={ref} className="absolute inset-0 z-[50] pointer-events-none overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute bottom-0 left-0 right-0 w-full flex flex-col items-center origin-bottom">
        <svg viewBox="0 0 1440 400" className="w-full h-auto min-h-[45vh] md:min-h-[65vh] object-cover object-bottom drop-shadow-2xl" preserveAspectRatio="none">
          {/* Transparent space above for text to peak through */}
          {/* Foreground Dark Layer */}
          <path
            fill="#0a0a0a"
            d="M0,360 L140,290 L280,340 L430,240 L560,320 L720,230 L860,340 L1020,230 L1180,330 L1340,260 L1440,310 L1440,400 L0,400 Z"
          />
          {/* Very Front Base */}
          <path
            fill="#000000"
            d="M0,390 L180,330 L350,380 L540,310 L720,370 L920,290 L1120,360 L1320,300 L1440,340 L1440,400 L0,400 Z"
          />
        </svg>
      </motion.div>
      
      {/* Subtle misty fog overlay to blend mountains at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-80" />
    </div>
  )
}
