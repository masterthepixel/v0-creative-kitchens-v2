import { getDictionary } from "@/lib/dictionary"

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="py-8 sm:py-16 pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-slate-100 dark:divide-slate-800 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 dark:text-white">
                {lang === "en" ? "Get in touch" : "Contáctanos"}
              </h2>
              <p className="mt-4 text-base/7 text-slate-600 dark:text-slate-300">
                {lang === "en"
                  ? "Contact us to start planning your dream kitchen or bathroom renovation. Our team of experts is ready to help bring your vision to life."
                  : "Contáctenos para comenzar a planificar la renovación de su cocina o baño de ensueño. Nuestro equipo de expertos está listo para ayudar a hacer realidad su visión."}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-10">
                <h3 className="text-base/7 font-semibold text-slate-900 dark:text-white">
                  {lang === "en" ? "Sales" : "Ventas"}
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-slate-600 dark:text-slate-300">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:sales@creativekitchens.com"
                        className="font-semibold text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300"
                      >
                        sales@creativekitchens.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-10">
                <h3 className="text-base/7 font-semibold text-slate-900 dark:text-white">
                  {lang === "en" ? "Customer Support" : "Atención al Cliente"}
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-slate-600 dark:text-slate-300">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:support@creativekitchens.com"
                        className="font-semibold text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300"
                      >
                        support@creativekitchens.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 234-5678</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-10">
                <h3 className="text-base/7 font-semibold text-slate-900 dark:text-white">
                  {lang === "en" ? "Join our team" : "Únete a nuestro equipo"}
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-slate-600 dark:text-slate-300">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:careers@creativekitchens.com"
                        className="font-semibold text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300"
                      >
                        careers@creativekitchens.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 345-6789</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-10">
                <h3 className="text-base/7 font-semibold text-slate-900 dark:text-white">
                  {lang === "en" ? "General Inquiries" : "Consultas Generales"}
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-slate-600 dark:text-slate-300">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:info@creativekitchens.com"
                        className="font-semibold text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300"
                      >
                        info@creativekitchens.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 456-7890</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 dark:text-white">
                {lang === "en" ? "Locations" : "Ubicaciones"}
              </h2>
              <p className="mt-4 text-base/7 text-slate-600 dark:text-slate-300">
                {lang === "en"
                  ? "Visit one of our showrooms to see our kitchen and bathroom designs in person."
                  : "Visite una de nuestras salas de exposición para ver nuestros diseños de cocinas y baños en persona."}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-10">
                <h3 className="text-base/7 font-semibold text-slate-900 dark:text-white">
                  {lang === "en" ? "Baltimore" : "Baltimore"}
                </h3>
                <address className="mt-3 space-y-1 text-sm/6 text-slate-600 dark:text-slate-300 not-italic">
                  <p>4556 Kitchen Drive</p>
                  <p>Baltimore, MD 21201</p>
                </address>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-10">
                <h3 className="text-base/7 font-semibold text-slate-900 dark:text-white">
                  {lang === "en" ? "Washington DC" : "Washington DC"}
                </h3>
                <address className="mt-3 space-y-1 text-sm/6 text-slate-600 dark:text-slate-300 not-italic">
                  <p>886 Design Street</p>
                  <p>Washington, DC 20001</p>
                </address>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-10">
                <h3 className="text-base/7 font-semibold text-slate-900 dark:text-white">
                  {lang === "en" ? "Annapolis" : "Annapolis"}
                </h3>
                <address className="mt-3 space-y-1 text-sm/6 text-slate-600 dark:text-slate-300 not-italic">
                  <p>7363 Renovation Avenue</p>
                  <p>Annapolis, MD 21401</p>
                </address>
              </div>
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-10">
                <h3 className="text-base/7 font-semibold text-slate-900 dark:text-white">
                  {lang === "en" ? "Columbia" : "Columbia"}
                </h3>
                <address className="mt-3 space-y-1 text-sm/6 text-slate-600 dark:text-slate-300 not-italic">
                  <p>726 Cabinet Lane</p>
                  <p>Columbia, MD 21044</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
