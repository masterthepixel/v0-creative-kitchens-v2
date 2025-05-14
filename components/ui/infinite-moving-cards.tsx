"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
    imageUrl?: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  // Move animation setup to useEffect to avoid creating promises during render
  useEffect(() => {
    let isMounted = true

    const setupAnimation = () => {
      if (!isMounted || !containerRef.current || !scrollerRef.current) return

      // Clone nodes for infinite scroll effect
      const scrollerContent = Array.from(scrollerRef.current.children)
      scrollerContent.forEach((item) => {
        if (!isMounted || !scrollerRef.current) return
        const duplicatedItem = item.cloneNode(true)
        scrollerRef.current.appendChild(duplicatedItem)
      })

      // Set animation direction
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty("--animation-direction", "forwards")
        } else {
          containerRef.current.style.setProperty("--animation-direction", "reverse")
        }
      }

      // Set animation speed
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s")
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s")
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s")
        }
      }

      // Start animation
      if (isMounted) {
        setStart(true)
      }
    }

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(setupAnimation)

    return () => {
      isMounted = false
    }
  }, [direction, speed, items])

  // If no items, don't render anything
  if (!items || items.length === 0) return null

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-white px-8 py-6 md:w-[450px] shadow-[0_4px_8px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.1),0_12px_24px_rgba(0,0,0,0.15)] dark:border-zinc-700 dark:bg-zinc-900"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-1 rounded-2xl opacity-30 blur-md"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(120,120,120,0.2) 100%)",
                }}
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
                {item.imageUrl && (
                  <div className="h-12 w-12 rounded-full overflow-hidden shadow-md ring-2 ring-white dark:ring-zinc-800">
                    <img
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={`${item.name}'s portrait`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white">{item.name}</span>
                  <span className="text-sm font-normal text-neutral-500 dark:text-gray-400">{item.title}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
