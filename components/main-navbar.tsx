"use client"

import { useState } from "react"
import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Menu, MenuItem } from "@/components/ui/navbar-menu"
import ThemeToggle from "./theme-toggle"
import LanguageSwitcherWithFlags from "./language-switcher-with-flags"

export default function MainNavbar() {
  const [active, setActive] = useState<string | null>(null)
  const { language } = useLanguage()

  // Function to generate localized URLs
  const getLocalizedUrl = (path: string) => `/${language}${path}`

  // Product categories with images - expanded to 12 categories
  const productCategories = [
    {
      name: language === "en" ? "Kitchen Cabinets" : "Gabinetes de Cocina",
      description:
        language === "en"
          ? "Premium cabinet collections for your kitchen"
          : "Colecciones premium de gabinetes para tu cocina",
      href: getLocalizedUrl("/products/cabinets"),
      src: "/modern-kitchen-cabinets.png",
    },
    {
      name: language === "en" ? "Countertops" : "Encimeras",
      description: language === "en" ? "Elegant countertop solutions" : "Soluciones elegantes para encimeras",
      href: getLocalizedUrl("/products/countertops"),
      src: "/kitchen-countertops.png",
    },
    {
      name: language === "en" ? "Cabinet Lighting" : "Iluminación para Gabinetes",
      description: language === "en" ? "Illuminate your kitchen space" : "Ilumina el espacio de tu cocina",
      href: getLocalizedUrl("/products/cabinet-lighting"),
      src: "/cabinet-lighting.png",
    },
    {
      name: language === "en" ? "Bath Tubs" : "Bañeras",
      description: language === "en" ? "Luxury bath solutions" : "Soluciones de baño de lujo",
      href: getLocalizedUrl("/products/bath-tubs"),
      src: "/luxury-bathtub.png",
    },
    {
      name: language === "en" ? "Kitchen Flooring" : "Pisos de Cocina",
      description:
        language === "en" ? "Durable and stylish flooring options" : "Opciones de pisos duraderos y elegantes",
      href: getLocalizedUrl("/products/flooring"),
      src: "/kitchen-flooring.png",
    },
    {
      name: language === "en" ? "Kitchen Appliances" : "Electrodomésticos",
      description:
        language === "en" ? "Modern appliances for your kitchen" : "Electrodomésticos modernos para tu cocina",
      href: getLocalizedUrl("/products/appliances"),
      src: "/modern-kitchen-appliances.png",
    },
    {
      name: language === "en" ? "Faucets" : "Grifos",
      description: language === "en" ? "Stylish faucets for kitchen and bath" : "Grifos elegantes para cocina y baño",
      href: getLocalizedUrl("/products/faucets"),
      src: "/kitchen-faucets.png",
    },
    {
      name: language === "en" ? "Hardware" : "Herrajes",
      description:
        language === "en" ? "Quality hardware for cabinets and doors" : "Herrajes de calidad para gabinetes y puertas",
      href: getLocalizedUrl("/products/hardware"),
      src: "/cabinet-hardware.png",
    },
    {
      name: language === "en" ? "Sinks" : "Fregaderos",
      description:
        language === "en" ? "Kitchen and bathroom sink options" : "Opciones de fregaderos para cocina y baño",
      href: getLocalizedUrl("/products/sinks"),
      src: "/modern-kitchen-sink.png",
    },
    {
      name: language === "en" ? "Medicine Cabinets" : "Botiquines",
      description: language === "en" ? "Functional storage for your bathroom" : "Almacenamiento funcional para tu baño",
      href: getLocalizedUrl("/products/medicine-cabinets"),
      src: "/medicine-cabinet.png",
    },
    {
      name: language === "en" ? "Door Hardware" : "Herrajes para Puertas",
      description: language === "en" ? "Stylish handles and knobs for doors" : "Manijas y pomos elegantes para puertas",
      href: getLocalizedUrl("/products/door-hardware"),
      src: "/door-hardware.png",
    },
    {
      name: language === "en" ? "Plumbing" : "Plomería",
      description:
        language === "en"
          ? "Quality plumbing fixtures and solutions"
          : "Accesorios y soluciones de plomería de calidad",
      href: getLocalizedUrl("/products/plumbing"),
      src: "/plumbing-fixtures.png",
    },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={getLocalizedUrl("/")}
          className="font-bold text-2xl text-gray-900 dark:text-white hover:opacity-90 transition-colors"
        >
          Creative Kitchens
        </Link>

        {/* Navigation - Only visible on desktop */}
        <div className="hidden lg:block">
          <div className="relative z-50">
            <Menu setActive={setActive}>
              {/* Home - Simple link, no dropdown */}
              <Link href={getLocalizedUrl("/")} className="text-black dark:text-white hover:opacity-90 px-4">
                {language === "en" ? "Home" : "Inicio"}
              </Link>

              {/* Products - With dropdown */}
              <MenuItem setActive={setActive} active={active} item={language === "en" ? "Products" : "Productos"}>
                <div className="w-screen max-w-5xl flex-auto overflow-hidden rounded-3xl bg-white dark:bg-black text-sm shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-100/10">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-3">
                    {productCategories.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900"
                      >
                        <div className="mt-1 flex size-16 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700 overflow-hidden">
                          <img
                            src={item.src || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <a href={item.href} className="font-semibold text-gray-900 dark:text-white">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          {/* Reduced line height for description text */}
                          <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-tight">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-8 py-6">
                    <div className="flex items-center gap-x-3">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {language === "en" ? "Custom Solutions" : "Soluciones Personalizadas"}
                      </h3>
                      <p className="rounded-full bg-blue-600/10 px-2.5 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                        {language === "en" ? "New" : "Nuevo"}
                      </p>
                    </div>
                    {/* Reduced line height for description text */}
                    <p className="mt-2 text-sm leading-tight text-gray-600 dark:text-gray-400">
                      {language === "en"
                        ? "Explore our custom design services for your unique kitchen and bath needs."
                        : "Explore nuestros servicios de diseño personalizado para sus necesidades únicas de cocina y baño."}
                    </p>
                    <div className="mt-4">
                      <a
                        href={getLocalizedUrl("/products")}
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                      >
                        {language === "en" ? "View all products →" : "Ver todos los productos →"}
                      </a>
                    </div>
                  </div>
                </div>
              </MenuItem>

              {/* Contact - Simple link, no dropdown */}
              <Link href={getLocalizedUrl("/contact")} className="text-black dark:text-white hover:opacity-90 px-4">
                {language === "en" ? "Contact" : "Contacto"}
              </Link>
            </Menu>
          </div>
        </div>

        {/* Language Switcher and Theme Toggle */}
        <div className="flex items-center gap-2">
          <LanguageSwitcherWithFlags />
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
