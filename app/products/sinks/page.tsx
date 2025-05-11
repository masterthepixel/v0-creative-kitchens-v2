import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function SinksPage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Sinks" productNameES="Fregaderos" />
    </LanguageProvider>
  )
}
