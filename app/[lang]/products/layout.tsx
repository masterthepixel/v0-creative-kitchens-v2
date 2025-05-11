import type React from "react"
import { LanguageProvider } from "@/context/LanguageContext"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Props {
  children: React.ReactNode
  params: { lang: string }
}

export default function ProductsLayout({ children, params }: Props) {
  return (
    <LanguageProvider initialLanguage={params.lang}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
