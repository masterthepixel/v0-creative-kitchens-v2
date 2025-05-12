import { getDictionary } from "@/lib/dictionary"
import ContactForm from "@/components/contact-form"

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="relative pt-24 lg:pt-32">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt={lang === "en" ? "Creative Kitchens showroom" : "Sala de exposición de Creative Kitchens"}
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
              {lang === "en" ? "Let's work together" : "Trabajemos juntos"}
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
              {lang === "en"
                ? "Contact us to start planning your dream kitchen or bathroom renovation. Our team of experts is ready to help bring your vision to life."
                : "Contáctenos para comenzar a planificar la renovación de su cocina o baño de ensueño. Nuestro equipo de expertos está listo para ayudar a hacer realidad su visión."}
            </p>
            <ContactForm lang={lang} />
          </div>
        </div>
      </div>
    </div>
  )
}
