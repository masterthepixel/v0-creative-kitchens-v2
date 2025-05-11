import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hardware | Creative Kitchens",
  description: "Explore our selection of high-quality hardware designed for both style and functionality.",
}

export default function HardwarePage() {
  return <BlankProductPage productNameEN="Hardware" productNameES="Herrajes" />
}
