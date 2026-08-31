import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({ component: LandingPage })

// ─── Wedding Config ──────────────────────────────────────────────────────────
const WEDDING = {
  groomName: 'Rizky',
  brideName: 'Anisa',
  date: '15 Februari 2025',
  location: 'Sabtu · 15 · 02 · 2025',
}

// ─── Particle count ───────────────────────────────────────────────────────────
const PARTICLE_COUNT = 18

// ─── Component ────────────────────────────────────────────────────────────────
function LandingPage() {
  const navigate = useNavigate()
  const particlesRef = useRef<HTMLDivElement>(null)

  // Generate floating golden dust particles on mount
  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    const particles: HTMLDivElement[] = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const el = document.createElement('div')
      el.className = 'animate-float-particle rounded-full bg-[rgba(255,220,150,0.6)] blur-[0.5px]'

      const size = Math.random() * 4 + 1.5
      Object.assign(el.style, {
        width:             `${size}px`,
        height:            `${size}px`,
        position:          'absolute',
        left:              `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 14 + 10}s`,
        animationDelay:    `${Math.random() * 12}s`,
      })

      container.appendChild(el)
      particles.push(el)
    }

    return () => particles.forEach((p) => p.remove())
  }, [])

  return (
    // ── Root: full-screen, clipped, centered ──────────────────────────────────
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">

      {/* ── Layer 1: Painterly hero image ─────────────────────────────────── */}
      <img
        src="/wedding_hero_bg.jpg"
        alt="Ilustrasi pernikahan bergaya lukisan minyak — pasangan di tepi pantai saat sunset"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* ── Layer 2: Gradient vignette overlay ────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(10,22,40,0.25)  0%,
            rgba(10,22,40,0.00) 30%,
            rgba(10,22,40,0.00) 55%,
            rgba(10,22,40,0.55) 80%,
            rgba(10,22,40,0.88) 100%
          )`,
        }}
      />

      {/* ── Layer 3: SVG noise / painterly texture ────────────────────────── */}
      <div className="paint-texture absolute inset-0 opacity-40" />

      {/* ── Layer 4: Floating particles container ─────────────────────────── */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* ── Layer 5: Hero text — upper center ─────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 w-full"
        style={{ marginTop: '-15vh' }}
      >
        {/* "The Wedding of" label */}
        <p
          className="
            animate-fade-up animate-delay-300
            font-[family-name:var(--font-sans)] font-light
            text-[clamp(10px,1.8vw,15px)] tracking-[0.45em] uppercase
            text-[rgba(255,240,200,0.85)] mb-4
          "
        >
          The Wedding of
        </p>

        {/* Couple names */}
        <h1
          className="
            animate-fade-up animate-delay-550
            font-[family-name:var(--font-script)]
            text-[clamp(56px,13vw,130px)] leading-none
            text-white
          "
          style={{
            textShadow: '0 0 60px rgba(255,210,130,0.5), 0 2px 30px rgba(0,0,0,0.4)',
          }}
        >
          {WEDDING.groomName}
          <span className="text-[0.65em] text-[rgba(255,220,150,0.9)]"> &amp; </span>
          {WEDDING.brideName}
        </h1>

        {/* Date row */}
        <div className="animate-fade-up animate-delay-800 flex items-center gap-4 mt-5">
          <span className="w-12 h-px bg-[rgba(255,220,150,0.5)]" />
          <span
            className="
              font-[family-name:var(--font-serif)] font-light italic
              text-[clamp(14px,2.5vw,20px)] tracking-[0.2em]
              text-[rgba(255,235,180,0.95)]
            "
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}
          >
            {WEDDING.date}
          </span>
          <span className="w-12 h-px bg-[rgba(255,220,150,0.5)]" />
        </div>
      </div>

      {/* ── Layer 6: CTA — pinned to bottom ───────────────────────────────── */}
      <div className="animate-fade-up animate-delay-1200 absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">

        {/* Open invitation button */}
        <button
          id="btn-open-invitation"
          aria-label={`Buka undangan pernikahan ${WEDDING.groomName} dan ${WEDDING.brideName}`}
          onClick={() => navigate({ to: '/invitation' })}
          className="
            group relative inline-flex items-center gap-2 overflow-hidden
            px-10 py-3.5
            border border-[rgba(255,220,150,0.7)]
            bg-[rgba(255,255,255,0.04)] backdrop-blur-sm
            font-[family-name:var(--font-sans)] font-normal
            text-[clamp(11px,1.6vw,14px)] tracking-[0.35em] uppercase
            text-[rgba(255,235,180,0.95)]
            transition-all duration-300
            hover:border-[rgba(255,220,150,1)]
            hover:text-white
            hover:-translate-y-0.5
            hover:shadow-[0_8px_30px_rgba(255,180,50,0.2)]
            cursor-pointer
          "
        >
          {/* Shimmer fill on hover */}
          <span
            className="
              absolute inset-0 opacity-0
              bg-gradient-to-br from-[rgba(255,220,150,0.15)] to-[rgba(255,255,255,0.05)]
              transition-opacity duration-300
              group-hover:opacity-100
            "
          />
          <span className="relative">Buka Undangan</span>
        </button>

        {/* Scroll chevron */}
        <div aria-hidden="true" className="flex flex-col items-center gap-1 mt-1">
          <span
            className="
              font-[family-name:var(--font-sans)]
              text-[10px] tracking-[0.3em] uppercase
              text-[rgba(255,220,150,0.5)]
            "
          >
            scroll
          </span>
          <span
            className="
              animate-bounce-arrow
              block w-[18px] h-[18px]
              border-r border-b border-[rgba(255,220,150,0.6)]
              rotate-45
            "
          />
        </div>
      </div>
    </div>
  )
}
