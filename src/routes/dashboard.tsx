import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import * as XLSX from 'xlsx'

import { supabase } from '../lib/supabase'

export const Route = createFileRoute('/dashboard')({ component: DashboardPage })

interface Guest {
  id: number
  sapaan: string
  name: string
}

interface Toast {
  id: number
  type: 'success' | 'error'
  message: string
}

const PLACEHOLDER_HOST = 'https://your-domain.com'
let toastId = 0

function DashboardPage() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)
  const [toInput, setToInput] = useState('Bapak/Ibu')
  const [nameInput, setNameInput] = useState('')
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)
  const [addLoading, setAddLoading] = useState(false)
  const [importLoading, setImportLoading] = useState(false)
  const [clearLoading, setClearLoading] = useState(false)
  const [toasts, setToasts] = useState<Toast[]>([])
  const fileRef = useRef<HTMLInputElement>(null)

  const showToast = useCallback((type: Toast['type'], message: string) => {
    const id = ++toastId
    setToasts((prev) => [...prev, { id, type, message }])
    window.setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500)
  }, [])

  /* ── Load guests from Supabase ── */
  useEffect(() => {
    supabase
      .from('guest')
      .select('id, sapaan, name')
      .order('id', { ascending: true })
      .then(({ data, error }) => {
        if (!error && data) setGuests(data)
        setLoading(false)
      })
  }, [])

  /* ── Add single guest ── */
  const addGuest = useCallback(async () => {
    const name = nameInput.trim()
    if (!name) return
    setAddLoading(true)
    const sapaan = toInput.trim() || 'Bapak/Ibu'
    const { data, error } = await supabase
      .from('guest')
      .insert({ sapaan, name })
      .select('id, sapaan, name')
      .single()
    setAddLoading(false)
    if (error) {
      showToast('error', `Gagal menambahkan: ${error.message}`)
    } else if (data) {
      setGuests((prev) => [...prev, data])
      setNameInput('')
      showToast('success', `${sapaan} ${name} berhasil ditambahkan`)
    }
  }, [nameInput, toInput, showToast])

  /* ── Remove single guest ── */
  const removeGuest = useCallback(async (id: number) => {
    const { error } = await supabase.from('guest').delete().eq('id', id)
    if (error) {
      showToast('error', `Gagal menghapus: ${error.message}`)
    } else {
      setGuests((prev) => prev.filter((g) => g.id !== id))
      showToast('success', 'Tamu berhasil dihapus')
    }
  }, [showToast])

  /* ── Clear all guests ── */
  const clearAll = useCallback(async () => {
    if (!window.confirm('Hapus semua data tamu?')) return
    setClearLoading(true)
    const { error } = await supabase.from('guest').delete().neq('id', 0)
    setClearLoading(false)
    if (error) {
      showToast('error', `Gagal menghapus semua: ${error.message}`)
    } else {
      setGuests([])
      showToast('success', 'Semua data tamu berhasil dihapus')
    }
  }, [showToast])

  /* ── Import from Excel (batch insert) ── */
  const handleExcel = useCallback(
    (file: File) => {
      setImportLoading(true)
      const reader = new FileReader()
      reader.onload = async (e) => {
        const wb = XLSX.read(e.target?.result, { type: 'array' })
        const ws = wb.Sheets[wb.SheetNames[0]]
        const rows = XLSX.utils.sheet_to_json<Record<string, string>>(ws)

        const parsed: { sapaan: string; name: string }[] = []
        for (const row of rows) {
          const nameVal = row['Nama'] || row['nama'] || row['Name'] || row['name'] || ''
          const toVal =
            row['Sapaan'] || row['sapaan'] || row['To'] || row['to'] || row['Title'] || row['title'] || ''
          const name = String(nameVal).trim()
          if (!name) continue
          parsed.push({ sapaan: String(toVal).trim() || 'Bapak/Ibu', name })
        }

        if (parsed.length === 0) {
          setImportLoading(false)
          showToast('error', 'File terbaca, tapi tidak ada data nama ditemukan.')
          return
        }

        const { data, error } = await supabase
          .from('guest')
          .insert(parsed)
          .select('id, sapaan, name')

        setImportLoading(false)
        if (error) {
          showToast('error', `Gagal import: ${error.message}`)
        } else if (data) {
          setGuests((prev) => [...prev, ...data])
          showToast('success', `Berhasil import ${data.length} tamu dari "${file.name}"`)
        }
      }
      reader.readAsArrayBuffer(file)
    },
    [showToast],
  )

  const buildLink = useCallback((guest: Guest) => {
    const base = window.location.origin
    const params = new URLSearchParams({ to: guest.sapaan, name: guest.name })
    return `${base}/?${params.toString()}`
  }, [])

  const copyLink = useCallback(
    async (guest: Guest) => {
      try {
        await navigator.clipboard.writeText(buildLink(guest))
      } catch {
        /* ignore */
      }
      setCopiedIdx(guest.id)
      window.setTimeout(() => setCopiedIdx(null), 1500)
    },
    [buildLink],
  )

  const copyAllLinks = useCallback(async () => {
    const all = guests.map((g) => `${g.sapaan} ${g.name} → ${buildLink(g)}`).join('\n')
    try {
      await navigator.clipboard.writeText(all)
    } catch {
      /* ignore */
    }
    setCopiedIdx(-1)
    window.setTimeout(() => setCopiedIdx(null), 1500)
  }, [guests, buildLink])

  const downloadTemplate = useCallback(() => {
    const header = 'Sapaan,Nama\n'
    const rows = [
      'Bapak,Ahmad Susanto',
      'Ibu,Dewi Lestari',
      'Keluarga,Keluarga Besar Bpk. Suharto',
      'Saudara,Rizky Pratama',
      'Saudari,Ayu Maharani',
      'Dr.,Siti Aminah',
      ',Budi Santoso',
    ].join('\n')
    const csv = header + rows
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'template-undangan.csv'
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) return
      handleExcel(file)
      e.target.value = ''
    },
    [handleExcel],
  )

  const base = typeof window !== 'undefined' ? window.location.origin : PLACEHOLDER_HOST

  const stats = useMemo(() => {
    const titles = guests.reduce<Record<string, number>>((acc, g) => {
      acc[g.sapaan] = (acc[g.sapaan] || 0) + 1
      return acc
    }, {})
    return { total: guests.length, titles }
  }, [guests])

  return (
    <div style={S.page}>
      <style>{`@keyframes toastIn { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }`}</style>
      <div style={S.card}>
        <h1 style={S.title}>Dashboard Undangan</h1>
        <p style={S.subtitle}>Upload Excel atau input manual untuk membuat link undangan personal.</p>

        {/* --- Manual Input --- */}
        <div style={S.section}>
          <h2 style={S.sectionTitle}>Input Manual</h2>
          <div style={S.formRow}>
            <div style={S.fieldSmall}>
              <label style={S.label}>Sapaan</label>
              <select
                style={S.select}
                value={toInput}
                onChange={(e) => setToInput(e.target.value)}
              >
                <option value="Bapak/Ibu">Bapak/Ibu</option>
                <option value="Bapak">Bapak</option>
                <option value="Ibu">Ibu</option>
                <option value="Saudara">Saudara</option>
                <option value="Saudari">Saudari</option>
                <option value="Keluarga">Keluarga</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
              </select>
            </div>
            <div style={S.fieldLarge}>
              <label style={S.label}>Nama Lengkap</label>
              <input
                style={S.input}
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addGuest()}
                placeholder="Contoh: Ahmad Susanto"
              />
            </div>
            <button
              type="button"
              style={{ ...S.btnPrimary, opacity: addLoading ? 0.6 : 1 }}
              onClick={addGuest}
              disabled={addLoading}
            >
              {addLoading ? 'Menambahkan...' : 'Tambah'}
            </button>
          </div>
        </div>

        {/* --- Excel Upload --- */}
        <div style={S.section}>
          <h2 style={S.sectionTitle}>Import Excel</h2>

          {/* Format guide */}
          <div style={S.guide}>
            <p style={S.guideTitle}>Format kolom yang dibutuhkan:</p>
            <div style={S.guideTableWrap}>
              <table style={S.guideTable}>
                <thead>
                  <tr>
                    <th style={S.guideTh}>Kolom</th>
                    <th style={S.guideTh}>Wajib?</th>
                    <th style={S.guideTh}>Keterangan</th>
                    <th style={S.guideTh}>Contoh Isi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={S.guideTdName}>Sapaan</td>
                    <td style={S.guideTd}>Opsional</td>
                    <td style={S.guideTd}>Gelar atau sapaan. Default: &quot;Bapak/Ibu&quot;</td>
                    <td style={S.guideTdCode}>Bapak, Ibu, Keluarga, Dr.</td>
                  </tr>
                  <tr>
                    <td style={S.guideTdName}>Nama</td>
                    <td style={{ ...S.guideTd, fontWeight: 600, color: '#b44' }}>Wajib</td>
                    <td style={S.guideTd}>Nama lengkap tamu undangan</td>
                    <td style={S.guideTdCode}>Ahmad Susanto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ ...S.guideTitle, marginTop: 16 }}>Contoh isi Excel:</p>
            <div style={S.guideTableWrap}>
              <table style={S.guideTable}>
                <thead>
                  <tr>
                    <th style={S.guideTh}>Sapaan</th>
                    <th style={S.guideTh}>Nama</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={S.guideTd}>Bapak</td><td style={S.guideTdCode}>Ahmad Susanto</td></tr>
                  <tr><td style={S.guideTd}>Ibu</td><td style={S.guideTdCode}>Dewi Lestari</td></tr>
                  <tr><td style={S.guideTd}>Keluarga</td><td style={S.guideTdCode}>Keluarga Besar Bpk. Suharto</td></tr>
                  <tr><td style={S.guideTd}>Saudara</td><td style={S.guideTdCode}>Rizky Pratama</td></tr>
                  <tr><td style={S.guideTd}>Dr.</td><td style={S.guideTdCode}>Siti Aminah</td></tr>
                  <tr><td style={S.guideTd}></td><td style={S.guideTdCode}>Budi Santoso (otomatis &quot;Bapak/Ibu&quot;)</td></tr>
                </tbody>
              </table>
            </div>
            <p style={S.guideNote}>
              Jika kolom &quot;Sapaan&quot; kosong, otomatis jadi &quot;Bapak/Ibu&quot;.
              Nama kolom harus tepat: <strong>Sapaan</strong> dan <strong>Nama</strong> (huruf besar/kecil tidak masalah).
            </p>
          </div>

          <div style={S.formRow}>
            <input
              ref={fileRef}
              type="file"
              accept=".xlsx,.xls,.csv"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <button
              type="button"
              style={{ ...S.btnOutline, opacity: importLoading ? 0.6 : 1 }}
              onClick={() => fileRef.current?.click()}
              disabled={importLoading}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                {importLoading ? 'hourglass_top' : 'upload_file'}
              </span>
              {importLoading ? 'Mengimport...' : 'Pilih File Excel'}
            </button>
            <button type="button" style={S.btnOutline} onClick={downloadTemplate}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                download
              </span>
              Download Template
            </button>
          </div>
        </div>

        {/* --- Guest List --- */}
        <div style={S.section}>
          <div style={S.listHeader}>
            <h2 style={S.sectionTitle}>Daftar Tamu ({stats.total})</h2>
            <div style={S.listActions}>
              {guests.length > 0 && (
                <>
                  <button type="button" style={S.btnSmall} onClick={copyAllLinks}>
                    {copiedIdx === -1 ? '✓ Tersalin' : 'Copy Semua Link'}
                  </button>
                  <button
                    type="button"
                    style={{ ...S.btnSmallDanger, opacity: clearLoading ? 0.6 : 1 }}
                    onClick={clearAll}
                    disabled={clearLoading}
                  >
                    {clearLoading ? 'Menghapus...' : 'Hapus Semua'}
                  </button>
                </>
              )}
            </div>
          </div>

          {loading ? (
            <p style={S.empty}>Memuat data dari Supabase...</p>
          ) : guests.length === 0 ? (
            <p style={S.empty}>Belum ada data tamu. Tambahkan atau import Excel.</p>
          ) : (
            <div style={S.tableWrap}>
              <table style={S.table}>
                <thead>
                  <tr>
                    <th style={{ ...S.th, width: 40 }}>#</th>
                    <th style={{ ...S.th, width: 130 }}>Sapaan</th>
                    <th style={S.th}>Nama</th>
                    <th style={{ ...S.th, width: 180 }}>Link Undangan</th>
                    <th style={{ ...S.th, width: 80 }}></th>
                  </tr>
                </thead>
                <tbody>
                  {guests.map((guest, idx) => (
                    <tr key={guest.id} style={S.tr}>
                      <td style={S.td}>{idx + 1}</td>
                      <td style={S.td}>{guest.sapaan}</td>
                      <td style={S.tdName}>{guest.name}</td>
                      <td style={S.tdLink}>
                        <span style={S.linkPreview}>{base}/?to=...&amp;name=...</span>
                      </td>
                      <td style={S.tdActions}>
                        <button
                          type="button"
                          style={S.btnCopy}
                          onClick={() => copyLink(guest)}
                        >
                          {copiedIdx === guest.id ? '✓' : '📋'}
                        </button>
                        <button
                          type="button"
                          style={S.btnRemove}
                          onClick={() => removeGuest(guest.id)}
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* --- Stats --- */}
        {guests.length > 0 && (
          <div style={S.section}>
            <h2 style={S.sectionTitle}>Ringkasan</h2>
            <div style={S.stats}>
              <div style={S.statCard}>
                <span style={S.statNum}>{stats.total}</span>
                <span style={S.statLabel}>Total Tamu</span>
              </div>
              {Object.entries(stats.titles).map(([title, count]) => (
                <div key={title} style={S.statCard}>
                  <span style={S.statNum}>{count}</span>
                  <span style={S.statLabel}>{title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Toast notifications ── */}
      <div style={S.toastContainer}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              ...S.toast,
              background: toast.type === 'success' ? '#0f2019' : '#922',
            }}
          >
            <span style={{ fontSize: 16 }}>{toast.type === 'success' ? '✓' : '✕'}</span>
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Inline styles (dashboard-specific) ── */
const S: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100dvh',
    background: '#f4f1ec',
    padding: '32px 16px',
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  },
  card: {
    maxWidth: 960,
    margin: '0 auto',
    background: '#fff',
    borderRadius: 12,
    padding: '40px 32px',
    boxShadow: '0 4px 24px rgba(0,0,0,.06)',
  },
  title: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 32,
    fontWeight: 400,
    color: '#0f2019',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#737874',
    marginBottom: 32,
  },
  section: {
    marginBottom: 32,
    paddingBottom: 24,
    borderBottom: '1px solid #e6e2db',
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 18,
    fontWeight: 600,
    color: '#0f2019',
    marginBottom: 12,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  },
  hint: {
    fontSize: 13,
    color: '#737874',
    marginBottom: 12,
    lineHeight: 1.5,
  },
  formRow: {
    display: 'flex',
    gap: 12,
    alignItems: 'flex-end',
    flexWrap: 'wrap' as const,
  },
  fieldSmall: {
    flex: '0 0 160px',
  },
  fieldLarge: {
    flex: '1 1 240px',
  },
  label: {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: '#0f2019',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #c2c8c3',
    borderRadius: 6,
    fontSize: 14,
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color .2s',
  },
  select: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #c2c8c3',
    borderRadius: 6,
    fontSize: 14,
    fontFamily: 'inherit',
    background: '#fff',
    outline: 'none',
  },
  btnPrimary: {
    padding: '10px 24px',
    background: '#0f2019',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
  },
  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 20px',
    background: 'transparent',
    border: '1px solid #c2c8c3',
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 500,
    color: '#0f2019',
    cursor: 'pointer',
  },
  listHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: 8,
  },
  listActions: {
    display: 'flex',
    gap: 8,
  },
  btnSmall: {
    padding: '6px 14px',
    background: '#0f2019',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
  },
  btnSmallDanger: {
    padding: '6px 14px',
    background: 'transparent',
    color: '#b44',
    border: '1px solid #ecc',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
  },
  empty: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center' as const,
    padding: '32px 0',
  },
  tableWrap: {
    overflowX: 'auto' as const,
    marginTop: 8,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: 14,
  },
  th: {
    textAlign: 'left' as const,
    padding: '10px 12px',
    borderBottom: '2px solid #e6e2db',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: '#737874',
  },
  tr: {},
  td: {
    padding: '10px 12px',
    borderBottom: '1px solid #f0ede8',
    color: '#424844',
  },
  tdName: {
    padding: '10px 12px',
    borderBottom: '1px solid #f0ede8',
    color: '#0f2019',
    fontWeight: 500,
  },
  tdLink: {
    padding: '10px 12px',
    borderBottom: '1px solid #f0ede8',
  },
  linkPreview: {
    fontSize: 11,
    color: '#aaa',
    fontFamily: 'monospace',
  },
  tdActions: {
    padding: '10px 8px',
    borderBottom: '1px solid #f0ede8',
    textAlign: 'center' as const,
    whiteSpace: 'nowrap' as const,
  },
  btnCopy: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: 16,
    padding: '2px 6px',
  },
  btnRemove: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: 14,
    color: '#b44',
    padding: '2px 6px',
  },
  stats: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap' as const,
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '16px 24px',
    background: '#fdf9f2',
    borderRadius: 8,
    minWidth: 100,
  },
  statNum: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 28,
    fontWeight: 600,
    color: '#0f2019',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: '#737874',
    marginTop: 4,
  },
  guide: {
    background: '#fdf9f2',
    border: '1px solid #e6e2db',
    borderRadius: 8,
    padding: '20px 24px',
    marginBottom: 16,
  },
  guideTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: '#0f2019',
    marginBottom: 8,
  },
  guideTableWrap: {
    overflowX: 'auto' as const,
  },
  guideTable: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: 13,
  },
  guideTh: {
    textAlign: 'left' as const,
    padding: '8px 12px',
    borderBottom: '2px solid #e6e2db',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    color: '#737874',
  },
  guideTd: {
    padding: '8px 12px',
    borderBottom: '1px solid #f0ede8',
    color: '#424844',
    verticalAlign: 'top' as const,
  },
  guideTdName: {
    padding: '8px 12px',
    borderBottom: '1px solid #f0ede8',
    color: '#0f2019',
    fontWeight: 600,
    fontFamily: 'monospace',
    verticalAlign: 'top' as const,
  },
  guideTdCode: {
    padding: '8px 12px',
    borderBottom: '1px solid #f0ede8',
    color: '#424844',
    fontFamily: 'monospace',
    fontSize: 12,
    verticalAlign: 'top' as const,
  },
  guideNote: {
    fontSize: 12,
    color: '#737874',
    marginTop: 12,
    lineHeight: 1.5,
  },
  toastContainer: {
    position: 'fixed' as const,
    top: 24,
    right: 24,
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 8,
  },
  toast: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 20px',
    borderRadius: 8,
    color: '#fff',
    fontSize: 14,
    fontWeight: 500,
    boxShadow: '0 8px 24px rgba(0,0,0,.15)',
    animation: 'toastIn .3s ease',
    maxWidth: 400,
  },
}
