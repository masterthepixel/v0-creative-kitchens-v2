import Link from "next/link"

interface CallToActionProps {
  title: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  lang?: string
}

export default function CallToAction({
  title,
  description,
  primaryButtonText = "Contact Us",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Call Now",
  secondaryButtonLink = "tel:+13015551234",
  lang = "en",
}: CallToActionProps) {
  // Translate button text if not provided
  if (primaryButtonText === "Contact Us" && lang === "es") {
    primaryButtonText = "Contáctenos"
  }

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        {description && <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${lang}${primaryButtonLink}`}
            className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-slate-100 transition-colors font-medium"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonLink}
            className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors font-medium"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
