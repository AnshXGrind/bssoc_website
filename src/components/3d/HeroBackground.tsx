"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Layered depth to mimic real Himalayan atmospheric perspective.
  const farY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"])
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"])
  const nearY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

  return (
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(255,255,255,0.11),transparent_45%)]" />

      <motion.div style={{ y: farY }} className="absolute bottom-0 left-0 right-0 w-full opacity-85">
        <svg viewBox="0 0 1440 420" className="w-full h-auto min-h-[42vh] md:min-h-[56vh] mountain-drift-slow" preserveAspectRatio="none">
          {/* Distant continuous ridge, shaped like a broad Himalayan wall. */}
          <path
            fill="#5a7ba0"
            d="M0,308 L52,298 L104,286 L154,272 L206,252 L258,236 L308,218 L358,194 L406,174 L452,156 L498,146 L544,134 L590,116 L636,106 L680,86 L724,96 L766,76 L808,56 L850,72 L892,92 L934,106 L978,126 L1022,138 L1066,122 L1108,114 L1150,122 L1194,140 L1238,158 L1282,176 L1326,202 L1372,236 L1412,266 L1440,286 L1440,420 L0,420 Z"
          />
        </svg>
      </motion.div>

      <motion.div style={{ y: midY }} className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 420" className="w-full h-auto min-h-[42vh] md:min-h-[58vh] mountain-drift-mid" preserveAspectRatio="none">
          {/* Main ridge with a dominant center-left summit and stepped shoulders. */}
          <path
            fill="#7e97b6"
            d="M0,350 L48,334 L98,318 L148,292 L198,270 L248,252 L294,226 L338,206 L382,188 L424,170 L464,152 L504,164 L546,144 L586,124 L624,102 L662,90 L700,62 L736,72 L772,52 L806,34 L838,48 L870,76 L904,94 L938,112 L972,132 L1006,146 L1042,132 L1078,118 L1112,126 L1148,144 L1186,168 L1226,184 L1266,206 L1308,230 L1350,254 L1394,280 L1440,304 L1440,420 L0,420 Z"
          />
          {/* Snowcaps following the same major crest line for realism. */}
          <path
            fill="rgba(235,244,255,0.9)"
            d="M414,170 L442,154 L468,148 L494,154 L522,146 L548,136 L574,122 L602,108 L630,100 L656,90 L682,72 L706,66 L730,72 L752,64 L776,52 L800,40 L822,44 L844,56 L866,72 L890,88 L914,98 L938,112 L960,120 L936,120 L908,108 L880,96 L854,80 L830,64 L806,56 L782,62 L758,74 L734,84 L706,78 L678,84 L650,96 L622,108 L596,118 L568,132 L540,144 L512,154 L484,160 L454,160 L430,168 Z"
          />
          <path
            fill="rgba(255,255,255,0.45)"
            d="M736,72 L758,62 L780,52 L802,40 L824,44 L810,54 L792,64 L772,72 L752,78 Z"
          />
        </svg>
      </motion.div>

      <motion.div style={{ y: nearY }} className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 420" className="w-full h-auto min-h-[44vh] md:min-h-[60vh] mountain-drift-fast" preserveAspectRatio="none">
          {/* Dark foothills and lower ridges, matching the reference depth stack. */}
          <path
            fill="#36567f"
            d="M0,378 L72,364 L144,346 L216,324 L286,338 L356,312 L426,326 L500,300 L572,316 L644,294 L716,312 L792,288 L868,308 L946,286 L1026,308 L1104,292 L1182,314 L1260,298 L1338,320 L1412,332 L1440,338 L1440,420 L0,420 Z"
          />
          <path
            fill="#17345a"
            d="M0,394 L86,382 L170,366 L252,348 L336,358 L420,336 L504,350 L590,332 L676,346 L760,326 L848,344 L936,324 L1022,342 L1108,328 L1192,346 L1278,334 L1364,352 L1440,362 L1440,420 L0,420 Z"
          />
        </svg>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#77b6f0]/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0f172a] to-transparent opacity-90" />
    </div>
  )
}
