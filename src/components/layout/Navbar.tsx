"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "What is BSSOC", href: "#about" },
  { label: "Program Tracks", href: "#tracks" },
  { label: "How it works", href: "#timeline" },
  { label: "How to Join", href: "#join" },
]

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past the hero section (approx 100vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-4 px-6 pointer-events-none"
        >
          <div className="flex items-center gap-8 bg-[#0A0A0A]/80 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 pointer-events-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-[#FF4D00] transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
