import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function BathtubProductsLogoCloud() {
  const { language } = useLanguage()
  
  const logos = [
    { name: "Americh Freestanding", href: "https://www.americh.com/freestandingproducts.php?b=7&t=1", src: "/images/americh-logo.png", width: 64 },
    { name: "Americh ROC", href: "https://www.americh.com/rocproducts.php?b=4&t=1", src: "/images/americh-logo.png", width: 64 },
    { name: "Americh Drop-In", href: "https://www.americh.com/dropinproducts.php?b=6&t=1", src: "/images/americh-logo.png", width: 64 },
    { name: "Americh Skirted", href: "https://www.americh.com/skirtedproducts.php?b=8&t=1", src: "/images/americh-logo.png", width: 64 },
    { name: "Americh Vintage", href: "https://www.americh.com/vintageproducts.php?b=14&t=1", src: "/images/americh-logo.png", width: 64 },
    { name: "Americh Shower Bases", href: "https://www.americh.com/skirtedproducts.php?b=8&t=1", src: "/images/americh-logo.png", width: 64 },
  ]
  
  const content = {
    en: {
      title: "Premium Bathtubs",
      description: "With our vast selection of Americh bath tubs, we're guaranteed to provide a product that will really wow you! Not only can we provide the most attractive designs and styles in the market, we provide the best quality around! Shower pans, drop-ins, free standing, soaking...you name it! With stock and custom options, we have something for everyone with all the bells and whistles to make your bath experience one you'll look forward to."
    },
    es: {
      title: "Bañeras Premium",
      description: "Con nuestra amplia selección de bañeras Americh, ¡garantizamos proporcionar un producto que realmente te impresionará! No solo podemos ofrecer los diseños y estilos más atractivos del mercado, ¡proporcionamos la mejor calidad disponible! Platos de ducha, empotrados, independientes, de inmersión... ¡tú lo nombras! Con opciones estándar y personalizadas, tenemos algo para todos con todas las características para hacer de tu experiencia de baño una que esperarás con ansias."
    }
  }

  const t = language === "es" ? content.es : content.en

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 dark:text-white sm:text-5xl">
              {t.title}
            </h2>
            <p className="mt-6 text-lg/8 text-slate-700 dark:text-slate-300">
              {t.description}
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Image
                src="/bathtubs-showcase.jpg"
                alt="Premium Bathtubs Showcase"
                width={600}
                height={300}
                className="rounded-xl shadow-lg w-full max-w-xl object-cover"
                priority
              />
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-6 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:pl-8 lg:grid-cols-2 lg:gap-x-8">
            {logos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-start"
              >
                <button
                  type="button"
                  className="rounded-full bg-slate-100 px-3 py-3 text-xs font-semibold text-slate-900 shadow-xs ring-1 ring-slate-300 ring-inset hover:bg-slate-200 transition-colors flex items-center gap-2 w-full min-w-[180px] h-20 lg:h-24 justify-start"
                >
                  <Image
                    alt={logo.name}
                    src={logo.src}
                    width={logo.width}
                    height={48}
                    className="max-h-12 w-auto object-contain object-left"
                    unoptimized
                  />
                  <span className="truncate">{logo.name}</span>
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
