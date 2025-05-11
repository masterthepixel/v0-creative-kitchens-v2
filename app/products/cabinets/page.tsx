import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function CabinetsPage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Cabinets" productNameES="Gabinetes" />
    </LanguageProvider>
  )
}
