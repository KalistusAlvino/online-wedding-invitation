import { Fragment, useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

import { useRevealOnScroll } from '../lib/useRevealOnScroll'
import { supabase } from '../lib/supabase'
import {
  BANK_ACCOUNTS,
  CHAPTERS,
  CLOSING_IMAGE,
  COUPLE,
  COUPLE_MEMBERS,
  EVENTS,
  GALLERY,
  GALLERY_CAROUSEL,
  GIFT_ADDRESS,
  HERO_VIDEO_ID,
} from '../data/wedding'

const guestSchema = z.object({
  to: z.string().optional(),
  name: z.string().optional(),
})

export const Route = createFileRoute('/invitation')({
  component: InvitationPage,
  validateSearch: guestSchema,
})

/* Small helper to join class names conditionally */
function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

/* Thin-line botanical sprig used as an understated divider under titles */
function BotanicalSprig() {
  const leaves = [
    { x: 30, y: 26, r: -70, s: 0.9 },
    { x: 48, y: 23, r: -118, s: 0.8 },
    { x: 68, y: 19, r: -68, s: 1 },
    { x: 87, y: 15, r: -118, s: 0.72 },
    { x: 103, y: 11, r: -66, s: 0.68 },
  ]

  return (
    <span className="section-head__botanical" aria-hidden="true">
      <svg viewBox="0 0 120 34" fill="none">
        {/* central stem */}
        <path d="M4 30 C 38 27, 84 17, 114 5" />
        {/* leaves */}
        {leaves.map((leaf, index) => (
          <path
            key={index}
            transform={`translate(${leaf.x} ${leaf.y}) scale(${leaf.s}) rotate(${leaf.r})`}
            d="M-7 0 C -3 -4.5, 3 -4.5, 7 0 C 3 4.5, -3 4.5, -7 0 Z"
          />
        ))}
        {/* bud */}
        <circle cx="115" cy="4.5" r="1.6" />
      </svg>
    </span>
  )
}

/* Centered serif section title with a divider rule */
function SectionHead({ children, large = false }: { children: string; large?: boolean }) {
  return (
    <div className={cx('section-head', large && 'section-head--large')}>
      <h2 className="section-head__title">{children}</h2>
      <BotanicalSprig />
    </div>
  )
}

/* -----------------------------------------------------------------------------
   Hero
   --------------------------------------------------------------------------- */
function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="hero__top">
          <span className="hero__story">The Story<br />of Two</span>
          <span className="hero__rule" />
        </div>

        <div className="hero__names-block">
          <h1 className="hero__name">{COUPLE.brideName}</h1>
          <span className="hero__and">and</span>
          <h1 className="hero__name">{COUPLE.groomName}</h1>
        </div>

        <div className="hero__bottom">
          <span className="hero__vline" />
          <div className="hero__date-stack">
            <span>10</span>
            <span className="hero__date-dot">&bull;</span>
            <span>10</span>
            <span className="hero__date-dot">&bull;</span>
            <span>2026</span>
          </div>
          <p className="hero__tagline">
            a celebration of love<br />
            a promise made<br />
            for a lifetime
          </p>
        </div>
      </div>
    </section>
  )
}

/* -----------------------------------------------------------------------------
   Verse
   --------------------------------------------------------------------------- */
function VerseSection() {
  return (
    <section className="section verse">
      <div className="container verse__content">
        <div className="cross js-reveal" />
        <div className="verse__quote headline headline--lg js-reveal">
          <p>
            &ldquo;Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah
            dipersatukan Allah, tidak boleh diceraikan manusia.&rdquo;
          </p>
        </div>
        <p className="verse__cite label-caps label-caps--wide js-reveal">Matius 19:6</p>
        <div className="verse__ornament js-reveal" aria-hidden="true">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 90 C50 60, 20 40, 20 10 M50 90 C50 60, 80 40, 80 10 M50 90 L50 40 M35 50 C40 40, 60 40, 65 50" />
          </svg>
        </div>
      </div>
    </section>
  )
}

