import { ArrowDownRight } from 'lucide-react'
import { hero } from '../../data/content'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={hero.image}
        alt="Telugu meals served on a banana-leaf butta"

        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-40 sm:justify-center sm:pb-24 sm:pt-36">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs font-medium tracking-[0.32em] text-gold-light uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] font-medium text-balance text-ivory sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            {hero.subtitle}
          </p>
          <p className="mt-5 inline-flex rounded-full border border-ivory/25 px-3 py-1 text-[0.7rem] tracking-[0.16em] text-gold-light uppercase">
            {hero.booking}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href} className="w-full sm:w-auto">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline" className="w-full sm:w-auto">
              {hero.secondaryCta.label}
              <ArrowDownRight size={16} />
            </Button>
          </div>
        </div>

        <dl className="mt-14 grid w-full max-w-3xl grid-cols-3 gap-3 border-t border-ivory/15 pt-8 sm:mt-20 sm:gap-8">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <dt className="font-display text-3xl leading-none text-ivory sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-[0.65rem] leading-snug tracking-wide text-ivory/60 sm:text-xs">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
