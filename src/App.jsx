import { useState, useCallback, useRef } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Check } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import { useCart } from './hooks/useCart'
import { products } from './data/products'
export default function App() {
  const cart = useCart()
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const [toast, setToast] = useState(null)
  const timer = useRef()
  const close = useCallback(() => setOpen(false), [])
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const handleAdd = (id) => {
    cart.add(id)
    setToast(products.find((p) => p.id === id)?.name)
    clearTimeout(timer.current); timer.current = setTimeout(() => setToast(null), 2200)
  }
  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <motion.div aria-hidden style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[55] h-1 origin-left bg-sage" />
      <Navbar count={cart.count} onCart={() => setOpen(true)} />
      <main><Home onAdd={handleAdd} ready={ready} /></main>
      <Footer />
      <CartDrawer open={open} onClose={close} cart={cart} />
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4">
        <AnimatePresence>
          {toast && (
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
              className="pointer-events-auto flex items-center gap-3 rounded-full bg-espresso py-3 pl-4 pr-5 text-sm text-cream shadow-xl">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage text-espresso"><Check size={14} /></span>
              {toast} added
              <button onClick={() => setOpen(true)} className="font-semibold text-latte underline">View cart</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
