import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ShoppingBag, Coffee } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
const links = [['Home', '#home'], ['Menu', '#menu'], ['Our Story', '#story'], ['Visit Us', '#visit']]
export default function Navbar({ count, onCart }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-latte/50 bg-cream/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2 font-serif text-xl font-semibold text-espresso">
          <Coffee className="text-sage" size={22} aria-hidden /> {siteConfig.name}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="text-sm font-medium text-espresso/80 transition hover:text-coffee">{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={onCart} aria-label={`Open cart, ${count} items`} className="relative rounded-full p-2.5 transition hover:bg-latte/40">
            <ShoppingBag size={22} />
            {count > 0 && <motion.span key={count} initial={{ scale: 1.8 }} animate={{ scale: 1 }} className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-coffee px-1 text-xs font-semibold text-cream">{count}</motion.span>}
          </button>
          <a href="#menu" className="hidden rounded-full bg-espresso px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-coffee active:scale-95 md:inline-block">Order Now</a>
          <button className="rounded-full p-2.5 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-latte/50 bg-cream px-5 md:hidden">
            {links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3.5 text-lg font-medium">{l}</a></li>)}
            <li className="pb-5 pt-2"><a href="#menu" onClick={() => setOpen(false)} className="block rounded-full bg-espresso py-3 text-center font-medium text-cream">Order Now</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
