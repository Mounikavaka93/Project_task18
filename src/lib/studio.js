const OPEN_DAYS = [1, 2, 3, 4, 5, 6]
const OPEN_HOUR = 10
const CLOSE_HOUR = 19
const TIME_ZONE = 'Asia/Kolkata'

export function getSeason(date = new Date()) {
  const month = Number(
    new Intl.DateTimeFormat('en-IN', { timeZone: TIME_ZONE, month: 'numeric' }).format(date),
  ) - 1

  if (month >= 1 && month <= 4) {
    return { name: 'Summer', menu: 'Mango pappu & coastal koora', booking: 'Varsha dates' }
  }
  if (month >= 5 && month <= 8) {
    return { name: 'Varsha', menu: 'Varsha kaalam thali · Sravanam', booking: 'Pelli season 2026–27' }
  }
  if (month >= 9 && month <= 10) {
    return { name: 'Festive', menu: 'Bathukamma & Diwali kitchen', booking: 'Sankranti pellilu' }
  }
  return { name: 'Winter', menu: 'Sankranti ariselu kitchen', booking: 'Ugadi 2027' }
}

export function getStudioStatus(date = new Date()) {
  const { day, hour, minute } = zoneParts(date)
  const open =
    OPEN_DAYS.includes(day) &&
    (hour > OPEN_HOUR || (hour === OPEN_HOUR && minute >= 0)) &&
    hour < CLOSE_HOUR

  return {
    open,
    label: open ? `Kitchen open · closes ${formatHour(CLOSE_HOUR)}` : nextOpenLabel(date),
  }
}

export function formatLocalTime(date = new Date()) {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: TIME_ZONE,
    hour: 'numeric',
    minute: '2-digit',
  }).format(date)
}

export function nextTastingSlots(count = 3, from = new Date()) {
  const slots = []
  const cursor = new Date(from)
  cursor.setHours(11, 0, 0, 0)
  cursor.setDate(cursor.getDate() + 1)

  while (slots.length < count) {
    const day = cursor.getDay()
    if (day === 2 || day === 4 || day === 6) {
      slots.push({
        iso: cursor.toISOString().slice(0, 10),
        label: new Intl.DateTimeFormat('en-IN', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        }).format(cursor),
        time: day === 6 ? '11:00 tasting' : '16:00 tasting',
      })
    }
    cursor.setDate(cursor.getDate() + 1)
  }

  return slots
}

export function minEventDate(from = new Date()) {
  const date = new Date(from)
  date.setDate(date.getDate() + 21)
  return date.toISOString().slice(0, 10)
}

export function enquiryReference(date = new Date()) {
  const stamp = date.toISOString().slice(2, 10).replaceAll('-', '')
  const suffix = String(date.getTime()).slice(-4)
  return `VN-${stamp}-${suffix}`
}

function zoneParts(date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date)

  const read = (type) => parts.find((part) => part.type === type)?.value
  const weekdays = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

  return {
    day: weekdays[read('weekday')] ?? date.getDay(),
    hour: Number(read('hour')),
    minute: Number(read('minute')),
  }
}

function nextOpenLabel(date) {
  const cursor = new Date(date)
  for (let i = 0; i < 8; i += 1) {
    if (i > 0) cursor.setDate(cursor.getDate() + 1)
    cursor.setHours(OPEN_HOUR, 0, 0, 0)
    if (OPEN_DAYS.includes(cursor.getDay()) && cursor > date) {
      const dayName = new Intl.DateTimeFormat('en-IN', { weekday: 'long' }).format(cursor)
      const sameDay = i === 0
      return sameDay
        ? `Opens today at ${formatHour(OPEN_HOUR)}`
        : `Opens ${dayName} ${formatHour(OPEN_HOUR)}`
    }
  }
  return 'Mon–Sat, 10:00–19:00 IST'
}

function formatHour(hour) {
  if (hour === 10) return '10:00'
  if (hour === 19) return '19:00'
  return `${String(hour).padStart(2, '0')}:00`
}
