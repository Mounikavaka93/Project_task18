export default function StickyBook() {
  return (
    <div className="fixed right-[var(--page-gutter)] bottom-4 left-[var(--page-gutter)] z-40 lg:hidden">
      <a
        href="#contact"
        className="flex h-12 items-center justify-center rounded-full bg-wine text-sm font-medium text-ivory shadow-lg shadow-ink/20"
      >
        Enquire now
      </a>
    </div>
  )
}
