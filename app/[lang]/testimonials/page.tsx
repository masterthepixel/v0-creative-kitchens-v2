import { getDictionary } from "@/lib/dictionary"
import TestimonialGrid from "@/components/testimonial-grid"

export default async function TestimonialsPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {params.lang === "en" ? "Customer Testimonials" : "Testimonios de Clientes"}
        </h1>
        <TestimonialGrid language={params.lang} />
      </div>
    </div>
  )
}
