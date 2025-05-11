"use client"

import { useEffect, useState, useRef } from "react"
import { useLanguage } from "./language-provider"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

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

export default function HeroSectionWithYouTube() {
  const { language } = useLanguage()
  const [content, setContent] = useState<HeroContent>(heroContent.en)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    setContent(heroContent[language])
  }, [language])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=VIDEO_ID"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            title="Background Video"
          ></iframe>
        </div>
      </div>

      {/* Content container */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container relative z-20 px-4 py-32 sm:px-6 lg:px-8 mx-auto text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {content.title}
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
            {content.subtitle}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex justify-center gap-x-6">
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
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      >
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
      </motion.div>
    </div>
  )
}
