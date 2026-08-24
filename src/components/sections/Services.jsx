import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we host"
            title="Functions, cooked the Telugu way."
            description="Four ways to work with the kitchen — each built around the same rasoi, the same Hyderabad mandi, and a service team that knows the pelli mandapam."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80} className="h-full min-w-0">
              <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-ivory">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-display text-2xl leading-none text-gold">{service.number}</p>
                    <a
                      href="#contact"
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink transition-all duration-300 group-hover:border-wine group-hover:bg-wine group-hover:text-ivory"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                  <h3 className="mt-3 font-display text-3xl text-ink">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft/80">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 pt-4">
                    <p className="text-sm font-medium text-wine">{service.from}</p>
                    <p className="text-xs text-stone">{service.detail}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
