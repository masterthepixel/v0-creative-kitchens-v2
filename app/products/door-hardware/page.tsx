import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function DoorHardwarePage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Door Hardware" productNameES="Herrajes para Puertas" />
    </LanguageProvider>
  )
}
