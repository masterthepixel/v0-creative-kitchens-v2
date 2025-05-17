import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}

// Area types for TypeScript support
export type AreaFAQ = {
  question: string
  answer: string
}

export type AreaData = {
  title: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  areaDescription: string
  neighborhoods: string[]
  architecturalStyles: string[]
  localExpertiseContent: string
  serviceContent: string
  faqs: AreaFAQ[]
}

export type AreaCommon = {
  servicesTitle: string
  testimonialsTitle: string
  callToAction: string
  localExpertise: string
  projectsTitle: string
  faqTitle: string
  homeowners: string
  contactTitle: string
  viewProjects: string
  callNow: string
  visitShowroom: string
  areaServed: string
  readMore: string
  seeFAQs: string
  services: {
    customCabinetry: string
    countertops: string
    kitchenLayout: string
    lighting: string
    appliances: string
    projectManagement: string
  }
}

export type AreasData = {
  common: AreaCommon
  [cityState: string]: AreaCommon | AreaData
}
