import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function FlooringPage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Flooring" productNameES="Pisos" />
    </LanguageProvider>
  )
}
