import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
// ---- EDIT HERE ----
const VIDEO_SRC = '/videos/intro.mp4' // your intro video (put it in public/videos/)
const MAX_MS = 10400 // intro closes by itself after this many ms (or when the video ends)
// -------------------
// Full-screen intro: your video plays with "Velour & Brew" on top, then slides away.
export default function Preloader({ onDone = () => {} }) {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(!reduce)
  const [noVideo, setNoVideo] = useState(false)
  const skipRef = useRef(null)
  const close = () => { setShow(false); onDone() }
  useEffect(() => { if (reduce) onDone() }, []) // eslint-disable-line
  useEffect(() => {
    if (!show) return
    skipRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const t = setTimeout(close, noVideo ? 2200 : MAX_MS)
    return () => { clearTimeout(t); document.body.style.overflow = '' }
  }, [show, noVideo]) // eslint-disable-line
  return (
    <AnimatePresence>
      {show && (
        <motion.div role="dialog" aria-label="Welcome to Velour & Brew" exit={{ y: '-100%' }} transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center overflow-hidden bg-espresso text-cream">
          {!noVideo && <video src={VIDEO_SRC} autoPlay muted playsInline preload="auto" onEnded={close} onError={() => setNoVideo(true)} className="absolute inset-0 h-full w-full object-cover" aria-hidden />}
          <div className="absolute inset-0 bg-espresso/45" />
          <div className="relative px-6 text-center">
            <h2 className="font-serif text-5xl sm:text-7xl">
              {'Velour & Brew'.split('').map((c, i) => <motion.span key={i} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.07, duration: 0.6 }} className="inline-block whitespace-pre">{c}</motion.span>)}
            </h2>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }} className="mt-4 text-sm uppercase tracking-[0.3em] text-latte">Brewed fresh. Served with love.</motion.p>
          </div>
          <button ref={skipRef} onClick={close} className="absolute bottom-6 right-6 rounded-full border border-cream/50 bg-espresso/40 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-cream hover:text-espresso">Skip intro</button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
