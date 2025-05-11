import type React from "react"
import "@/app/globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
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
        <Header />
        <main className="flex-1 pt-16">
          <Suspense fallback={<div className="p-8">Loading...</div>}>{children}</Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
