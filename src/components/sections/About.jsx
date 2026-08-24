import { about } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="bg-ivory py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative lg:col-span-6">
            <div className="grid h-[22rem] grid-cols-12 gap-3 sm:h-[30rem] sm:gap-4">
              <img
                src={about.image}
                alt="Andhra meal served on a banana-leaf butta"

                className="col-span-8 h-full w-full rounded-sm object-cover"
              />
              <div className="col-span-4 flex h-full min-h-0 flex-col gap-3 sm:gap-4">
                <div className="flex shrink-0 flex-col items-center justify-center rounded-sm bg-wine px-2 py-4 text-center text-ivory sm:px-4 sm:py-6">
                  <p className="font-display text-3xl leading-none sm:text-4xl">14</p>
                  <p className="mt-1 text-[0.6rem] tracking-[0.16em] uppercase sm:text-[0.65rem]">
                    Years
                  </p>
                </div>
                <img
                  src={about.secondaryImage}
                  alt="Idli and chutneys served on a banana leaf"
                  className="min-h-0 w-full flex-1 rounded-sm object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={120}>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft/85 sm:text-base">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-xs tracking-[0.22em] text-gold uppercase">
              {about.note}
            </p>
            <div className="mt-6 grid gap-3 text-sm text-ink-soft sm:grid-cols-2">
              <p>
                <span className="block text-[0.65rem] tracking-[0.18em] text-gold uppercase">
                  Kitchen
                </span>
                {about.chef}
              </p>
              <p>
                <span className="block text-[0.65rem] tracking-[0.18em] text-gold uppercase">
                  Events
                </span>
                {about.producer}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
