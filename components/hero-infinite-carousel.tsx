"use client"

import { useEffect, useState } from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { useLanguage } from "./language-provider"

// Pre-define the card data to avoid creating promises in the component
const heroCardsData = [
  {
    id: 1,
    imageUrl: "/modern-kitchen-cabinets.png",
    title: {
      en: "Modern Kitchen Cabinets",
      es: "Gabinetes de Cocina Modernos",
    },
    description: {
      en: "Sleek designs with premium materials",
      es: "Diseños elegantes con materiales premium",
    },
    link: {
      en: "/en/products/cabinets",
      es: "/es/products/cabinets",
    },
  },
  {
    id: 2,
    imageUrl: "/kitchen-countertops.png",
    title: {
      en: "Elegant Countertops",
      es: "Encimeras Elegantes",
    },
    description: {
      en: "Durable and beautiful surfaces",
      es: "Superficies duraderas y hermosas",
    },
    link: {
      en: "/en/products/countertops",
      es: "/es/products/countertops",
    },
  },
  {
    id: 3,
    imageUrl: "/cabinet-lighting.png",
    title: {
      en: "Cabinet Lighting",
      es: "Iluminación de Gabinetes",
    },
    description: {
      en: "Enhance your kitchen with perfect lighting",
      es: "Mejora tu cocina con iluminación perfecta",
    },
    link: {
      en: "/en/products/cabinet-lighting",
      es: "/es/products/cabinet-lighting",
    },
  },
  {
    id: 4,
    imageUrl: "/luxury-bathtub.png",
    title: {
      en: "Luxury Bathtubs",
      es: "Bañeras de Lujo",
    },
    description: {
      en: "Transform your bathroom into a spa",
      es: "Transforma tu baño en un spa",
    },
    link: {
      en: "/en/products/bath-tubs",
      es: "/es/products/bath-tubs",
    },
  },
  {
    id: 5,
    imageUrl: "/kitchen-flooring.png",
    title: {
      en: "Kitchen Flooring",
      es: "Pisos de Cocina",
    },
    description: {
      en: "Stylish and durable flooring options",
      es: "Opciones de pisos elegantes y duraderos",
    },
    link: {
      en: "/en/products/flooring",
      es: "/es/products/flooring",
    },
  },
]

export function HeroInfiniteCarousel({ direction = "left", speed = "fast", pauseOnHover = true }) {
  const { language } = useLanguage()
  const [items, setItems] = useState([])

  // Use useEffect to set the items after component mount
  useEffect(() => {
    const formattedItems = heroCardsData.map((card) => ({
      id: card.id,
      imageUrl: card.imageUrl,
      title: card.title[language] || card.title.en,
      description: card.description[language] || card.description.en,
      link: card.link[language] || card.link.en,
    }))

    setItems(formattedItems)
  }, [language])

  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden w-full max-w-xl">
      {items.length > 0 && (
        <InfiniteMovingCards
          items={items}
          direction={direction}
          speed={speed}
          pauseOnHover={pauseOnHover}
          className="py-2"
        />
      )}
    </div>
  )
}
