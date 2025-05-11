import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function AppliancesPage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Appliances" productNameES="Electrodomésticos" />
    </LanguageProvider>
  )
}
