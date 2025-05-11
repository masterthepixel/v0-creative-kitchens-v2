"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { type ReactNode, useEffect, useState } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isFirstRender, setIsFirstRender] = useState(true)

  // Skip animation on first render to prevent initial animation
  useEffect(() => {
    setIsFirstRender(false)
  }, [])

  // Variants for page transitions
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstRender ? "enter" : "hidden"}
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.3,
        }}
        className="min-h-[calc(100vh-4rem)]" // Adjust height to account for header
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
