"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.floor(Math.random() * 10) + 1
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A] text-white"
        >
          <div className="flex flex-col items-center">
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#00E5FF] mb-4"
            >
              BSSOC
            </motion.h1>
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div 
                className="h-full bg-[#FF4D00]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-xl font-mono text-white/50">{Math.min(100, progress)}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
