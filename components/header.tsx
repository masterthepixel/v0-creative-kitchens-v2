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
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className={`font-bold text-xl ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}>
            Creative Kitchens
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              scrolled ? "text-gray-900 dark:text-white" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              scrolled ? "text-gray-900 dark:text-white" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/kitchen-sink"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              scrolled ? "text-gray-900 dark:text-white" : "text-white"
            }`}
          >
            Kitchen Sink
          </Link>
          <LanguageSwitcherWithFlags />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
