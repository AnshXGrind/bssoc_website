"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const TYPEFORM_BASE_URL = process.env.NEXT_PUBLIC_TYPEFORM_URL || "https://form.typeform.com/to/GzKVGFkr";

const joinOptions = [
  { label: "Contributor", href: `${TYPEFORM_BASE_URL}?role=contributor`, primary: true },
  { label: "Mentor", href: `${TYPEFORM_BASE_URL}?role=mentor`, primary: false },
  { label: "Project Admin", href: `${TYPEFORM_BASE_URL}?role=project-admin`, primary: false },
];

export default function HowToJoinPage() {
  return (
    <main className="page-shell">
      <div className="palmer-bar">
        <span>JOIN BSSOC</span>
        <span className="hidden md:inline-block">BECOME A MEMBER</span>
        <span>CURRENT REGISTRATION</span>
      </div>

      <section className="page-hero-section pb-0">
        <motion.div {...reveal} className="w-full">
          <h1 className="palmer-huge-title mb-16 text-white">
            HOW TO<br />
            <span className="text-white/60">JOIN.</span>
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-white/20 text-white/80 font-mono text-lg uppercase">
            <li className="p-8 border-b md:border-b-0 md:border-r border-white/20">Developers stuck in tutorial loop.</li>
            <li className="p-8 border-b md:border-b-0 md:border-r border-white/20">People serious about building.</li>
            <li className="p-8">Anyone who wants real experience.</li>
          </ul>
        </motion.div>
      </section>

      <section className="page-alt-section pt-16 border-t-0">
        <motion.div {...reveal} className="w-full">
          <div className="palmer-bar mb-16 border-t-0">
             <span>APPLICATION</span>
             <span>CHOOSE ROLE</span>
          </div>
          <div className="text-right text-white/60 font-mono uppercase text-xl md:text-2xl mb-12">
             READY TO BUILD SOMETHING REAL? <br/>
             STOP LEARNING. START BUILDING.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-white/20 font-mono uppercase">
            {joinOptions.map((option, idx) => (
              <a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noreferrer"
                className={`p-10 md:p-12 flex flex-col justify-between aspect-[4/3] transition-colors duration-300 ${
                  idx !== 2 ? "border-b md:border-b-0 md:border-r border-white/20" : ""
                } hover:bg-white hover:text-black group text-white`}
              >
                <div className="flex justify-between items-start w-full">
                  <span className="text-white/40 group-hover:text-black/40 text-sm">0{idx + 1}</span>
                  <span className="text-4xl group-hover:translate-x-2 transition-transform">→</span>
                </div>
                <span className="text-2xl md:text-3xl font-bold mt-auto">{option.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}