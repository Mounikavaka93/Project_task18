import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { footer, navLinks } from '../../data/content'
import Container from '../ui/Container'

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const onJoin = (event) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setJoined(true)
  }

  return (
    <footer className="bg-ink text-ivory">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-5">
            <a href="#home" className="font-display text-3xl tracking-tight">
              Vindu
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/65">
              {footer.blurb}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1 text-sm text-gold-light transition-colors hover:text-gold"
            >
              Plan a function
              <ArrowUpRight size={16} />
            </a>
            <form onSubmit={onJoin} className="mt-8 max-w-sm">
              <p className="text-xs tracking-[0.22em] text-gold uppercase">Seasonal note</p>
              {joined ? (
                <p className="mt-3 text-sm text-ivory/70">You are on the list.</p>
              ) : (
                <div className="mt-3 flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email address"
                    className="h-11 min-w-0 flex-1 rounded-sm border border-ivory/15 bg-ivory/5 px-3 text-sm text-ivory outline-none placeholder:text-ivory/35 focus:border-gold"
                  />
                  <button
                    type="submit"
                    className="h-11 rounded-sm bg-wine px-4 text-sm text-ivory transition-colors hover:bg-wine-dark"
                  >
                    Join
                  </button>
                </div>
              )}
            </form>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <p className="text-xs font-medium tracking-[0.22em] text-gold uppercase">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.22em] text-gold uppercase">
              Studio
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/70">
              8-2-293/82, Road No. 12, Banjara Hills
              <br />
              Hyderabad 500034
              <br />
              <a href="mailto:hello@vindu.kitchen" className="hover:text-ivory">
                hello@vindu.kitchen
              </a>
              <br />
              <a href="tel:+914023551848" className="hover:text-ivory">
                +91 40 2355 1848
              </a>
            </p>
            <p className="mt-4 text-sm text-ivory/55">
              Service area: Hyderabad, Vijayawada, Guntur, Warangal & Vizag.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/45">
            © {year} Vindu Catering Pvt. Ltd. FSSAI 13625009000418 · GST 36AABCV1848Q1Z4.
          </p>
          <div className="flex flex-wrap gap-5">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-ivory/45 transition-colors hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
