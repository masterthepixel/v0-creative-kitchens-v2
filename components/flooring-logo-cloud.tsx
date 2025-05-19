import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function FlooringLogoCloud() {
  const { language } = useLanguage()
  
  const tileLogos = [
    { name: "MSI Tile", href: "https://www.msisurfaces.com/backsplash-tile/", src: "/images/msi-tile-logo.png", width: 64 },
    { name: "Marazzi", href: "https://www.marazziusa.com/", src: "/images/marazzi-logo.png", width: 64 },
    { name: "American Olean", href: "https://www.americanolean.com/", src: "/images/american-olean-logo.png", width: 64 },
    { name: "Roca Tile", href: "https://rocatileusa.com/category/all", src: "/images/roca-tile-logo.png", width: 64 },
    { name: "Chesapeake Tile", href: "https://www.chesapeakeflooring.com/material-type/tile", src: "/images/chesapeake-logo.png", width: 64 },
    { name: "Daltile", href: "https://www.daltile.com/", src: "/images/daltile-logo.png", width: 64 },
    { name: "Raphael Porcelain", href: "https://www.raphaelporcelain.com/entire-porcelain-tile-collection/#", src: "/images/raphael-porcelain-logo.png", width: 64 },
  ]

  const woodLaminateLogos = [
    { name: "Chesapeake Flooring", href: "https://www.chesapeakeflooring.com/material-type/laminate", src: "/images/chesapeake-logo.png", width: 64 },
    { name: "Bruce", href: "https://www.bruce.com/en-us/products/engineered-hardwood.html?size=24", src: "/images/bruce-logo.png", width: 64 },
    { name: "Mohawk Engineered", href: "https://www.mohawkflooring.com/shop/EngineeredWood?colorGroup=all&type=EngineeredWood&page=1&color=all&look=all", src: "/images/mohawk-logo.png", width: 64 },
    { name: "Citiflor", href: "https://www.powerdekorna.com/#collections", src: "/images/citiflor-logo.png", width: 64 },
  ]
  
  const carpetLogos = [
    { name: "Chesapeake Carpet", href: "https://www.chesapeakeflooring.com/material-type/carpet", src: "/images/chesapeake-logo.png", width: 64 },
    { name: "Shawmark", href: "https://shawfloors.com/flooring/carpet", src: "/images/shawmark-logo.png", width: 64 },
    { name: "Mohawk Carpet", href: "https://www.mohawkflooring.com/shop/Carpet?colorGroup=all&look=all&type=Carpet&page=1&color=all", src: "/images/mohawk-logo.png", width: 64 },
  ]
  
  const content = {
    en: {
      tileTitle: "Tile Flooring",
      tileDescription: "We have a wide variety of tile flooring options from leading manufacturers. Perfect for bathrooms, kitchens, and other high-moisture areas, our selection provides durability, style, and easy maintenance.",
      woodLaminateTitle: "Engineered and Laminate Flooring",
      woodLaminateDescription: "Our engineered and laminate flooring options combine the beauty of natural wood with enhanced durability and stability. These products are an excellent choice for any room in your home.",
      carpetTitle: "Carpet Flooring",
      carpetDescription: "When it comes to flooring, the competition is under our feet. We have a huge array of carpet product options available. No matter what your project calls for, we can make it happen!"
    },
    es: {
      tileTitle: "Pisos de Azulejo",
      tileDescription: "Tenemos una amplia variedad de opciones de pisos de azulejo de los principales fabricantes. Perfectos para baños, cocinas y otras áreas de alta humedad, nuestra selección proporciona durabilidad, estilo y fácil mantenimiento.",
      woodLaminateTitle: "Pisos de Ingeniería y Laminados",
      woodLaminateDescription: "Nuestras opciones de pisos de ingeniería y laminados combinan la belleza de la madera natural con mayor durabilidad y estabilidad. Estos productos son una excelente opción para cualquier habitación de su hogar.",
      carpetTitle: "Pisos de Alfombra",
      carpetDescription: "Cuando se trata de pisos, la competencia está bajo nuestros pies. Tenemos una gran variedad de opciones de alfombras disponibles. ¡No importa lo que requiera su proyecto, podemos hacerlo realidad!"
    }
  }

  const t = language === "es" ? content.es : content.en

  return (
    <>
      {/* Tile Section */}
      <div id="tile-flooring" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 dark:text-white sm:text-5xl">
                {t.tileTitle}
              </h2>
              <p className="mt-6 text-lg/8 text-slate-700 dark:text-slate-300">
                {t.tileDescription}
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Image
                  src="/flooring-tile.jpg"
                  alt="Tile Flooring"
                  width={600}
                  height={300}
                  className="rounded-xl shadow-lg w-full max-w-xl object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-6 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:pl-8 lg:grid-cols-2 lg:gap-x-8">
              {tileLogos.map((logo) => (
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

      {/* Engineered and Laminate Section */}
      <div id="wood-laminate-flooring" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 dark:text-white sm:text-5xl">
                {t.woodLaminateTitle}
              </h2>
              <p className="mt-6 text-lg/8 text-slate-700 dark:text-slate-300">
                {t.woodLaminateDescription}
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Image
                  src="/flooring-wood-laminate.jpg"
                  alt="Engineered and Laminate Flooring"
                  width={600}
                  height={300}
                  className="rounded-xl shadow-lg w-full max-w-xl object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-6 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:pl-8 lg:grid-cols-2 lg:gap-x-8">
              {woodLaminateLogos.map((logo) => (
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

      {/* Carpet Section */}
      <div id="carpet-flooring" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 dark:text-white sm:text-5xl">
                {t.carpetTitle}
              </h2>
              <p className="mt-6 text-lg/8 text-slate-700 dark:text-slate-300">
                {t.carpetDescription}
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Image
                  src="/flooring-carpet.jpg"
                  alt="Carpet Flooring"
                  width={600}
                  height={300}
                  className="rounded-xl shadow-lg w-full max-w-xl object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-6 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:pl-8 lg:grid-cols-2 lg:gap-x-8">
              {carpetLogos.map((logo) => (
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
    </>
  )
}
