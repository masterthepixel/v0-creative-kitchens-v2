"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { HeroParallax } from "./ui/hero-parallax"

// Define kitchen-related products using your existing images
const kitchenProducts = [
  {
    title: "Modern Kitchen Cabinets",
    link: "/products/cabinets",
    thumbnail: "/modern-kitchen-cabinets.png",
  },
  {
    title: "Elegant Countertops",
    link: "/products/countertops",
    thumbnail: "/elegant-countertops.png",
  },
  {
    title: "Cabinet Lighting",
    link: "/products/cabinet-lighting",
    thumbnail: "/cabinet-lighting.png",
  },
  {
    title: "Luxury Bathtub",
    link: "/products/bath-tubs",
    thumbnail: "/luxury-bathtub.png",
  },
  {
    title: "Kitchen Flooring",
    link: "/products/flooring",
    thumbnail: "/kitchen-flooring.png",
  },
  {
    title: "Modern Kitchen Appliances",
    link: "/products/appliances",
    thumbnail: "/modern-kitchen-appliances.png",
  },
  {
    title: "Kitchen Faucets",
    link: "/products/faucets",
    thumbnail: "/kitchen-faucets.png",
  },
  {
    title: "Cabinet Hardware",
    link: "/products/hardware",
    thumbnail: "/cabinet-hardware.png",
  },
  {
    title: "Modern Kitchen Sink",
    link: "/products/sinks",
    thumbnail: "/modern-kitchen-sink.png",
  },
  {
    title: "Medicine Cabinet",
    link: "/products/medicine-cabinets",
    thumbnail: "/medicine-cabinet.png",
  },
  {
    title: "Plumbing Fixtures",
    link: "/products/plumbing",
    thumbnail: "/plumbing-fixtures.png",
  },
  // Duplicate some images to fill out the grid
  {
    title: "Premium Cabinets",
    link: "/products/cabinets",
    thumbnail: "/modern-kitchen-cabinets.png",
  },
  {
    title: "Designer Countertops",
    link: "/products/countertops",
    thumbnail: "/elegant-countertops.png",
  },
  {
    title: "Modern Lighting",
    link: "/products/cabinet-lighting",
    thumbnail: "/cabinet-lighting.png",
  },
  {
    title: "Spa Bathtubs",
    link: "/products/bath-tubs",
    thumbnail: "/luxury-bathtub.png",
  },
]

export default function HeroSectionParallax() {
  const { language } = useLanguage()

  const content = {
    en: {
      whatsNew: "What's new",
      justShipped: "New designs available",
      headline: "Transform your space with premium kitchen designs",
      description:
        "Creative Kitchens transforms homes with expert craftsmanship, premium materials, and custom designs for kitchens, bathrooms, and more.",
      primaryCta: "View Our Work",
      primaryCtaLink: `/en/products`,
      secondaryCta: "Browse Products",
      secondaryCtaLink: `/en/products`,
    },
    es: {
      whatsNew: "Novedades",
      justShipped: "Nuevos diseños disponibles",
      headline: "Transforma tu espacio con diseños de cocina premium",
      description:
        "Creative Kitchens transforma hogares con artesanía experta, materiales premium y diseños personalizados para cocinas, baños y más.",
      primaryCta: "Ver Nuestro Trabajo",
      primaryCtaLink: `/es/products`,
      secondaryCta: "Explorar Productos",
      secondaryCtaLink: `/es/products`,
    },
  }

  const currentContent = content[language] || content.en

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Content Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40 pointer-events-auto">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <div className="inline-flex space-x-6">
                    <span className="rounded-full bg-[#0070f3]/10 px-3 py-1 text-sm/6 font-semibold text-[#0070f3] ring-1 ring-[#0070f3]/10 ring-inset">
                      {currentContent.whatsNew}
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600 dark:text-gray-300">
                      <span>{currentContent.justShipped}</span>
                      <ChevronRight className="size-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-7xl">
                  {currentContent.headline}
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8">
                  {currentContent.description}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href={currentContent.primaryCtaLink}
                    className="rounded-md bg-[#0070f3] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#0070f3]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0070f3]"
                  >
                    {currentContent.primaryCta}
                  </Link>
                  <Link
                    href={currentContent.secondaryCtaLink}
                    className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                  >
                    {currentContent.secondaryCta} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            {/* Intentionally left empty to maintain the layout */}
          </div>
        </div>
      </div>

      {/* Parallax Background */}
      <div className="w-full">
        <HeroParallax products={kitchenProducts} />
      </div>
    </div>
  )
}
