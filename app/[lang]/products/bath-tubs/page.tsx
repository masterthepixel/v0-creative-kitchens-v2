import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bath Tubs | Creative Kitchens",
  description: "Explore our selection of high-quality bath tubs designed for both style and functionality.",
}

export default function BathTubsPage() {
  return <BlankProductPage productNameEN="Bath Tubs" productNameES="Bañeras" />
}
