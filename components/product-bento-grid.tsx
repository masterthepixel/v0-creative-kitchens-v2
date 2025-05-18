"use client"

import React from "react"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  Home,
  LayoutGrid,
  Lightbulb,
  Bath,
  Palette,
  Tv,
  Wrench,
  Package,
  Droplet,
  Key,
  PipetteIcon,
  ShowerHead,
} from "lucide-react"

type ProductCategory = {
  name: string
  nameES: string
  slug: string
  description: string
  descriptionES: string
  icon: React.ReactNode
  className?: string
  bgColor?: string
}

export default function ProductBentoGrid() {
  const { language } = useLanguage()

  const productCategories: ProductCategory[] = [
    {
      name: "Cabinets",
      nameES: "Gabinetes",
      slug: "cabinets",
      description:
        "Transform your space with our premium cabinet collections, offering superior craftsmanship and timeless designs.",
      descriptionES:
        "Transforma tu espacio con nuestras colecciones premium de gabinetes, ofreciendo artesanía superior y diseños atemporales.",
      icon: <Home className="h-4 w-4 text-neutral-500" />,
      bgColor: "from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/30",
    },
    {
      name: "Countertops",
      nameES: "Encimeras",
      slug: "countertops",
      description:
        "Discover durable, elegant countertop solutions in granite, quartz, marble and more for your kitchen.",
      descriptionES:
        "Descubre soluciones duraderas y elegantes para encimeras en granito, cuarzo, mármol y más para tu cocina.",
      icon: <LayoutGrid className="h-4 w-4 text-neutral-500" />,
      bgColor: "from-stone-50 to-stone-100 dark:from-stone-950/40 dark:to-stone-900/30",
    },
    {
      name: "Cabinet Lighting",
      nameES: "Iluminación para Gabinetes",
      slug: "cabinet-lighting",
      description:
        "Illuminate your space with strategic cabinet lighting options that combine energy efficiency with stunning visual impact.",
      descriptionES:
        "Ilumina tu espacio con opciones estratégicas de iluminación para gabinetes que combinan eficiencia energética con un impacto visual impresionante.",
      icon: <Lightbulb className="h-4 w-4 text-neutral-500" />,
      bgColor: "from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/30",
    },
    {
      name: "Bath Tubs",
      nameES: "Bañeras",
      slug: "bath-tubs",
      description:
        "Indulge in luxury with our selection of bathtubs, from sleek modern designs to classic styles that create your perfect sanctuary.",
      descriptionES:
        "Disfruta del lujo con nuestra selección de bañeras, desde diseños modernos elegantes hasta estilos clásicos que crean tu santuario perfecto.",
      icon: <Bath className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
      bgColor: "from-cyan-50 to-cyan-100 dark:from-cyan-950/40 dark:to-cyan-900/30",
    },
    {
      name: "Flooring",
      nameES: "Pisos",
      slug: "flooring",
      description:
        "Step onto quality with our range of flooring options, engineered for durability and designed to complement any interior aesthetic.",
      descriptionES:
        "Camina sobre calidad con nuestra gama de opciones de pisos, diseñados para durabilidad y para complementar cualquier estética interior.",
      icon: <Palette className="h-4 w-4 text-neutral-500" />,
      bgColor: "from-orange-50 to-orange-100 dark:from-orange-950/40 dark:to-orange-900/30",
    },
    {
      name: "Appliances",
      nameES: "Electrodomésticos",
      slug: "appliances",
      description:
        "Enhance your home with cutting-edge appliances that blend innovative technology with sophisticated design for everyday convenience.",
      descriptionES:
        "Mejora tu hogar con electrodomésticos de vanguardia que combinan tecnología innovadora con diseño sofisticado para tu comodidad diaria.",
      icon: <Tv className="h-4 w-4 text-neutral-500" />,
      bgColor: "from-zinc-50 to-zinc-100 dark:from-zinc-950/40 dark:to-zinc-900/30",
    },
    {
      name: "Hardware",
      nameES: "Herrajes",
      slug: "hardware",
      description:
        "Perfect your design with our curated hardware collection, where small details make a significant impact in your space.",
      descriptionES:
        "Perfecciona tu diseño con nuestra colección de herrajes, donde los pequeños detalles generan un impacto significativo en tu espacio.",
      icon: <Wrench className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
      bgColor: "from-slate-50 to-slate-100 dark:from-slate-950/40 dark:to-slate-900/30",
    },
    {
      name: "Medicine Cabinets",
      nameES: "Botiquines",
      slug: "medicine-cabinets",
      description:
        "Combine storage and style with our medicine cabinets, offering practical solutions without compromising on design aesthetics.",
      descriptionES:
        "Combina almacenamiento y estilo con nuestros botiquines, ofreciendo soluciones prácticas sin comprometer la estética del diseño.",
      icon: <Package className="h-4 w-4 text-neutral-500" />,
      bgColor: "from-emerald-50 to-emerald-100 dark:from-emerald-950/40 dark:to-emerald-900/30",
    },
    {
      name: "Faucets",
      nameES: "Grifos",
      slug: "faucets",
      description:
        "Elevate your daily routine with our premium faucets, merging elegant design with advanced functionality for lasting performance.",
      descriptionES:
        "Eleva tu rutina diaria con nuestros grifos premium, fusionando diseño elegante con funcionalidad avanzada para un rendimiento duradero.",
      icon: <Droplet className="h-4 w-4 text-neutral-500" />,
      bgColor: "from-sky-50 to-sky-100 dark:from-sky-950/40 dark:to-sky-900/30",
    },
    {
      name: "Door Hardware",
      nameES: "Herrajes para Puertas",
      slug: "door-hardware",
      description:
        "Make a statement with distinctive door hardware options that add character and security to your entrances and passages.",
      descriptionES:
        "Haz una declaración con opciones distintivas de herrajes para puertas que añaden carácter y seguridad a tus entradas y pasajes.",
      icon: <Key className="h-4 w-4 text-neutral-500" />,
      bgColor: "from-rose-50 to-rose-100 dark:from-rose-950/40 dark:to-rose-900/30",
    },
    {
      name: "Plumbing",
      nameES: "Plomería",
      slug: "plumbing",
      description:
        "Build with confidence using our reliable plumbing solutions, expertly engineered for efficiency and long-term dependability.",
      descriptionES:
        "Construye con confianza usando nuestras soluciones confiables de plomería, expertamente diseñadas para eficiencia y dependabilidad a largo plazo.",
      icon: <PipetteIcon className="h-4 w-4 text-neutral-500" />,
      bgColor: "from-indigo-50 to-indigo-100 dark:from-indigo-950/40 dark:to-indigo-900/30",
    },
    {
      name: "Sinks",
      nameES: "Fregaderos",
      slug: "sinks",
      description:
        "Choose from our versatile sink collection, featuring designs that balance practical workspace needs with sophisticated style.",
      descriptionES:
        "Elige de nuestra versátil colección de fregaderos, con diseños que equilibran las necesidades prácticas del espacio de trabajo con un estilo sofisticado.",
      icon: <ShowerHead className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
      bgColor: "from-teal-50 to-teal-100 dark:from-teal-950/40 dark:to-teal-900/30",
    },
  ]

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const Skeleton = ({ category }: { category: ProductCategory }) => (
    <div
      className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${category.bgColor || "from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800"} overflow-hidden relative group-hover/bento:scale-[1.02] transition-transform duration-300`}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover/bento:opacity-30 transition-opacity duration-300">
        {category.icon &&
          React.cloneElement(category.icon as React.ReactElement, {
            className:
              "h-32 w-32 text-neutral-600 dark:text-neutral-400 group-hover/bento:scale-110 transition-transform duration-300",
          })}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300"></div>
    </div>
  )

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="py-12 max-w-7xl mx-auto">
      <BentoGrid className="max-w-7xl mx-auto">
        {productCategories.map((category, i) => (
          <motion.div key={category.slug} variants={itemVariants}>
            <BentoGridItem
              title={language === "en" ? category.name : category.nameES}
              description={language === "en" ? category.description : category.descriptionES}
              header={<Skeleton category={category} />}
              icon={category.icon}
              className={category.className}
              href={`/${language}/products/${category.slug}`}
            />
          </motion.div>
        ))}
      </BentoGrid>
    </motion.div>
  )
}
