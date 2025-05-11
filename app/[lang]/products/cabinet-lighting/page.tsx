import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cabinet Lighting | Creative Kitchens",
  description: "Explore our selection of high-quality cabinet lighting designed for both style and functionality.",
}

export default function CabinetLightingPage() {
  return <BlankProductPage productNameEN="Cabinet Lighting" productNameES="Iluminación para Gabinetes" />
}
