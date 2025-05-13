"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const slides = [
    {
      id: 1,
      image: "/modern-kitchen-cabinets.png",
      title: "Premium Cabinets",
      subtitle: "High-quality designs for style and functionality",
      cta: "Explore Cabinets",
      ctaLink: "/en/products/cabinets",
    },
    {
      id: 2,
      image: "/kitchen-countertops.png",
      title: "Elegant Countertops",
      subtitle: "Durable and beautiful solutions for your home",
      cta: "View Countertops",
      ctaLink: "/en/products/countertops",
    },
    {
      id: 3,
      image: "/cabinet-lighting.png",
      title: "Cabinet Lighting",
      subtitle: "Illuminate your space with style",
      cta: "Discover Lighting",
      ctaLink: "/en/products/cabinet-lighting",
    },
    {
      id: 4,
      image: "/luxury-bathtub.png",
      title: "Luxury Bath Tubs",
      subtitle: "Create your personal sanctuary",
      cta: "View Bath Tubs",
      ctaLink: "/en/products/bath-tubs",
    },
    {
      id: 5,
      image: "/kitchen-flooring.png",
      title: "Premium Flooring",
      subtitle: "Quality options for every room",
      cta: "Explore Flooring",
      ctaLink: "/en/products/flooring",
    },
  ]

  // Set loaded state after mount
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Auto-rotation with useEffect
  useEffect(() => {
    if (!isLoaded) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isLoaded, slides.length])

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image()
      img.src = slide.image
    })
  }, [])

  if (!isLoaded) {
    return (
      <div className="relative overflow-hidden rounded-3xl shadow-xl">
        <div className="aspect-[4/3] w-full h-[300px] md:h-[350px] lg:h-[400px]"></div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-xl w-full max-w-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-[4/3] w-full h-[300px] md:h-[350px] lg:h-[400px]"
        >
          <img
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.7), 0px 2px 4px rgba(0,0,0,0.5)" }}
              >
                {slides[currentSlide].title}
              </h2>
              <p
                className="text-xs md:text-sm mt-2 text-white/90 max-w-[95%]"
                style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.6)" }}
              >
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="mt-auto">
              <Link href={slides[currentSlide].ctaLink} className="no-underline">
                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear flex items-center text-sm">
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
