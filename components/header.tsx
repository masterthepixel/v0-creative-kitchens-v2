"use client"

import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import LanguageSwitcherWithFlags from "./language-switcher-with-flags"
import { useEffect, useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { language } = useLanguage()

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
          <Link
            href={`/${language}`}
            className={`font-bold text-xl ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
          >
            Creative Kitchens
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href={`/${language}`}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              scrolled ? "text-gray-900 dark:text-white" : "text-white"
            }`}
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-gray-900 dark:text-white" : "text-white"
              }`}
            >
              Products <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link href={`/${language}/products/cabinets`}>{language === "en" ? "Cabinets" : "Gabinetes"}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/${language}/products/countertops`}>
                  {language === "en" ? "Countertops" : "Encimeras"}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/${language}/products/cabinet-lighting`}>
                  {language === "en" ? "Cabinet Lighting" : "Iluminación para Gabinetes"}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/${language}/products/bath-tubs`}>{language === "en" ? "Bath Tubs" : "Bañeras"}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/${language}/products`}>
                  {language === "en" ? "View All Products" : "Ver Todos los Productos"}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href={`/${language}/about`}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              scrolled ? "text-gray-900 dark:text-white" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            href={`/${language}/kitchen-sink`}
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
