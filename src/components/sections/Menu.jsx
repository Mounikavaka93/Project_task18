import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { menuCategories } from '../../data/content'
import { getSeason } from '../../lib/studio'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Menu() {
  const [openId, setOpenId] = useState(menuCategories[0].id)
  const openCategory = menuCategories.find((category) => category.id === openId)
  const season = getSeason()

  const toggle = (id) => {
    setOpenId((current) => (current === id ? '' : id))
  }

  return (
    <section id="menu" className="bg-ivory py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The thali"
            title="A kitchen written in seasons, not packages."
            description={`${season.menu}, published for service this week. Prices are per piece for tindi and per plate for courses. Veg and Jain notes sit beside each dish.`}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menuCategories.map((category, index) => {
            const isOpen = openId === category.id

            return (
              <Reveal key={category.id} delay={index * 70} className="min-w-0">
                <button
                  type="button"
                  onClick={() => toggle(category.id)}
                  aria-expanded={isOpen}
                  aria-controls={`menu-list-${category.id}`}
                  className={`group relative block w-full overflow-hidden rounded-sm text-left transition-all duration-300 ${
                    isOpen
                      ? 'ring-2 ring-wine ring-offset-2 ring-offset-ivory'
                      : 'ring-0 hover:ring-2 hover:ring-gold/50 hover:ring-offset-2 hover:ring-offset-ivory'
                  }`}
                >
                  <img
                    src={category.image}
                    alt=""
                    className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.22em] text-gold-light uppercase">
                        {category.count}
                      </p>
                      <h3 className="mt-1 font-display text-2xl text-ivory">
                        {category.title}
                      </h3>
                    </div>
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-transform duration-300 ${
                        isOpen ? 'rotate-180 border-wine bg-wine' : 'bg-ink/30'
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>

        {openCategory ? (
          <div
            id={`menu-list-${openCategory.id}`}
            className="mt-8 rounded-sm border border-mist bg-cream p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs tracking-[0.22em] text-gold uppercase">
                  {openCategory.count}
                </p>
                <h3 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                  {openCategory.title}
                </h3>
              </div>
              <p className="text-sm text-ink-soft/70">
                {openCategory.items.length} dishes · available for tasting
              </p>
            </div>

            <ul className="grid gap-x-10 sm:grid-cols-2">
              {openCategory.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-start justify-between gap-4 border-t border-ink/10 py-4"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium text-ink">{item.name}</p>
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-ink/10 px-1.5 py-0.5 text-[0.6rem] tracking-wide text-stone"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-ink-soft/70">{item.note}</p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-wine">{item.price}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 border-t border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-stone">
                GF gluten-free · Veg vegetarian · Jain on request. Menus change with the mandi.
              </p>
              <a
                href="#contact"
                className="text-sm font-medium text-wine underline-offset-4 hover:underline"
              >
                Request this course for a tasting
              </a>
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
