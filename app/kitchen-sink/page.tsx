import type { Metadata } from "next"
import { KitchenSink } from "@/components/kitchen-sink"

export const metadata: Metadata = {
  title: "Kitchen Sink | UI Components",
  description: "A showcase of all UI components and design elements",
}

export default function KitchenSinkPage() {
  return <KitchenSink />
}
