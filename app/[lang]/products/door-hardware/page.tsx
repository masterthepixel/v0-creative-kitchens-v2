import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Door Hardware | Creative Kitchens",
  description: "Explore our selection of high-quality door hardware designed for both style and functionality.",
}

export default function DoorHardwarePage() {
  return <BlankProductPage productNameEN="Door Hardware" productNameES="Herrajes para Puertas" />
}
