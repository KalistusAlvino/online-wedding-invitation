import { Fragment, useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { useRevealOnScroll } from '../lib/useRevealOnScroll'
import { supabase } from '../lib/supabase'
import {
  BANK_ACCOUNTS,
  CLOSING_IMAGE,
  COUPLE,
  COUPLE_MEMBERS,
  EVENTS,
  GALLERY,
  HERO_VIDEO_ID,
} from '../data/wedding'

export const Route = createFileRoute('/invitation')({ component: InvitationPage })

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
      <div className="hero__media hero__media--video">
        <iframe
          className="hero__video"
          title="Video latar belakang undangan"
          src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${HERO_VIDEO_ID}&playsinline=1&rel=0&modestbranding=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow label-caps uppercase">The Wedding of</p>
        <h1 className="hero__title display-hero">
          {COUPLE.brideName} <span className="display-hero__amp">&amp;</span> {COUPLE.groomName}
        </h1>
        <div className="hero__meta">
          <span className="hero__meta-line" />
          <span className="hero__meta-date headline headline--md">{COUPLE.dateShort}</span>
          <span className="hero__meta-line" />
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
function CoupleSection() {
  return (
    <section className="section section--tan">
      <div className="container">
        <SectionHead large>The Couple</SectionHead>
        <div className="couple__grid">
          {COUPLE_MEMBERS.map((member) => (
            <article
              key={member.name}
              className={cx('couple js-reveal', member.offset && 'couple--second')}
            >
              <div className="couple__frame">
                <img className="couple__photo" src={member.photo} alt={member.alt} loading="lazy" />
              </div>
              <div className="couple__details">
                <h3 className="couple__name headline headline--lg">{member.name}</h3>
                <p className="couple__role label-caps">{member.role}</p>
              </div>
              <a
                className="couple__social label-caps"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="couple__social-icon" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.058 1.266.069 1.646.069 4.849 0 3.205-.012 3.584-.069 4.849-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.058-1.646.069-4.849.069-3.204 0-3.584-.012-4.849-.069-1.17-.054-1.805-.249-2.227-.413a3.736 3.736 0 0 1-1.381-.896 3.642 3.642 0 0 1-.896-1.381c-.164-.422-.36-1.057-.413-2.227-.058-1.266-.069-1.646-.069-4.849 0-3.204.012-3.584.069-4.849.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382a3.642 3.642 0 0 1 1.381-.896c.422-.164 1.057-.36 2.227-.413 1.266-.058 1.646-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.87 5.87 0 0 0-2.126 1.384A5.855 5.855 0 0 0 .63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.15.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.764.297 1.637.5 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.15-.261 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.297-.764.5-1.637.558-2.913.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.261-2.15-.558-2.913a5.87 5.87 0 0 0-1.384-2.126A5.855 5.855 0 0 0 19.86.63c-.764-.297-1.637-.5-2.913-.558C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
                {member.handle}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -----------------------------------------------------------------------------
   Events
   --------------------------------------------------------------------------- */
function EventsSection() {
  return (
    <section id="event" className="section container">
      <SectionHead large>Event Details</SectionHead>
      <div className="events">
        {EVENTS.map((event, index) => (
          <Fragment key={event.venue}>
            {index > 0 && <div className="events__divider" />}
            <div className="event js-reveal">
              <div className="event__kind-wrap">
                <h3 className="event__kind headline headline--md uppercase">{event.kind}</h3>
                <div className="event__when">
                  <p className="event__time headline headline--md">{event.time}</p>
                  <p className="event__day label-caps uppercase">{event.day}</p>
                </div>
              </div>
              <div className="event__venue">
                <p className="event__venue-name body--md">{event.venue}</p>
                <p className="event__venue-address body--sm">{event.address}</p>
              </div>
              <div className="event__actions">
                <button type="button" className="btn btn--ghost">
                  Lihat Lokasi
                </button>
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
  return (
    <section id="gallery" className="section container">
      <SectionHead>Our Moments</SectionHead>
      <div className="gallery__grid">
        {GALLERY.map((item, index) => (
          <div
            key={item.tile}
            className={cx('gallery__item', `gallery__item--${item.tile}`, 'js-reveal')}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <img className="gallery__img" src={item.photo} alt={item.alt} loading="lazy" />
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
  sapaan: string
  name: string
  attendance: string
  message: string
  created_at: string
}

function GiftSection() {
  const [copiedBank, setCopiedBank] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitMsg, setSubmitMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [msgLimit, setMsgLimit] = useState(4)

  const refreshMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('id, sapaan, name, attendance, message, created_at')
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
    const sapaan = String(fd.get('sapaan') || 'Bapak/Ibu')
    const name = String(fd.get('name') || '').trim()
    const attendance = String(fd.get('attendance') || 'hadir')
    const message = String(fd.get('message') || '').trim()

    if (!name) return

    setSubmitting(true)
    setSubmitMsg(null)

    const { error } = await supabase.from('messages').insert({ sapaan, name, attendance, message })

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
      <section id="rsvp" className="section section--tan-strong">
        <div className="container">
          <div className="panel">
            {/* Wedding gift column */}
            <div className="panel__column js-reveal">
              <div className="gift__intro">
                <h2 className="gift__title uppercase">Wedding Gift</h2>
                <p className="gift__desc body--sm">
                  Your presence is the greatest gift. However, if you wish to honor us with a gift,
                  you may do so through the details below.
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
                  <label className="field__label label-caps uppercase" htmlFor="rsvp-sapaan">
                    Sapaan
                  </label>
                  <select
                    className="field__control field__control--select body--md"
                    id="rsvp-sapaan"
                    name="sapaan"
                    required
                    defaultValue="Bapak/Ibu"
                  >
                    <option value="Bapak/Ibu">Bapak/Ibu</option>
                    <option value="Bapak">Bapak</option>
                    <option value="Ibu">Ibu</option>
                    <option value="Saudara">Saudara</option>
                    <option value="Saudari">Saudari</option>
                    <option value="Keluarga">Keluarga</option>
                  </select>
                </div>

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
                    {msg.sapaan} {msg.name}
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
function ClosingSection() {
  return (
    <section className="closing">
      <div className="closing__media" style={{ backgroundImage: `url('${CLOSING_IMAGE}')` }} />
      <div className="closing__scrim" />
      <div className="closing__content">
        <p className="closing__eyebrow label-caps uppercase">Thank You</p>
        <h2 className="closing__title display-hero">
          {COUPLE.brideName} <span className="display-hero__amp">&amp;</span> {COUPLE.groomName}
        </h2>
        <p className="closing__note headline headline--lg">With Love.</p>
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
      <HeroSection />
      <VerseSection />
      <CoupleSection />
      <EventsSection />
      <GallerySection />
      <GiftSection />
      <ClosingSection />
    </main>
  )
}
