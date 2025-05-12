"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  direction?: "left" | "right"
}

export const Marquee = ({ children, className, reverse = false, pauseOnHover = false, direction }: MarqueeProps) => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Determine direction based on reverse prop or explicit direction
  const actualDirection = direction || (reverse ? "right" : "left")

  useEffect(() => {
    if (!marqueeRef.current || !containerRef.current) return

    const marqueeContent = marqueeRef.current
    const container = containerRef.current

    // Clone the content to create a seamless loop
    const clone = marqueeContent.cloneNode(true)
    container.appendChild(clone)
  }, [])

  return (
    <div ref={containerRef} className={cn("flex w-full overflow-hidden [--duration:40s] [--gap:1rem]", className)}>
      <div
        ref={marqueeRef}
        className={cn(
          "flex min-w-full shrink-0 items-center gap-[--gap] py-4",
          "animate-marquee",
          actualDirection === "right" && "animate-marquee-reverse",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{
          animationDuration: "var(--duration)",
        }}
      >
        {children}
      </div>
    </div>
  )
}
