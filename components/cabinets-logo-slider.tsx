import Image from "next/image"

export default function CabinetsLogoCloud() {
  const logos = [
    { name: "North Point", href: "https://www.hardwareresources.com/northpoint-cabinets", src: "/images/northpoint.png", width: 64 },
    { name: "CNC", href: "https://cnccabinetry.com/kitchen-cabinets/", src: "/images/cnc.png", width: 64 },
    { name: "KCD", href: "https://www.kcdus.com/products/", src: "/images/kcd.png", width: 64 },
    { name: "Wolf", href: "https://www.wolfhomeproducts.com/kitchencabinetry", src: "/images/wolf.png", width: 64 },
    { name: "Forevermark", href: "https://forevermarkcabinetry.com/cabinet-collections/", src: "/images/forevermark.png", width: 64 },
    { name: "US Cabinet Depot", href: "https://www.uscabinetdepot.com/our-products/", src: "/images/uscabinetdepot.png", width: 64 },
    { name: "Fabuwood", href: "https://www.fabuwood.com/cabinets/", src: "/images/fabuwood.png", width: 64 },
    { name: "JSI", href: "https://www.jsicabinetry.com/designer-kitchen", src: "/images/jsi.png", width: 64 },
    { name: "Lauriermax", href: "https://lauriermax.com/en/3-kitchens", src: "/images/lauriermax.png", width: 64 },
  ]
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 dark:text-white sm:text-5xl">
              Indoor Cabinetry
            </h2>
            <p className="mt-6 text-lg/8 text-slate-700 dark:text-slate-300">
              Explore our selection of high-quality indoor cabinetry brands, trusted by homeowners and professionals alike.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Image
                src="/cabinets-hero.jpg"
                alt="Cabinets Hero"
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