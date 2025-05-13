"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Phone } from "lucide-react"
import HeroCarousel from "./hero-carousel"

export default function HeroSectionCombined() {
  const { language } = useLanguage()

  const content = {
    en: {
      headline: "Transform your space with premium kitchen designs",
      description:
        "Creative Kitchens delivers exceptional craftsmanship and innovative solutions for your dream kitchen. From custom cabinets to elegant countertops, we bring your vision to life with quality materials and expert installation.",
      primaryCta: "View Our Work",
      primaryCtaLink: `/en/products`,
      secondaryCta: "Call Us",
      phone: "(240)-714-3180",
    },
    es: {
      headline: "Transforma tu espacio con diseños de cocina premium",
      description:
        "Creative Kitchens ofrece artesanía excepcional y soluciones innovadoras para la cocina de tus sueños. Desde gabinetes personalizados hasta elegantes encimeras, damos vida a tu visión con materiales de calidad e instalación experta.",
      primaryCta: "Ver Nuestro Trabajo",
      primaryCtaLink: `/es/products`,
      secondaryCta: "Llámanos",
      phone: "(240)-714-3180",
    },
  }

  const currentContent = content[language] || content.en

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
        {/* Text content - left side */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            {currentContent.headline}
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300">{currentContent.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={currentContent.primaryCtaLink}
              className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-3 bg-[#0070f3] rounded-md text-white font-medium transition duration-200 ease-linear text-center sm:text-left"
            >
              {currentContent.primaryCta}
            </Link>

            <a
              href={`tel:${currentContent.phone}`}
              className="flex items-center justify-center sm:justify-start text-base font-semibold text-gray-900 dark:text-white hover:text-[#0070f3] dark:hover:text-[#0070f3] transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              {currentContent.secondaryCta}: {currentContent.phone}
            </a>
          </div>
        </div>

        {/* Carousel - right side */}
        <div className="lg:w-1/2">
          <HeroCarousel />
        </div>
      </div>
    </div>
  )
}
