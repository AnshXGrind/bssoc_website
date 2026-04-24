"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-hover='true']")) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#FF4D00] rounded-full mix-blend-screen pointer-events-none z-[100] flex items-center justify-center shadow-[0_0_10px_#FF4D00]"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovered ? 3 : 1,
          backgroundColor: isHovered ? "#transparent" : "#FF4D00",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-[#FF4D00]/50 rounded-full pointer-events-none z-[100]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovered ? 1.8 : 1,
          opacity: isHovered ? 1 : 0.5,
          boxShadow: isHovered ? "0 0 20px rgba(255, 77, 0, 0.4)" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  )
}