"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "What is BSSOC", href: "/what-is-bssoc" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "How to Join", href: "/how-to-join" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const activeHref = useMemo(
    () => navItems.find((item) => pathname === item.href)?.href ?? "",
    [pathname]
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] px-6 md:px-12 py-5 pointer-events-none">
      <div className="mx-auto max-w-full flex items-center justify-end pointer-events-auto">
        <div className="hidden md:flex items-center gap-1 bg-[#0A0A0A]/85 border border-white/10 rounded-full px-3 py-2 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeHref === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors ${
                  isActive ? "text-black bg-white" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <button
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#0A0A0A]/85 border border-white/15 text-white"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 mx-auto max-w-full bg-[#0A0A0A]/95 border border-white/10 rounded-2xl p-3 backdrop-blur-md pointer-events-auto">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeHref === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? "bg-white text-black" : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
