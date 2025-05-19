import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function AppliancesLogoCloud() {
  const { language } = useLanguage()
  
  const logos = [
    { name: "GE Appliances", href: "https://www.geappliances.com/", src: "/images/ge-logo.png", width: 64 },
    { name: "Café", href: "https://www.cafeappliances.com/", src: "/images/cafe-logo.png", width: 64 },
    { name: "Monogram", href: "https://www.monogram.com/", src: "/images/monogram-logo.png", width: 64 },
    { name: "Whirlpool", href: "https://www.whirlpool.com/", src: "/images/whirlpool-logo.png", width: 64 },
    { name: "KitchenAid", href: "https://www.kitchenaid.com/major-appliances.html", src: "/images/kitchenaid-logo.png", width: 64 },
    { name: "Maytag", href: "https://www.maytag.com/", src: "/images/maytag-logo.png", width: 64 },
    { name: "Blomberg", href: "https://www.blombergappliances.com/", src: "/images/blomberg-logo.png", width: 64 },
    { name: "Bertazzoni", href: "https://us.bertazzoni.com/", src: "/images/bertazzoni-logo.png", width: 64 },
    { name: "XO Appliances", href: "https://xoappliance.com/", src: "/images/xo-logo.png", width: 64 },
    { name: "Smeg", href: "https://www.smeg.com/us", src: "/images/smeg-logo.png", width: 64 },
    { name: "Amana", href: "https://www.amana.com/appliance-sales.html", src: "/images/amana-logo.png", width: 64 },
  ]
  
  const content = {
    en: {
      title: "Premium Appliances",
      description: "With more than 10 major appliance brands, we are your place for any and all appliance needs. With the ability to provide the major brands you'll love like GE, Café, Monogram, Whirlpool, Kitchenaid, Blomberg, Bertazzoni, XO, and Smeg appliances just to name a few; you'll never need to go anywhere else for your dream appliances."
    },
    es: {
      title: "Electrodomésticos Premium",
      description: "Con más de 10 marcas importantes de electrodomésticos, somos su lugar para todas las necesidades de electrodomésticos. Con la capacidad de proporcionar las principales marcas que le encantarán como GE, Café, Monogram, Whirlpool, Kitchenaid, Blomberg, Bertazzoni, XO y electrodomésticos Smeg, solo por nombrar algunas; nunca necesitará ir a ningún otro lugar para sus electrodomésticos de ensueño."
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
                src="/appliances-showcase.jpg"
                alt="Premium Appliances Showcase"
                width={600}
                height={300}
                className="rounded-xl shadow-lg w-full max-w-xl object-cover"
                priority
              />
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-6 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:pl-8 lg:grid-cols-3 lg:gap-x-8">
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
