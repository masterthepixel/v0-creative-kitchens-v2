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
            <Suspense
              fallback={
                <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
                </div>
              }
            >
              <InteractiveGridPattern />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"></div>
              }
            >
              <MainNavbar />
            </Suspense>

            <main className="pt-16">{children}</main>

            <Suspense fallback={<div className="h-64 bg-gray-100 dark:bg-gray-800"></div>}>
              <Footer />
            </Suspense>

            <Suspense fallback={null}>
              <MobileBottomNav />
            </Suspense>
          </LanguageProvider>
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
