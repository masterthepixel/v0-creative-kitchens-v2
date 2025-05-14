"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Phone, Grid } from "lucide-react"
import { HeroInfiniteCarousel } from "./hero-infinite-carousel"

export default function HeroSectionCombined() {
  const { language } = useLanguage()

  const content = {
    en: {
      headline: "Transform your space with premium kitchen designs",
      description:
        "Creative Kitchens transforms homes with expert craftsmanship, materials and hardware in kitchens, bathrooms, and hardware solutions.",
      primaryCta: "View Our Work",
      primaryCtaLink: `/en/products`,
      secondaryCta: "Browse Products",
      secondaryCtaLink: `/en/products`,
      callUs: "Call Us",
      phone: "(240)-714-3180",
    },
    es: {
      headline: "Transforma tu espacio con diseños de cocina premium",
      description:
        "Creative Kitchens transforma hogares con artesanía experta, materiales y hardware en cocinas, baños y soluciones de hardware.",
      primaryCta: "Ver Nuestro Trabajo",
      primaryCtaLink: `/es/products`,
      secondaryCta: "Explorar Productos",
      secondaryCtaLink: `/es/products`,
      callUs: "Llámanos",
      phone: "(240)-714-3180",
    },
  }

  const currentContent = content[language] || content.en

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
        {/* Text content - left side */}
        <div className="lg:w-1/2 space-y-3 pt-0">
          {/* Phone link above the headline */}
          <a
            href={`tel:${currentContent.phone}`}
            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white hover:text-[#0070f3] dark:hover:text-[#0070f3] transition-colors mb-2 pb-1 border-b border-gray-200/30 dark:border-gray-800/30"
          >
            <Phone className="mr-2 h-5 w-5" />
            {currentContent.callUs}: {currentContent.phone}
          </a>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            {currentContent.headline}
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300">{currentContent.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={currentContent.primaryCtaLink}
              className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_8px_30px_rgba(0,118,255,45%)] px-8 py-3 bg-[#0070f3] rounded-md text-white hover:text-white font-medium transition-all duration-200 ease-out text-center sm:text-left hover:scale-[1.1] origin-center"
            >
              {currentContent.primaryCta}
            </Link>

            <Link
              href={currentContent.secondaryCtaLink}
              className="flex items-center justify-center px-8 py-3 border border-[#00a86b]/70 dark:border-[#00a86b]/70 rounded-md text-white hover:text-white bg-[#00a86b] dark:bg-[#00a86b] font-medium transition-all duration-200 ease-out shadow-[0_4px_14px_0_rgba(0,168,107,39%)] hover:shadow-[0_8px_30px_rgba(0,168,107,45%)] hover:scale-[1.1] origin-center group"
            >
              <span className="text-white group-hover:text-white">
                <Grid className="mr-2 h-5 w-5" />
              </span>
              {currentContent.secondaryCta}
            </Link>
          </div>
        </div>

        {/* Carousel - right side */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <HeroInfiniteCarousel direction="right" speed="slow" pauseOnHover={true} />
        </div>
      </div>
    </div>
  )
}
