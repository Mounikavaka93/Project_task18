import { Star } from 'lucide-react'
import { testimonials } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ivory py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="From the vindu"
            title="What hosts remember, after the last thali."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90} className="h-full min-w-0">
              <blockquote className="flex h-full flex-col rounded-sm border border-mist bg-cream p-7 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 flex-1 font-display text-xl leading-snug text-ink italic">
                  “{item.quote}”
                </p>
                <footer className="mt-8 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <cite className="block text-sm font-medium text-ink not-italic">
                      {item.name}
                    </cite>
                    <p className="text-xs text-stone">{item.role}</p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
