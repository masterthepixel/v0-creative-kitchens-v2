import BlankProductPage from "@/components/blank-product-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Countertops | Creative Kitchens",
  description: "Explore our selection of high-quality countertops designed for both style and functionality.",
}

export default function CountertopsPage() {
  return <BlankProductPage productNameEN="Countertops" productNameES="Encimeras" />
}
