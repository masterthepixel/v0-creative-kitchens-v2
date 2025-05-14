import type React from "react"
import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/google-analytics"
import Footer from "@/components/footer"
import MobileBottomNav from "@/components/mobile-bottom-nav"
import MainNavbar from "@/components/main-navbar"
import type { Locale } from "@/lib/dictionary"
import { InteractiveGridPattern } from "@/components/interactive-grid-pattern"
import { Suspense } from "react"

import "@/app/globals.css"
import "@/app/splide-custom.css"
import "@/app/bento-grid.css"
import "@/app/navbar.css"

export const metadata: Metadata = {
  title: "Creative Kitchens",
  description: "Premium kitchen design and installation",
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider lang={params.lang}>
            <InteractiveGridPattern />
            <Suspense>
              <MainNavbar />
              <main className="pt-16">{children}</main>
              <Footer />
              <MobileBottomNav />
            </Suspense>
          </LanguageProvider>
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
