'use client'
import { useEffect, useRef, useState } from 'react'
import { stagger, useAnimate, useInView } from 'motion/react'

type FormState = 'form' | 'loading' | 'error' | 'success'

const POHNUTKY = [
  { value: 'a', label: 'Chci být profesionální průvodce konstelací, dělat metodu aktivně a sloužit většímu množství lidí', nadstavba: 'Je možnost absolvovat nadstavbové školení, které probíhá formou praxe. Dostanete k dispozici učebnu, za symbolický poplatek, můžete zde stavět konstelace a trénovat. Abyste získali praxi do začátku. Měl/a byste o tuto nabídku zájem?' },
  { value: 'b', label: 'Příležitostně dělat konstelace pro rodinu a známé, ale moje hlavní činnost to nikdy nebude', nadstavba: 'I když se aktivně nebudete zaměřovat na klientelu, tak mě můžete mít jako mentora. Před seminářem vás můžu znovu připravit nebo vás navést.' },
  { value: 'c', label: 'Chci si vylepšit svůj vlastní život – principy přirozeného řádu mě fascinují a uvědomuji si, že výcvik je intenzivnější než klasický seminář', nadstavba: 'Jde se do větších hloubek a nedá se to srovnávat s běžným seminářem pro klienty, protože zde je rozdílná připravenost.' },
  { value: 'd', label: 'Jsem majitel firmy a pomocí těchto metod chci vést a inspirovat firmu a svůj byznys', nadstavba: '' },
  { value: 'e', label: 'V současné době dělám již jinou metodu (Kraniosakrální terapie, EFT, atd.) a metodu konstelací chci přidat k mé současné metodě', nadstavba: '' },
  { value: 'f', label: 'Jsem tvůrce autentického léčebného kanálu, mám už jiné výcviky a chci jen doplnit přírodní zákony do mého A.L.K.', nadstavba: '' },
] as const

const LOKACE_OPTIONS = [
  { value: 'brno', label: 'Brno' },
  { value: 'online', label: 'Online' },
  { value: 'jine_mesto', label: 'Jiné město' },
]

const PLATBA_OPTIONS = [
  { value: 'vse_najednou', label: 'Vše na začátku' },
  { value: 'splatky', label: 'Splátky' },
]

function AnimatedHeading({ children }: { children: string }) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })
  const words = children.split(' ')

  useEffect(() => {
    if (isInView) {
      animate('span', { opacity: 1, filter: 'blur(0px)' }, { duration: 0.5, delay: stagger(0.15) })
    }
  }, [isInView])

  return (
    <span ref={scope}>
      {words.map((word, i) => (
        <span key={i} style={{ opacity: 0, filter: 'blur(10px)', display: 'inline-block', marginRight: i < words.length - 1 ? '0.3em' : '0' }}>{word}</span>
      ))}
    </span>
  )
}

