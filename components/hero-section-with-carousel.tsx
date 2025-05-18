"use client"
import { useLanguage } from "./language-provider"
import HeroCarousel from "./hero-carousel"
import { motion } from "framer-motion"

export default function HeroSectionWithCarousel() {
  const { language } = useLanguage()

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-0">
        {/* Carousel container - full width for multiple cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 py-4 md:py-8"
        >
          <HeroCarousel />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
      <style jsx global>{`
 .button-26 {
   background: #3b82f6; /* Blue-500 background instead of white */
   border: 2px solid #2563eb; /* Blue-600 border */
   font-size: 18px;
   cursor: pointer;
   border-radius: 10px;
   outline: none;
   padding: 0;
   min-width: 220px; /* Ensure button is wide enough for content */
   box-shadow: 0 2px 10px rgba(37, 99, 235, 0.3), 5px 14px 20px rgba(37, 99, 235, 0.2);
   transition: all 0.3s ease-in-out;
 }
 
 .button-26:hover {
   background: #22c55e; /* Green-600 background on hover */
   border-color: #16a34a; /* Green-700 border on hover */
   box-shadow: 0 2px 10px rgba(22, 163, 74, 0.3), 5px 14px 20px rgba(22, 163, 74, 0.2);
 }
 
 .button-26__content {
   padding: 16px 32px;
   border-radius: 8px;
   box-shadow: inset 0 -6px #1d4ed8, 0 -2px #60a5fa; /* Blue-700 and Blue-400 for 3D effect */
   transition: all 0.3s ease-in-out;
 }
 
 .button-26:hover .button-26__content {
   box-shadow: inset 0 -6px #15803d, 0 -2px #4ade80; /* Green-800 and Green-400 for 3D effect */
 }
 
 .button-26__text {
   color: #ffffff; /* White text for better contrast on colored background */
   font-weight: 600;
   display: flex;
   align-items: center;
   justify-content: center;
   transform: translate3d(0, -4px, 0);
   transition: all 0.3s ease-in-out;
 }
 
 .button-26:active {
   box-shadow: none;
   transform: translateY(2px);
 }
 
 .button-26:active .button-26__content {
   box-shadow: none;
 }
 
 .button-26:active .button-26__text {
   transform: translate3d(0, 0, 0);
 }
 
 @media (max-width: 640px) {
   .button-26 {
     font-size: 16px;
     min-width: 180px;
   }
   
   .button-26__content {
     padding: 12px 24px;
   }
 }
`}</style>
    </>
  )
}
