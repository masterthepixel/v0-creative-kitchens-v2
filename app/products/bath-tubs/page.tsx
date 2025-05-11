import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function BathTubsPage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Bath Tubs" productNameES="Bañeras" />
    </LanguageProvider>
  )
}
