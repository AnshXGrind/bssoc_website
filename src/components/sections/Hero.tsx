"use client"

import HeroBackground from "../3d/HeroBackground"
import HeroContent from "./HeroContent"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]">
      <HeroBackground />
      <HeroContent />
    </section>
  )
}