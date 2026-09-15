import { useEffect, useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { z } from 'zod'

const BG_LANDSCAPE =
  'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/3.webp'
const BG_PORTRAIT =
  'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/our-big-moments/Our%20Moment%20Big%203.webp'

const WEDDING = {
  groomName: 'Fedrik',
  brideName: 'Chaca',
  date: '10 OCTOBER 2026',
  recipient: 'Bapak/Ibu Tamu',
}

const guestSchema = z.object({
  to: z.string().optional(),
  name: z.string().optional(),
})

const DEFAULT_TITLE = 'The Wedding of Chaca & Fedrik'
const DEFAULT_DESC = 'Sabtu, 10 Oktober 2026 — Kami mengundang Anda untuk merayakan momen istimewa bersama kami.'

export const Route = createFileRoute('/')({ 
  component: LandingPage,
  validateSearch: guestSchema,
  head: () => ({
    meta: [
      { title: DEFAULT_TITLE },
      { name: 'description', content: DEFAULT_DESC },
      { property: 'og:title', content: DEFAULT_TITLE },
      { property: 'og:description', content: DEFAULT_DESC },
      { property: 'og:image', content: BG_LANDSCAPE },
      { name: 'twitter:title', content: DEFAULT_TITLE },
      { name: 'twitter:description', content: DEFAULT_DESC },
      { name: 'twitter:image', content: BG_LANDSCAPE },
    ],
  }),
})

function useIsPortrait() {
  const [isPortrait, setIsPortrait] = useState(() => window.matchMedia('(orientation: portrait)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(orientation: portrait)')
    const handler = (e: MediaQueryListEvent) => setIsPortrait(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isPortrait
}

function LandingPage() {
  const navigate = useNavigate()
  const { to, name } = Route.useSearch()
  const isPortrait = useIsPortrait()

  const hasGuest = Boolean(to && name)
  const [recipientLabel, setRecipientLabel] = useState(WEDDING.recipient)
  useEffect(() => {
    setRecipientLabel(hasGuest ? `${to} ${name}` : WEDDING.recipient)
    if (hasGuest) {
      document.title = `Kepada ${to} ${name} — The Wedding of Chaca & Fedrik`
    }
  }, [hasGuest, to, name])

  const bgImage = isPortrait ? BG_PORTRAIT : BG_LANDSCAPE

  return (
    <main className="cover">
      <div className="cover__media">
        <div
          className="cover__media-img"
          style={{ backgroundImage: `url('${bgImage}')` }}
          role="img"
          aria-label="Pasangan pengantin Chaca dan Fedrik"
        />
        <div className="cover__overlay" />
        <div className="cover__media-fade" />
      </div>

      <header className="cover__top cover__content fade-in-up">
        <span className="cover__eyebrow label-caps text-muted">THE WEDDING OF</span>
      </header>

      <section className="cover__middle cover__content">
        <h1 className="cover__names display-hero text-primary">
          {WEDDING.brideName} <span className="display-hero__amp">&amp;</span>{' '}
          {WEDDING.groomName}
        </h1>
        <p className="cover__date body--lg text-muted fade-in-up delay-300">{WEDDING.date}</p>
      </section>

      <footer className="cover__bottom cover__content">
        <div className="cover__guest fade-in-up delay-500">
          <span className="cover__guest-label body--sm text-muted">Kepada Yth.</span>
          <span className="cover__guest-name headline headline--md text-primary">
            {recipientLabel}
          </span>
          <span className="cover__guest-place body--sm text-muted">di tempat</span>
        </div>

        <button
          type="button"
          className="cover__cta btn btn--primary fade-in-up delay-700"
          onClick={() => navigate({ to: '/invitation', search: { to, name } })}
        >
          <span>BUKA UNDANGAN</span>
        </button>

        <p className="cover__hint label-caps animate-bounce-subtle">Tap untuk membuka undangan</p>
      </footer>
    </main>
  )
}
