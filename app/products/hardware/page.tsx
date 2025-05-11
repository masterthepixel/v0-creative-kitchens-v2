import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function HardwarePage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Hardware" productNameES="Herrajes" />
    </LanguageProvider>
  )
}
