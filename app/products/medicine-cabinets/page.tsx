import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function MedicineCabinetsPage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Medicine Cabinets" productNameES="Botiquines" />
    </LanguageProvider>
  )
}
