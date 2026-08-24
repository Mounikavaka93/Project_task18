import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/content'
import AnnouncementBar from './AnnouncementBar'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)

      const current = [...sections]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 130)

      setActive(current ? `#${current.id}` : '')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)
  const solid = scrolled || open

  return (
    <>
      <header
        className={`fixed top-0 right-[var(--page-gutter)] left-[var(--page-gutter)] z-50 transition-all duration-300 ${
          solid
            ? 'border-b border-ink/5 bg-ivory/95 shadow-sm shadow-ink/5 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <AnnouncementBar solid={solid} />
        <Container className="grid h-[4.5rem] grid-cols-[1fr_auto] items-center lg:h-20 lg:grid-cols-[1fr_auto_1fr]">
          <a
            href="#home"
            className="relative z-50 flex items-center gap-2 justify-self-start whitespace-nowrap"
            onClick={close}
          >
            <span
              className={`font-display text-2xl tracking-tight transition-colors ${
                solid ? 'text-ink' : 'text-ivory'
              }`}
            >
              Vindu
            </span>
            <span
              className={`hidden text-[0.95rem] sm:inline ${
                solid ? 'text-gold' : 'text-gold-light'
              }`}
              style={{ fontFamily: 'Tiro Telugu, serif' }}
            >
              విందు
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  active === link.href
                    ? solid
                      ? 'text-wine'
                      : 'text-gold-light'
                    : solid
                      ? 'text-ink-soft hover:text-wine'
                      : 'text-ivory/80 hover:text-ivory'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Button
              href="#contact"
              variant={solid ? 'primary' : 'outline'}
              className="px-5 py-2.5"
            >
              Book a tasting
            </Button>
          </div>

          <button
            type="button"
            className={`relative z-50 inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border transition-colors lg:hidden ${
              solid ? 'border-ink/15 text-ink' : 'border-ivory/40 text-ivory'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ivory transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <nav className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center gap-3 px-5 pt-16 sm:px-8 lg:px-14">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              style={{ transitionDelay: open ? `${index * 50}ms` : '0ms' }}
              className={`font-display text-4xl text-ink transition-all sm:text-5xl ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" onClick={close} className="mt-8 w-fit">
            Book a tasting
          </Button>
        </nav>
      </div>
    </>
  )
}
