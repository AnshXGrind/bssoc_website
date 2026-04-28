"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Increased layered depth to make mountains highly scrollable/move dynamically when mouse scrolling
  const farY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const nearY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  return (
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* Dark sky gradient with enhanced atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_10%,#3b3b3b_0%,#111111_40%,#000000_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white opacity-[0.012] blur-[120px] pointer-events-none" />

      {/* Far distant peaks */}
      <motion.div style={{ y: farY }} className="absolute bottom-0 left-0 right-0 w-full opacity-85">
        <svg viewBox="0 0 1440 420" className="w-full h-auto min-h-[50vh] md:min-h-[70vh] mountain-drift-slow" preserveAspectRatio="none">
          <defs>
            <linearGradient id="far-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1f1f1f" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#far-grad)"
            d="M0,280 L40,250 L90,265 L140,230 L200,245 L260,200 L320,225 L380,180 L440,210 L500,160 L560,195 L620,150 L680,185 L740,140 L800,165 L860,120 L920,150 L980,110 L1040,145 L1100,120 L1160,160 L1220,130 L1280,175 L1340,150 L1400,190 L1440,170 L1440,420 L0,420 Z"
          />
        </svg>
      </motion.div>

      {/* Main majestic peak mimicking the photo */}
      <motion.div style={{ y: midY }} className="absolute bottom-0 left-0 right-0 w-full z-10">
        <svg viewBox="0 0 1440 420" className="w-full h-auto min-h-[55vh] md:min-h-[75vh] mountain-drift-mid drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#111111" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <linearGradient id="snow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#a3a3a3" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#222222" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Base rock/shadow of the main range */}
          <path
            fill="url(#mid-grad)"
            d="M0,320 L60,300 L120,310 L180,270 L240,290 L300,220 L350,240 L420,180 L480,210 L540,150 L580,170 L640,100 L720,20 L760,60 L800,30 L840,80 L880,50 L940,120 L1000,90 L1060,160 L1120,130 L1180,190 L1240,170 L1300,230 L1360,210 L1440,260 L1440,420 L0,420 Z"
          />
          {/* Intense snow caps mimicking the bright white peaks */}
          <path
            fill="url(#snow-grad)"
            d="M420,180 L480,210 L540,150 L580,170 L640,100 L720,20 L760,60 L800,30 L840,80 L880,50 L940,120 L900,125 L860,90 L820,115 L780,80 L740,110 L700,70 L660,130 L600,100 L560,140 Z"
          />
          <path
            fill="url(#snow-grad)"
            d="M300,220 L350,240 L420,180 L380,210 L340,190 Z"
            opacity="0.85"
          />
          <path
            fill="url(#snow-grad)"
            d="M1000,90 L1060,160 L1020,150 L980,110 Z"
            opacity="0.9"
          />
        </svg>
      </motion.div>

      {/* Near lower hills/ridges */}
      <motion.div style={{ y: nearY }} className="absolute bottom-0 left-0 right-0 w-full z-20">
        <svg viewBox="0 0 1440 420" className="w-full h-auto min-h-[50vh] md:min-h-[65vh] mountain-drift-fast drop-shadow-xl" preserveAspectRatio="none">
          <defs>
            <linearGradient id="near-grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a0a0a" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <linearGradient id="near-grad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#050505" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <path
            fill="url(#near-grad1)"
            d="M0,350 L70,330 L140,345 L210,310 L280,325 L350,280 L420,300 L490,260 L560,285 L630,240 L700,265 L770,220 L840,250 L910,210 L980,235 L1050,190 L1120,220 L1190,180 L1260,215 L1330,190 L1400,230 L1440,210 L1440,420 L0,420 Z"
          />
          <path
            fill="url(#near-grad2)"
            d="M0,380 L90,360 L180,375 L270,340 L360,355 L450,310 L540,330 L630,290 L720,315 L810,270 L900,295 L990,250 L1080,280 L1170,240 L1260,265 L1350,230 L1440,260 L1440,420 L0,420 Z"
          />
        </svg>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent opacity-100" />
    </div>
  )
}
