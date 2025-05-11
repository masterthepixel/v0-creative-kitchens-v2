"use client"

import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import LanguageSwitcherWithFlags from "./language-switcher-with-flags"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener to enhance glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${scrolled ? "shadow-lg" : ""}`}
      style={{
        borderRadius: scrolled ? "0px" : "0 0 20px 20px",
        backgroundColor: "rgba(255, 255, 255, 0.45)",
        backdropFilter: "blur(15px)",
        boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
        borderBottom: "1px solid rgba(255, 255, 255, .25)",
        borderLeft: "1px solid rgba(255, 255, 255, .25)",
        borderRight: "1px solid rgba(255, 255, 255, .25)",
        borderTop: scrolled ? "1px solid rgba(255, 255, 255, .25)" : "none",
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl">
            Creative Kitchens
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/kitchen-sink" className="text-sm font-medium transition-colors hover:text-primary">
            Kitchen Sink
          </Link>
          <LanguageSwitcherWithFlags />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
