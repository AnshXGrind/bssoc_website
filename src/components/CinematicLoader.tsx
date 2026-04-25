"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import ThreeLogo from "./ThreeLogo";

export default function CinematicLoader({ onFinish }: { onFinish: () => void }) {
  const progress = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 1.8,
      ease: "easeInOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
      onComplete: () => {
        setExit(true);

        const audio = new Audio("/click.mp3");
        audio.volume = 0.2;
        audio.play().catch(() => {});

        setTimeout(onFinish, 900);
      },
    });

    return () => controls.stop();
  }, [progress, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center"
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#FF4D00] opacity-20 blur-[180px] rounded-full" />

      {/* 3D LOGO */}
      <motion.div
        className="w-[200px] h-[200px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          exit
            ? {
                x: "-42vw",
                y: "-42vh",
                scale: 0.4,
              }
            : {
                scale: 1,
                opacity: 1,
              }
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <ThreeLogo />
      </motion.div>

      {/* TEXT UNDER */}
      <motion.h1
        className="text-white text-3xl mt-6 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {display}%
      </motion.h1>
    </motion.div>
  );
}
