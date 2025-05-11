"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

type FormTranslations = {
  title: string
  subtitle: string
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  message: string
  privacyPolicy: string
  privacyPolicyLink: string
  submitButton: string
  countries: {
    US: string
    CA: string
    EU: string
  }
}

const translations: Record<string, FormTranslations> = {
  en: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you. Fill out the form below to get started on your kitchen renovation journey.",
    firstName: "First name",
    lastName: "Last name",
    company: "Company",
    email: "Email",
    phone: "Phone number",
    message: "Message",
    privacyPolicy: "By selecting this, you agree to our privacy policy.",
    privacyPolicyLink: "privacy policy",
    submitButton: "Let's talk",
    countries: {
      US: "US",
      CA: "CA",
      EU: "EU",
    },
  },
  es: {
    title: "Contáctenos",
    subtitle:
      "Nos encantaría saber de usted. Complete el formulario a continuación para comenzar su viaje de renovación de cocina.",
    firstName: "Nombre",
    lastName: "Apellido",
    company: "Empresa",
    email: "Correo electrónico",
    phone: "Número de teléfono",
    message: "Mensaje",
    privacyPolicy: "Al seleccionar esto, acepta nuestra política de privacidad.",
    privacyPolicyLink: "política de privacidad",
    submitButton: "Hablemos",
    countries: {
      US: "EE.UU.",
      CA: "CA",
      EU: "UE",
    },
  },
}

export default function ContactForm() {
  const { language } = useLanguage()
  const [agreed, setAgreed] = useState(false)
  const [t, setT] = useState<FormTranslations>(translations.en)

  useEffect(() => {
    setT(translations[language])
  }, [language])

  return (
    <AnimatedSection className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300"
        >
          {t.subtitle}
        </motion.p>
      </div>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              {t.firstName}
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              {t.lastName}
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              {t.company}
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              {t.email}
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              {t.phone}
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white dark:bg-gray-800 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-primary">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  >
                    <option>{t.countries.US}</option>
                    <option>{t.countries.CA}</option>
                    <option>{t.countries.EU}</option>
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 dark:text-gray-400 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              {t.message}
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch id="privacy-policy" checked={agreed} onCheckedChange={setAgreed} />
            </div>
            <Label htmlFor="privacy-policy" className="text-sm/6 text-gray-600 dark:text-gray-300">
              {t.privacyPolicy.split("privacy policy")[0]}
              <a href="#" className="font-semibold text-primary">
                {t.privacyPolicyLink}
              </a>
              {t.privacyPolicy.split("privacy policy")[1] || "."}
            </Label>
          </div>
        </div>
        <div className="mt-10">
          <Button type="submit" className="w-full">
            {t.submitButton}
          </Button>
        </div>
      </motion.form>
    </AnimatedSection>
  )
}
