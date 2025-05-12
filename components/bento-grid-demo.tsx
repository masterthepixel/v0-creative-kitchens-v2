import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react"

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : item.className}
        />
      ))}
    </BentoGrid>
  )
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)
const items = [
  {
    title: "Cabinets",
    description:
      "Transform your space with our premium cabinet collections, offering superior craftsmanship and timeless designs.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Countertops",
    description: "Discover durable, elegant countertop solutions in granite, quartz, marble and more for your kitchen.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cabinet Lighting",
    description:
      "Illuminate your space with strategic cabinet lighting options that combine energy efficiency with stunning visual impact.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bath Tubs",
    description:
      "Indulge in luxury with our selection of bathtubs, from sleek modern designs to classic styles that create your perfect sanctuary.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Flooring",
    description:
      "Step onto quality with our range of flooring options, engineered for durability and designed to complement any interior aesthetic.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Appliances",
    description:
      "Enhance your home with cutting-edge appliances that blend innovative technology with sophisticated design for everyday convenience.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Hardware",
    description:
      "Perfect your design with our curated hardware collection, where small details make a significant impact in your space.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
]
