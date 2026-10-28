import { Instagram, Facebook, Music2, Coffee } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
const social = [['instagram', Instagram, 'Instagram'], ['facebook', Facebook, 'Facebook'], ['tiktok', Music2, 'TikTok']]
export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div><p className="flex items-center gap-2 font-serif text-xl text-cream"><Coffee className="text-sage" size={20} /> {siteConfig.name}</p><p className="mt-3 text-sm">{siteConfig.tagline}</p></div>
        <nav aria-label="Footer"><h3 className="mb-3 font-semibold text-cream">Explore</h3><ul className="space-y-2 text-sm">
          {[['Home', '#home'], ['Menu', '#menu'], ['Our Story', '#story'], ['Visit Us', '#visit']].map(([l, h]) => <li key={h}><a href={h} className="hover:text-latte">{l}</a></li>)}</ul></nav>
        <div><h3 className="mb-3 font-semibold text-cream">Opening hours</h3><ul className="space-y-2 text-sm">{siteConfig.hours.map((h) => <li key={h.days}>{h.days}<br />{h.time}</li>)}</ul></div>
        <div><h3 className="mb-3 font-semibold text-cream">Contact</h3><p className="text-sm">{siteConfig.phone}<br />{siteConfig.email}</p>
          <div className="mt-4 flex gap-3">{social.map(([k, Icon, label]) => <a key={k} href={siteConfig.social[k]} aria-label={label} className="rounded-full border border-cream/25 p-2.5 transition hover:bg-cream/10"><Icon size={18} /></a>)}</div></div>
      </div>
      <p className="border-t border-cream/10 py-5 text-center text-xs">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
    </footer>
  )
}
