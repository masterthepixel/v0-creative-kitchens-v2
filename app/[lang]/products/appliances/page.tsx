import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Appliances | Creative Kitchens",
  description: "Explore our selection of high-quality appliances designed for both style and functionality.",
}

export default function AppliancesPage() {
  return <BlankProductPage productNameEN="Appliances" productNameES="Electrodomésticos" />
}
