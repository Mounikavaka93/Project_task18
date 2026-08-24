import { marqueeItems } from '../../data/content'

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="overflow-hidden border-y border-mist bg-cream py-4">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            <span className="text-xs font-medium tracking-[0.28em] text-ink-soft uppercase">
              {item}
            </span>
            <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
