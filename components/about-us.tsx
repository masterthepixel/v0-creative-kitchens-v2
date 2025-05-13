"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"

export default function AboutUs() {
  const { language } = useLanguage()

  return (
    <div className="overflow-hidden bg-white dark:bg-gray-900 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
            >
              {language === "en" ? "About Us" : "Sobre Nosotros"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl/8 text-gray-600 dark:text-gray-300"
            >
              {language === "en"
                ? "We're passionate about transforming kitchens into beautiful, functional spaces that suit your lifestyle. With decades of experience and dedication to quality craftsmanship."
                : "Nos apasiona transformar cocinas en espacios hermosos y funcionales que se adapten a su estilo de vida. Con décadas de experiencia y dedicación a la artesanía de calidad."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base/7 text-gray-600 dark:text-gray-400"
            >
              {language === "en"
                ? "At Creative Kitchens MD, we believe that the kitchen is the heart of the home. Our mission is to create spaces that inspire gathering, cooking, and creating memories. From initial design to final installation, our team works closely with you to ensure your vision becomes reality."
                : "En Creative Kitchens MD, creemos que la cocina es el corazón del hogar. Nuestra misión es crear espacios que inspiren reuniones, cocina y creación de recuerdos. Desde el diseño inicial hasta la instalación final, nuestro equipo trabaja estrechamente con usted para asegurar que su visión se convierta en realidad."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex"
            >
              <a
                href={language === "en" ? "/en/contact" : "/es/contact"}
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl dark:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {language === "en" ? "Contact Us" : "Contáctenos"} <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
            >
              <img
                alt="Modern kitchen with elegant cabinetry"
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop"
                className="aspect-7/5 w-[37rem] max-w-none rounded-2xl bg-gray-50 dark:bg-gray-800 object-cover shadow-lg hover:shadow-xl dark:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              />
            </motion.div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
              >
                <img
                  alt="Kitchen countertop installation"
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 dark:bg-gray-800 object-cover shadow-lg hover:shadow-xl dark:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.2)] transition-shadow duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none"
              >
                <img
                  alt="Kitchen designer working with client"
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                  className="aspect-7/5 w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 dark:bg-gray-800 object-cover shadow-lg hover:shadow-xl dark:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.2)] transition-shadow duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
              >
                <img
                  alt="Kitchen cabinet detail"
                  src="https://images.unsplash.com/photo-1556909114-44e3e9399e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 dark:bg-gray-800 object-cover shadow-lg hover:shadow-xl dark:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3),0_10px_10px_-5px_rgba(0,0,0,0.2)] transition-shadow duration-300"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
