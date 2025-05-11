"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import getCountryFlag from "country-flag-icons/react/3x2"

export default function LanguageSwitcherWithFlags() {
  const { language, setLanguage } = useLanguage()

  // Map language codes to country codes for flags
  const countryMap: Record<string, string> = {
    en: "US", // United States for English
    es: "ES", // Spain for Spanish
  }

  // Get flag components
  const USFlag = getCountryFlag.US
  const ESFlag = getCountryFlag.ES

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center overflow-hidden rounded-full border border-white bg-background">
            {language === "en" ? <USFlag className="h-full w-full" /> : <ESFlag className="h-full w-full" />}
          </span>
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`flex items-center gap-2 ${language === "en" ? "bg-muted" : ""}`}
        >
          <div className="h-4 w-6 overflow-hidden rounded">
            <USFlag className="h-full w-full" />
          </div>
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={`flex items-center gap-2 ${language === "es" ? "bg-muted" : ""}`}
        >
          <div className="h-4 w-6 overflow-hidden rounded">
            <ESFlag className="h-full w-full" />
          </div>
          <span>Español</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
