'use client'
import { useEffect, useState } from 'react'

const API_BASE = 'https://www.onlinekonstelace.cz/api/vycvik-reference'

type FormState = 'form' | 'loading' | 'error' | 'success'

type Review = {
  jmeno: string
  hodnoceni: number
  text: string
  created_at: string
}

function Stars({ value, size = 18 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} z 5 hvězdiček`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24"
          fill={i <= value ? '#fbbf24' : 'none'}
          stroke={i <= value ? '#fbbf24' : '#cbd5e1'}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function StarPicker({ value, onChange, disabled }: { value: number; onChange: (v: number) => void; disabled?: boolean }) {
  const [hover, setHover] = useState(0)
  const active = hover || value
  return (
    <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          disabled={disabled}
          onClick={() => onChange(i)}
          onMouseEnter={() => setHover(i)}
          aria-label={`${i} ${i === 1 ? 'hvězdička' : i < 5 ? 'hvězdičky' : 'hvězdiček'}`}
          className="p-0.5 cursor-pointer disabled:cursor-not-allowed transition-transform hover:scale-110"
        >
          <svg width="34" height="34" viewBox="0 0 24 24"
            fill={i <= active ? '#fbbf24' : 'none'}
            stroke={i <= active ? '#fbbf24' : '#cbd5e1'}
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      ))}
    </div>
  )
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso))
  } catch {
    return ''
  }
}

function initials(name: string) {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? '').join('')
}

export default function Reference() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [average, setAverage] = useState(0)
  const [count, setCount] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [state, setState] = useState<FormState>('form')
  const [errorMsg, setErrorMsg] = useState('')
  const [jmeno, setJmeno] = useState('')
  const [hodnoceni, setHodnoceni] = useState(0)
  const [text, setText] = useState('')

  const loadReviews = async () => {
    try {
      const res = await fetch(API_BASE, { cache: 'no-store' })
      const data = await res.json()
      setReviews(data.reviews ?? [])
      setAverage(data.average ?? 0)
      setCount(data.count ?? 0)
    } catch {
      // tichý fallback – stránka funguje i bez výpisu
    } finally {
      setLoaded(true)
    }
  }

  useEffect(() => {
    loadReviews()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!jmeno.trim()) { setErrorMsg('Vyplňte prosím jméno.'); setState('error'); return }
    if (hodnoceni < 1) { setErrorMsg('Vyberte počet hvězdiček.'); setState('error'); return }
    if (!text.trim()) { setErrorMsg('Napište prosím text reference.'); setState('error'); return }

    setState('loading')
    try {
      const res = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jmeno, hodnoceni, text }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setErrorMsg(data.error ?? 'Chyba při odesílání.')
        setState('error')
      } else {
        setState('success')
      }
    } catch {
      setErrorMsg('Nepodařilo se odeslat. Zkuste to prosím znovu.')
      setState('error')
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 text-base focus:outline-none focus:ring-2 focus:ring-[#024ca2]/30 focus:border-[#024ca2] transition-colors placeholder:text-zinc-400'

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Hlavička s průměrem */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-dark dark:text-white">
            Reference absolventů{' '}
            <span className="instrument-font italic font-normal dark:text-white/70">výcviku</span>
          </h1>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            Prošli jste celým výcvikem konstelací? Podělte se o svou zkušenost s ostatními.
          </p>
          {count > 0 && (
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="text-2xl font-bold text-dark dark:text-white">{average.toFixed(1)}</span>
              <Stars value={Math.round(average)} size={22} />
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                ({count} {count === 1 ? 'reference' : count < 5 ? 'reference' : 'referencí'})
              </span>
            </div>
          )}
        </div>

        {/* Formulář */}
        <div className="max-w-2xl mx-auto mb-16">
          {state === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center rounded-2xl bg-white dark:bg-dark shadow-testimonial-shadow px-6">
              <div className="w-14 h-14 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Děkujeme za referenci!</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm">
                Vaše hodnocení jsme přijali. Po krátké kontrole se objeví zde na stránce.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white dark:bg-dark shadow-testimonial-shadow p-6 sm:p-8 flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-zinc-600 dark:text-zinc-300 mb-2">Vaše jméno</label>
                <input
                  type="text"
                  placeholder="Jméno a příjmení"
                  className={inputCls}
                  value={jmeno}
                  onChange={(e) => setJmeno(e.target.value)}
                  disabled={state === 'loading'}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-600 dark:text-zinc-300 mb-2">Jak hodnotíte výcvik?</label>
                <StarPicker value={hodnoceni} onChange={setHodnoceni} disabled={state === 'loading'} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-600 dark:text-zinc-300 mb-2">Vaše reference</label>
                <textarea
                  rows={5}
                  placeholder="Co Vám výcvik dal? S čím odcházíte? Komu byste ho doporučili?"
                  className={inputCls}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  disabled={state === 'loading'}
                />
              </div>

              {state === 'error' && <p className="text-sm text-red-600 dark:text-red-400">{errorMsg}</p>}

              <div className="flex flex-col items-center gap-2 pt-1">
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="px-8 py-3 rounded-full bg-[#024ca2] hover:bg-transparent hover:text-[#024ca2] text-white font-semibold text-base transition-all duration-200 border border-[#024ca2] disabled:opacity-50 cursor-pointer"
                >
                  {state === 'loading' ? 'Odesílám…' : 'Odeslat referenci'}
                </button>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">Reference se zveřejní po krátké kontrole.</p>
              </div>
            </form>
          )}
        </div>

        {/* Zeď recenzí */}
        {loaded && reviews.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <div key={i} className="rounded-2xl bg-white dark:bg-dark shadow-testimonial-shadow p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#024ca2] text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {initials(r.jmeno)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-dark dark:text-white truncate">{r.jmeno}</p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500">{formatDate(r.created_at)}</p>
                    </div>
                  </div>
                  <Stars value={r.hodnoceni} />
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {loaded && reviews.length === 0 && (
          <p className="text-center text-zinc-400 dark:text-zinc-500 text-sm">Zatím tu nejsou žádné reference. Buďte první!</p>
        )}

      </div>
    </section>
  )
}
