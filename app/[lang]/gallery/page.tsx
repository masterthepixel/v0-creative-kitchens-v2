import { getDictionary } from "@/lib/dictionary"
import { LayoutGridDemo } from "@/components/layout-grid-demo"

export default async function GalleryPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {lang === "en" ? "Our Project Gallery" : "Galería de Proyectos"}
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {lang === "en"
                ? "Explore our portfolio of kitchen and bathroom transformations. Click on any project to see more details."
                : "Explore nuestro portafolio de transformaciones de cocinas y baños. Haga clic en cualquier proyecto para ver más detalles."}
            </p>
          </div>
          <div className="h-auto mb-24">
            <LayoutGridDemo />
          </div>
        </div>
      </section>
    </main>
  )
}
