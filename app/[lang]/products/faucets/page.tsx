import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Faucets | Creative Kitchens",
  description: "Explore our selection of high-quality faucets designed for both style and functionality.",
}

export default function FaucetsPage() {
  return <BlankProductPage productNameEN="Faucets" productNameES="Grifos" />
}
