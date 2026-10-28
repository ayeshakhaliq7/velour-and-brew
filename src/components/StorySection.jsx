import { Leaf, Coffee, Home } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import { images } from '../data/products'
const values = [
  [Leaf, 'Quality Ingredients', 'Fresh milk, carefully sourced beans and butter-rich bakes.'],
  [Coffee, 'Carefully Crafted Coffee', 'Every cup is dialled in and poured by hand.'],
  [Home, 'A Place to Feel at Home', 'Soft light, good company and no rush.'],
]
export default function StorySection() {
  return (
    <section id="story" className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24">
      <Reveal className="relative md:col-span-6">
        <Img src={images.story} alt="Warm café interior with wooden tables" className="aspect-[4/5] w-full rounded-3xl object-cover" />
        <Img src={images.story2} alt="Coffee beans and a cup on a café counter" className="absolute -bottom-8 -right-2 hidden aspect-square w-2/5 rounded-3xl border-8 border-cream object-cover sm:block" />
      </Reveal>
      <Reveal className="self-center md:col-span-6 md:pl-6" delay={0.1}>
        <h2 className="font-serif text-4xl font-semibold">Our story</h2>
        <p className="mt-6 text-lg leading-relaxed text-espresso/80">At Velour & Brew, we believe good coffee is about more than a cup. It is about the conversations, quiet mornings, and little moments that make every day special.</p>
        <ul className="mt-8 space-y-5">
          {values.map(([Icon, t, d]) => (
            <li key={t} className="flex gap-4"><span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-sage/25 text-coffee"><Icon size={20} aria-hidden /></span>
              <div><h3 className="font-semibold">{t}</h3><p className="text-sm text-espresso/70">{d}</p></div></li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
