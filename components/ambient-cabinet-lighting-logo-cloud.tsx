import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function AmbientCabinetLightingLogoCloud() {
  const { language } = useLanguage()
  
  const logos = [
    { name: "Hera Lighting", href: "https://www.heralighting.com/products-2/", src: "/images/hera-lighting-logo.png", width: 64 },
    { name: "IKEA", href: "https://www.ikea.com/us/en/cat/integrated-lighting-16282/", src: "/images/ikea-logo.png", width: 64 },
    { name: "Maxim Lighting", href: "https://www.maximlighting.com/product-category/cabinet-lighting/", src: "/images/maxim-lighting-logo.png", width: 64 },
    { name: "Tech Lighting", href: "https://www.techlighting.com/Cabinet-Lighting", src: "/images/tech-lighting-logo.png", width: 64 },
    { name: "Kuzco Lighting", href: "https://kuzcolighting.com/products/", src: "/images/kuzco-lighting-logo.png", width: 64 },
    { name: "Eaton", href: "https://www.eaton.com/us/en-us/catalog/lighting-products/cabinet-lighting.html", src: "/images/eaton-logo.png", width: 64 },
  ]
  
  const content = {
    en: {
      title: "Ambient Cabinet Lighting",
      description: "Create a warm atmosphere with ambient cabinet lighting solutions. Ideal for above-cabinet and toe-kick applications, these systems add depth and mood to your space."
    },
    es: {
      title: "Iluminación Ambiental para Gabinetes",
      description: "Cree una atmósfera cálida con soluciones de iluminación ambiental para gabinetes. Ideales para aplicaciones sobre el gabinete y en el zócalo, estos sistemas añaden profundidad y ambiente a su espacio."
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
                src="/ambient-cabinet-lighting.jpg"
                alt="Ambient Cabinet Lighting"
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
