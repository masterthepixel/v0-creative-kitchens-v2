import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function NaturalStoneCountertopsLogoCloud() {
  const { language } = useLanguage()
  
  const logos = [
    { name: "MSI Natural Stone", href: "https://www.msisurfaces.com/natural-stone-countertops/", src: "/images/msi-logo.png", width: 64 },
    { name: "Cosentino", href: "https://www.cosentino.com/usa/", src: "/images/cosentino-logo.png", width: 64 },
    { name: "Arizona Tile", href: "https://www.arizonatile.com/products/natural-stone/", src: "/images/arizona-tile-logo.png", width: 64 },
    { name: "Walker Zanger", href: "https://walkerzanger.com/", src: "/images/walker-zanger-logo.png", width: 64 },
    { name: "Daltile", href: "https://www.daltile.com/products/natural-stone", src: "/images/daltile-logo.png", width: 64 },
    { name: "Marble Systems", href: "https://www.marblesystems.com/", src: "/images/marble-systems-logo.png", width: 64 },
  ]
  
  const content = {
    en: {
      title: "Natural Stone Countertops",
      description: "Discover the timeless elegance of natural stone countertops including granite, marble, and quartzite. Each piece features unique patterns and colors formed by nature."
    },
    es: {
      title: "Encimeras de Piedra Natural",
      description: "Descubra la elegancia atemporal de las encimeras de piedra natural, incluyendo granito, mármol y cuarcita. Cada pieza presenta patrones y colores únicos formados por la naturaleza."
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
                src="/natural-stone-countertop.jpg"
                alt="Natural Stone Countertops"
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
