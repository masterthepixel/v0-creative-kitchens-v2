import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function UnderCabinetLightingLogoCloud() {
  const { language } = useLanguage()
  
  const logos = [
    { name: "Kichler", href: "https://www.kichler.com/products/product-category/cabinet-lighting/", src: "/images/kichler-logo.png", width: 64 },
    { name: "WAC Lighting", href: "https://www.waclighting.com/product-category/cabinet-collection/", src: "/images/wac-lighting-logo.png", width: 64 },
    { name: "Legrand", href: "https://www.legrand.us/solutions/kitchen-solutions/under-cabinet-lighting", src: "/images/legrand-logo.png", width: 64 },
    { name: "GE", href: "https://www.gelighting.com/led-fixtures/under-cabinet-lights", src: "/images/ge-logo.png", width: 64 },
    { name: "Philips Hue", href: "https://www.philips-hue.com/en-us/products/smart-lightstrips", src: "/images/philips-hue-logo.png", width: 64 },
    { name: "Lutron", href: "https://www.lutron.com/en-US/Products/Pages/LightingControlSystems/Components/UnderCabinetLight/Overview.aspx", src: "/images/lutron-logo.png", width: 64 },
  ]
  
  const content = {
    en: {
      title: "Under Cabinet Lighting",
      description: "Enhance your kitchen workspace with functional under cabinet lighting solutions. Perfect for task lighting, these systems provide bright illumination where you need it most."
    },
    es: {
      title: "Iluminación Debajo del Gabinete",
      description: "Mejore su espacio de trabajo de cocina con soluciones funcionales de iluminación debajo del gabinete. Perfectas para iluminación de tareas, estos sistemas proporcionan una iluminación brillante donde más la necesita."
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
                src="/under-cabinet-lighting.jpg"
                alt="Under Cabinet Lighting"
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
