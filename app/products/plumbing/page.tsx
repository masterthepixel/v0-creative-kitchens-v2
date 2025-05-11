import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function PlumbingPage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Plumbing" productNameES="Plomería" />
    </LanguageProvider>
  )
}
