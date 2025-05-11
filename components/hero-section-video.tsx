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
    title: "Crafting Dream Kitchens",
    subtitle: "Elevate your home with our premium kitchen and bathroom solutions, where luxury meets functionality",
    cta: "Start Your Project",
    ctaLink: "/en/contact",
  },
  es: {
    title: "Creando Cocinas de Ensueño",
    subtitle:
      "Eleva tu hogar con nuestras soluciones premium para cocinas y baños, donde el lujo se encuentra con la funcionalidad",
    cta: "Comienza Tu Proyecto",
    ctaLink: "/es/contact",
  },
}

export default function HeroSectionVideo() {
  const { language } = useLanguage()
  const [content, setContent] = useState<HeroContent>(heroContent.en)

  useEffect(() => {
    setContent(heroContent[language])
  }, [language])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Replace with your video URL or use an image as fallback */}
        <img
          src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-releases.png"
          alt="Kitchen background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="container relative z-20 px-4 py-32 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">{content.title}</span>
              <span className="block text-primary-foreground mt-2">Creative Kitchens</span>
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">{content.subtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
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
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium"
              >
                <Link href={language === "en" ? "/en/gallery" : "/es/gallery"}>
                  {language === "en" ? "View Gallery" : "Ver Galería"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent z-10" />

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
