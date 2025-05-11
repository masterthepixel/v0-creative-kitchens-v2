"use client"

import { useEffect, useState, useRef } from "react"
import { useLanguage } from "./language-provider"
import HeroCarousel from "./hero-carousel"
import { motion } from "framer-motion"

type HeroContent = {
  title: string
  subtitle: string
}

const heroContent: Record<string, HeroContent> = {
  en: {
    title: "Transform Your Space",
    subtitle: "Premium kitchen and bathroom solutions crafted with excellence and designed for your lifestyle",
  },
  es: {
    title: "Transforma Tu Espacio",
    subtitle: "Soluciones premium para cocinas y baños elaboradas con excelencia y diseñadas para tu estilo de vida",
  },
}

export default function HeroSectionWithCarousel() {
  const { language } = useLanguage()
  const [content, setContent] = useState<HeroContent>(heroContent.en)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    setContent(heroContent[language])
  }, [language])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener("loadeddata", () => {
        setVideoLoaded(true)
      })

      // Handle video loading error
      video.addEventListener("error", () => {
        console.error("Video failed to load")
        setVideoLoaded(false)
      })
    }

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => setVideoLoaded(true))
        video.removeEventListener("error", () => setVideoLoaded(false))
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black/60 z-10"
        />

        {/* Video background */}
        <motion.video
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-living-room-with-a-modern-tv-setup-4925-large.mp4"
            type="video/mp4"
          />
          {/* Browser will fallback to image if video fails to load */}
        </motion.video>

        {/* Fallback image (shown until video loads or if video fails) */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop"
          alt="Modern interior design"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-0" : "opacity-100"} absolute inset-0`}
        />
      </div>

      {/* Hero Text Container */}
      <div className="relative z-20 w-full px-4 text-center mb-8 md:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          {content.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
        >
          {content.subtitle}
        </motion.p>
      </div>

      {/* Carousel container - full width for multiple cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-20 w-full px-4 py-8"
      >
        <HeroCarousel />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent z-10" />

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
          className="text-white"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
  )
}
