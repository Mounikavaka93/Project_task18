import { gallery } from '../../data/content'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The vindu in pictures"
            title="Food on the butta — rice, koora, and the quiet between courses."
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {gallery.map((item, index) => (
            <Reveal
              key={item.src}
              delay={index * 60}
              className={`h-full min-w-0 ${item.className}`}
            >
              <figure className="group relative h-full overflow-hidden rounded-sm">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 text-[0.7rem] leading-snug text-ivory sm:p-4 sm:text-sm">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
