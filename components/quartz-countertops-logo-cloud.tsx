import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function QuartzCountertopsLogoCloud() {
  const { language } = useLanguage()
  
  const logos = [
    { name: "Caesarstone", href: "https://www.caesarstoneus.com/", src: "/images/caesarstone-logo.png", width: 64 },
    { name: "Silestone", href: "https://www.silestoneusa.com/", src: "/images/silestone-logo.png", width: 64 },
    { name: "Cambria", href: "https://www.cambriausa.com/", src: "/images/cambria-logo.png", width: 64 },
    { name: "MSI Q", href: "https://www.msisurfaces.com/quartz-countertops/", src: "/images/msi-logo.png", width: 64 },
    { name: "Hanstone", href: "https://www.hanstonequartz.com/", src: "/images/hanstone-logo.png", width: 64 },
    { name: "LG Viatera", href: "https://www.lgviaterausa.com/", src: "/images/lg-logo.png", width: 64 },
  ]
  
  const content = {
    en: {
      title: "Quartz Countertops",
      description: "Explore our selection of premium quartz countertop brands, offering durability, low maintenance, and timeless beauty for your kitchen and bath spaces."
    },
    es: {
      title: "Encimeras de Cuarzo",
      description: "Explore nuestra selección de marcas premium de encimeras de cuarzo, que ofrecen durabilidad, bajo mantenimiento y belleza atemporal para los espacios de su cocina y baño."
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
                src="/quartz-countertop.jpg"
                alt="Quartz Countertops"
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
