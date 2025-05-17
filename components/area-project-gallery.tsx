"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-provider"

interface ProjectGalleryProps {
  location: string
}

export default function AreaProjectGallery({ location }: ProjectGalleryProps) {
  const { language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  // Sample projects - in a real implementation, these would come from a database or CMS
  const projects = [
    {
      id: 1,
      title: language === "en" ? "Modern Kitchen Renovation" : "Renovación de Cocina Moderna",
      description:
        language === "en"
          ? `Complete kitchen remodel in ${location} featuring custom cabinets and quartz countertops.`
          : `Remodelación completa de cocina en ${location} con gabinetes personalizados y encimeras de cuarzo.`,
      image: "/gallery/modern-kitchen.png",
      largeImage: true,
    },
    {
      id: 2,
      title: language === "en" ? "Luxury Bathroom Remodel" : "Remodelación de Baño de Lujo",
      description:
        language === "en"
          ? `Spa-inspired bathroom renovation in ${location} with premium fixtures and custom tilework.`
          : `Renovación de baño inspirada en spa en ${location} con accesorios premium y azulejos personalizados.`,
      image: "/gallery/luxury-bathroom.png",
      largeImage: false,
    },
    {
      id: 3,
      title: language === "en" ? "Traditional Kitchen Design" : "Diseño de Cocina Tradicional",
      description:
        language === "en"
          ? `Classic kitchen design in ${location} with hardwood cabinets and granite countertops.`
          : `Diseño de cocina clásica en ${location} con gabinetes de madera maciza y encimeras de granito.`,
      image: "/gallery/traditional-kitchen.png",
      largeImage: false,
    },
    {
      id: 4,
      title: language === "en" ? "Contemporary Bathroom" : "Baño Contemporáneo",
      description:
        language === "en"
          ? `Modern bathroom renovation in ${location} featuring floating vanity and walk-in shower.`
          : `Renovación de baño moderno en ${location} con tocador flotante y ducha sin puertas.`,
      image: "/gallery/contemporary-bathroom.png",
      largeImage: true,
    },
  ]

  // For demo purposes, use placeholder images if real images aren't available
  const getImageSrc = (path: string) => {
    // Check if the image exists or use a placeholder
    return path || "/placeholder.svg?height=600&width=800"
  }

  return (
    <div className="w-full bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">
          {language === "en" ? "Our Project Gallery" : "Nuestra Galería de Proyectos"}
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-white">
          {language === "en"
            ? `Explore our portfolio of kitchen and bathroom transformations in ${location}. Click on any project to see more details.`
            : `Explore nuestro portafolio de transformaciones de cocinas y baños en ${location}. Haga clic en cualquier proyecto para ver más detalles.`}
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:opacity-90 hover:shadow-xl ${
                project.largeImage ? "md:col-span-1 aspect-[16/9]" : "md:col-span-1 aspect-[4/3]"
              }`}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="absolute inset-0">
                <Image
                  src={getImageSrc(project.image) || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${language}/gallery`}
            className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors font-medium"
          >
            {language === "en" ? "View All Projects" : "Ver Todos los Proyectos"}
          </Link>
        </div>
      </div>

      {/* Modal for project details - would be implemented in a real application */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content would go here */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{projects.find((p) => p.id === selectedProject)?.title}</h3>
              <p className="mb-4">{projects.find((p) => p.id === selectedProject)?.description}</p>
              <button className="bg-gray-900 text-white px-4 py-2 rounded" onClick={() => setSelectedProject(null)}>
                {language === "en" ? "Close" : "Cerrar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
