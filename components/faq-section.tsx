"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

type FAQItem = {
  id: number
  questionEN: string
  answerEN: string
  questionES: string
  answerES: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    questionEN: "What services does CreatieKitchens offer?",
    answerEN:
      "We offer comprehensive kitchen design and renovation services including custom cabinetry, countertop installation, kitchen layouts, appliance selection, lighting design, and full project management from concept to completion.",
    questionES: "¿Qué servicios ofrece CreatieKitchens?",
    answerES:
      "Ofrecemos servicios integrales de diseño y renovación de cocinas que incluyen gabinetes personalizados, instalación de encimeras, distribución de cocinas, selección de electrodomésticos, diseño de iluminación y gestión completa de proyectos desde el concepto hasta la finalización.",
  },
  {
    id: 2,
    questionEN: "How long does a typical kitchen renovation take?",
    answerEN:
      "A standard kitchen renovation typically takes 6-12 weeks from demolition to completion. Simple updates may take as little as 2-3 weeks, while complex full renovations with custom elements can take 12-16 weeks. We provide detailed timelines during the planning phase.",
    questionES: "¿Cuánto tiempo dura una renovación típica de cocina?",
    answerES:
      "Una renovación estándar de cocina generalmente toma de 6 a 12 semanas desde la demolición hasta la finalización. Las actualizaciones simples pueden tomar tan solo 2-3 semanas, mientras que las renovaciones completas complejas con elementos personalizados pueden tomar de 12 a 16 semanas. Proporcionamos cronogramas detallados durante la fase de planificación.",
  },
  {
    id: 3,
    questionEN: "What is the average cost of a kitchen remodel?",
    answerEN:
      "Kitchen remodel costs vary widely based on scope, materials, and size. Our projects range from basic renovations to premium custom kitchens. We work with you to create a design that fits your budget and provide transparent pricing throughout the process.",
    questionES: "¿Cuál es el costo promedio de una remodelación de cocina?",
    answerES:
      "Los costos de remodelación de cocinas varían ampliamente según el alcance, los materiales y el tamaño. Nuestros proyectos varían desde renovaciones básicas hasta cocinas personalizadas premium. Trabajamos con usted para crear un diseño que se ajuste a su presupuesto y proporcionamos precios transparentes durante todo el proceso.",
  },
  {
    id: 4,
    questionEN: "Do you provide design consultations?",
    answerEN:
      "Yes! We offer complimentary initial consultations to discuss your vision, needs, and budget. Our design team will help you explore options and develop a concept that enhances both functionality and aesthetics of your kitchen space.",
    questionES: "¿Proporcionan consultas de diseño?",
    answerES:
      "¡Sí! Ofrecemos consultas iniciales gratuitas para discutir su visión, necesidades y presupuesto. Nuestro equipo de diseño le ayudará a explorar opciones y desarrollar un concepto que mejore tanto la funcionalidad como la estética de su espacio de cocina.",
  },
  {
    id: 5,
    questionEN: "Can you work with my existing kitchen layout?",
    answerEN:
      "Absolutely. We can work with your existing layout or create an entirely new design. Our team evaluates your space for both aesthetic improvements and functional optimizations, making recommendations based on your needs and structural possibilities.",
    questionES: "¿Pueden trabajar con mi diseño de cocina existente?",
    answerES:
      "Absolutamente. Podemos trabajar con su diseño existente o crear un diseño completamente nuevo. Nuestro equipo evalúa su espacio tanto para mejoras estéticas como para optimizaciones funcionales, haciendo recomendaciones basadas en sus necesidades y posibilidades estructurales.",
  },
  {
    id: 6,
    questionEN: "Do you handle permits and inspections?",
    answerEN:
      "Yes, we manage all necessary permits and coordinate required inspections as part of our comprehensive project management service. This ensures your renovation complies with local building codes and regulations.",
    questionES: "¿Manejan permisos e inspecciones?",
    answerES:
      "Sí, gestionamos todos los permisos necesarios y coordinamos las inspecciones requeridas como parte de nuestro servicio integral de gestión de proyectos. Esto asegura que su renovación cumpla con los códigos y regulaciones de construcción locales.",
  },
  {
    id: 7,
    questionEN: "What types of materials do you offer for countertops and cabinets?",
    answerEN:
      "We offer a wide selection of high-quality materials. For countertops: granite, quartz, marble, butcher block, concrete, and laminate. For cabinetry: solid wood (maple, oak, cherry), engineered wood, and various finishes including painted, stained, and thermofoil options.",
    questionES: "¿Qué tipos de materiales ofrecen para encimeras y gabinetes?",
    answerES:
      "Ofrecemos una amplia selección de materiales de alta calidad. Para encimeras: granito, cuarzo, mármol, bloque de carnicero, concreto y laminado. Para gabinetes: madera sólida (arce, roble, cerezo), madera de ingeniería y varios acabados que incluyen opciones pintadas, teñidas y de termolaminado.",
  },
]

export default function FAQSection() {
  const { language } = useLanguage()
  const [title, setTitle] = useState("")
  const [introText, setIntroText] = useState("")
  const [contactText, setContactText] = useState("")
  const [emailText, setEmailText] = useState("")

  useEffect(() => {
    if (language === "en") {
      setTitle("Frequently Asked Questions")
      setIntroText(
        "Have a different question and can't find the answer you're looking for? Reach out to our support team by",
      )
      setContactText("sending us an email")
      setEmailText("and we'll get back to you as soon as we can.")
    } else {
      setTitle("Preguntas Frecuentes")
      setIntroText(
        "¿Tiene una pregunta diferente y no puede encontrar la respuesta que busca? Comuníquese con nuestro equipo de soporte",
      )
      setContactText("enviándonos un correo electrónico")
      setEmailText("y nos pondremos en contacto con usted lo antes posible.")
    }
  }, [language])

  return (
    <AnimatedSection>
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base/7 text-gray-600 dark:text-gray-300"
        >
          {introText}{" "}
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {contactText}
          </a>{" "}
          {emailText}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8"
        >
          <dl className="space-y-8 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  {language === "en" ? faq.questionEN : faq.questionES}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">
                  {language === "en" ? faq.answerEN : faq.answerES}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
