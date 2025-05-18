"use client"
import HeroCarousel from "./hero-carousel"
import { useVideoBackground } from "@/hooks/use-video-background"

export default function HeroSectionWithVideo() {
  const videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-living-room-with-a-modern-tv-setup-4925-large.mp4"
  const fallbackSrc = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop"

  const { videoRef, showFallback } = useVideoBackground(videoSrc, fallbackSrc)

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Video background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${showFallback ? "opacity-0" : "opacity-100"}`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Fallback image */}
        <img
          src={fallbackSrc || "/placeholder.svg"}
          alt="Modern interior design"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${showFallback ? "opacity-100" : "opacity-0"} absolute inset-0`}
        />
      </div>

      {/* Carousel container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-16">
        <HeroCarousel />
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
