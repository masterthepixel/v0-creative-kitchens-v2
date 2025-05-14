import { TestimonialsGrid } from "./testimonials-grid"

// Array of random face images
const faceImages = [
  "https://randomuser.me/api/portraits/men/41.jpg", // Daniel
  "https://randomuser.me/api/portraits/men/32.jpg", // Jonathan
  "https://randomuser.me/api/portraits/women/17.jpg", // Kira
  "https://randomuser.me/api/portraits/women/44.jpg", // Jeanette
  "https://randomuser.me/api/portraits/men/19.jpg", // Patrick
]

// Define the testimonial item type
type TestimonialItem = {
  name: string
  title: string
  heading: string
  text: string
  imageUrl: string
}

// Testimonials from the provided HTML
const exactTestimonials = [
  {
    name: "Daniel Clifford",
    title: "Verified Graduate",
    heading:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
    text: "\" I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup. \"",
    imageUrl: faceImages[0],
  },
  {
    name: "Jonathan Walters",
    title: "Verified Graduate",
    heading: "The team was very supportive and kept me motivated",
    text: '" I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I\'ve made in myself. "',
    imageUrl: faceImages[1],
  },
  {
    name: "Kira Whittle",
    title: "Verified Graduate",
    heading: "Such a life-changing experience. Highly recommended!",
    text: "\" Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! \"",
    imageUrl: faceImages[2],
  },
  {
    name: "Jeanette Harmon",
    title: "Verified Graduate",
    heading: "An overall wonderful and rewarding experience",
    text: '" Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. "',
    imageUrl: faceImages[3],
  },
  {
    name: "Patrick Abrams",
    title: "Verified Graduate",
    heading:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    text: '" The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. "',
    imageUrl: faceImages[4],
  },
]

// Spanish translations of the exact testimonials
const exactTestimonialsES = [
  {
    name: "Daniel Clifford",
    title: "Graduado Verificado",
    heading:
      "Recibí una oferta de trabajo a mitad del curso, y los temas que aprendí estaban actualizados, si no más, en la empresa a la que me uní. Sinceramente siento que valió cada centavo.",
    text: '" Fui técnico de emergencias médicas durante muchos años antes de unirme al bootcamp. Estaba buscando hacer una transición y había escuchado de algunas personas que tuvieron una experiencia increíble aquí. Me inscribí en el curso de introducción gratuito y me pareció increíblemente divertido. Me inscribí poco después. Las siguientes 12 semanas fueron el mejor - y más agotador - tiempo de mi vida. Desde que completé el curso, he cambiado exitosamente de carrera, trabajando como Ingeniero de Software en una startup de realidad virtual. "',
    imageUrl: faceImages[0],
  },
  {
    name: "Jonathan Walters",
    title: "Graduado Verificado",
    heading: "El equipo fue muy solidario y me mantuvo motivado",
    text: '" Comencé como un completo novato sin prácticamente ninguna habilidad de codificación. Ahora trabajo como ingeniero móvil para una gran empresa. Esta fue una de las mejores inversiones que he hecho en mí mismo. "',
    imageUrl: faceImages[1],
  },
  {
    name: "Kira Whittle",
    title: "Graduada Verificada",
    heading: "Una experiencia que cambió mi vida. ¡Altamente recomendado!",
    text: '" Antes de unirme al bootcamp, nunca había escrito una línea de código. Necesitaba algo de estructura de profesionales que pudieran ayudarme a aprender programación paso a paso. Un ex alumno que solo puede decir cosas maravillosas sobre el programa me animó a inscribirme. Todo el plan de estudios y el personal no decepcionaron. Fueron muy prácticos y nunca tuve que esperar mucho para recibir ayuda. El proyecto de equipo ágil, en particular, fue sobresaliente. Llevó mi aprendizaje al siguiente nivel de una manera que ningún tutorial podría haberlo hecho. De hecho, a menudo me he referido a él durante las entrevistas como un ejemplo de mi experiencia en desarrollo. Ciertamente me ayudó a conseguir un trabajo como desarrollador full-stack después de recibir múltiples ofertas. ¡100% recomendado! "',
    imageUrl: faceImages[2],
  },
  {
    name: "Jeanette Harmon",
    title: "Graduada Verificada",
    heading: "Una experiencia maravillosa y gratificante en general",
    text: '" ¡Gracias por la maravillosa experiencia! Ahora tengo un trabajo que realmente disfruto y gano un buen sueldo mientras hago algo que amo. "',
    imageUrl: faceImages[3],
  },
  {
    name: "Patrick Abrams",
    title: "Graduado Verificado",
    heading:
      "Increíble apoyo de enseñanza de los asistentes que hicieron el bootcamp ellos mismos. Obtener orientación de ellos y aprender de sus experiencias fue fácil.",
    text: '" El personal parece genuinamente preocupado por mi progreso, lo cual encuentro realmente refrescante. El programa me dio la confianza necesaria para poder salir al mundo y presentarme como un desarrollador junior capaz. El estándar está por encima del resto. Recibirás la atención personal que necesitas de una increíble comunidad de personas inteligentes y asombrosas. "',
    imageUrl: faceImages[4],
  },
]

export default function TestimonialsSection({ language }: { language: string }) {
  // Pre-process testimonial data on the server
  const title = language === "en" ? "Testimonials" : "Testimonios"
  const subtitle =
    language === "en" ? "What our graduates say about the program" : "Lo que dicen nuestros graduados sobre el programa"

  // Use exact testimonials based on language
  const testimonialItems = language === "en" ? exactTestimonials : exactTestimonialsES

  return (
    <div className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-base/7 font-semibold text-primary">{title}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl">
            {subtitle}
          </p>
        </div>

        <div className="mt-10">
          <TestimonialsGrid testimonials={testimonialItems} />
        </div>
      </div>
    </div>
  )
}
