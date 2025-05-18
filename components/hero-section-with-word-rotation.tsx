"use client"

import { useLanguage } from "./language-provider"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WordRotateProps {
  words: string[]
  duration?: number
  className?: string
}

function WordRotate({ words, duration = 2500, className = "" }: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <div className="relative inline-block overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={className}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default function HeroSectionWithWordRotation() {
  const { language } = useLanguage()

  // Define the rotating words in both languages
  const rotatingWords = {
    en: ["space", "kitchen", "bathroom", "living room", "dining room", "bedroom", "home"],
    es: ["espacio", "cocina", "baño", "sala de estar", "comedor", "dormitorio", "hogar"],
  }

  // Content for both languages
  const content = {
    en: {
      preRotate: "Transform your",
      description:
        "Premium design and installation services tailored to your unique style and needs. Quality craftsmanship that lasts for generations.",
      cta: "Explore Our Services",
      ctaLink: "/en/products",
    },
    es: {
      preRotate: "Transforma tu",
      description:
        "Servicios premium de diseño e instalación adaptados a tu estilo y necesidades únicas. Artesanía de calidad que dura generaciones.",
      cta: "Explorar Nuestros Servicios",
      ctaLink: "/es/products",
    },
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Content container */}
      <div className="relative z-20 w-full flex items-center justify-center min-h-screen">
        <div className="max-w-7xl w-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center backdrop-blur-md bg-white/60 dark:bg-slate-900/60 p-8 sm:p-10 rounded-2xl shadow-lg border border-white/30 dark:border-slate-800/40 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {content[language].preRotate}{" "}
              <WordRotate words={rotatingWords[language]} className="text-primary font-extrabold" duration={2000} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-slate-800 dark:text-slate-200 max-w-3xl mx-auto"
            >
              {content[language].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex justify-center gap-x-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium"
              >
                <Link href={content[language].ctaLink}>
                  {content[language].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
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
          className="text-slate-500 dark:text-slate-400"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
  )
}
