import ProductCard from './ProductCard'
import Reveal from './Reveal'
import { products } from '../data/products'
export default function FeaturedMenu({ onAdd }) {
  return (
    <section id="featured" className="bg-latte/25 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-4xl font-semibold">Favourites at the counter</h2>
          <a href="#menu" className="rounded-full border border-coffee px-6 py-3 text-sm font-medium text-coffee transition hover:bg-coffee hover:text-cream">View Full Menu</a>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.filter((p) => p.featured).map((p) => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
        </div>
      </div>
    </section>
  )
}
