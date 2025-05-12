"use client"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Expanded logo data with 20 companies
const logos = [
  { name: "Kohler", src: "/logos/logo1.png" },
  { name: "Moen", src: "/logos/logo2.png" },
  { name: "Delta", src: "/logos/logo3.png" },
  { name: "American Standard", src: "/logos/logo4.png" },
  { name: "KitchenAid", src: "/logos/logo5.png" },
  { name: "Bosch", src: "/logos/logo6.png" },
  { name: "GE Appliances", src: "/logos/logo7.png" },
  { name: "Whirlpool", src: "/logos/logo8.png" },
  { name: "Samsung", src: "/logos/logo9.png" },
  { name: "LG", src: "/logos/logo10.png" },
  { name: "Caesarstone", src: "/logos/logo11.png" },
  { name: "Silestone", src: "/logos/logo12.png" },
  { name: "Cambria", src: "/logos/logo13.png" },
  { name: "Armstrong Flooring", src: "/logos/logo14.png" },
  { name: "Mohawk", src: "/logos/logo15.png" },
  { name: "Shaw Floors", src: "/logos/logo16.png" },
  { name: "Grohe", src: "/logos/logo17.png" },
  { name: "Hansgrohe", src: "/logos/logo18.png" },
  { name: "Brizo", src: "/logos/logo19.png" },
  { name: "Thermador", src: "/logos/logo20.png" },
]

// Split logos into two rows of 10 each
const firstRow = logos.slice(0, logos.length / 2)
const secondRow = logos.slice(logos.length / 2)

// Logo Card Component
const LogoCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <div
      className={cn(
        "relative mx-4 h-20 w-40 cursor-pointer overflow-hidden rounded-xl border p-3 flex items-center justify-center",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      title={name}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={`${name} logo`}
        width={100}
        height={50}
        className="object-contain max-h-14"
      />
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((logo) => (
          <LogoCard key={logo.name} {...logo} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
        {secondRow.map((logo) => (
          <LogoCard key={logo.name} {...logo} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  )
}
