import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function InCabinetLightingLogoCloud() {
  const { language } = useLanguage()
  
  const logos = [
    { name: "Hafele", href: "https://www.hafele.com/us/en/products/lighting-systems/led-lighting/", src: "/images/hafele-logo.png", width: 64 },
    { name: "Rev-A-Shelf", href: "https://www.rev-a-shelf.com/lighting", src: "/images/rev-a-shelf-logo.png", width: 64 },
    { name: "Salice", href: "https://www.salice.com/en-us/products/lighting-systems/", src: "/images/salice-logo.png", width: 64 },
    { name: "Blum", href: "https://www.blum.com/us/en/products/lighting-systems/", src: "/images/blum-logo.png", width: 64 },
    { name: "Richelieu", href: "https://www.richelieu.com/us/en/category/lighting/cabinet-lighting/", src: "/images/richelieu-logo.png", width: 64 },
    { name: "Sensio", href: "https://www.sensio.co.uk/cabinet-lighting/", src: "/images/sensio-logo.png", width: 64 },
  ]
  
  const content = {
    en: {
      title: "In-Cabinet Lighting",
      description: "Illuminate the interior of your cabinets with elegant in-cabinet lighting solutions. Perfect for display cabinets, these systems showcase your items with a sophisticated glow."
    },
    es: {
      title: "Iluminación Interior de Gabinetes",
      description: "Ilumine el interior de sus gabinetes con elegantes soluciones de iluminación interior. Perfectas para vitrinas, estos sistemas muestran sus artículos con un brillo sofisticado."
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
                src="/in-cabinet-lighting.jpg"
                alt="In-Cabinet Lighting"
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
