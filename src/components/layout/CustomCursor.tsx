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
        className="fixed top-0 left-0 w-4 h-4 bg-orange-500 rounded-full mix-blend-screen pointer-events-none z-50 flex items-center justify-center"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? "#FF4D00" : "#ffffff",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-50"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1,
        }}
      />
    </>
  )
}