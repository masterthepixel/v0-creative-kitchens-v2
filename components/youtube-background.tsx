"use client"

import { useEffect, useRef, useState } from "react"

interface YouTubeBackgroundProps {
  videoId: string
  startTime: number
  endTime: number
  fallbackImageUrl: string
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void
    YT: any
  }
}

export default function YouTubeBackground({ videoId, startTime, endTime, fallbackImageUrl }: YouTubeBackgroundProps) {
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [isAPILoaded, setIsAPILoaded] = useState(false)
  const [isPlayerMounted, setIsPlayerMounted] = useState(false)

  // Load YouTube API
  useEffect(() => {
    if (!isAPILoaded) {
      // Create script tag for YouTube API
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      // Define callback for when API is ready
      window.onYouTubeIframeAPIReady = () => {
        setIsAPILoaded(true)
      }

      return () => {
        window.onYouTubeIframeAPIReady = () => {}
      }
    }
  }, [isAPILoaded])

  // Initialize player when API is loaded
  useEffect(() => {
    if (isAPILoaded && containerRef.current && !isPlayerMounted) {
      const playerId = `youtube-player-${Math.random().toString(36).substring(2, 9)}`

      // Create a div for the player
      const playerDiv = document.createElement("div")
      playerDiv.id = playerId
      containerRef.current.appendChild(playerDiv)

      // Create YouTube player
      playerRef.current = new window.YT.Player(playerId, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          start: startTime,
          mute: 1,
          loop: 0,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute() // Ensure video is muted for autoplay
            event.target.seekTo(startTime)
            event.target.playVideo()
            setIsReady(true)
          },
          onStateChange: (event: any) => {
            // If video ends or current time exceeds endTime, loop back to startTime
            if (
              event.data === window.YT.PlayerState.ENDED ||
              (event.data === window.YT.PlayerState.PLAYING && playerRef.current.getCurrentTime() >= endTime)
            ) {
              playerRef.current.seekTo(startTime)
            }
          },
        },
      })

      setIsPlayerMounted(true)

      // Check video position every 500ms to ensure proper looping
      const intervalId = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === "function") {
          const currentTime = playerRef.current.getCurrentTime()
          if (currentTime >= endTime) {
            playerRef.current.seekTo(startTime)
          }
        }
      }, 500)

      return () => {
        clearInterval(intervalId)
        if (playerRef.current) {
          playerRef.current.destroy()
        }
      }
    }
  }, [isAPILoaded, videoId, startTime, endTime, isPlayerMounted])

  // Handle window resize to maintain aspect ratio
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current
        const width = container.clientWidth
        const height = container.clientHeight

        // Calculate the ideal dimensions to maintain 16:9 aspect ratio and cover the container
        const idealRatio = 16 / 9
        const containerRatio = width / height

        let newWidth, newHeight

        if (containerRatio > idealRatio) {
          // Container is wider than video aspect ratio
          newWidth = width
          newHeight = width / idealRatio
        } else {
          // Container is taller than video aspect ratio
          newHeight = height
          newWidth = height * idealRatio
        }

        // Apply styles to iframe if it exists
        const iframe = container.querySelector("iframe")
        if (iframe) {
          iframe.style.width = `${newWidth}px`
          iframe.style.height = `${newHeight}px`
          iframe.style.position = "absolute"
          iframe.style.top = `${(height - newHeight) / 2}px`
          iframe.style.left = `${(width - newWidth) / 2}px`
        }
      }
    }

    window.addEventListener("resize", handleResize)
    // Initial call to set dimensions
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isReady])

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Fallback image shown until YouTube player is ready */}
      <img
        src={fallbackImageUrl || "/placeholder.svg"}
        alt="Video background"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isReady ? "opacity-0" : "opacity-100"}`}
      />

      {/* YouTube player container */}
      <div
        ref={containerRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isReady ? "opacity-100" : "opacity-0"}`}
      />

      {/* Overlay to prevent interaction with the video */}
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  )
}
