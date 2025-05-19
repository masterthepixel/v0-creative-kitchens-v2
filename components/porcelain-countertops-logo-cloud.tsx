import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function PorcelainCountertopsLogoCloud() {
  const { language } = useLanguage()
  
  const logos = [
    { name: "Neolith", href: "https://www.neolith.com/en/applications/countertops/", src: "/images/neolith-logo.png", width: 64 },
    { name: "Dekton", href: "https://www.dekton.com/usa/", src: "/images/dekton-logo.png", width: 64 },
    { name: "Laminam", href: "https://www.laminam.com/us/surfaces/kitchen/", src: "/images/laminam-logo.png", width: 64 },
    { name: "Lapitec", href: "https://www.lapitec.com/en/kitchen-countertops", src: "/images/lapitec-logo.png", width: 64 },
    { name: "Florim Stone", href: "https://www.florimstone.com/en/", src: "/images/florim-logo.png", width: 64 },
    { name: "SapienStone", href: "https://www.sapienstone.com/", src: "/images/sapienstone-logo.png", width: 64 },
  ]
  
  const content = {
    en: {
      title: "Porcelain Countertops",
      description: "Experience the latest innovation in countertop surfaces with our porcelain options, combining exceptional durability with stunning aesthetics and ultra-low maintenance."
    },
    es: {
      title: "Encimeras de Porcelana",
      description: "Experimente la última innovación en superficies de encimeras con nuestras opciones de porcelana, que combinan una durabilidad excepcional con una estética impresionante y un mantenimiento ultra bajo."
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
                src="/porcelain-countertop.jpg"
                alt="Porcelain Countertops"
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
