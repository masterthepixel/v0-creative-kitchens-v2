import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cabinets | Creative Kitchens",
  description: "Explore our selection of high-quality cabinets designed for both style and functionality.",
}

export default function CabinetsPage() {
  return <BlankProductPage productNameEN="Cabinets" productNameES="Gabinetes" />
}
