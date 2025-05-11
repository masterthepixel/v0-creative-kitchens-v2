"use client"

import { useLanguage } from "./language-provider"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Import Splide styles
import "@splidejs/splide/dist/css/splide.min.css"
import Splide from "@splidejs/splide"

type CarouselSlide = {
  title: string
  subtitle: string
  cta: string
  ctaLink: string
  backgroundImage: string
}

type CarouselContent = {
  slides: CarouselSlide[]
}

const carouselContent: Record<string, CarouselContent> = {
  en: {
    slides: [
      {
        title: "Premium Cabinets",
        subtitle: "Explore our collection of high-quality cabinets designed for both style and functionality",
        cta: "View Cabinet Options",
        ctaLink: "/en/cabinets",
        backgroundImage:
          "https://images.unsplash.com/photo-1696986681606-b156ccd761c5?q=80&w=2340&auto=format&fit=crop",
      },
      {
        title: "Elegant Countertops",
        subtitle: "Discover durable and beautiful countertop solutions for your kitchen and bathroom",
        cta: "Explore Countertops",
        ctaLink: "/en/countertops",
        backgroundImage:
          "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2487&auto=format&fit=crop",
      },
      {
        title: "Modern Sinks",
        subtitle: "Find the perfect sink to complement your kitchen or bathroom design",
        cta: "Browse Sinks",
        ctaLink: "/en/sinks",
        backgroundImage:
          "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=2465&auto=format&fit=crop",
      },
      {
        title: "Stylish Faucets",
        subtitle: "Enhance your space with our selection of premium faucets combining form and function",
        cta: "View Faucets",
        ctaLink: "/en/faucets",
        backgroundImage:
          "https://images.unsplash.com/photo-1576698483491-8c43f0862543?q=80&w=1799&auto=format&fit=crop",
      },
      {
        title: "High-End Appliances",
        subtitle: "Upgrade your kitchen with state-of-the-art appliances that make cooking a pleasure",
        cta: "Shop Appliances",
        ctaLink: "/en/appliances",
        backgroundImage:
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2535&auto=format&fit=crop",
      },
      {
        title: "Premium Flooring",
        subtitle: "Transform your space with our selection of quality flooring options for every room",
        cta: "Explore Flooring",
        ctaLink: "/en/flooring",
        backgroundImage:
          "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2535&auto=format&fit=crop",
      },
      {
        title: "Luxury Bath Tubs",
        subtitle: "Create your personal sanctuary with our collection of elegant and comfortable bath tubs",
        cta: "View Bath Tubs",
        ctaLink: "/en/bath-tubs",
        backgroundImage:
          "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2487&auto=format&fit=crop",
      },
      {
        title: "Quality Hardware",
        subtitle: "Find the perfect finishing touches with our selection of premium hardware options",
        cta: "Browse Hardware",
        ctaLink: "/en/hardware",
        backgroundImage:
          "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2487&auto=format&fit=crop",
      },
      {
        title: "Dining & Kitchen Spaces",
        subtitle: "Create beautiful dining areas that blend seamlessly with your kitchen design",
        cta: "Get Inspired",
        ctaLink: "/en/inspiration",
        backgroundImage:
          "https://sjc.microlink.io/KED1wzbXGQZaufLtDgW8s2IUp-Uy2ZEHSoNbxaVAZiLsk4zWAs2GbQAoO6mPkJDsCeJiJiX7O2oWnrSOjpkkqg.jpeg",
      },
    ],
  },
  es: {
    slides: [
      {
        title: "Gabinetes Premium",
        subtitle: "Explora nuestra colección de gabinetes de alta calidad diseñados para estilo y funcionalidad",
        cta: "Ver Opciones de Gabinetes",
        ctaLink: "/es/cabinets",
        backgroundImage:
          "https://images.unsplash.com/photo-1696986681606-b156ccd761c5?q=80&w=2340&auto=format&fit=crop",
      },
      {
        title: "Encimeras Elegantes",
        subtitle: "Descubre soluciones de encimeras duraderas y hermosas para tu cocina y baño",
        cta: "Explorar Encimeras",
        ctaLink: "/es/countertops",
        backgroundImage:
          "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2487&auto=format&fit=crop",
      },
      {
        title: "Fregaderos Modernos",
        subtitle: "Encuentra el fregadero perfecto para complementar el diseño de tu cocina o baño",
        cta: "Explorar Fregaderos",
        ctaLink: "/es/sinks",
        backgroundImage:
          "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=2465&auto=format&fit=crop",
      },
      {
        title: "Grifos con Estilo",
        subtitle: "Mejora tu espacio con nuestra selección de grifos premium que combinan forma y función",
        cta: "Ver Grifos",
        ctaLink: "/es/faucets",
        backgroundImage:
          "https://images.unsplash.com/photo-1576698483491-8c43f0862543?q=80&w=1799&auto=format&fit=crop",
      },
      {
        title: "Electrodomésticos de Alta Gama",
        subtitle: "Actualiza tu cocina con electrodomésticos de última generación que hacen de cocinar un placer",
        cta: "Comprar Electrodomésticos",
        ctaLink: "/es/appliances",
        backgroundImage:
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2535&auto=format&fit=crop",
      },
      {
        title: "Pisos Premium",
        subtitle: "Transforma tu espacio con nuestra selección de opciones de pisos de calidad para cada habitación",
        cta: "Explorar Pisos",
        ctaLink: "/es/flooring",
        backgroundImage:
          "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2535&auto=format&fit=crop",
      },
      {
        title: "Bañeras de Lujo",
        subtitle: "Crea tu santuario personal con nuestra colección de bañeras elegantes y cómodas",
        cta: "Ver Bañeras",
        ctaLink: "/es/bath-tubs",
        backgroundImage:
          "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2487&auto=format&fit=crop",
      },
      {
        title: "Herrajes de Calidad",
        subtitle: "Encuentra los toques finales perfectos con nuestra selección de opciones de herrajes premium",
        cta: "Explorar Herrajes",
        ctaLink: "/es/hardware",
        backgroundImage:
          "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2487&auto=format&fit=crop",
      },
      {
        title: "Espacios de Comedor y Cocina",
        subtitle: "Crea hermosas áreas de comedor que se integren perfectamente con el diseño de tu cocina",
        cta: "Inspírate",
        ctaLink: "/es/inspiration",
        backgroundImage:
          "https://sjc.microlink.io/KED1wzbXGQZaufLtDgW8s2IUp-Uy2ZEHSoNbxaVAZiLsk4zWAs2GbQAoO6mPkJDsCeJiJiX7O2oWnrSOjpkkqg.jpeg",
      },
    ],
  },
}

