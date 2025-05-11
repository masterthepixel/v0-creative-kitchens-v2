import type React from "react"
import "@/app/globals.css"
import Header from "@/components/header"
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
        <Header className="hidden lg:block" />
        <main className="flex-1 pt-0 lg:pt-16">
          <Suspense fallback={<div className="p-8">Loading...</div>}>
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
