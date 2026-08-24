import { useMemo, useState } from 'react'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { contact } from '../../data/content'
import {
  enquiryReference,
  getStudioStatus,
  minEventDate,
  nextTastingSlots,
} from '../../lib/studio'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons = [MapPin, Phone, Mail, Clock]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  date: '',
  guests: '',
  venue: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [reference, setReference] = useState('')
  const earliest = minEventDate()
  const slots = useMemo(() => nextTastingSlots(3), [])
  const status = getStudioStatus()

  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'A valid email helps us reply.'
    }
    if (!form.eventType) next.eventType = 'Select an occasion.'
    if (!form.date) next.date = 'Choose a preferred date.'
    if (!form.guests || Number(form.guests) < 1) next.guests = 'Enter a guest count.'
    if (!form.message.trim()) next.message = 'A few lines about the evening are enough.'
    return next
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    setSending(true)
    window.setTimeout(() => {
      setReference(enquiryReference())
      setSubmitted(true)
      setSending(false)
      setForm(initialForm)
    }, 900)
  }

  const fieldClass =
    'h-11 w-full rounded-sm border border-mist bg-ivory px-4 text-base text-ink outline-none transition-colors placeholder:text-stone/70 focus:border-wine sm:text-sm'

  return (
    <section id="contact" className="bg-cream py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow={contact.eyebrow} title={contact.title} />
            <p className="mt-5 text-base leading-relaxed text-ink-soft/80">
              {contact.body}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-ivory px-3 py-1.5 text-xs text-ink-soft">
              <span
                className={`h-1.5 w-1.5 rounded-full ${status.open ? 'bg-emerald-600' : 'bg-gold'}`}
              />
              {status.label}
            </p>
            <ul className="mt-8 space-y-5">
              {contact.details.map((detail, index) => {
                const Icon = icons[index]
                const Value = detail.href ? 'a' : 'p'
                return (
                  <li key={detail.label} className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory text-wine">
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-xs tracking-[0.18em] text-gold uppercase">
                        {detail.label}
                      </p>
                      <Value
                        href={detail.href || undefined}
                        className="mt-1 block text-sm text-ink hover:text-wine"
                        target={detail.href?.startsWith('http') ? '_blank' : undefined}
                        rel={detail.href?.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {detail.label === 'Hours' ? status.label : detail.value}
                      </Value>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <div className="rounded-sm bg-ivory p-6 shadow-sm shadow-ink/5 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                  <p className="text-xs tracking-[0.28em] text-gold uppercase">Enquiry received</p>
                  <h3 className="mt-3 font-display text-3xl text-ink">
                    Thank you — we have it.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft/80">
                    Your reference is <span className="font-medium text-ink">{reference}</span>.
                    Sowmya will reply within one business day with availability and a tasting time.
                  </p>
                  <button
                    type="button"
                    className="mt-8 text-sm text-wine underline-offset-4 hover:underline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid items-start gap-x-4 gap-y-1 sm:grid-cols-2">
                  <p className="sm:col-span-2 mb-2 text-xs text-stone">
                    Next tasting tables:{' '}
                    {slots.map((slot) => slot.label).join(' · ')}
                  </p>
                  <Field
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={update}
                    error={errors.name}
                    className={fieldClass}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    error={errors.email}
                    className={fieldClass}
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={update}
                    className={fieldClass}
                  />
                  <div>
                    <label htmlFor="eventType" className="mb-1.5 block text-xs text-stone">
                      Occasion
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={form.eventType}
                      onChange={update}
                      className={fieldClass}
                    >
                      <option value="">Select an occasion</option>
                      {contact.eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <p className={`mt-1 min-h-5 text-xs ${errors.eventType ? 'text-wine' : 'invisible'}`}>
                      {errors.eventType || 'placeholder'}
                    </p>
                  </div>
                  <Field
                    label="Preferred date"
                    name="date"
                    type="date"
                    min={earliest}
                    value={form.date}
                    onChange={update}
                    error={errors.date}
                    className={fieldClass}
                  />
                  <Field
                    label="Guest count"
                    name="guests"
                    type="number"
                    min="1"
                    value={form.guests}
                    onChange={update}
                    error={errors.guests}
                    className={fieldClass}
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label="Venue or neighbourhood"
                      name="venue"
                      value={form.venue}
                      onChange={update}
                      className={fieldClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-xs text-stone">
                      Tell us about the evening
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Muhurat, Jain or satvik, gongura or mild kara, venue…"
                      value={form.message}
                      onChange={update}
                      className="w-full resize-y rounded-sm border border-mist bg-ivory px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-stone/70 focus:border-wine sm:text-sm"
                    />
                    <p className={`mt-1 min-h-5 text-xs ${errors.message ? 'text-wine' : 'invisible'}`}>
                      {errors.message || 'placeholder'}
                    </p>
                  </div>
                  <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button as="button" type="submit" className="w-full sm:w-auto" disabled={sending}>
                      {sending ? 'Sending…' : 'Request a tasting'}
                    </Button>
                    <p className="text-xs text-stone">We need at least 21 days’ notice.</p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function Field({ label, name, className, error, ...props }) {
  return (
    <div className="min-w-0">
      <label htmlFor={name} className="mb-1.5 block text-xs text-stone">
        {label}
      </label>
      <input id={name} name={name} className={className} {...props} />
      <p className={`mt-1 min-h-5 text-xs ${error ? 'text-wine' : 'invisible'}`}>
        {error || 'placeholder'}
      </p>
    </div>
  )
}