export default function HeroCarousel() {
  const { language } = useLanguage()
  const [content, setContent] = useState<CarouselContent>(carouselContent.en)
  const splideRef = useRef<HTMLDivElement>(null)
  const splideInstance = useRef<Splide | null>(null)

  useEffect(() => {
    setContent(carouselContent[language])
  }, [language])

  const initSplide = () => {
    if (splideRef.current) {
      return new Splide(splideRef.current, {
        type: "loop",
        perPage: 3,
        perMove: 1,
        focus: "center",
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        gap: "1.5rem",
        padding: { left: "4%", right: "4%" },
        arrows: true,
        pagination: false,
        speed: 1000,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        lazyLoad: "nearby",
        breakpoints: {
          1024: {
            perPage: 3,
            gap: "1.5rem",
            padding: { left: "4%", right: "4%" },
          },
          768: {
            perPage: 2,
            gap: "1rem",
            padding: { left: "8%", right: "8%" },
          },
          640: {
            perPage: 1,
            gap: "1rem",
            padding: { left: "15%", right: "15%" },
          },
        },
      }).mount()
    }
    return null
  }

  useEffect(() => {
    if (splideRef.current && !splideInstance.current) {
      splideInstance.current = initSplide()
    }

    return () => {
      if (splideInstance.current) {
        splideInstance.current.destroy()
        splideInstance.current = null
      }
    }
  }, [])

  // Reinitialize when language changes
  useEffect(() => {
    if (splideInstance.current) {
      splideInstance.current.destroy()
      splideInstance.current = null
    }

    if (splideRef.current) {
      setTimeout(() => {
        splideInstance.current = initSplide()
      }, 100)
    }
  }, [language])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full mx-auto max-w-7xl"
    >
      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {content.slides.map((slide, index) => (
              <li key={index} className="splide__slide">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * Math.min(index, 5) }}
                  className="rounded-xl overflow-hidden shadow-2xl h-[600px] w-full max-w-[350px] md:max-w-[320px] lg:max-w-[380px] mx-auto relative"
                  style={{
                    backgroundImage: `url(${slide.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

                  <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + 0.05 * Math.min(index, 5) }}
                      className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + 0.05 * Math.min(index, 5) }}
                      className="text-white/90 text-sm md:text-base mb-5 md:mb-6 line-clamp-4"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + 0.05 * Math.min(index, 5) }}
                    >
                      <Button
                        asChild
                        size="lg"
                        className="bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900 w-fit"
                      >
                        <Link href={slide.ctaLink}>
                          {slide.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
