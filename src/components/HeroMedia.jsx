import { useState, useRef, useEffect } from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Img from './Img'
import { images } from '../data/products'
// Real photo (or looping video if images.heroVideo is set) with a slow cinematic zoom,
// drifting warm light spots and a soft light sweep, so it feels alive but stays realistic.
export default function HeroMedia({ ready = true }) {
  const reduce = useReducedMotion()
  const [videoOk, setVideoOk] = useState(true)
  const showVideo = images.heroVideo && videoOk && !reduce
  const videoRef = useRef(null)
  // Start the video from 0:00 only once the intro is finished/skipped
  useEffect(() => { const v = videoRef.current; if (ready && v) { v.currentTime = 0; v.play().catch(() => {}) } }, [ready, showVideo])
  const mx = useMotionValue(0), my = useMotionValue(0)
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 })
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 120, damping: 18 })
  const onMove = (e) => { if (reduce) return; const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5) }
  const spots = [['12%', '70%', 70, 0], ['72%', '22%', 54, 2.5], ['55%', '82%', 40, 5]]
  return (
    <motion.div onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0) }} style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900 }} className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-3xl bg-latte/50 shadow-xl shadow-espresso/15">
      <motion.div className="absolute inset-0" animate={reduce ? {} : { scale: [1, 1.08, 1] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}>
        {showVideo
          ? <video ref={videoRef} preload="auto" className="h-full w-full object-cover" src={images.heroVideo} poster={images.hero} muted loop playsInline onError={() => setVideoOk(false)} />
          : <Img src={images.hero} alt="Cappuccino with latte art in a ceramic cup" className="h-full w-full object-cover" />}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent" />
      {!reduce && (
        <>
          {!showVideo && [['36%', 0], ['48%', 1.7], ['60%', 3.4]].map(([l, d]) => <span key={l} aria-hidden className="steam pointer-events-none absolute bottom-[42%] h-28 w-8 rounded-full bg-white/40 blur-lg" style={{ left: l, animationDelay: `${d}s` }} />)}
          <div className="pointer-events-none absolute inset-0 overflow-hidden"><div className="sweep absolute inset-y-0 left-0 w-1/3 bg-white/15 blur-xl" /></div>
          {spots.map(([l, t, s, d]) => (
            <span key={l} aria-hidden className="bokeh pointer-events-none absolute rounded-full bg-cream/40 blur-md" style={{ left: l, top: t, width: s, height: s, animationDelay: `${d}s` }} />
          ))}
        </>
      )}
    </motion.div>
  )
}
