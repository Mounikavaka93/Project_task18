import { useEffect, useState } from 'react'
import { formatLocalTime, getSeason, getStudioStatus } from '../../lib/studio'

export default function AnnouncementBar({ solid }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const status = getStudioStatus(now)
  const season = getSeason(now)
  const time = formatLocalTime(now)

  return (
    <div
      className={`flex h-9 items-center justify-between gap-4 overflow-hidden px-5 text-[0.65rem] tracking-[0.14em] uppercase sm:px-8 lg:h-10 lg:px-14 ${
        solid ? 'border-b border-ink/10 bg-wine text-ivory' : 'bg-ink/40 text-ivory/85'
      }`}
    >
      <p className="flex min-w-0 items-center gap-2 truncate">
        <span
          className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
            status.open ? 'bg-emerald-400' : 'bg-gold-light'
          }`}
        />
        <span className="truncate">{status.label}</span>
      </p>
      <p className="hidden truncate sm:block">{season.menu}</p>
      <p className="shrink-0 tabular-nums">Hyderabad {time}</p>
    </div>
  )
}
