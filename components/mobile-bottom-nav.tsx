"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingBag, Bath, Phone, X, ImageIcon, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileBottomNav() {
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const [activePopover, setActivePopover] = useState<string | null>(null)
  const [translations, setTranslations] = useState({
    home: "Home",
    kitchen: "Kitchen",
    bathroom: "Bathroom",
    contact: "Contact",
    language: "Language",
    kitchenEssentials: "Kitchen Essentials",
    bathroomSolutions: "Bathroom & Hardware Solutions",
  })

  // Update translations when language changes
  useEffect(() => {
    if (language === "es") {
      setTranslations({
        home: "Inicio",
        kitchen: "Cocina",
        bathroom: "Baño",
        contact: "Contacto",
        language: "Idioma",
        kitchenEssentials: "Esenciales de Cocina",
        bathroomSolutions: "Soluciones para Baños y Herrajes",
      })
    } else {
      setTranslations({
        home: "Home",
        kitchen: "Kitchen",
        bathroom: "Bathroom",
        contact: "Contact",
        language: "Language",
        kitchenEssentials: "Kitchen Essentials",
        bathroomSolutions: "Bathroom & Hardware Solutions",
      })
    }
  }, [language])

  // Kitchen products
  const kitchenItems = [
    { nameEN: "Cabinets", nameES: "Gabinetes", href: "cabinets" },
    { nameEN: "Countertops", nameES: "Encimeras", href: "countertops" },
    { nameEN: "Cabinet Lighting", nameES: "Iluminación para Gabinetes", href: "cabinet-lighting" },
    { nameEN: "Flooring", nameES: "Pisos", href: "flooring" },
    { nameEN: "Appliances", nameES: "Electrodomésticos", href: "appliances" },
    { nameEN: "Sinks", nameES: "Fregaderos", href: "sinks" },
  ]

  // Bathroom products
  const bathroomItems = [
    { nameEN: "Bath Tubs", nameES: "Bañeras", href: "bath-tubs" },
    { nameEN: "Medicine Cabinets", nameES: "Botiquines", href: "medicine-cabinets" },
    { nameEN: "Faucets", nameES: "Grifos", href: "faucets" },
    { nameEN: "Door Hardware", nameES: "Herrajes para Puertas", href: "door-hardware" },
    { nameEN: "Plumbing", nameES: "Plomería", href: "plumbing" },
    { nameEN: "Hardware", nameES: "Herrajes", href: "hardware" },
  ]

  const togglePopover = (name: string) => {
    if (activePopover === name) {
      setActivePopover(null)
    } else {
      setActivePopover(name)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (activePopover) {
        setActivePopover(null)
      }
    }

    // Add a slight delay to prevent immediate closing when clicking the button
    const handleClick = () => {
      setTimeout(() => {
        window.addEventListener("click", handleClickOutside, { once: true })
      }, 100)
    }

    if (activePopover) {
      window.addEventListener("click", handleClick, { once: true })
    }

    return () => {
      window.removeEventListener("click", handleClickOutside)
      window.removeEventListener("click", handleClick)
    }
  }, [activePopover])

  // Close popover on route change
  useEffect(() => {
    setActivePopover(null)
  }, [pathname])

  // Check if a path is active
  const isActive = (path: string) => {
    if (path === `/${language}` && pathname === `/${language}`) {
      return true
    }
    if (path === `/${language}/contact` && pathname === `/${language}/contact`) {
      return true
    }
    return false
  }

  // Check if a product category is active
  const isProductActive = (category: string) => {
    return pathname.includes(`/${language}/products/${category}`)
  }

  // Check if any kitchen product is active
  const isKitchenActive = kitchenItems.some((item) => isProductActive(item.href))

  // Check if any bathroom product is active
  const isBathroomActive = bathroomItems.some((item) => isProductActive(item.href))

  return (
    <div className="lg:hidden">
      {/* Backdrop overlay when popover is active */}
      <AnimatePresence>
        {activePopover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
            onClick={() => setActivePopover(null)}
          />
        )}
      </AnimatePresence>

      {/* Kitchen Popover */}
      <AnimatePresence>
        {activePopover === "kitchen" && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-16 left-0 w-full z-50"
          >
            <div className="mx-4 mb-2 rounded-xl overflow-hidden backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 dark:border-gray-700">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-primary">{translations.kitchenEssentials}</h3>
                  <button
                    onClick={() => setActivePopover(null)}
                    className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {kitchenItems.map((item) => (
                    <Link
                      key={item.href}
                      href={`/${language}/products/${item.href}`}
                      className={`py-2 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center ${
                        isProductActive(item.href)
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                      }`}
                      onClick={() => setActivePopover(null)}
                    >
                      <ImageIcon size={16} className="mr-2 opacity-70 flex-shrink-0" />
                      <span className="truncate">{language === "en" ? item.nameEN : item.nameES}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bathroom Popover */}
      <AnimatePresence>
        {activePopover === "bathroom" && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-16 left-0 w-full z-50"
          >
            <div className="mx-4 mb-2 rounded-xl overflow-hidden backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 dark:border-gray-700">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-primary">{translations.bathroomSolutions}</h3>
                  <button
                    onClick={() => setActivePopover(null)}
                    className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {bathroomItems.map((item) => (
                    <Link
                      key={item.href}
                      href={`/${language}/products/${item.href}`}
                      className={`py-2 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center ${
                        isProductActive(item.href)
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                      }`}
                      onClick={() => setActivePopover(null)}
                    >
                      <ImageIcon size={16} className="mr-2 opacity-70 flex-shrink-0" />
                      <span className="truncate">{language === "en" ? item.nameEN : item.nameES}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language Popover */}
      <AnimatePresence>
        {activePopover === "language" && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-16 left-0 w-full z-50"
          >
            <div className="mx-4 mb-2 rounded-xl overflow-hidden backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 dark:border-gray-700">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-primary">{translations.language}</h3>
                  <button
                    onClick={() => setActivePopover(null)}
                    className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setLanguage("en")
                      setActivePopover(null)
                    }}
                    className={`py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center ${
                      language === "en"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    }`}
                  >
                    <span className="mr-2 text-lg">🇺🇸</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("es")
                      setActivePopover(null)
                    }}
                    className={`py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center ${
                      language === "es"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    }`}
                  >
                    <span className="mr-2 text-lg">🇪🇸</span>
                    <span>Español</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300, delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      >
        <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] border-t border-gray-200 dark:border-gray-800 py-2">
          <div className="flex justify-around">
            <div className="flex-1 group">
              <Link
                href={`/${language}`}
                className={`flex flex-col items-center justify-center text-center pt-1 ${
                  isActive(`/${language}`)
                    ? "text-primary"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary"
                }`}
              >
                <Home size={22} />
                <span className="text-xs mt-1">{translations.home}</span>
                <div
                  className={`w-6 h-1 mt-1 rounded-full ${isActive(`/${language}`) ? "bg-primary" : "bg-transparent"}`}
                ></div>
              </Link>
            </div>

            <div className="flex-1 group">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  togglePopover("kitchen")
                }}
                className={`w-full flex flex-col items-center justify-center text-center pt-1 focus:outline-none ${
                  isKitchenActive || activePopover === "kitchen"
                    ? "text-primary"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary"
                }`}
              >
                <ShoppingBag size={22} />
                <span className="text-xs mt-1">{translations.kitchen}</span>
                <div
                  className={`w-6 h-1 mt-1 rounded-full ${
                    isKitchenActive || activePopover === "kitchen" ? "bg-primary" : "bg-transparent"
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex-1 group">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  togglePopover("bathroom")
                }}
                className={`w-full flex flex-col items-center justify-center text-center pt-1 focus:outline-none ${
                  isBathroomActive || activePopover === "bathroom"
                    ? "text-primary"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary"
                }`}
              >
                <Bath size={22} />
                <span className="text-xs mt-1">{translations.bathroom}</span>
                <div
                  className={`w-6 h-1 mt-1 rounded-full ${
                    isBathroomActive || activePopover === "bathroom" ? "bg-primary" : "bg-transparent"
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex-1 group">
              <Link
                href={`/${language}/contact`}
                className={`flex flex-col items-center justify-center text-center pt-1 ${
                  isActive(`/${language}/contact`)
                    ? "text-primary"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary"
                }`}
              >
                <Phone size={22} />
                <span className="text-xs mt-1">{translations.contact}</span>
                <div
                  className={`w-6 h-1 mt-1 rounded-full ${
                    isActive(`/${language}/contact`) ? "bg-primary" : "bg-transparent"
                  }`}
                ></div>
              </Link>
            </div>

            <div className="flex-1 group">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  togglePopover("language")
                }}
                className={`w-full flex flex-col items-center justify-center text-center pt-1 focus:outline-none ${
                  activePopover === "language"
                    ? "text-primary"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary"
                }`}
              >
                <Globe size={22} />
                <span className="text-xs mt-1">{translations.language}</span>
                <div
                  className={`w-6 h-1 mt-1 rounded-full ${activePopover === "language" ? "bg-primary" : "bg-transparent"}`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
