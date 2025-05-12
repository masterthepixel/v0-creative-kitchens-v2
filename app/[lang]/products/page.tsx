"use client"

import { useLanguage } from "@/components/language-provider"
import { useState, useEffect } from "react"
import BentoGridDemo from "@/components/bento-grid-demo"
import BentoGridThirdDemo from "@/components/bento-grid-demo-3"
import { motion } from "framer-motion"
import LogoMarquee from "@/components/logo-marquee"

export default function ProductsPage() {
  const { language } = useLanguage()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [kitchenSectionTitle, setKitchenSectionTitle] = useState("")
  const [bathroomSectionTitle, setBathroomSectionTitle] = useState("")
  const [partnersTitle, setPartnersTitle] = useState("")

  useEffect(() => {
    if (language === "en") {
      setTitle("Our Products")
      setDescription("Explore our wide range of high-quality products for your kitchen and bathroom.")
      setKitchenSectionTitle("Kitchen Essentials")
      setBathroomSectionTitle("Bathroom & Hardware Solutions")
      setPartnersTitle("Trusted by Leading Brands")
    } else {
      setTitle("Nuestros Productos")
      setDescription("Explore nuestra amplia gama de productos de alta calidad para su cocina y baño.")
      setKitchenSectionTitle("Esenciales de Cocina")
      setBathroomSectionTitle("Soluciones para Baños y Herrajes")
      setPartnersTitle("Marcas de Confianza")
    }
  }, [language])

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            {description}
          </motion.p>
        </div>

        {/* First grid - BentoGridDemo */}
        <div className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-8"
          >
            {kitchenSectionTitle}
          </motion.h2>
          <BentoGridDemo />
        </div>

        {/* Logo Marquee Section */}
        <div className="mt-24 mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-12"
          >
            {partnersTitle}
          </motion.h2>
          <LogoMarquee />
        </div>

        {/* Second grid - BentoGridThirdDemo */}
        <div className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-8"
          >
            {bathroomSectionTitle}
          </motion.h2>
          <BentoGridThirdDemo />
        </div>
      </div>
    </div>
  )
}
