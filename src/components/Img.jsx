import { useState } from 'react'
import { Coffee } from 'lucide-react'
// Image with graceful fallback if the remote photo fails to load.
export default function Img({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return (
    <div role="img" aria-label={alt} className={`flex items-center justify-center bg-latte/60 text-coffee ${className}`}><Coffee size={40} /></div>
  )
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />
}
