"use client"
import { LayoutGrid } from "@/components/ui/layout-grid"
import { useLanguage } from "./language-provider"

export default function GalleryGrid() {
  const { language } = useLanguage()

  // Translations
  const translations = {
    modernKitchen: language === "en" ? "Modern Kitchen Design" : "Diseño de Cocina Moderna",
    modernKitchenDesc:
      language === "en"
        ? "A sleek and contemporary kitchen design featuring clean lines, premium materials, and state-of-the-art appliances."
        : "Un diseño de cocina elegante y contemporáneo con líneas limpias, materiales premium y electrodomésticos de última generación.",

    luxuryBathroom: language === "en" ? "Luxury Bathroom Remodel" : "Remodelación de Baño de Lujo",
    luxuryBathroomDesc:
      language === "en"
        ? "Transform your bathroom into a spa-like retreat with high-end fixtures, custom cabinetry, and elegant finishes."
        : "Transforme su baño en un refugio tipo spa con accesorios de alta gama, gabinetes personalizados y acabados elegantes.",

    customCabinets: language === "en" ? "Custom Cabinet Solutions" : "Soluciones de Gabinetes Personalizados",
    customCabinetsDesc:
      language === "en"
        ? "Handcrafted cabinets designed to maximize your space and reflect your personal style with premium materials and expert craftsmanship."
        : "Gabinetes hechos a mano diseñados para maximizar su espacio y reflejar su estilo personal con materiales premium y artesanía experta.",

    outdoorKitchen: language === "en" ? "Outdoor Kitchen Oasis" : "Oasis de Cocina al Aire Libre",
    outdoorKitchenDesc:
      language === "en"
        ? "Extend your living space with a fully-equipped outdoor kitchen featuring weather-resistant materials and professional-grade appliances."
        : "Amplíe su espacio habitable con una cocina exterior totalmente equipada con materiales resistentes a la intemperie y electrodomésticos de nivel profesional.",
  }

  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">{translations.modernKitchen}</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{translations.modernKitchenDesc}</p>
      </div>
    )
  }

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">{translations.luxuryBathroom}</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{translations.luxuryBathroomDesc}</p>
      </div>
    )
  }

  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">{translations.customCabinets}</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{translations.customCabinetsDesc}</p>
      </div>
    )
  }

  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">{translations.outdoorKitchen}</p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{translations.outdoorKitchenDesc}</p>
      </div>
    )
  }

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: "/gallery/modern-kitchen.jpg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: "/gallery/luxury-bathroom.jpg",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "/gallery/custom-cabinets.jpg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "/gallery/outdoor-kitchen.jpg",
    },
  ]

  return (
    <div className="min-h-screen py-12 md:py-16 lg:py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}
