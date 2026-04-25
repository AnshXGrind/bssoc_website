"use client"

import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { useState, useEffect } from "react"
import HeroScene from "./HeroScene"

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <HeroScene />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
