"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Farthest background moves the most to simulate distance
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  return (
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
      {/* SVG Alpine Mountains to mimic the snowy Davos peaks */}
      <motion.div style={{ y }} className="absolute bottom-0 left-0 right-0 w-full flex flex-col items-center">
        <svg viewBox="0 0 1440 400" className="w-full h-auto min-h-[40vh] md:min-h-[55vh] object-cover object-bottom" preserveAspectRatio="none">
          {/* Farthest Mountain Layer - Lightest */}
          <path
            fill="#94a3b8"
            d="M0,250 L60,180 L120,220 L200,90 L280,180 L380,60 L480,170 L620,30 L740,190 L880,70 L1020,210 L1160,90 L1300,220 L1440,140 L1440,400 L0,400 Z"
          />
          {/* Mid-Back Mountain Layer */}
          <path
            fill="#64748b"
            d="M0,280 L90,200 L180,250 L290,120 L390,230 L520,100 L640,240 L790,90 L920,240 L1080,130 L1220,250 L1440,170 L1440,400 L0,400 Z"
          />
          {/* Mid-Front Mountain Layer */}
          <path
            fill="#475569"
            d="M0,320 L110,240 L230,300 L350,180 L460,280 L600,160 L730,290 L870,150 L1000,280 L1150,180 L1290,290 L1440,210 L1440,400 L0,400 Z"
          />
        </svg>
      </motion.div>
    </div>
  )
}
