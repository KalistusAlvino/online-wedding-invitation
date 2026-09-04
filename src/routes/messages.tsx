import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { supabase } from '../lib/supabase'

export const Route = createFileRoute('/messages')({ component: MessagesPage })

interface Message {
  id: number
  sapaan: string
  name: string
  attendance: string
  message: string
  created_at: string
}

function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('messages')
      .select('id, sapaan, name, attendance, message, created_at')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setMessages(data)
        setLoading(false)
      })
  }, [])

  const hadir = messages.filter((m) => m.attendance === 'hadir')
  const tidakHadir = messages.filter((m) => m.attendance !== 'hadir')

  return (
    <main className="messages-page">
      <div className="messages-page__inner">
        {/* Header */}
        <header className="messages-page__header">
          <a href="/invitation" className="messages-page__back">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              arrow_back
            </span>
            Kembali ke Undangan
          </a>

          <div className="messages-page__title-wrap">
            <h1 className="messages-page__title">Ucapan & Doa</h1>
            <span className="messages-page__botanical" aria-hidden="true">
              <svg viewBox="0 0 120 34" fill="none">
                <path d="M4 30 C 38 27, 84 17, 114 5" />
                <circle cx="115" cy="4.5" r="1.6" fill="currentColor" />
              </svg>
            </span>
            <p className="messages-page__subtitle">
              {messages.length} ucapan dari tamu undangan
            </p>
          </div>
        </header>

        {loading ? (
          <div className="messages-page__empty">Memuat data...</div>
        ) : messages.length === 0 ? (
          <div className="messages-page__empty">Belum ada ucapan.</div>
        ) : (
          <>
            {/* Stats */}
            <div className="messages-page__stats">
              <div className="messages-page__stat">
                <span className="messages-page__stat-num">{messages.length}</span>
                <span className="messages-page__stat-label">Total</span>
              </div>
              <div className="messages-page__stat messages-page__stat--hadir">
                <span className="messages-page__stat-num">{hadir.length}</span>
                <span className="messages-page__stat-label">Hadir</span>
              </div>
              <div className="messages-page__stat messages-page__stat--absent">
                <span className="messages-page__stat-num">{tidakHadir.length}</span>
                <span className="messages-page__stat-label">Tidak Hadir</span>
              </div>
            </div>

            {/* Messages */}
            <div className="messages-page__list">
              {messages.map((msg) => (
                <article key={msg.id} className="messages-page__item">
                  <div className="messages-page__item-head">
                    <span className="messages-page__item-name">
                      {msg.sapaan} {msg.name}
                    </span>
                    {msg.attendance === 'hadir' ? (
                      <span className="messages-page__badge messages-page__badge--hadir">
                        Hadir
                      </span>
                    ) : (
                      <span className="messages-page__badge messages-page__badge--absent">
                        Tidak Hadir
                      </span>
                    )}
                  </div>
                  {msg.message && (
                    <p className="messages-page__item-msg">&ldquo;{msg.message}&rdquo;</p>
                  )}
                  <time className="messages-page__item-date">
                    {new Date(msg.created_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </time>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
