import type { AreaFAQ } from "@/lib/dictionary"

interface FAQProps {
  title: string
  faqs?: AreaFAQ[] // Make faqs optional
}

export default function FAQ({ title, faqs = [] }: FAQProps) {
  // Provide default empty array
  // Only render if we have FAQs
  if (!faqs || faqs.length === 0) {
    return null // Don't render anything if no FAQs
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">{title}</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 border-b border-slate-200 pb-6 last:border-0">
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="text-slate-700 dark:text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
