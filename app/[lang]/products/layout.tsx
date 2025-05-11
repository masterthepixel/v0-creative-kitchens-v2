import type React from "react"

interface Props {
  children: React.ReactNode
}

export default function ProductsLayout({ children }: Props) {
  return <div className="container mx-auto py-8">{children}</div>
}
