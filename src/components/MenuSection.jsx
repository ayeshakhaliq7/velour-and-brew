import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import ProductCard from './ProductCard'
import { products, categories } from '../data/products'
export default function MenuSection({ onAdd }) {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const shown = useMemo(() => products.filter((p) => (cat === 'All' || p.category === cat) && p.name.toLowerCase().includes(q.trim().toLowerCase())), [cat, q])
  return (
    <section id="menu" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <h2 className="font-serif text-4xl font-semibold">The full menu</h2>
      <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${cat === c ? 'border-espresso bg-espresso text-cream' : 'border-latte bg-white/50 hover:border-coffee'}`}>{c}</button>
          ))}
        </div>
        <label className="relative block md:w-64">
          <span className="sr-only">Search the menu by name</span>
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-coffee" aria-hidden />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name"
            className="w-full rounded-full border border-latte bg-white/70 py-2.5 pl-10 pr-4 text-sm" />
        </label>
      </div>
      {shown.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shown.map((p) => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}</div>
      ) : (
        <div role="status" className="mt-10 rounded-3xl border border-dashed border-latte p-10 text-center">
          <p className="font-serif text-2xl">Nothing matches “{q}”</p>
          <p className="mt-2 text-espresso/70">Try a different name or choose another category.</p>
          <button onClick={() => { setQ(''); setCat('All') }} className="mt-5 rounded-full bg-espresso px-6 py-2.5 text-sm font-medium text-cream">Clear filters</button>
        </div>
      )}
    </section>
  )
}
