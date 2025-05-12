"use client"

import { useState } from "react"
import { useLanguage } from "./language-provider"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import ThemeToggle from "./theme-toggle"
import LanguageSwitcherWithFlags from "./language-switcher-with-flags"
import {
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
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  const { language } = useLanguage()
  const pathname = usePathname()

  // Product categories with icons
  const productCategories = [
    {
      name: language === "en" ? "Cabinets" : "Gabinetes",
      description:
        language === "en"
          ? "Transform your space with premium cabinet collections"
          : "Transforma tu espacio con colecciones premium de gabinetes",
      href: `/${language}/products/cabinets`,
      icon: <Home className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Countertops" : "Encimeras",
      description:
        language === "en"
          ? "Discover durable, elegant countertop solutions"
          : "Descubre soluciones duraderas y elegantes para encimeras",
      href: `/${language}/products/countertops`,
      icon: <LayoutGrid className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Cabinet Lighting" : "Iluminación para Gabinetes",
      description:
        language === "en"
          ? "Illuminate your space with strategic lighting options"
          : "Ilumina tu espacio con opciones estratégicas de iluminación",
      href: `/${language}/products/cabinet-lighting`,
      icon: <Lightbulb className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Bath Tubs" : "Bañeras",
      description:
        language === "en"
          ? "Indulge in luxury with our selection of bathtubs"
          : "Disfruta del lujo con nuestra selección de bañeras",
      href: `/${language}/products/bath-tubs`,
      icon: <Bath className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Flooring" : "Pisos",
      description:
        language === "en"
          ? "Step onto quality with our range of flooring options"
          : "Camina sobre calidad con nuestra gama de opciones de pisos",
      href: `/${language}/products/flooring`,
      icon: <Palette className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Appliances" : "Electrodomésticos",
      description:
        language === "en"
          ? "Enhance your home with cutting-edge appliances"
          : "Mejora tu hogar con electrodomésticos de vanguardia",
      href: `/${language}/products/appliances`,
      icon: <Tv className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Hardware" : "Herrajes",
      description:
        language === "en"
          ? "Perfect your design with our curated hardware collection"
          : "Perfecciona tu diseño con nuestra colección de herrajes",
      href: `/${language}/products/hardware`,
      icon: <Wrench className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Medicine Cabinets" : "Botiquines",
      description:
        language === "en"
          ? "Combine storage and style with our medicine cabinets"
          : "Combina almacenamiento y estilo con nuestros botiquines",
      href: `/${language}/products/medicine-cabinets`,
      icon: <Package className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Faucets" : "Grifos",
      description:
        language === "en"
          ? "Elevate your daily routine with our premium faucets"
          : "Eleva tu rutina diaria con nuestros grifos premium",
      href: `/${language}/products/faucets`,
      icon: <Droplet className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Door Hardware" : "Herrajes para Puertas",
      description:
        language === "en"
          ? "Make a statement with distinctive door hardware options"
          : "Haz una declaración con opciones distintivas de herrajes para puertas",
      href: `/${language}/products/door-hardware`,
      icon: <Key className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Plumbing" : "Plomería",
      description:
        language === "en"
          ? "Build with confidence using our reliable plumbing solutions"
          : "Construye con confianza usando nuestras soluciones confiables de plomería",
      href: `/${language}/products/plumbing`,
      icon: <PipetteIcon className="h-6 w-6 text-yellow-400" />,
    },
    {
      name: language === "en" ? "Sinks" : "Fregaderos",
      description:
        language === "en"
          ? "Choose from our versatile sink collection"
          : "Elige de nuestra versátil colección de fregaderos",
      href: `/${language}/products/sinks`,
      icon: <ShowerHead className="h-6 w-6 text-yellow-400" />,
    },
  ]

  // Check if a path is active
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link
          href={`/${language}`}
          className="font-bold text-2xl text-blue-500 dark:text-white mr-8 hover:text-blue-600 dark:hover:text-blue-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 rounded-md"
        >
          Creative Kitchens
        </Link>

        <div className="flex-1 flex justify-center">
          <Menu setActive={setActive}>
            {/* Regular link for Home */}
            <Link
              href={`/${language}`}
              className={cn(
                "text-white hover:text-yellow-400 transition-colors px-4 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 rounded-md",
                isActive(`/${language}`) && "text-yellow-400",
              )}
            >
              {language === "en" ? "Home" : "Inicio"}
            </Link>

            {/* Products with dropdown */}
            <MenuItem setActive={setActive} active={active} item={language === "en" ? "Products" : "Productos"}>
              <div className="text-sm grid grid-cols-3 gap-6 p-6 w-[800px] dropdown-menu max-h-[80vh] overflow-y-auto">
                {productCategories.map((category, index) => (
                  <ProductItem
                    key={index}
                    title={category.name}
                    href={category.href}
                    description={category.description}
                    icon={category.icon}
                  />
                ))}
                <div className="col-span-3 mt-6 pt-4 border-t border-gray-700">
                  <Link
                    href={`/${language}/products`}
                    className="text-yellow-400 font-medium flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md px-2 py-1 -mx-2 -my-1"
                  >
                    {language === "en" ? "View all products" : "Ver todos los productos"}
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </MenuItem>

            {/* Regular link for Contact */}
            <Link
              href={`/${language}/contact`}
              className={cn(
                "text-white hover:text-yellow-400 transition-colors px-4 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 rounded-md",
                isActive(`/${language}/contact`) && "text-yellow-400",
              )}
            >
              {language === "en" ? "Contact" : "Contacto"}
            </Link>

            {/* Regular link for Kitchen Sink */}
            <Link
              href={`/${language}/kitchen-sink`}
              className={cn(
                "text-white hover:text-yellow-400 transition-colors px-4 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 rounded-md",
                isActive(`/${language}/kitchen-sink`) && "text-yellow-400",
              )}
            >
              Kitchen Sink
            </Link>
          </Menu>
        </div>

        <div className="flex items-center gap-2 ml-8">
          <LanguageSwitcherWithFlags />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
