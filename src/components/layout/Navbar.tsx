"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

import Magnetic from "./Magnetic"

const navItems = [
  { label: "About", href: "/what-is-bssoc" },
  { label: "Works", href: "/how-it-works" },
  { label: "Join", href: "/how-to-join" },
]

export default function Navbar() {
  const pathname = usePathname()

  const activeHref = useMemo(
    () => navItems.find((item) => pathname === item.href)?.href ?? "",
    [pathname]
  )

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] pointer-events-auto">
      <div className="flex items-center bg-slate-900/40 backdrop-blur-md border border-white/10 text-white px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-[1.02]">
        <div className="flex items-center gap-4 text-sm font-medium tracking-wide">
          {navItems.map((item, index) => {
            const isActive = activeHref === item.href
            return (
              <div key={item.href} className="flex items-center gap-4">
                <Magnetic strength={0.2}>
                  <Link
                    href={item.href}
                    className={`px-3 py-1.5 rounded-full transition-colors duration-300 ${
                      isActive ? "bg-white/10 text-white font-bold" : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </Magnetic>
                {index < navItems.length - 1 && (
                  <span className="text-white/30 font-light text-base leading-none translate-y-[-1px]">/</span>
                )}
              </div>
            )
          })}
        </div>
        <Magnetic strength={0.3}>
          <Link href="/" className="ml-8 text-xl font-bold tracking-tight px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors">
            BSSOC
          </Link>
        </Magnetic>
      </div>
    </nav>
  )
}
