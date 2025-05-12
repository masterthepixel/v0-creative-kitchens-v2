"use client"

import type React from "react"

import { useState } from "react"

interface ContactFormProps {
  lang: string
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    // You could add a success message or redirect here
  }

  return (
    <form onSubmit={handleSubmit} className="mt-16">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
            {lang === "en" ? "First name" : "Nombre"}
          </label>
          <div className="mt-2.5">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-400"
              onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
              value={formState.firstName}
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
            {lang === "en" ? "Last name" : "Apellido"}
          </label>
          <div className="mt-2.5">
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-400"
              onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
              value={formState.lastName}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
            {lang === "en" ? "Email" : "Correo electrónico"}
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-400"
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              value={formState.email}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
            {lang === "en" ? "Company" : "Empresa"}
          </label>
          <div className="mt-2.5">
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-400"
              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              value={formState.company}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between text-sm/6">
            <label htmlFor="phone" className="block font-semibold text-gray-900 dark:text-gray-100">
              {lang === "en" ? "Phone" : "Teléfono"}
            </label>
            <p id="phone-description" className="text-gray-400">
              {lang === "en" ? "Optional" : "Opcional"}
            </p>
          </div>
          <div className="mt-2.5">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-describedby="phone-description"
              className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-400"
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              value={formState.phone}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between text-sm/6">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
              {lang === "en" ? "How can we help you?" : "¿Cómo podemos ayudarte?"}
            </label>
            <p id="message-description" className="text-gray-400">
              {lang === "en" ? "Max 500 characters" : "Máximo 500 caracteres"}
            </p>
          </div>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              aria-describedby="message-description"
              className="block w-full rounded-md bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-400"
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              value={formState.message}
            />
          </div>
        </div>
        <fieldset className="sm:col-span-2">
          <legend className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
            {lang === "en" ? "Expected budget" : "Presupuesto estimado"}
          </legend>
          <div className="mt-4 space-y-4 text-sm/6 text-gray-600 dark:text-gray-300">
            <div className="flex gap-x-2.5">
              <input
                value="under_25k"
                id="budget-under-25k"
                name="budget"
                type="radio"
                className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 dark:border-gray-600 before:absolute before:inset-1 before:rounded-full before:bg-white dark:before:bg-gray-400 not-checked:before:hidden checked:border-yellow-400 checked:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                onChange={() => setFormState({ ...formState, budget: "under_25k" })}
                checked={formState.budget === "under_25k"}
              />
              <label htmlFor="budget-under-25k">{lang === "en" ? "Less than $25K" : "Menos de $25K"}</label>
            </div>
            <div className="flex gap-x-2.5">
              <input
                value="25k-50k"
                id="budget-25k-50k"
                name="budget"
                type="radio"
                className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 dark:border-gray-600 before:absolute before:inset-1 before:rounded-full before:bg-white dark:before:bg-gray-400 not-checked:before:hidden checked:border-yellow-400 checked:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                onChange={() => setFormState({ ...formState, budget: "25k-50k" })}
                checked={formState.budget === "25k-50k"}
              />
              <label htmlFor="budget-25k-50k">$25K – $50K</label>
            </div>
            <div className="flex gap-x-2.5">
              <input
                value="50k-100k"
                id="budget-50k-100k"
                name="budget"
                type="radio"
                className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 dark:border-gray-600 before:absolute before:inset-1 before:rounded-full before:bg-white dark:before:bg-gray-400 not-checked:before:hidden checked:border-yellow-400 checked:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                onChange={() => setFormState({ ...formState, budget: "50k-100k" })}
                checked={formState.budget === "50k-100k"}
              />
              <label htmlFor="budget-50k-100k">$50K – $100K</label>
            </div>
            <div className="flex gap-x-2.5">
              <input
                value="over_100k"
                id="budget-over-100k"
                name="budget"
                type="radio"
                className="relative mt-1 size-4 appearance-none rounded-full border border-gray-300 dark:border-gray-600 before:absolute before:inset-1 before:rounded-full before:bg-white dark:before:bg-gray-400 not-checked:before:hidden checked:border-yellow-400 checked:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                onChange={() => setFormState({ ...formState, budget: "over_100k" })}
                checked={formState.budget === "over_100k"}
              />
              <label htmlFor="budget-over-100k">$100K+</label>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-10 flex justify-end border-t border-gray-900/10 dark:border-gray-700 pt-8">
        <button
          type="submit"
          className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
        >
          {lang === "en" ? "Send message" : "Enviar mensaje"}
        </button>
      </div>
    </form>
  )
}
