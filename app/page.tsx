import { Header } from "@/components/header"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Welcome to Next.js with <br className="hidden sm:inline" />
              Dark Mode Support
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
              This site supports dark and light mode. Click the sun/moon icon in the header to toggle between themes.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:grid-cols-2 md:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Features</h2>
              <p className="text-muted-foreground">This template includes:</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Dark and light mode with system preference detection</li>
                <li>Google Analytics integration</li>
                <li>Responsive design</li>
                <li>Tailwind CSS styling</li>
                <li>Inter font with system font fallbacks</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Theme Toggle Demo</h3>
                <p className="text-muted-foreground">
                  Try toggling between dark and light mode using the button in the header.
                </p>
                <div className="flex items-center justify-center p-4">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
