"use client"

import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import LanguageSwitcherWithFlags from "./language-switcher-with-flags"
import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"
import { usePathname } from "next/navigation"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import {
  ChevronDown,
  Home,
  LayoutGrid,
  Lightbulb,
  Bath,
  Palette,
  Tv,
  Wrench,
  Package,
  Droplet,
  Key,
  PipetteIcon,
  ShowerHead,
} from "lucide-react"

interface HeaderProps {
  className?: string
}

export default function Header({ className = "" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const { language } = useLanguage()
  const pathname = usePathname()

  // Add scroll event listener to enhance glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if a path is active
  const isActive = (path: string) => {
    return pathname === path
  }

  const products = [
    {
      name: language === "en" ? "Cabinets" : "Gabinetes",
      description:
        language === "en"
          ? "Transform your space with premium cabinet collections"
          : "Transforma tu espacio con colecciones premium de gabinetes",
      href: `/${language}/products/cabinets`,
      icon: Home,
    },
    {
      name: language === "en" ? "Countertops" : "Encimeras",
      description:
        language === "en"
          ? "Discover durable, elegant countertop solutions"
          : "Descubre soluciones duraderas y elegantes para encimeras",
      href: `/${language}/products/countertops`,
      icon: LayoutGrid,
    },
    {
      name: language === "en" ? "Cabinet Lighting" : "Iluminación para Gabinetes",
      description:
        language === "en"
          ? "Illuminate your space with strategic lighting options"
          : "Ilumina tu espacio con opciones estratégicas de iluminación",
      href: `/${language}/products/cabinet-lighting`,
      icon: Lightbulb,
    },
    {
      name: language === "en" ? "Bath Tubs" : "Bañeras",
      description:
        language === "en"
          ? "Indulge in luxury with our selection of bathtubs"
          : "Disfruta del lujo con nuestra selección de bañeras",
      href: `/${language}/products/bath-tubs`,
      icon: Bath,
    },
    {
      name: language === "en" ? "Flooring" : "Pisos",
      description:
        language === "en"
          ? "Step onto quality with our range of flooring options"
          : "Camina sobre calidad con nuestra gama de opciones de pisos",
      href: `/${language}/products/flooring`,
      icon: Palette,
    },
    {
      name: language === "en" ? "Appliances" : "Electrodomésticos",
      description:
        language === "en"
          ? "Enhance your home with cutting-edge appliances"
          : "Mejora tu hogar con electrodomésticos de vanguardia",
      href: `/${language}/products/appliances`,
      icon: Tv,
    },
    {
      name: language === "en" ? "Hardware" : "Herrajes",
      description:
        language === "en"
          ? "Perfect your design with our curated hardware collection"
          : "Perfecciona tu diseño con nuestra colección de herrajes",
      href: `/${language}/products/hardware`,
      icon: Wrench,
    },
    {
      name: language === "en" ? "Medicine Cabinets" : "Botiquines",
      description:
        language === "en"
          ? "Combine storage and style with our medicine cabinets"
          : "Combina almacenamiento y estilo con nuestros botiquines",
      href: `/${language}/products/medicine-cabinets`,
      icon: Package,
    },
    {
      name: language === "en" ? "Faucets" : "Grifos",
      description:
        language === "en"
          ? "Elevate your daily routine with our premium faucets"
          : "Eleva tu rutina diaria con nuestros grifos premium",
      href: `/${language}/products/faucets`,
      icon: Droplet,
    },
    {
      name: language === "en" ? "Door Hardware" : "Herrajes para Puertas",
      description:
        language === "en"
          ? "Make a statement with distinctive door hardware options"
          : "Haz una declaración con opciones distintivas de herrajes para puertas",
      href: `/${language}/products/door-hardware`,
      icon: Key,
    },
    {
      name: language === "en" ? "Plumbing" : "Plomería",
      description:
        language === "en"
          ? "Build with confidence using our reliable plumbing solutions"
          : "Construye con confianza usando nuestras soluciones confiables de plomería",
      href: `/${language}/products/plumbing`,
      icon: PipetteIcon,
    },
    {
      name: language === "en" ? "Sinks" : "Fregaderos",
      description:
        language === "en"
          ? "Choose from our versatile sink collection"
          : "Elige de nuestra versátil colección de fregaderos",
      href: `/${language}/products/sinks`,
      icon: ShowerHead,
    },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 glass-navbar ${
        scrolled ? "scrolled" : ""
      } ${className}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link
            href={`/${language}`}
            className={`font-bold text-xl transition-all duration-300 ${
              scrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white drop-shadow-md"
            }`}
          >
            Creative Kitchens
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href={`/${language}`}
            className={`text-sm font-medium transition-all duration-300 ${
              scrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white drop-shadow-sm"
            } hover:text-primary relative px-2 py-1 ${
              isActive(`/${language}`)
                ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                : ""
            }`}
          >
            Home
          </Link>

          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className={`inline-flex items-center gap-x-1 text-sm font-medium transition-all duration-300 ${
                    scrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white drop-shadow-sm"
                  } hover:text-primary px-2 py-1 ${open ? "text-primary" : ""}`}
                >
                  <span>{language === "en" ? "Products" : "Productos"}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </PopoverButton>

                <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-slate-800 text-sm shadow-lg ring-1 ring-slate-900/10 dark:ring-slate-700/50 lg:max-w-3xl">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="dropdown-item group relative flex gap-x-6 rounded-lg p-4 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
                        >
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300">
                            <item.icon
                              aria-hidden="true"
                              className="dropdown-icon size-6 text-slate-600 dark:text-yellow-400 transition-all duration-300"
                            />
                          </div>
                          <div>
                            <Link
                              href={item.href}
                              className="dropdown-heading font-semibold text-slate-900 dark:text-white text-base"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 px-8 py-6">
                      <div className="flex items-center gap-x-3">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                          {language === "en" ? "All Products" : "Todos los Productos"}
                        </h3>
                        <p className="rounded-full bg-primary/10 px-2.5 py-1.5 text-xs font-semibold text-primary dark:bg-yellow-400/20 dark:text-yellow-400">
                          {language === "en" ? "Browse" : "Explorar"}
                        </p>
                      </div>
                      <p className="mt-2 text-xs text-slate-700 dark:text-slate-300">
                        {language === "en"
                          ? "Explore our complete collection of premium kitchen and bathroom products."
                          : "Explora nuestra colección completa de productos premium para cocina y baño."}
                      </p>
                      <Link
                        href={`/${language}/products`}
                        className="mt-4 block text-sm font-semibold text-primary dark:text-yellow-400 hover:text-primary/80 dark:hover:text-yellow-500 transition-colors duration-300"
                      >
                        {language === "en" ? "View all products →" : "Ver todos los productos →"}
                      </Link>
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link
            href={`/${language}/about`}
            className={`text-sm font-medium transition-all duration-300 ${
              scrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white drop-shadow-sm"
            } hover:text-primary relative px-2 py-1 ${
              isActive(`/${language}/about`)
                ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                : ""
            }`}
          >
            About
          </Link>
          <Link
            href={`/${language}/contact`}
            className={`text-sm font-medium transition-all duration-300 ${
              scrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white drop-shadow-sm"
            } hover:text-primary relative px-2 py-1 ${
              isActive(`/${language}/contact`)
                ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                : ""
            }`}
          >
            {language === "en" ? "Contact" : "Contacto"}
          </Link>
          <Link
            href={`/${language}/kitchen-sink`}
            className={`text-sm font-medium transition-all duration-300 ${
              scrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white drop-shadow-sm"
            } hover:text-primary relative px-2 py-1 ${
              isActive(`/${language}/kitchen-sink`)
                ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                : ""
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
