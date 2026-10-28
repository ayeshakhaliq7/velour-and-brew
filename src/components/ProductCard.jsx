import { Plus } from 'lucide-react'
import Img from './Img'
import { formatPKR } from '../data/siteConfig'
export default function ProductCard({ product, onAdd }) {
  return (
    <article
      onMouseMove={(e) => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const r = e.currentTarget.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)` }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = '' }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-latte/60 bg-white/60 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-espresso/10">
      <div className="overflow-hidden"><Img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /></div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl font-semibold">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-espresso/70">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="font-semibold text-coffee">{formatPKR(product.price)}</span>
          <button onClick={() => onAdd(product.id)} aria-label={`Add ${product.name} to cart`}
            className="flex items-center gap-1.5 rounded-full bg-espresso px-4 py-2.5 text-sm font-medium text-cream transition hover:bg-coffee active:scale-95"><Plus size={16} /> Add to Cart</button>
        </div>
      </div>
    </article>
  )
}
