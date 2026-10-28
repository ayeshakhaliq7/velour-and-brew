import Marquee from '../components/Marquee'
import Hero from '../components/Hero'
import FeaturedMenu from '../components/FeaturedMenu'
import MenuSection from '../components/MenuSection'
import StorySection from '../components/StorySection'
import Testimonials from '../components/Testimonials'
import VisitSection from '../components/VisitSection'
export default function Home({ onAdd, ready }) {
  return (<><Hero ready={ready} /><Marquee /><FeaturedMenu onAdd={onAdd} /><MenuSection onAdd={onAdd} /><StorySection /><Testimonials /><VisitSection /></>)
}
