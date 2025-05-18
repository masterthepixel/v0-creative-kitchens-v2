"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function HeroSectionGallery() {
  const { language } = useLanguage()

  const content = {
    en: {
      headline: "Transform your space with premium kitchen designs",
      description:
        "Creative Kitchens delivers exceptional craftsmanship and innovative solutions for your dream kitchen. Our expert team combines quality materials with precision installation to create spaces that inspire and delight.",
      primaryCta: "View Our Work",
      primaryCtaLink: `/en/products`,
      secondaryCta: "Live Showroom",
      secondaryCtaLink: `/en/gallery`,
      callUs: "Call Us",
      phone: "(240)-714-3180",
    },
    es: {
      headline: "Transforma tu espacio con diseños de cocina premium",
      description:
        "Creative Kitchens ofrece artesanía excepcional y soluciones innovadoras para la cocina de tus sueños. Nuestro equipo de expertos combina materiales de calidad con instalación precisa para crear espacios que inspiran y deleitan.",
      primaryCta: "Ver Nuestro Trabajo",
      primaryCtaLink: `/es/products`,
      secondaryCta: "Sala de Exposición",
      secondaryCtaLink: `/es/gallery`,
      callUs: "Llámanos",
      phone: "(240)-714-3180",
    },
  }

  const currentContent = content[language] || content.en

  // Kitchen images for the gallery
  const kitchenImages = [
    {
      src: "/modern-kitchen-cabinets.png",
      alt: "Modern kitchen cabinets design",
    },
    {
      src: "/elegant-countertops.png",
      alt: "Elegant kitchen countertops",
    },
    {
      src: "/kitchen-countertops.png",
      alt: "Premium kitchen countertops",
    },
    {
      src: "/cabinet-lighting.png",
      alt: "Cabinet lighting installation",
    },
    {
      src: "/modern-kitchen-sink.png",
      alt: "Modern kitchen sink design",
    },
  ]

  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 sm:pt-32 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                {currentContent.headline}
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-slate-600 dark:text-slate-300 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                {currentContent.description}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href={currentContent.primaryCtaLink}
                  className="rounded-md bg-[#0070f3] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0070f3]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0070f3] transition-all duration-200"
                >
                  {currentContent.primaryCta}
                </Link>
                <Link
                  href={currentContent.secondaryCtaLink}
                  className="text-sm/6 font-semibold text-slate-900 dark:text-white hover:text-[#0070f3] dark:hover:text-[#0070f3] transition-colors"
                >
                  {currentContent.secondaryCta} <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="mt-6">
                <a
                  href={`tel:${currentContent.phone}`}
                  className="inline-flex items-center text-base font-semibold text-slate-900 dark:text-white hover:text-[#0070f3] dark:hover:text-[#0070f3] transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {currentContent.callUs}: {currentContent.phone}
                </a>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <img
                    alt={kitchenImages[0].alt}
                    src={kitchenImages[0].src || "/placeholder.svg"}
                    className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-slate-900/10 dark:ring-white/10 ring-inset" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <img
                    alt={kitchenImages[1].alt}
                    src={kitchenImages[1].src || "/placeholder.svg"}
                    className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-slate-900/10 dark:ring-white/10 ring-inset" />
                </div>
                <div className="relative">
                  <img
                    alt={kitchenImages[2].alt}
                    src={kitchenImages[2].src || "/placeholder.svg"}
                    className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-slate-900/10 dark:ring-white/10 ring-inset" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    alt={kitchenImages[3].alt}
                    src={kitchenImages[3].src || "/placeholder.svg"}
                    className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-slate-900/10 dark:ring-white/10 ring-inset" />
                </div>
                <div className="relative">
                  <img
                    alt={kitchenImages[4].alt}
                    src={kitchenImages[4].src || "/placeholder.svg"}
                    className="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-slate-900/10 dark:ring-white/10 ring-inset" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
