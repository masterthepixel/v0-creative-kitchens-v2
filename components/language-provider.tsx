"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import type { Locale } from "@/lib/dictionary"

type LanguageContextType = {
  language: Locale
  setLanguage: (language: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageProvider({
  children,
  initialLanguage = "en",
}: {
  children: React.ReactNode
  initialLanguage?: Locale
}) {
  const [language, setLanguageState] = useState<Locale>(initialLanguage)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Set the initial language from props
    setLanguageState(initialLanguage)
  }, [initialLanguage])

  const setLanguage = (newLanguage: Locale) => {
    setLanguageState(newLanguage)

    // Update the URL to reflect the new language
    if (pathname) {
      const segments = pathname.split("/")
      if (segments.length > 1 && (segments[1] === "en" || segments[1] === "es")) {
        segments[1] = newLanguage
        router.push(segments.join("/"))
      }
    }
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}
