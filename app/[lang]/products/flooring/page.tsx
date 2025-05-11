import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flooring | Creative Kitchens",
  description: "Explore our selection of high-quality flooring designed for both style and functionality.",
}

export default function FlooringPage() {
  return <BlankProductPage productNameEN="Flooring" productNameES="Pisos" />
}
