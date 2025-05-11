import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function CountertopsPage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Countertops" productNameES="Encimeras" />
    </LanguageProvider>
  )
}
