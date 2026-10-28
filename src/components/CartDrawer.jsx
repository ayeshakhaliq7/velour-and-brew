import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react'
import Img from './Img'
import { siteConfig, formatPKR } from '../data/siteConfig'

// Returns a wa.me link, or null if the configured number isn't usable.
export function buildWhatsAppUrl(items, total) {
  const number = String(siteConfig.whatsappNumber).replace(/[\s+-]/g, '')
  if (!/^[1-9]\d{9,14}$/.test(number)) return null // country code + number, 10–15 digits
  const lines = items.map((i) => `• ${i.qty} × ${i.name} (${formatPKR(i.price)} each) = ${formatPKR(i.qty * i.price)}`)
  const text = `Hello ${siteConfig.name}! I'd like to order:\n\n${lines.join('\n')}\n\nTotal: ${formatPKR(total)}`
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}

export default function CartDrawer({ open, onClose, cart }) {
  const closeRef = useRef(null)
  const { items, subtotal, total, add, decrease, remove, clear } = cart
  const url = items.length ? buildWhatsAppUrl(items, total) : null
  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, onClose])
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          <motion.div className="absolute inset-0 bg-espresso/50" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside role="dialog" aria-modal="true" aria-label="Shopping cart"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl">
            <div className="flex items-center justify-between border-b border-latte/60 p-5">
              <h2 className="font-serif text-2xl font-semibold">Your cart</h2>
              <button ref={closeRef} onClick={onClose} aria-label="Close cart" className="rounded-full p-2 hover:bg-latte/40"><X /></button>
            </div>
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
                <ShoppingBag size={48} className="text-latte" />
                <p className="font-serif text-2xl">Your cart is empty</p>
                <p className="text-espresso/70">Add a coffee or a pastry to get started.</p>
                <a href="#menu" onClick={onClose} className="mt-2 rounded-full bg-espresso px-6 py-3 text-sm font-medium text-cream">Browse the menu</a>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y divide-latte/50 overflow-y-auto px-5">
                  {items.map((i) => (
                    <li key={i.id} className="flex gap-4 py-4">
                      <Img src={i.image} alt={i.name} className="h-20 w-20 flex-none rounded-2xl object-cover" />
                      <div className="flex-1">
                        <div className="flex justify-between gap-2"><h3 className="font-medium">{i.name}</h3>
                          <button onClick={() => remove(i.id)} aria-label={`Remove ${i.name}`} className="text-espresso/60 hover:text-coffee"><Trash2 size={18} /></button></div>
                        <p className="text-sm text-espresso/70">{formatPKR(i.price)}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-full border border-latte">
                            <button onClick={() => decrease(i.id)} aria-label={`Decrease ${i.name}`} className="p-2"><Minus size={14} /></button>
                            <span className="w-6 text-center text-sm" aria-live="polite">{i.qty}</span>
                            <button onClick={() => add(i.id)} aria-label={`Increase ${i.name}`} className="p-2"><Plus size={14} /></button>
                          </div>
                          <span className="font-semibold">{formatPKR(i.qty * i.price)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3 border-t border-latte/60 p-5">
                  <div className="flex justify-between text-sm"><span>Subtotal</span><span>{formatPKR(subtotal)}</span></div>
                  <div className="flex justify-between text-lg font-semibold"><span>Total</span><span>{formatPKR(total)}</span></div>
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-sage py-3.5 font-medium text-espresso transition hover:brightness-110 active:scale-[.98]"><MessageCircle size={18} /> Order via WhatsApp</a>
                  ) : (
                    <p role="alert" className="rounded-xl bg-latte/40 p-3 text-sm">WhatsApp ordering isn’t set up yet. Add the café’s number in <code>src/data/siteConfig.js</code>.</p>
                  )}
                  <p className="text-xs text-espresso/60">This opens WhatsApp with your order. Your order is only placed once you send the message — payment is arranged with the café.</p>
                  <button onClick={clear} className="w-full text-sm text-coffee underline">Clear cart</button>
                </div>
              </>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
