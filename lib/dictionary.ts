import "server-only"
import type { Locale } from "../middleware"

// Define the types for area data
export interface AreaCommon {
  localExpertise: string
  servicesTitle: string
  projectsTitle: string
  faqTitle: string
  homeowners: string
  readMore: string
  viewProjects: string
  contactTitle: string
  callNow: string
  areaServed: string
  services: {
    [key: string]: string
  }
}

export interface AreaData {
  title: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  areaDescription: string
  localExpertiseContent: string
  serviceContent: string
  neighborhoods: string[]
  architecturalStyles: string[]
  faqs: {
    question: string
    answer: string
  }[]
}

// We enumerate all dictionaries here for better typechecking
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
