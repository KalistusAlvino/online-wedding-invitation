import { Fragment, useState } from 'react'
import type { FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { useRevealOnScroll } from '../lib/useRevealOnScroll'
import {
  BANK_ACCOUNTS,
  CLOSING_IMAGE,
  COUPLE,
  COUPLE_MEMBERS,
  EVENTS,
  GALLERY,
  HERO_IMAGE,
} from '../data/wedding'

export const Route = createFileRoute('/invitation')({ component: InvitationPage })

/* Small helper to join class names conditionally */
function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

/* Centered serif section title with a divider rule */
function SectionHead({ children, large = false }: { children: string; large?: boolean }) {
  return (
    <div className={cx('section-head', large && 'section-head--large')}>
      <h2 className="section-head__title">{children}</h2>
      <div className="section-head__rule" />
    </div>
  )
}

/* -----------------------------------------------------------------------------
   Hero
   --------------------------------------------------------------------------- */
function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero__media" style={{ backgroundImage: `url('${HERO_IMAGE}')` }} />
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
    <section className="section container verse">
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
                <span className="material-symbols-outlined">link</span>
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
function GiftSection() {
  const [copiedBank, setCopiedBank] = useState<string | null>(null)

  const handleCopy = async (number: string, bank: string) => {
    try {
      await navigator.clipboard.writeText(number.replace(/\s/g, ''))
    } catch {
      /* clipboard may be unavailable; still show feedback */
    }
    setCopiedBank(bank)
    window.setTimeout(() => setCopiedBank(null), 1600)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.alert('Terima kasih atas konfirmasinya.')
    event.currentTarget.reset()
  }

  return (
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
                  defaultValue=""
                >
                  <option value="" disabled>
                    Please select...
                  </option>
                  <option value="yes">Yes, gladly</option>
                  <option value="no">Regretfully decline</option>
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

              <button type="submit" className="btn btn--primary btn--block uppercase">
                Send Confirmation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
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
