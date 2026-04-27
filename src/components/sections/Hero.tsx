"use client"

import HeroBackground from "../3d/HeroBackground"
import HeroForeground from "../3d/HeroForeground"
import HeroContent from "./HeroContent"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0f172a]">
      <HeroBackground />
      <HeroContent />
      <HeroForeground />
    </section>
  )
}