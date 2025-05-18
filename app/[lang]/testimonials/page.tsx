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
        <p className="text-center mb-12 max-w-2xl mx-auto">
          {params.lang === "en"
            ? "Read what our customers have to say about their experience with Creative Kitchens and our team."
            : "Lea lo que nuestros clientes tienen que decir sobre su experiencia con Cocinas Creativas y nuestro equipo."}
        </p>
        <TestimonialGrid language={params.lang} />
      </div>
    </div>
  )
}
