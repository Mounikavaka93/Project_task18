import { useEffect, useRef, useState } from 'react'

export default function useInView({ threshold = 0.14 } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold },
    )

    observer.observe(element)
    const fallback = window.setTimeout(() => setVisible(true), 1600)
    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [threshold])

  return [ref, visible]
}
