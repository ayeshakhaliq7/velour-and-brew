const items = ['Espresso', 'Cold Brew', 'Matcha', 'Fresh Croissants', 'Slow Mornings', 'Single Origin']
const drips = [[80, 14, 0], [210, 26, 1.2], [340, 10, 0.6], [470, 22, 2], [610, 16, 0.3], [760, 28, 1.6], [890, 12, 0.9], [1020, 22, 2.4], [1130, 14, 0.2]]
export default function Marquee() {
  return (
    <div aria-hidden className="relative overflow-hidden bg-sage pb-4 pt-12 text-espresso">
      {/* coffee dripping down from the dark hero */}
      <svg viewBox="0 0 1200 60" preserveAspectRatio="xMidYMin slice" className="absolute inset-x-0 top-0 h-14 w-full fill-espresso">
        <rect width="1200" height="6" />
        {drips.map(([x, l, d]) => (
          <g key={x} className="drip2" style={{ animationDelay: `${d}s` }}><rect x={x - 5} y="0" width="10" height={l + 6} /><circle cx={x} cy={l + 8} r="7" /></g>
        ))}
      </svg>
      <div className="marquee flex w-max gap-10 font-serif text-3xl italic">
        {[...items, ...items].map((t, i) => <span key={i} className="flex items-center gap-10">{t}<span className="text-xl not-italic">✦</span></span>)}
      </div>
    </div>
  )
}
