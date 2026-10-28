import { useEffect, useMemo, useState, useCallback } from 'react'
import { products } from '../data/products'
const KEY = 'velour-brew-cart'
const load = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]')
    return Array.isArray(raw) ? raw.filter((i) => products.some((p) => p.id === i.id) && i.qty > 0) : []
  } catch { return [] }
}
export function useCart() {
  const [lines, setLines] = useState(load) // [{id, qty}] is the source of truth
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(lines)) } catch { /* storage unavailable */ } }, [lines])
  const add = useCallback((id) => setLines((l) => l.some((x) => x.id === id) ? l.map((x) => x.id === id ? { ...x, qty: x.qty + 1 } : x) : [...l, { id, qty: 1 }]), [])
  const decrease = useCallback((id) => setLines((l) => l.flatMap((x) => x.id !== id ? [x] : x.qty > 1 ? [{ ...x, qty: x.qty - 1 }] : [])), [])
  const remove = useCallback((id) => setLines((l) => l.filter((x) => x.id !== id)), [])
  const clear = useCallback(() => setLines([]), [])
  const items = useMemo(() => lines.map((l) => ({ ...products.find((p) => p.id === l.id), qty: l.qty })), [lines])
  const count = items.reduce((s, i) => s + i.qty, 0)
  const total = items.reduce((s, i) => s + i.qty * i.price, 0)
  return { items, count, subtotal: total, total, add, decrease, remove, clear }
}