/* -----------------------------------------------------------------------------
   Couple
   --------------------------------------------------------------------------- */
function CoupleCard({ member }: { member: (typeof COUPLE_MEMBERS)[number] }) {
  const [photoIdx, setPhotoIdx] = useState(0)

  useEffect(() => {
    if (member.photos.length <= 1) return
    const id = window.setInterval(() => {
      setPhotoIdx((i) => (i + 1) % member.photos.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [member.photos.length])

  return (
    <article className="couple-card">
      {member.photos.map((src, i) => (
        <div
          key={src}
          className={cx('couple-card__bg', i === photoIdx && 'couple-card__bg--active')}
        >
          <img src={src} alt={member.alt} />
        </div>
      ))}
      <div className="couple-card__overlay" />
      <div className="couple-card__content">
        <span className="couple-card__gender">{member.role}</span>
        <span className="couple-card__rule" />
        <div className="couple-card__title-wrap">
          <div className="couple-card__title-row">
            <h2 className="couple-card__title">{member.role === 'HER' ? 'The\nBride' : 'The\nGroom'}</h2>
            <span className="couple-card__script">{member.firstName}</span>
          </div>
        </div>
        <div className="couple-card__bottom">
          <span className="couple-card__vline" />
          <div className="couple-card__info">
            <p className="couple-card__fullname">{member.name.replace('\n', ' ')}</p>
            <p className="couple-card__parents-label">{member.parentsLabel}</p>
            <p className="couple-card__parents">{member.parents}</p>
            <a
              className="couple-card__social"
              href={member.instagramUrl || '#'}
              target="_blank"
              rel="noreferrer"
            >
              <svg className="couple-card__social-icon" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.058 1.266.069 1.646.069 4.849 0 3.205-.012 3.584-.069 4.849-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.058-1.646.069-4.849.069-3.204 0-3.584-.012-4.849-.069-1.17-.054-1.805-.249-2.227-.413a3.736 3.736 0 0 1-1.381-.896 3.642 3.642 0 0 1-.896-1.381c-.164-.422-.36-1.057-.413-2.227-.058-1.266-.069-1.646-.069-4.849 0-3.204.012-3.584.069-4.849.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382a3.642 3.642 0 0 1 1.381-.896c.422-.164 1.057-.36 2.227-.413 1.266-.058 1.646-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.87 5.87 0 0 0-2.126 1.384A5.855 5.855 0 0 0 .63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.15.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.764.297 1.637.5 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.15-.261 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.297-.764.5-1.637.558-2.913.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.261-2.15-.558-2.913a5.87 5.87 0 0 0-1.384-2.126A5.855 5.855 0 0 0 19.86.63c-.764-.297-1.637-.5-2.913-.558C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
              </svg>
              INSTAGRAM | {member.handle}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

function CoupleSection() {
  return (
    <section className="couple-section js-reveal">
      {COUPLE_MEMBERS.map((member) => (
        <CoupleCard key={member.name} member={member} />
      ))}
    </section>
  )
}

/* -----------------------------------------------------------------------------
   Countdown (THE WAIT)
   --------------------------------------------------------------------------- */
const WEDDING_DATE = new Date('2026-10-10T09:00:00+07:00').getTime()

function CountdownSection() {
  const [now, setNow] = useState(0)

  useEffect(() => {
    // Initialize on client only to avoid SSR hydration mismatch (React #419)
    setNow(Date.now())
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const diff = Math.max(0, WEDDING_DATE - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  const units = [
    { value: days, label: 'DAYS' },
    { value: hours, label: 'HOURS' },
    { value: minutes, label: 'MINUTES' },
    { value: seconds, label: 'SECONDS' },
  ]

  return (
    <section className="countdown">
      <div className="countdown__content">
        <h2 className="countdown__heading">
          The<br />Wait
        </h2>
        <span className="countdown__heading-rule" />
        <div className="countdown__circle">
          <div className="countdown__circle-border" />
          <div className="countdown__circle-inner">
            <span className="countdown__until">UNTIL</span>
            <span className="countdown__until-sub">WE SAY</span>
            <p className="countdown__ido">I Do</p>
            <span className="countdown__date">10 &middot; 10 &middot; 2026</span>
            <div className="countdown__numbers">
              {units.map((u) => (
                <div key={u.label} className="countdown__unit">
                  <span className="countdown__num">{String(u.value).padStart(2, '0')}</span>
                  <span className="countdown__label">{u.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -----------------------------------------------------------------------------
   Chapters (Love Story Timeline)
   --------------------------------------------------------------------------- */
function ChaptersSection() {
  return (
    <section className="section container js-reveal">
      <SectionHead large>The Chapters We Share</SectionHead>
      <div className="chapters">
        {CHAPTERS.map((chapter) => (
          <article key={chapter.year} className="chapter js-reveal">
            <div className="chapter__image-wrap">
              <img
                className="chapter__image"
                src={chapter.image}
                alt={chapter.alt}
                loading="lazy"
              />
            </div>
            <div className="chapter__content">
              <span className="chapter__year">{chapter.year}</span>
              <h3 className="chapter__title">
                {chapter.title} &bull; {chapter.year}
              </h3>
              <p className="chapter__quote">{chapter.quote}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* -----------------------------------------------------------------------------
   Events
   --------------------------------------------------------------------------- */
/* -----------------------------------------------------------------------------
   Events
   --------------------------------------------------------------------------- */
function EventsSection() {
  return (
    <section id="event" className="section container js-reveal">
      <SectionHead large>Event Details</SectionHead>
      <div className="events">
        {EVENTS.map((event, index) => (
          <Fragment key={event.venue}>
            {index > 0 && <div className="events__divider" />}
            <div className="event js-reveal">
              <div className="event__kind-wrap">
                <h3 className="event__kind headline headline--md uppercase">{event.kind}</h3>
                {event.kindSub && (
                  <p className="event__day label-caps uppercase" style={{ marginTop: 4 }}>
                    ({event.kindSub})
                  </p>
                )}
              </div>

              <div className="event__when">
                <p className="event__day label-caps uppercase" style={{ marginBottom: 4 }}>
                  Date &amp; Time
                </p>
                <p className="event__time headline headline--md">{event.time}</p>
                <p className="event__day label-caps uppercase">{event.day}</p>
              </div>

              <div className="event__venue">
                <p className="event__day label-caps uppercase" style={{ marginBottom: 4 }}>
                  Location / Place
                </p>
                <p className="event__venue-name body--md">{event.venue}</p>
                <p className="event__venue-address body--sm">{event.address}</p>
              </div>

              <div className="event__actions">
                <a
                  href={event.mapUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost uppercase"
                >
                  View Location
                </a>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}

/* -----------------------------------------------------------------------------
   Gallery
   --------------------------------------------------------------------------- */
function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_CAROUSEL.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const getSlideIndex = (offset: number) =>
    (currentSlide + offset + GALLERY_CAROUSEL.length) % GALLERY_CAROUSEL.length

  const handleStart = (clientX: number) => {
    setTouchStartX(clientX)
    setTouchEndX(clientX)
    setIsDragging(true)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    setTouchEndX(clientX)
  }

  const handleEnd = () => {
    if (!isDragging || touchStartX === null || touchEndX === null) return
    const distance = touchStartX - touchEndX
    const minSwipeDistance = 40

    if (distance > minSwipeDistance) {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_CAROUSEL.length)
    } else if (distance < -minSwipeDistance) {
      setCurrentSlide((prev) => (prev - 1 + GALLERY_CAROUSEL.length) % GALLERY_CAROUSEL.length)
    }

    setTouchStartX(null)
    setTouchEndX(null)
    setIsDragging(false)
  }

  return (
    <section id="gallery" className="section container js-reveal">
      <SectionHead>Our Moments</SectionHead>

      {/* Carousel with touch & mouse drag swipe */}
      <div className="gallery__carousel">
        <div
          className="gallery__carousel-viewport"
          style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none', touchAction: 'pan-y' }}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
        >
          {/* Left peek */}
          <div
            className="gallery__carousel-side gallery__carousel-side--left"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + GALLERY_CAROUSEL.length) % GALLERY_CAROUSEL.length)}
            style={{ cursor: 'pointer' }}
          >
            <img
              className="gallery__carousel-side-img"
              src={GALLERY_CAROUSEL[getSlideIndex(-1)].photo}
              alt={GALLERY_CAROUSEL[getSlideIndex(-1)].alt}
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* Center main slide */}
          <div className="gallery__carousel-center">
            <img
              className="gallery__carousel-center-img"
              src={GALLERY_CAROUSEL[currentSlide].photo}
              alt={GALLERY_CAROUSEL[currentSlide].alt}
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* Right peek */}
          <div
            className="gallery__carousel-side gallery__carousel-side--right"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % GALLERY_CAROUSEL.length)}
            style={{ cursor: 'pointer' }}
          >
            <img
              className="gallery__carousel-side-img"
              src={GALLERY_CAROUSEL[getSlideIndex(1)].photo}
              alt={GALLERY_CAROUSEL[getSlideIndex(1)].alt}
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>

        <div className="gallery__carousel-dots">
          {GALLERY_CAROUSEL.map((photo, index) => (
            <button
              key={photo.alt}
              type="button"
              className={cx('gallery__carousel-dot', index === currentSlide && 'gallery__carousel-dot--active')}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Random Masonry Grid */}
      <div className="gallery__masonry">
        {GALLERY.map((item, index) => (
          <div
            key={item.tile}
            className={cx('gallery__masonry-item', `gallery__masonry-item--${item.tile}`, 'js-reveal')}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <img className="gallery__masonry-img" src={item.photo} alt={item.alt} loading="lazy" />
            <div className="gallery__shade" />
          </div>
        ))}
      </div>
    </section>
  )
}

/* -----------------------------------------------------------------------------
   Wedding gift & RSVP
   --------------------------------------------------------------------------- */
interface Message {
  id: number
  name: string
  attendance: string
  message: string
  created_at: string
}

function GiftSection() {
  const { name: guestName } = Route.useSearch()
  const [copiedBank, setCopiedBank] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitMsg, setSubmitMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [msgLimit, setMsgLimit] = useState(4)

  const refreshMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('id, name, attendance, message, created_at')
      .order('created_at', { ascending: false })
      .limit(50)
    if (error) {
      console.error('[Messages] Error:', error.code, error.message, error.details)
    } else {
      console.log('[Messages] Loaded:', data?.length ?? 0, 'rows', data)
      setMessages(data ?? [])
    }
  }

  useEffect(() => {
    refreshMessages()
  }, [])

  /* responsive limit */
  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 47rem)')
    const mqTablet = window.matchMedia('(max-width: 80rem)')
    const update = () => {
      if (mqMobile.matches) setMsgLimit(4)
      else if (mqTablet.matches) setMsgLimit(6)
      else setMsgLimit(8)
    }
    update()
    mqMobile.addEventListener('change', update)
    mqTablet.addEventListener('change', update)
    return () => {
      mqMobile.removeEventListener('change', update)
      mqTablet.removeEventListener('change', update)
    }
  }, [])

  const handleCopy = async (number: string, bank: string) => {
    try {
      await navigator.clipboard.writeText(number.replace(/\s/g, ''))
    } catch {
      /* clipboard may be unavailable; still show feedback */
    }
    setCopiedBank(bank)
    window.setTimeout(() => setCopiedBank(null), 1600)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') || '').trim()
    const attendance = String(fd.get('attendance') || 'hadir')
    const message = String(fd.get('message') || '').trim()

    if (!name) return

    setSubmitting(true)
    setSubmitMsg(null)

    const { error } = await supabase.from('messages').insert({ name, attendance, message })

    setSubmitting(false)
    if (error) {
      setSubmitMsg({ type: 'err', text: 'Gagal mengirim. Coba lagi.' })
    } else {
      setSubmitMsg({ type: 'ok', text: 'Terima kasih atas doa dan ucapannya!' })
      form.reset()
      refreshMessages()
    }
  }

  const visibleMessages = messages.slice(0, msgLimit)

  return (
    <>
      {/* Gift + RSVP panel */}
      <section id="rsvp" className="section section--tan-strong js-reveal">
        <div className="container">
          <div className="panel">
            {/* Wedding gift column */}
            <div className="panel__column js-reveal">
              <div className="gift__intro">
                <span className="gift__eyebrow label-caps uppercase">Wedding Gift</span>
                <span className="gift__rule" />
                <h2 className="gift__title">A Token<br />of Love</h2>
                <span className="gift__vline" />
                <p className="gift__desc">
                  Your kindness<br />
                  means the world to us.<br />
                  Thank you for being<br />
                  part of our journey.
                </p>
              </div>

              <div className="gift__accounts">
                {BANK_ACCOUNTS.map((account) => (
                  <div key={account.bank} className="gift__account">
                    <p className="gift__bank label-caps uppercase">{account.bank}</p>
                    <div className="gift__account-detail">
                      <p className="gift__number headline headline--md">{account.number}</p>
                      <p className="gift__holder body--sm">{account.holder}</p>
                    </div>
                    <button
                      type="button"
                      className="gift__copy label-caps uppercase"
                      onClick={() => handleCopy(account.number, account.bank)}
                    >
                      {copiedBank === account.bank ? 'Tersalin ✓' : 'Copy Rekening'}
                    </button>
                  </div>
                ))}

                {/* Physical Gift Address in English */}
                <div className="gift__account" style={{ marginTop: 8 }}>
                  <p className="gift__bank label-caps uppercase">{GIFT_ADDRESS.title}</p>
                  <p className="body--sm" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px', margin: '4px 0' }}>
                    {GIFT_ADDRESS.subtitle}
                  </p>
                  <div className="gift__account-detail">
                    <p className="gift__holder body--md" style={{ color: '#fff', fontWeight: 500 }}>
                      {GIFT_ADDRESS.recipient}
                    </p>
                    <p className="gift__holder body--sm">{GIFT_ADDRESS.address}</p>
                    <p className="gift__holder body--sm">Phone: {GIFT_ADDRESS.phone}</p>
                  </div>
                  <button
                    type="button"
                    className="gift__copy label-caps uppercase"
                    onClick={() =>
                      handleCopy(
                        `${GIFT_ADDRESS.recipient}\n${GIFT_ADDRESS.address}\nPhone: ${GIFT_ADDRESS.phone}`,
                        'ADDRESS',
                      )
                    }
                  >
                    {copiedBank === 'ADDRESS' ? 'Tersalin ✓' : 'Copy Address'}
                  </button>
                </div>
              </div>
            </div>

            {/* RSVP column */}
            <div className="panel__column js-reveal">
              <div className="panel__intro">
                <h2 className="panel__title uppercase">RSVP</h2>
                <p className="body--sm">Kindly confirm your attendance by October 1st, 2026.</p>
              </div>

              <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="field__label label-caps uppercase" htmlFor="rsvp-name">
                    Full Name
                  </label>
                  <input
                    className="field__control body--md"
                    id="rsvp-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    defaultValue={guestName || ''}
                    key={guestName || 'empty'}
                    required
                  />
                </div>

                <div className="field">
                  <label className="field__label label-caps uppercase" htmlFor="rsvp-attendance">
                    Will you attend?
                  </label>
                  <select
                    className="field__control field__control--select body--md"
                    id="rsvp-attendance"
                    name="attendance"
                    required
                    defaultValue="hadir"
                  >
                    <option value="hadir">Yes, gladly</option>
                    <option value="tidak_hadir">Regretfully decline</option>
                  </select>
                </div>

                <div className="field">
                  <label className="field__label label-caps uppercase" htmlFor="rsvp-message">
                    Message for the Couple
                  </label>
                  <textarea
                    className="field__control field__control--area body--md"
                    id="rsvp-message"
                    name="message"
                    rows={3}
                    placeholder="Write your wishes here..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--block uppercase"
                  disabled={submitting}
                  style={{ opacity: submitting ? 0.6 : 1 }}
                >
                  {submitting ? 'Mengirim...' : 'Send Confirmation'}
                </button>
              </form>

              {submitMsg && (
                <p
                  className="body--sm"
                  style={{
                    marginTop: 12,
                    padding: '10px 14px',
                    borderRadius: 6,
                    background: submitMsg.type === 'ok' ? '#e8f5e9' : '#fdecea',
                    color: submitMsg.type === 'ok' ? '#1b5e20' : '#b71c1c',
                  }}
                >
                  {submitMsg.text}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ucapan & Doa — full-width section */}
      {messages.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead>Ucapan & Doa</SectionHead>

            <div className="wishes__grid">
              {visibleMessages.map((msg) => (
                <div key={msg.id} className="wish-card">
                  <p className="wish-card__name">
                    {msg.name}
                    {msg.attendance === 'tidak_hadir' && (
                      <span className="wish-card__badge wish-card__badge--absent">
                        tidak hadir
                      </span>
                    )}
                  </p>
                  {msg.message && (
                    <p className="wish-card__message">&ldquo;{msg.message}&rdquo;</p>
                  )}
                  <span className="wish-card__time">
                    {new Date(msg.created_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              ))}
            </div>

            {messages.length > msgLimit && (
              <div style={{ textAlign: 'center', marginTop: 40 }}>
                <a href="/messages" className="btn btn--ghost uppercase">
                  Lihat Semua Pesan ({messages.length})
                </a>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}

/* -----------------------------------------------------------------------------
   Closing
   --------------------------------------------------------------------------- */
function StillSection() {
  return (
    <section className="still js-reveal">
      <div className="still__media" style={{ backgroundImage: `url('${CLOSING_IMAGE}')` }} />
      <div className="still__scrim" />
      <div className="still__content">
        <p className="still__word">STILL</p>
        <div className="still__line" />
        <p className="still__word">HERE</p>
        <div className="still__line" />
        <p className="still__word">TOGETHER</p>
        <div className="still__line" />
      </div>
    </section>
  )
}

function ClosingSection() {
  return (
    <section className="closing js-reveal">
      <div className="closing__content">
        <p className="closing__intro">
          We can't wait to start<br />this beautiful journey together.
        </p>
        <h2 className="closing__title">
          <span className="closing__title-script">Thank</span>
          <span className="closing__title-serif">YOU</span>
        </h2>
        <p className="closing__subtitle">SEE YOU<br />AT THE AISLE</p>
        <div className="closing__divider" />
        <p className="closing__note">
          For being part of our special day<br />
          and for your kind wishes, love, and<br />
          prayers.
        </p>
        <p className="closing__names">
          {COUPLE.brideName} <span className="closing__names-amp">&amp;</span> {COUPLE.groomName}
        </p>
      </div>
    </section>
  )
}

/* -----------------------------------------------------------------------------
   Page
   --------------------------------------------------------------------------- */
function InvitationPage() {
  useRevealOnScroll()

  return (
    <main>
      {/* Fixed video background */}
      <div className="fixed-bg">
        <iframe
          className="fixed-bg__video"
          title="Video latar belakang undangan"
          src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${HERO_VIDEO_ID}&playsinline=1&rel=0&modestbranding=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <div className="fixed-bg__overlay" />
      </div>

      <HeroSection />
      <CoupleSection />
      <div className="verse-countdown js-reveal">
        <VerseSection />
        <CountdownSection />
      </div>
      <ChaptersSection />
      <EventsSection />
      <GallerySection />
      <GiftSection />
      <StillSection />
      <ClosingSection />
    </main>
  )
}
