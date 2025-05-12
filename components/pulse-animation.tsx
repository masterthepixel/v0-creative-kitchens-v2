"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PulseAnimationProps {
  children: ReactNode
  className?: string
}

export default function PulseAnimation({ children, className = "" }: PulseAnimationProps) {
  return (
    <div className={`relative group ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-md bg-blue-500/20 group-hover:bg-emerald-500/20 transition-colors duration-300 blur-sm"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      {children}
    </div>
  )
}
