import BlankProductPage from "@/components/blank-product-page"
import { LanguageProvider } from "@/components/language-provider"

export default function CabinetLightingPage() {
  return (
    <LanguageProvider>
      <BlankProductPage productNameEN="Cabinet Lighting" productNameES="Iluminación para Gabinetes" />
    </LanguageProvider>
  )
}
