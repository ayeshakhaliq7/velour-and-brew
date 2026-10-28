const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=75`
// Sample menu. Categories: Espresso, Hot Coffee, Iced Coffee, Matcha & Tea, Bakery & Desserts
export const categories = ['All', 'Espresso', 'Hot Coffee', 'Iced Coffee', 'Matcha & Tea', 'Bakery & Desserts']
export const products = [
  { id: 'esp-1', name: 'Single Espresso', category: 'Espresso', description: 'A concentrated shot with a caramel-toned crema.', price: 350, image: u('photo-1510707577719-ae7c14805e3a') },
  { id: 'esp-2', name: 'Flat White', category: 'Espresso', description: 'Double ristretto with velvety steamed milk.', price: 550, image: u('photo-1577968897966-3d4325b36b61') },
  { id: 'hot-1', name: 'Signature Cappuccino', category: 'Hot Coffee', description: 'Rich espresso, airy foam and a dusting of cocoa.', price: 600, image: u('photo-1495474472287-4d71bcdd2085'), featured: true },
  { id: 'hot-2', name: 'Classic Latte', category: 'Hot Coffee', description: 'Smooth espresso with steamed milk and latte art.', price: 650, image: u('photo-1517701550927-30cf4ba1dba5'), featured: true },
  { id: 'hot-3', name: 'Mocha', category: 'Hot Coffee', description: 'Espresso, dark chocolate and steamed milk.', price: 700, image: u('photo-1578314675249-a6910f80cc4e') },
  { id: 'ice-1', name: 'Iced Caramel Coffee', category: 'Iced Coffee', description: 'Cold espresso, milk and house-made caramel over ice.', price: 750, image: u('photo-1461023058943-07fcbe16d735'), featured: true },
  { id: 'ice-2', name: 'Cold Brew', category: 'Iced Coffee', description: 'Steeped for 16 hours for a naturally sweet finish.', price: 700, image: u('photo-1517701604599-bb29b565090c') },
  { id: 'ice-3', name: 'Iced Latte', category: 'Iced Coffee', description: 'Chilled espresso poured over cold milk.', price: 700, image: u('photo-1553909489-cd47e0907980') },
  { id: 'mat-1', name: 'Matcha Latte', category: 'Matcha & Tea', description: 'Ceremonial-style matcha whisked with warm milk.', price: 800, image: u('photo-1515823064-d6e0c04616a7') },
  { id: 'mat-2', name: 'Masala Chai', category: 'Matcha & Tea', description: 'Black tea simmered with cardamom, ginger and spice.', price: 450, image: u('photo-1571934811356-5cc061b6821f') },
  { id: 'bak-1', name: 'Chocolate Croissant', category: 'Bakery & Desserts', description: 'Buttery, flaky layers around dark chocolate.', price: 500, image: u('photo-1555507036-ab1f4038808a'), featured: true },
  { id: 'bak-2', name: 'Blueberry Muffin', category: 'Bakery & Desserts', description: 'Soft crumb, juicy blueberries, golden top.', price: 450, image: u('photo-1607958996333-41aef7caefaa') },
  { id: 'bak-3', name: 'Cheesecake Slice', category: 'Bakery & Desserts', description: 'Creamy baked cheesecake on a biscuit base.', price: 850, image: u('photo-1533134242443-d4fd215305ad') },
]
export const images = {
  hero: u('photo-1495474472287-4d71bcdd2085').replace('w=800','w=1200'), // real cappuccino photo
  heroVideo: '/videos/hero.mp4', // optional: e.g. '/videos/iced-coffee.mp4' (put the file in public/videos/)
  story: u('photo-1554118811-1e0d58224f24'),
  story2: u('photo-1447933601403-0c6688de566e'),
}
