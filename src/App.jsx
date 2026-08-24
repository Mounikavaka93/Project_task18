import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Menu from './components/sections/Menu'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import StickyBook from './components/layout/StickyBook'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-svh bg-ivory pb-20 text-ink lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Menu />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyBook />
    </div>
  )
}
