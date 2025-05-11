import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sinks | Creative Kitchens",
  description: "Explore our selection of high-quality sinks designed for both style and functionality.",
}

export default function SinksPage() {
  return <BlankProductPage productNameEN="Sinks" productNameES="Fregaderos" />
}