export default function VycvikForm() {
  const [state, setState] = useState<FormState>('form')
  const [errorMsg, setErrorMsg] = useState('')
  const [fields, setFields] = useState({
    jmeno: '', prijmeni: '', email: '', telefon: '',
    pohnutky: [] as string[],
    co_ocekavate: '', co_se_ma_stat: '', zkusenosti: '',
    mesto: '', lokace: '', lokace_mesto: '',
    platba: '', platba_splatky: '', platba_predstava: '',
    dalsi_otazky: '',
  })

  const set = (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    if (fields.pohnutky.length === 0) { setErrorMsg('Vyberte alespoň jednu pohnutku.'); setState('error'); return }
    if (!fields.co_ocekavate.trim()) { setErrorMsg('Vyplňte očekávání o průběhu výcviku.'); setState('error'); return }
    if (!fields.co_se_ma_stat.trim()) { setErrorMsg('Vyplňte očekávání po skončení výcviku.'); setState('error'); return }
    if (!fields.jmeno.trim()) { setErrorMsg('Vyplňte jméno.'); setState('error'); return }
    if (!fields.prijmeni.trim()) { setErrorMsg('Vyplňte příjmení.'); setState('error'); return }
    if (!fields.email.trim()) { setErrorMsg('Vyplňte e-mail.'); setState('error'); return }
    if (!fields.telefon.trim()) { setErrorMsg('Vyplňte mobil.'); setState('error'); return }
    if (!fields.mesto.trim()) { setErrorMsg('Vyplňte město.'); setState('error'); return }
    if (!fields.zkusenosti) { setErrorMsg('Vyberte úroveň zkušeností.'); setState('error'); return }
    if (!fields.lokace) { setErrorMsg('Vyberte místo výcviku.'); setState('error'); return }
    if (!fields.platba) { setErrorMsg('Vyberte způsob platby.'); setState('error'); return }

    try {
      const res = await fetch('https://www.onlinekonstelace.cz/api/vycvik-zajemci', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, pohnutka: fields.pohnutky.join(', ') }),
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

  const selectedPohnutky = POHNUTKY.filter(p => fields.pohnutky.includes(p.value))
  const [pohnutkaOpen, setPohnutkaOpen] = useState(false)
  const pohnutkaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (pohnutkaRef.current && !pohnutkaRef.current.contains(e.target as Node)) setPohnutkaOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const togglePohnutka = (value: string) => {
    setFields(f => ({
      ...f,
      pohnutky: f.pohnutky.includes(value) ? f.pohnutky.filter(v => v !== value) : [...f.pohnutky, value],
    }))
  }

  const inputCls = 'w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 text-base focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors placeholder:text-zinc-400'
  const sectionLabelCls = 'text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2'

  if (state === 'success') {
    return (
      <section id="prihlaska" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto flex flex-col items-center justify-center py-16 text-center">
            <div className="w-14 h-14 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Přihláška odeslána!</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Ozvu se vám s dalšími informacemi.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="prihlaska" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center text-center mb-10">
          <h2>
            <AnimatedHeading>Přihláška na Výcvik</AnimatedHeading>
            {' '}<span className="instrument-font italic font-normal dark:text-white/70"><AnimatedHeading>rodinných a firemních konstelací</AnimatedHeading></span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {/* Doporučení */}
          <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 px-4 py-3 flex gap-3 items-start mb-6">
            <span className="text-amber-500 text-lg leading-none mt-0.5">💡</span>
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              <strong>Doporučení:</strong> Doporučuji zájemcům, kteří se přihlašují na Výcvik konstelací, aby se zúčastnili minimálně 5 skupinových konstelací se mnou.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

            {/* 1. Pohnutka */}
            <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 px-5 py-4">
              <p className={sectionLabelCls}>S jakou pohnutkou vstupujete do výcviku? <span className="normal-case tracking-normal font-normal text-zinc-400">(lze vybrat více)</span></p>
              <div ref={pohnutkaRef} className="relative">
                <button type="button" onClick={() => setPohnutkaOpen(o => !o)} disabled={state === 'loading'} className={`${inputCls} text-left flex items-center justify-between gap-2 cursor-pointer`}>
                  <span className={fields.pohnutky.length === 0 ? 'text-zinc-400' : 'text-zinc-800 dark:text-zinc-100'}>
                    {fields.pohnutky.length === 0 ? '— Vyberte možnosti —' : `Vybráno: ${fields.pohnutky.length} ${fields.pohnutky.length === 1 ? 'možnost' : fields.pohnutky.length < 5 ? 'možnosti' : 'možností'}`}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`flex-shrink-0 transition-transform ${pohnutkaOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {pohnutkaOpen && (
                  <div className="absolute z-50 left-0 right-0 mt-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg">
                    {POHNUTKY.map(p => (
                      <label key={p.value} className="flex items-start gap-2.5 px-3.5 py-2.5 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-750 transition-colors border-b border-zinc-100 dark:border-zinc-700/50 last:border-b-0">
                        <input type="checkbox" checked={fields.pohnutky.includes(p.value)} onChange={() => togglePohnutka(p.value)} className="mt-0.5 w-4 h-4 rounded border-zinc-300 text-primary focus:ring-primary/30 cursor-pointer flex-shrink-0" />
                        <span className={`text-sm leading-snug ${fields.pohnutky.includes(p.value) ? 'text-zinc-900 dark:text-zinc-100 font-medium' : 'text-zinc-600 dark:text-zinc-400'}`}>{p.value.toUpperCase()}. {p.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              {selectedPohnutky.some(p => p.nadstavba) && (
                <div className="mt-3 flex flex-col gap-2">
                  {selectedPohnutky.filter(p => p.nadstavba).map(p => (
                    <div key={p.value} className="px-3.5 py-2.5 rounded-lg bg-primary/5 dark:bg-primary/10 border border-primary/15 dark:border-primary/20">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-0.5">Nadstavba {p.value.toUpperCase()}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{p.nadstavba}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Očekávání */}
            <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <p className={sectionLabelCls}>Vaše očekávání o průběhu výcviku</p>
                <textarea required rows={3} placeholder="Co od výcviku čekáte?" className={inputCls} value={fields.co_ocekavate} onChange={set('co_ocekavate')} disabled={state === 'loading'} />
              </div>
              <div>
                <p className={sectionLabelCls}>Vaše očekávání po skončení výcviku</p>
                <textarea required rows={3} placeholder="Co se má ve vašem životě změnit?" className={inputCls} value={fields.co_se_ma_stat} onChange={set('co_se_ma_stat')} disabled={state === 'loading'} />
              </div>
            </div>

            {/* 3. Kontaktní údaje */}
            <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 px-5 py-4">
              <p className={sectionLabelCls}>Kontaktní údaje</p>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <input type="text" required placeholder="Jméno" className={inputCls} value={fields.jmeno} onChange={set('jmeno')} disabled={state === 'loading'} />
                <input type="text" required placeholder="Příjmení" className={inputCls} value={fields.prijmeni} onChange={set('prijmeni')} disabled={state === 'loading'} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input type="email" required placeholder="E-mail" className={inputCls} value={fields.email} onChange={set('email')} disabled={state === 'loading'} />
                <input type="tel" required placeholder="Mobil" className={inputCls} value={fields.telefon} onChange={set('telefon')} disabled={state === 'loading'} />
                <input type="text" required placeholder="Město" className={inputCls} value={fields.mesto} onChange={set('mesto')} disabled={state === 'loading'} />
              </div>
            </div>

            {/* 4. Zkušenosti */}
            <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 px-5 py-4">
              <p className={sectionLabelCls}>Dosavadní zkušenost s konstelacemi</p>
              <select required value={fields.zkusenosti} onChange={set('zkusenosti')} disabled={state === 'loading'} className={inputCls}>
                <option value="">— Vyberte úroveň —</option>
                <option value="nováček">Úplný nováček</option>
                <option value="mírně pokročilý">Mírně pokročilý</option>
                <option value="pokročilý">Pokročilý</option>
                <option value="konstelace mě živí">Konstelace mě živí</option>
              </select>
            </div>

            {/* 5+6. Lokace + Platba */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 px-5 py-4">
                <p className={sectionLabelCls}>Kde chcete absolvovat výcvik?</p>
                <div className="flex flex-wrap gap-2">
                  {LOKACE_OPTIONS.map(opt => (
                    <label key={opt.value} className="cursor-pointer">
                      <input type="radio" name="lokace" value={opt.value} checked={fields.lokace === opt.value} onChange={set('lokace')} disabled={state === 'loading'} className="sr-only" />
                      <span className={`inline-block px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${fields.lokace === opt.value ? 'bg-primary text-white border-primary' : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-primary/50 bg-white dark:bg-zinc-800'}`}>{opt.label}</span>
                    </label>
                  ))}
                </div>
                {fields.lokace === 'jine_mesto' && (
                  <input type="text" placeholder="Název města" className={`${inputCls} mt-2`} value={fields.lokace_mesto} onChange={set('lokace_mesto')} disabled={state === 'loading'} />
                )}
              </div>
              <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 px-5 py-4">
                <p className={sectionLabelCls}>Jak si přejete platit?</p>
                <div className="flex flex-wrap gap-2">
                  {PLATBA_OPTIONS.map(opt => (
                    <label key={opt.value} className="cursor-pointer">
                      <input type="radio" name="platba" value={opt.value} checked={fields.platba === opt.value} onChange={set('platba')} disabled={state === 'loading'} className="sr-only" />
                      <span className={`inline-block px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${fields.platba === opt.value ? 'bg-primary text-white border-primary' : 'border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-primary/50 bg-white dark:bg-zinc-800'}`}>{opt.label}</span>
                    </label>
                  ))}
                </div>
                {fields.platba === 'splatky' && (
                  <div className="mt-2 flex gap-2">
                    <select value={fields.platba_splatky} onChange={set('platba_splatky')} disabled={state === 'loading'} className={inputCls}>
                      <option value="">— Jak často? —</option>
                      <option value="mesicne">Měsíčně</option>
                      <option value="kvartalne">Kvartálně</option>
                      <option value="predstava">Vaše představa</option>
                    </select>
                    {fields.platba_splatky === 'predstava' && (
                      <input type="text" placeholder="Vaše představa" className={inputCls} value={fields.platba_predstava} onChange={set('platba_predstava')} disabled={state === 'loading'} />
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* 7. Další otázky */}
            <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 px-5 py-4">
              <p className={sectionLabelCls}>Vaše další otázky</p>
              <textarea rows={2} placeholder="Máte něco na srdci? Zeptejte se..." className={inputCls} value={fields.dalsi_otazky} onChange={set('dalsi_otazky')} disabled={state === 'loading'} />
            </div>

            {state === 'error' && (
              <p className="text-sm text-red-600 dark:text-red-400">{errorMsg}</p>
            )}

            <div className="flex flex-col items-center gap-3 pt-2">
              <button type="submit" disabled={state === 'loading'} className="px-8 py-3 rounded-full bg-[#024ca2] hover:bg-transparent hover:text-[#024ca2] text-white font-semibold text-base transition-all duration-200 border border-[#024ca2] disabled:opacity-50 cursor-pointer">
                {state === 'loading' ? 'Odesílám…' : 'Odeslat přihlášku'}
              </button>
              <p className="text-xs text-zinc-400 dark:text-zinc-500">Po odeslání se vám ozvu s dalšími informacemi.</p>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}
