"use client"
import HeroCarousel from "./hero-carousel"

export default function HeroSectionWithYouTube() {
  const videoId = "rX-BgElvD24" // YouTube video ID
  const startTime = 11 // Start at 11 seconds
  const endTime = 80 // End at 1:20 (80 seconds)
  const fallbackImageUrl =
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop"

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* YouTube video background with overlay */}
      <div className="absolute inset-0 z-0">
        <YouTubeBackground
          videoId={videoId}
          startTime={startTime}
          endTime={endTime}
          fallbackImageUrl={fallbackImageUrl}
        />

        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Carousel container - with max width */}
      <div className="relative z-20 w-full px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <HeroCarousel />
        </div>
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

// Import the YouTubeBackground component to avoid errors
function YouTubeBackground({ videoId, startTime, endTime, fallbackImageUrl }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Fallback image shown until YouTube player is ready */}
      <img
        src={fallbackImageUrl || "/placeholder.svg"}
        alt="Video background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}
