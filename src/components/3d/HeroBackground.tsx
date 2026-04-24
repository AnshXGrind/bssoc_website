"use client"

import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import HeroScene from "./HeroScene"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <HeroScene />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
