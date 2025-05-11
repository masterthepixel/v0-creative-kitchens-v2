import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function FaucetsPage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Faucets" productNameES="Grifos" />
    </LanguageProvider>
  )
}
