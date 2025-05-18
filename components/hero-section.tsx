// Server Component
import Link from "next/link"
import { Phone } from "lucide-react"

type HeroSectionProps = {
  language: string
}

export default function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      headline: "Premium kitchen designs",
      description:
        "Expert craftsmanship and innovative solutions for your dream kitchen with quality materials and installation.",
      primaryCta: "View Our Work",
      primaryCtaLink: `/en/products`,
      secondaryCta: "Call Us",
      phone: "(240)-714-3180",
    },
    es: {
      headline: "Diseños de cocina premium",
      description:
        "Artesanía experta y soluciones innovadoras para la cocina de tus sueños con materiales de calidad e instalación profesional.",
      primaryCta: "Ver Nuestro Trabajo",
      primaryCtaLink: `/es/products`,
      secondaryCta: "Llámanos",
      phone: "(240)-714-3180",
    },
  }

  // Use the language prop directly
  const currentContent = content[language as keyof typeof content] || content.en

  return (
    <div className="relative overflow-hidden min-h-screen w-full flex items-center justify-center">
      {/* Content overlay - centered both horizontally and vertically */}
      <div className="relative z-20 w-full flex items-center justify-center min-h-screen px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl backdrop-blur-md bg-white/50 dark:bg-slate-900/50 p-8 sm:p-10 rounded-2xl shadow-lg border border-white/20 dark:border-slate-800/30">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            {currentContent.headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-800 dark:text-slate-200 mx-auto max-w-2xl">
            {currentContent.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={currentContent.primaryCtaLink}
              className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-3 bg-[#0070f3] rounded-md text-white font-medium transition duration-200 ease-linear"
            >
              {currentContent.primaryCta}
            </Link>
            <a
              href={`tel:${currentContent.phone}`}
              className="flex items-center text-base font-semibold text-slate-900 dark:text-white hover:text-[#0070f3] dark:hover:text-[#0070f3] transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              {currentContent.secondaryCta}: {currentContent.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
