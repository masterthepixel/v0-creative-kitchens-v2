"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FAQItem = {
  questionEN: string
  answerEN: string
  questionES: string
  answerES: string
}

const faqs: FAQItem[] = [
  {
    questionEN: "What services does CreatieKitchens offer?",
    answerEN:
      "We offer comprehensive kitchen design and renovation services including custom cabinetry, countertop installation, kitchen layouts, appliance selection, lighting design, and full project management from concept to completion.",
    questionES: "¿Qué servicios ofrece CreatieKitchens?",
    answerES:
      "Ofrecemos servicios integrales de diseño y renovación de cocinas que incluyen gabinetes personalizados, instalación de encimeras, distribución de cocinas, selección de electrodomésticos, diseño de iluminación y gestión completa de proyectos desde el concepto hasta la finalización.",
  },
  {
    questionEN: "How long does a typical kitchen renovation take?",
    answerEN:
      "A standard kitchen renovation typically takes 6-12 weeks from demolition to completion. Simple updates may take as little as 2-3 weeks, while complex full renovations with custom elements can take 12-16 weeks. We provide detailed timelines during the planning phase.",
    questionES: "¿Cuánto tiempo dura una renovación típica de cocina?",
    answerES:
      "Una renovación estándar de cocina generalmente toma de 6 a 12 semanas desde la demolición hasta la finalización. Las actualizaciones simples pueden tomar tan solo 2-3 semanas, mientras que las renovaciones completas complejas con elementos personalizados pueden tomar de 12 a 16 semanas. Proporcionamos cronogramas detallados durante la fase de planificación.",
  },
  {
    questionEN: "What is the average cost of a kitchen remodel?",
    answerEN:
      "Kitchen remodel costs vary widely based on scope, materials, and size. Our projects typically range from $30,000 for basic renovations to $100,000+ for premium custom kitchens. We work with you to create a design that fits your budget and provide transparent pricing throughout the process.",
    questionES: "¿Cuál es el costo promedio de una remodelación de cocina?",
    answerES:
      "Los costos de remodelación de cocinas varían ampliamente según el alcance, los materiales y el tamaño. Nuestros proyectos típicamente oscilan entre $30,000 para renovaciones básicas hasta más de $100,000 para cocinas personalizadas premium. Trabajamos con usted para crear un diseño que se ajuste a su presupuesto y proporcionamos precios transparentes durante todo el proceso.",
  },
  {
    questionEN: "Do you provide design consultations?",
    answerEN:
      "Yes! We offer complimentary initial consultations to discuss your vision, needs, and budget. Our design team will help you explore options and develop a concept that enhances both functionality and aesthetics of your kitchen space.",
    questionES: "¿Proporcionan consultas de diseño?",
    answerES:
      "¡Sí! Ofrecemos consultas iniciales gratuitas para discutir su visión, necesidades y presupuesto. Nuestro equipo de diseño le ayudará a explorar opciones y desarrollar un concepto que mejore tanto la funcionalidad como la estética de su espacio de cocina.",
  },
  {
    questionEN: "Can you work with my existing kitchen layout?",
    answerEN:
      "Absolutely. We can work with your existing layout or create an entirely new design. Our team evaluates your space for both aesthetic improvements and functional optimizations, making recommendations based on your needs and structural possibilities.",
    questionES: "¿Pueden trabajar con mi diseño de cocina existente?",
    answerES:
      "Absolutamente. Podemos trabajar con su diseño existente o crear un diseño completamente nuevo. Nuestro equipo evalúa su espacio tanto para mejoras estéticas como para optimizaciones funcionales, haciendo recomendaciones basadas en sus necesidades y posibilidades estructurales.",
  },
  {
    questionEN: "Do you handle permits and inspections?",
    answerEN:
      "Yes, we manage all necessary permits and coordinate required inspections as part of our comprehensive project management service. This ensures your renovation complies with local building codes and regulations.",
    questionES: "¿Manejan permisos e inspecciones?",
    answerES:
      "Sí, gestionamos todos los permisos necesarios y coordinamos las inspecciones requeridas como parte de nuestro servicio integral de gestión de proyectos. Esto asegura que su renovación cumpla con los códigos y regulaciones de construcción locales.",
  },
  {
    questionEN: "What types of materials do you offer for countertops and cabinets?",
    answerEN:
      "We offer a wide selection of high-quality materials. For countertops: granite, quartz, marble, butcher block, concrete, and laminate. For cabinetry: solid wood (maple, oak, cherry), engineered wood, and various finishes including painted, stained, and thermofoil options.",
    questionES: "¿Qué tipos de materiales ofrecen para encimeras y gabinetes?",
    answerES:
      "Ofrecemos una amplia selección de materiales de alta calidad. Para encimeras: granito, cuarzo, mármol, bloque de carnicero, concreto y laminado. Para gabinetes: madera sólida (arce, roble, cerezo), madera de ingeniería y varios acabados que incluyen opciones pintadas, teñidas y de termolaminado.",
  },
  {
    questionEN: "How do I prepare my home for a kitchen renovation?",
    answerEN:
      "We recommend clearing cabinets and drawers, setting up a temporary kitchen in another area of your home, protecting adjacent spaces from dust and debris, and making arrangements for pets. We'll provide a detailed preparation checklist before work begins.",
    questionES: "¿Cómo preparo mi hogar para una renovación de cocina?",
    answerES:
      "Recomendamos vaciar gabinetes y cajones, establecer una cocina temporal en otra área de su hogar, proteger espacios adyacentes del polvo y escombros, y hacer arreglos para las mascotas. Proporcionaremos una lista detallada de preparación antes de comenzar el trabajo.",
  },
  {
    questionEN: "Do you offer warranties on your work?",
    answerEN:
      "Yes, we stand behind our craftsmanship with a 2-year warranty on our installation work. Additionally, most manufacturers provide warranties on their products, such as appliances, cabinets, and countertops, which we'll provide documentation for upon completion.",
    questionES: "¿Ofrecen garantías en su trabajo?",
    answerES:
      "Sí, respaldamos nuestra artesanía con una garantía de 2 años en nuestro trabajo de instalación. Además, la mayoría de los fabricantes proporcionan garantías para sus productos, como electrodomésticos, gabinetes y encimeras, para los cuales proporcionaremos documentación al finalizar.",
  },
  {
    questionEN: "Can you incorporate smart home technology into kitchen designs?",
    answerEN:
      "We can integrate various smart home features including automated lighting, smart appliances, touchless faucets, voice-controlled systems, and charging stations. Our designers stay current with the latest tech innovations for kitchens.",
    questionES: "¿Pueden incorporar tecnología de hogar inteligente en los diseños de cocina?",
    answerES:
      "¡Absolutamente! Podemos integrar varias características de hogar inteligente, incluyendo iluminación automatizada, electrodomésticos inteligentes, grifos sin contacto, sistemas controlados por voz y estaciones de carga. Nuestros diseñadores se mantienen actualizados con las últimas innovaciones tecnológicas para cocinas.",
  },
  {
    questionEN: "Do you offer eco-friendly or sustainable options?",
    answerEN:
      "Yes, we're committed to sustainability. We offer eco-friendly options including Energy Star appliances, sustainable wood cabinetry, recycled materials, water-efficient fixtures, LED lighting, and low-VOC finishes. We can help you create a beautiful kitchen with minimal environmental impact.",
    questionES: "¿Ofrecen opciones ecológicas o sostenibles?",
    answerES:
      "Sí, estamos comprometidos con la sostenibilidad. Ofrecemos opciones ecológicas que incluyen electrodomésticos Energy Star, gabinetes de madera sostenible, materiales reciclados, accesorios eficientes en agua, iluminación LED y acabados con bajo contenido de COV. Podemos ayudarle a crear una hermosa cocina con un impacto ambiental mínimo.",
  },
  {
    questionEN: "What areas do you service?",
    answerEN:
      "We currently service the greater metropolitan area and surrounding suburbs within a 50-mile radius. For projects outside this area, please contact us to discuss possibilities as we evaluate these on a case-by-case basis.",
    questionES: "¿Qué áreas atienden?",
    answerES:
      "Actualmente atendemos el área metropolitana y los suburbios circundantes dentro de un radio de 50 millas. Para proyectos fuera de esta área, contáctenos para discutir posibilidades, ya que los evaluamos caso por caso.",
  },
]

export default function FAQSection() {
  const { language } = useLanguage()
  const [title, setTitle] = useState("")

  useEffect(() => {
    setTitle(language === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes")
  }, [language])

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">{title}</h2>
        <dl className="mt-16 divide-y divide-gray-900/10 dark:divide-gray-100/10">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible className="py-6 first:pt-0 last:pb-0 border-none">
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                  <span className="text-base/7 font-semibold">
                    {language === "en" ? faq.questionEN : faq.questionES}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="mt-2 pr-12 text-base/7 text-gray-600 dark:text-gray-300">
                  {language === "en" ? faq.answerEN : faq.answerES}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </dl>
      </div>
    </div>
  )
}
