"use client"
import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Simplify the transition to remove spring physics that cause the curved artifacts
const transition = {
  type: "tween", // Change from "spring" to "tween"
  duration: 0.2, // Simple duration-based transition
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative mx-2">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-yellow-400 transition-colors px-4 py-2"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div transition={transition} className="bg-black rounded-2xl overflow-hidden shadow-xl">
                <div className="w-max h-full p-4">{children}</div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
  className?: string
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative flex justify-center items-center rounded-full bg-black px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.3)]",
        className,
      )}
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
  icon,
}: {
  title: string
  description: string
  href: string
  src?: string
  icon?: React.ReactNode
}) => {
  return (
    <a
      href={href}
      className="flex space-x-3 p-3 rounded-lg transition-all group relative"
      aria-label={`${title}: ${description}`}
    >
      {/* Icon container */}
      <div className="relative z-10">
        {src ? (
          <img
            src={src || "/placeholder.svg"}
            width={140}
            height={70}
            alt=""
            className="shrink-0 rounded-md shadow-md"
          />
        ) : (
          icon && (
            <div className="shrink-0 w-10 h-10 rounded-md bg-black flex items-center justify-center">
              {React.isValidElement(icon)
                ? React.cloneElement(icon as React.ReactElement, {
                    className: "text-yellow-400 h-5 w-5",
                  })
                : icon}
            </div>
          )
        )}
      </div>

      {/* Text content with reduced font sizes */}
      <div className="relative z-10">
        <h4 className="text-base font-medium mb-0.5 text-white">{title}</h4>
        <p className="text-xs text-gray-300 max-w-[10rem]">{description}</p>
      </div>

      {/* Focus indicator for keyboard navigation */}
      <div className="absolute inset-0 rounded-lg ring-0 group-focus-visible:ring-2 ring-yellow-400 ring-offset-2 ring-offset-black pointer-events-none"></div>
    </a>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a {...rest} className="text-gray-300 hover:text-white focus:text-white focus:outline-none">
      {children}
    </a>
  )
}
