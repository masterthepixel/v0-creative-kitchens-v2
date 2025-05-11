import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plumbing | Creative Kitchens",
  description: "Explore our selection of high-quality plumbing designed for both style and functionality.",
}

export default function PlumbingPage() {
  return <BlankProductPage productNameEN="Plumbing" productNameES="Plomería" />
}
