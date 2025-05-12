import type React from "react"
import "@/app/globals.css"
import "@/app/bento-grid.css"
import "@/app/navbar.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MobileBottomNav from "@/components/mobile-bottom-nav"
import BackToTop from "@/components/back-to-top"
import PageTransition from "@/components/page-transition"
import { LanguageProvider } from "@/components/language-provider"
import type { Metadata } from "next"
import { Suspense } from "react"
import type { Locale } from "@/lib/dictionary"

export const metadata: Metadata = {
  title: "Creative Kitchens",
  description: "Premium kitchen and bathroom solutions",
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <LanguageProvider initialLanguage={params.lang}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-0">
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            <PageTransition>{children}</PageTransition>
          </Suspense>
        </main>
        <Footer />
        <MobileBottomNav />
        <BackToTop />
      </div>
    </LanguageProvider>
  )
}
