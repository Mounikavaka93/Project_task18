const variants = {
  primary:
    'bg-wine text-ivory hover:bg-wine-dark shadow-sm shadow-wine/20',
  gold: 'bg-gold text-ink hover:bg-gold-light',
  outline:
    'border border-ivory/50 text-ivory hover:border-gold hover:text-gold bg-transparent',
  dark: 'border border-ink/15 text-ink hover:border-wine hover:text-wine bg-transparent',
}

export default function Button({
  as = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Tag = as
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 disabled:cursor-wait disabled:opacity-70 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
