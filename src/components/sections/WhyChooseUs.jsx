import { ChefHat, Leaf, Sparkles, Users } from 'lucide-react'
import { reasons } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons = [ChefHat, Leaf, Users, Sparkles]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-wine/30 blur-3xl" />
      <Container>
        <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex h-full flex-col lg:col-span-5">
            <SectionHeading
              light
              eyebrow="Why Vindu"
              title="The difference is in how the vindu moves."
              description="We do not drop trays and leave. We write the menu, staff the pelli mandapam, and stay until the last filter coffee is poured."
            />
            <img
              src="https://images.unsplash.com/photo-1707528904076-6dbefcfe9b4d?auto=format&fit=crop&w=1000&q=80"
              alt="Bhojanam served on a banana-leaf butta"
              className="mt-10 hidden min-h-64 w-full flex-1 rounded-sm object-cover lg:block"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((reason, index) => {
              const Icon = icons[index]
              return (
                <Reveal key={reason.title} delay={index * 90} className="h-full min-w-0">
                  <article className="flex h-full flex-col rounded-sm border border-ivory/10 bg-ivory/[0.03] p-6 transition-colors duration-300 hover:border-gold/40 hover:bg-ivory/[0.06]">
                    <Icon className="text-gold" size={22} strokeWidth={1.5} />
                    <h3 className="mt-5 font-display text-2xl text-ivory">
                      {reason.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory/65">
                      {reason.body}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
