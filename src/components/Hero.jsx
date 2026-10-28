import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Coffee } from 'lucide-react'
import Beans from './Beans'
import HeroMedia from './HeroMedia'
import { siteConfig } from '../data/siteConfig'
const words = ['Your', 'Daily', 'Dose', 'of']
export default function Hero({ ready = true }) {
  const reduce = useReducedMotion()
  const a = (d) => reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }, transition: { duration: 0.8, delay: d } }
  return (
    <div id="home" className="grain relative overflow-hidden bg-espresso text-cream">
      <div aria-hidden className="bokeh pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-coffee/50 blur-3xl" />
      <div aria-hidden className="bokeh pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sage/25 blur-3xl" style={{ animationDelay: '3s' }} />
      <Beans />
      <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-12 md:pb-28 md:pt-20">
        <div className="md:col-span-6">
          <motion.p {...a(0.3)} className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-latte"><span className="h-px w-10 bg-latte" />{siteConfig.tagline}</motion.p>
          <h1 aria-label="Your Daily Dose of Cozy." className="font-serif text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            {[...words, 'Cozy.'].map((w, i) => (
              <span key={w} aria-hidden className="mr-3 inline-block overflow-hidden pb-2 align-bottom">
                <motion.span className={`inline-block ${w === 'Cozy.' ? 'italic text-latte' : ''}`} initial={reduce ? false : { y: '115%' }} animate={{ y: ready ? 0 : '115%' }} transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}>{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p {...a(0.7)} className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">Thoughtfully brewed coffee, fresh-baked treats, and little moments worth slowing down for.</motion.p>
          <motion.div {...a(0.9)} className="mt-9 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-full bg-cream px-7 py-3.5 font-medium text-espresso transition hover:bg-latte active:scale-95">Explore Our Menu</a>
            <a href="#menu" className="rounded-full border border-cream/60 px-7 py-3.5 font-medium text-cream transition hover:bg-cream hover:text-espresso active:scale-95">Order Your Coffee</a>
          </motion.div>
        </div>
        <motion.div {...a(0.2)} className="relative md:col-span-6 md:pl-6">
          <HeroMedia ready={ready} />
          <div className="absolute -right-2 -top-8 hidden h-32 w-32 items-center justify-center sm:flex">
            <svg viewBox="0 0 120 120" className="spin absolute inset-0 text-latte" aria-hidden>
              <defs><path id="ring" d="M60 60 m-48 0 a48 48 0 1 1 96 0 a48 48 0 1 1 -96 0" /></defs>
              <text fill="currentColor" fontSize="10.5" letterSpacing="3" fontFamily="DM Sans"><textPath href="#ring">BREWED FRESH • SERVED WITH LOVE •</textPath></text>
            </svg>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-espresso"><Coffee size={24} /></span>
          </div>
        </motion.div>
        <a href="#menu" aria-label="Scroll to menu" className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-latte md:block"><ChevronDown className="animate-bounce" /></a>
      </section>
    </div>
  )
}
