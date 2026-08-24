export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignment =
    align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-medium uppercase tracking-[0.28em] ${
            light ? 'text-gold-light' : 'text-gold'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-4xl leading-[1.12] font-medium text-balance sm:text-5xl ${
          light ? 'text-ivory' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-ivory/75' : 'text-ink-soft/80'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
