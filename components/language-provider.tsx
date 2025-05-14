"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import type { Locale } from "@/lib/dictionary"

type LanguageContextType = {
  language: Locale
  setLanguage: (language: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en", // Provide default values to avoid undefined
  setLanguage: () => {},
})

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}

export function LanguageProvider({
  children,
  lang = "en", // Rename to avoid confusion with initialLanguage
}: {
  children: React.ReactNode
  lang?: Locale
}) {
  const [language, setLanguageState] = useState<Locale>(lang)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Set the language from props
    setLanguageState(lang)
  }, [lang])

  const setLanguage = (newLanguage: Locale) => {
    setLanguageState(newLanguage)

    // Update the URL to reflect the new language
    if (pathname) {
      const segments = pathname.split("/")
      if (segments.length > 1 && (segments[1] === "en" || segments[1] === "es")) {
        segments[1] = newLanguage
        router.push(segments.join("/"))
      } else {
        // Handle cases where the language is not in the path
        const newPathname = `/${newLanguage}${pathname === "/" ? "" : pathname}`
        router.push(newPathname)
      }
    } else {
      router.push(`/${newLanguage}`)
    }
  }

  // Create the context value object outside of the JSX to avoid recreating it on each render
  const contextValue = {
    language,
    setLanguage,
  }

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}
