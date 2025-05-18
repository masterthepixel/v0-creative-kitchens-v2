"use client"

import Image from "next/image"

interface PremiumSelectionGridProps {
  lang: string
}

export default function PremiumSelectionGrid({ lang }: PremiumSelectionGridProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-green-600 font-medium">Premium Selection</p>
            <h2 className="text-4xl font-bold mt-2 md:text-5xl lg:text-6xl">
              Transform Your Kitchen
              <br />
              With Quality Essentials
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Cabinets Card - UPDATED TO USE cabinet-lighting.png */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Cabinets</h3>
                <p className="mt-2 text-slate-600">
                  Transform your space with our premium cabinet collections, offering superior craftsmanship and
                  timeless designs to suit any style preference.
                </p>
              </div>
              <div className="relative h-64 w-full">
                {/* Changed image from deployment UI to cabinet-lighting.png as requested */}
                <Image src="/cabinet-lighting.png" alt="Kitchen Cabinets" fill className="object-cover" />
              </div>
            </div>

            {/* Countertops Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Countertops</h3>
                <p className="mt-2 text-slate-600">
                  Discover durable, elegant countertop solutions in granite, quartz, marble and more, crafted to elevate
                  both functionality and aesthetics.
                </p>
              </div>
              <div className="relative h-64 w-full">
                <div className="p-6">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-blue-600">1.04</span>
                    <span className="ml-1 text-slate-500">s</span>
                    <span className="ml-auto text-red-500">-22%</span>
                  </div>
                  <div className="mt-4 flex space-x-1">
                    {Array(20)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className={`h-8 w-2 rounded-full ${i < 18 ? "bg-blue-500" : "bg-blue-200"}`} />
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bath Tubs Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Bath Tubs</h3>
                <p className="mt-2 text-slate-600">
                  Indulge in luxury with our selection of bathtubs, from sleek modern designs to classic styles that
                  create your perfect sanctuary.
                </p>
              </div>
              <div className="relative h-64 w-full bg-slate-900 text-white">
                <div className="p-4">
                  <div className="flex mb-2">
                    <div className="bg-slate-800 rounded px-3 py-1 mr-2">Bath Tubs.jsx</div>
                    <div className="bg-transparent rounded px-3 py-1">App.jsx</div>
                  </div>
                  <pre className="text-xs">
                    {`// Bath Tubs Component
export default function BathTubs() {
  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Bath Tubs</h2>
      <p>Indulge in luxury with our selection...</p>
      <button className="mt-4 px-4 py-2 bg-blue-500">
        Learn More
      </button>
    </div>
  )
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Cabinet Lighting Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Cabinet Lighting</h3>
                <p className="mt-2 text-slate-600">
                  Illuminate your space with strategic cabinet lighting options that combine energy efficiency with
                  stunning visual impact.
                </p>
              </div>
              <div className="relative h-64 w-full flex items-center justify-center bg-slate-50">
                <div className="flex space-x-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md">
                    <svg
                      className="w-8 h-8 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 15C3 12.7909 4.79086 11 7 11H17C19.2091 11 21 12.7909 21 15V15C21 17.2091 19.2091 19 17 19H7C4.79086 19 3 17.2091 3 15V15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path d="M12 11V5" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 5H15" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md">
                    <svg
                      className="w-8 h-8 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md">
                    <svg
                      className="w-8 h-8 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 15C21 16.1046 20.1046 17 19 17H5C3.89543 17 3 16.1046 3 15V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                      <path d="M7 15H17" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
