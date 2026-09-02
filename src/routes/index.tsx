import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: LandingPage })

const WEDDING = {
  groomName: 'Fedrik',
  brideName: 'Chaca',
  date: '10 OCTOBER 2026',
  recipient: 'Bapak/Ibu Tamu',
  bgImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAeh2RjuzzvJ2fTRprJ0os5DcRmf9OSmT14ofJmQ3ElbwVXggWxf1DEO67JT3DjPYhWOEA6zJXKMULVgdIt8kZ2Fp8yQUfreBZJh7cS-gn8IKKwIEUh_CWjDeHF_JvoMmxQUeSbEsiC4Q7U42QOoryfd1dC_M7IDgNLq6E9Od9gtZKytVg-AO-BE7jTvKEySSPY5d9p0I73M9SZ-rn15blgGD_kgIx5rV7wrzVatqBU79Px8L-yemX5lQ',
}

function LandingPage() {
  const navigate = useNavigate()

  return (
    <main className="cover">
      {/* Background media stack */}
      <div className="cover__media">
        <div
          className="cover__media-img"
          style={{ backgroundImage: `url('${WEDDING.bgImage}')` }}
          role="img"
          aria-label="Pasangan pengantin Chaca dan Fedrik"
        />
        <div className="cover__overlay" />
        <div className="cover__media-fade" />
      </div>

      {/* Top: THE WEDDING OF */}
      <header className="cover__top cover__content fade-in-up">
        <span className="cover__eyebrow label-caps text-muted">THE WEDDING OF</span>
        <div className="cover__divider">
          <span className="cover__divider-line" />
          <span className="cover__divider-icon material-symbols-outlined">replace_video</span>
          <span className="cover__divider-line" />
        </div>
      </header>

      {/* Middle: Couple names + date */}
      <section className="cover__middle cover__content">
        <h1 className="cover__names display-hero text-primary">
          {WEDDING.brideName} <span className="display-hero__amp">&amp;</span>{' '}
          {WEDDING.groomName}
        </h1>
        <p className="cover__date body--lg text-muted fade-in-up delay-300">{WEDDING.date}</p>
      </section>

      {/* Bottom: Guest greeting + CTA */}
      <footer className="cover__bottom cover__content">
        <div className="cover__guest fade-in-up delay-500">
          <span className="cover__guest-label body--sm text-muted">Kepada Yth.</span>
          <span className="cover__guest-name headline headline--md text-primary">
            {WEDDING.recipient}
          </span>
          <span className="cover__guest-place body--sm text-muted">di tempat</span>
        </div>

        <button
          type="button"
          className="cover__cta btn btn--primary fade-in-up delay-700"
          onClick={() => navigate({ to: '/invitation' })}
        >
          <span>BUKA UNDANGAN</span>
          <span className="cover__cta-icon material-symbols-outlined">expand_more</span>
        </button>

        <p className="cover__hint label-caps animate-bounce-subtle">Tap untuk membuka undangan</p>
      </footer>
    </main>
  )
}
