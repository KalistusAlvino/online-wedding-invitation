import { useEffect } from 'react'

/**
 * Adds `.is-visible` to every `.js-reveal` element once it scrolls into view.
 * Call after the content that contains reveal elements has mounted.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.js-reveal'))

    if (elements.length === 0) return

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    elements.forEach((el) => observer.observe(el))

    // Reveal anything already within the viewport on first paint.
    const frame = requestAnimationFrame(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) el.classList.add('is-visible')
      })
    })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])
}
