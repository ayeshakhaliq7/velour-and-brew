// Slowly falling coffee beans (decorative). Hidden for reduced-motion users via CSS.
const beans = [['6%', 0, 28, 17], ['18%', 6, 18, 22], ['32%', 2, 34, 19], ['46%', 13, 16, 26], ['58%', 9, 22, 24], ['74%', 4, 30, 18], ['90%', 11, 20, 21]]
function Bean({ size }) {
  return (
    <svg viewBox="0 0 40 56" width={size} height={size * 1.4}>
      <ellipse cx="20" cy="28" rx="16" ry="25" fill="#4a3326" />
      <ellipse cx="13" cy="17" rx="5" ry="10" fill="#9a6e4c" opacity=".5" />
      <path d="M20 4 C10 18 30 38 20 52" fill="none" stroke="#1c120d" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
export default function Beans() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {beans.map(([x, d, s, t]) => (
        <span key={x} className="bean absolute top-0" style={{ left: x, animationDuration: `${t}s`, animationDelay: `-${d}s`, filter: s < 22 ? 'blur(1.5px)' : 'none', opacity: s < 22 ? 0.5 : 0.9 }}><Bean size={s} /></span>
      ))}
    </div>
  )
}
