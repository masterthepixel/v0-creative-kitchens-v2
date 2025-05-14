"use client"

import { useEffect, useState, useRef } from "react"
import { useLanguage } from "./language-provider"
import { cn } from "@/lib/utils"

// This component is based on the infinite-moving-cards.tsx but adapted for hero use
export const HeroInfiniteCarousel = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const { language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)

  // Define the slides with the same content as the original hero carousel
  const slides = [
    {
      id: 1,
      image: "/modern-kitchen-cabinets.png",
      alt: language === "en" ? "Premium Cabinets" : "Gabinetes Premium",
      ctaLink: `/${language}/products/cabinets`,
    },
    {
      id: 2,
      image: "/kitchen-countertops.png",
      alt: language === "en" ? "Elegant Countertops" : "Encimeras Elegantes",
      ctaLink: `/${language}/products/countertops`,
    },
    {
      id: 3,
      image: "/cabinet-lighting.png",
      alt: language === "en" ? "Cabinet Lighting" : "Iluminación para Gabinetes",
      ctaLink: `/${language}/products/cabinet-lighting`,
    },
    {
      id: 4,
      image: "/luxury-bathtub.png",
      alt: language === "en" ? "Luxury Bath Tubs" : "Bañeras de Lujo",
      ctaLink: `/${language}/products/bath-tubs`,
    },
    {
      id: 5,
      image: "/kitchen-flooring.png",
      alt: language === "en" ? "Premium Flooring" : "Pisos Premium",
      ctaLink: `/${language}/products/flooring`,
    },
  ]

  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards")
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse")
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {slides.map((slide) => (
          <li
            key={slide.id}
            className="relative w-[300px] max-w-full shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-[4/3] w-full">
              <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="h-full w-full object-cover" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
