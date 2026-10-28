import { useState } from 'react'
// INTEGRATION POINT: replace the body of this function with a call to a real form service
// (Formspree, Web3Forms, EmailJS, or your own API) and return { delivered: true } on success.
async function submitContactForm(/* { name, email, message } */) {
  return { delivered: false } // no backend connected in this frontend-only project
}
export default function ContactForm() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const validate = () => {
    const e = {}
    if (!v.name.trim()) e.name = 'Please enter your name.'
    if (!v.email.trim()) e.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter a valid email, like name@example.com.'
    if (v.message.trim().length < 10) e.message = 'Please write at least 10 characters.'
    return e
  }
  const onSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate(); setErrors(e); setStatus(null)
    if (Object.keys(e).length) return
    const res = await submitContactForm(v)
    setStatus(res.delivered ? { ok: true, text: 'Thanks! Your message was sent.' } : { ok: false, text: 'Your details look good, but this demo site isn’t connected to an email service yet, so nothing was sent. Please contact us via WhatsApp or email.' })
    if (res.delivered) setV({ name: '', email: '', message: '' })
  }
  const field = (id, label, type = 'text', area) => {
    const Tag = area ? 'textarea' : 'input'
    return (
      <div>
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
        <Tag id={id} type={area ? undefined : type} rows={area ? 4 : undefined} value={v[id]} onChange={(e) => setV({ ...v, [id]: e.target.value })}
          aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined} className="w-full rounded-2xl border border-latte bg-white/70 px-4 py-3" />
        {errors[id] && <p id={`${id}-err`} className="mt-1 text-sm text-red-800">{errors[id]}</p>}
      </div>
    )
  }
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-3xl border border-latte/60 bg-white/50 p-6">
      <h3 className="font-serif text-2xl font-semibold">Send us a message</h3>
      {field('name', 'Name')}{field('email', 'Email', 'email')}{field('message', 'Message', 'text', true)}
      <button type="submit" className="rounded-full bg-espresso px-7 py-3 font-medium text-cream transition hover:bg-coffee active:scale-95">Send message</button>
      {status && <p role="status" className={`rounded-xl p-3 text-sm ${status.ok ? 'bg-sage/30' : 'bg-latte/50'}`}>{status.text}</p>}
    </form>
  )
}
