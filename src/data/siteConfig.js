// ALL business details live here. Edit this file to customise the site.
export const siteConfig = {
  name: 'Velour & Brew',
  tagline: 'Brewed fresh. Served with love.',
  // WhatsApp number: digits only, with country code, no "+" or spaces. Pakistan example: 923001234567.
  // The placeholder below is intentionally invalid so ordering stays disabled until you set a real number.
  whatsappNumber: '92XXXXXXXXXX',
  address: '[Your café address here], City, Pakistan',
  phone: '+92 XXX XXXXXXX',
  email: 'hello@example.com',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=coffee+shop', // replace query with your address
  hours: [
    { days: 'Monday – Friday', time: '8:00 AM – 10:00 PM' },
    { days: 'Saturday – Sunday', time: '9:00 AM – 11:00 PM' },
  ],
  social: { instagram: '#', facebook: '#', tiktok: '#' }, // replace '#' with real profile URLs
  // Contact form integration point: see src/components/ContactForm.jsx -> submitContactForm()
  testimonials: [ // DEMO CONTENT — replace with genuine reviews
    { name: 'Ayesha K.', text: 'The cappuccino is silky and the croissants are still warm. My new morning ritual.' },
    { name: 'Hamza R.', text: 'A calm, cozy corner in the middle of a busy day. The iced caramel is a must.' },
    { name: 'Sana M.', text: 'Lovely place to catch up with friends. Everything tastes made with care.' },
  ],
}
export const formatPKR = (n) => `Rs ${n.toLocaleString('en-PK')}`
