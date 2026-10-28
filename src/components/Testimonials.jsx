import { Quote } from 'lucide-react'
import Reveal from './Reveal'
import { siteConfig } from '../data/siteConfig'
export default function Testimonials() {
  return (
    <section className="bg-espresso py-16 text-cream md:py-24" aria-labelledby="t-h">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id="t-h" className="font-serif text-4xl font-semibold">Kind words from the counter</h2>
        <p className="mt-2 text-sm text-latte">Sample reviews for demonstration — replace with real customer feedback.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {siteConfig.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="h-full rounded-3xl border border-cream/15 bg-cream/5 p-7 transition hover:bg-cream/10">
                <Quote className="text-sage" aria-hidden />
                <blockquote className="mt-4 leading-relaxed">{t.text}</blockquote>
                <figcaption className="mt-5 font-semibold text-latte">{t.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
