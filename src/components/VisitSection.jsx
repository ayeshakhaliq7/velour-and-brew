import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react'
import ContactForm from './ContactForm'
import { siteConfig } from '../data/siteConfig'
export default function VisitSection() {
  const digits = String(siteConfig.whatsappNumber).replace(/\D/g, '')
  const valid = /^[1-9]\d{9,14}$/.test(digits) && digits === String(siteConfig.whatsappNumber).replace(/[\s+-]/g, '')
  return (
    <section id="visit" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
      <div>
        <h2 className="font-serif text-4xl font-semibold">Visit us</h2>
        <ul className="mt-8 space-y-5">
          <li className="flex gap-3"><MapPin className="mt-0.5 flex-none text-coffee" /><span>{siteConfig.address}</span></li>
          <li className="flex gap-3"><Clock className="mt-0.5 flex-none text-coffee" /><div>{siteConfig.hours.map((h) => <p key={h.days}>{h.days}: {h.time}</p>)}</div></li>
          <li className="flex gap-3"><Phone className="flex-none text-coffee" />{siteConfig.phone}</li>
          <li className="flex gap-3"><Mail className="flex-none text-coffee" />{siteConfig.email}</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-espresso px-6 py-3 text-sm font-medium text-cream hover:bg-coffee">Get directions</a>
          {valid
            ? <a href={`https://wa.me/${digits}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium"><MessageCircle size={16} /> Chat on WhatsApp</a>
            : <button disabled title="Set whatsappNumber in siteConfig.js" className="flex cursor-not-allowed items-center gap-2 rounded-full bg-sage/40 px-6 py-3 text-sm font-medium"><MessageCircle size={16} /> WhatsApp (not configured)</button>}
        </div>
      </div>
      <ContactForm />
    </section>
  )
}
