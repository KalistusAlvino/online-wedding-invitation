import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/invitation')({ component: InvitationPage })

function InvitationPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center font-[family-name:var(--font-serif)]">
      <div className="text-center">
        <p
          className="
            font-[family-name:var(--font-sans)] text-sm
            tracking-[0.4em] uppercase
            text-[rgba(255,235,180,0.45)] mb-4
          "
        >
          Halaman Undangan
        </p>

        <p
          className="
            font-[family-name:var(--font-script)]
            text-[rgba(255,235,180,0.9)]
            text-4xl mb-8
          "
        >
          Segera hadir...
        </p>

        <Link
          to="/"
          className="
            font-[family-name:var(--font-sans)] text-xs
            tracking-[0.3em] uppercase
            text-[rgba(255,220,150,0.65)]
            border-b border-[rgba(255,220,150,0.3)] pb-0.5
            no-underline
            hover:text-[rgba(255,220,150,1)]
            hover:border-[rgba(255,220,150,0.7)]
            transition-colors duration-200
          "
        >
          ← Kembali
        </Link>
      </div>
    </div>
  )
}
