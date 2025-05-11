"use client"

import { useState, useEffect, useRef } from "react"

export function useVideoBackground(videoSrc: string, fallbackSrc: string) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoaded = () => {
      setVideoLoaded(true)
      setVideoError(false)
    }

    const handleError = () => {
      console.error("Video failed to load")
      setVideoLoaded(false)
      setVideoError(true)
    }

    video.addEventListener("loadeddata", handleLoaded)
    video.addEventListener("error", handleError)

    // Try to play the video (for browsers that block autoplay)
    video.play().catch((err) => {
      console.warn("Autoplay was prevented:", err)
      // We still show the video as loaded, just paused
      setVideoLoaded(true)
    })

    return () => {
      video.removeEventListener("loadeddata", handleLoaded)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return {
    videoRef,
    videoLoaded,
    videoError,
    showFallback: !videoLoaded || videoError,
  }
}
