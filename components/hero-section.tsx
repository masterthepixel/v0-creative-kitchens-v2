"use client"

import { useLanguage } from "./language-provider"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type HeroContent = {
  title: string
  subtitle: string
  cta: string
  ctaLink: string
}

const heroContent: Record<string, HeroContent> = {
  en: {
    title: "Transform Your Space",
    subtitle: "Premium kitchen and bathroom solutions crafted with excellence and designed for your lifestyle",
    cta: "Explore Our Collections",
    ctaLink: "/en/collections",
  },
  es: {
    title: "Transforma Tu Espacio",
    subtitle: "Soluciones premium para cocinas y baños elaboradas con excelencia y diseñadas para tu estilo de vida",
    cta: "Explora Nuestras Colecciones",
    ctaLink: "/es/collections",
  },
}

export default function HeroSection() {
  const { language } = useLanguage()
  const [content, setContent] = useState<HeroContent>(heroContent.en)

  useEffect(() => {
    setContent(heroContent[language])
  }, [language])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
          alt="Kitchen background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="container relative z-20 px-4 py-32 sm:px-6 lg:px-8 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {content.title}
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">{content.subtitle}</p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900 px-8 py-6 text-lg font-medium"
            >
              <Link href={content.ctaLink}>
                {content.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}
