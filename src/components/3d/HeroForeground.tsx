"use client"

export default function HeroForeground() {
  return (
    <div className="absolute inset-0 z-[50] pointer-events-none overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-100" />
    </div>
  )
}
