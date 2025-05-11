import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medicine Cabinets | Creative Kitchens",
  description: "Explore our selection of high-quality medicine cabinets designed for both style and functionality.",
}

export default function MedicineCabinetsPage() {
  return <BlankProductPage productNameEN="Medicine Cabinets" productNameES="Botiquines" />
}
