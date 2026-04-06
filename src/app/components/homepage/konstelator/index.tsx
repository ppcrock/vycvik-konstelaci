'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export default function Konstelator() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const bottomAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
    transition: { duration: 0.8, delay: 0.4 },
  }

  const imageAnimation = {
    initial: { x: -50, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 },
    transition: { duration: 0.8, delay: 0.6 },
  }

  return (
    <section id="pruvodce" className="py-20 scroll-mt-24">
      <div ref={ref} className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Fotka – vlevo */}
          <motion.div
            {...imageAnimation}
            className="shrink-0"
          >
            <Image
              src="/images/krejca-outdoor.jpg"
              alt="Jan Krejčiřík – Krejča"
              width={420}
              height={560}
              className="object-cover rounded-2xl w-[320px] sm:w-[380px] md:w-[420px]"
              quality={90}
            />
          </motion.div>

          {/* Text – vpravo */}
          <motion.div
            {...bottomAnimation}
            className="flex flex-col gap-5"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-dark dark:text-white">
              Krejča
            </h3>
            <div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed text-dark/70 dark:text-white/70">
              <p>
                Jmenuji se Jan Krejčiřík, ale nikdo mi neřekne jinak než Krejča.
              </p>
              <p>
                S lidmi pracuji přes 25 let. Zastával jsem pozici ředitele finanční společnosti a hledal jsem cesty k lepšímu vedení lidí. Zaměřil jsem se na koučink a mentoring, ale zaměstnanci stále nevykazovali takové výsledky, jaké jsem si představoval.
              </p>
              <p>
                Po absolvování prvních konstelací jsem si uvědomil, jak směšné je pracovat s lidmi jen na vědomé úrovni. Konstelace mě přivedly k řešení problémů pomocí hledání jejich příčin, které se zpravidla nachází v našem nevědomí. Zjistil jsem, že tak se s lidmi dá pracovat mnohem lépe a efektivněji.
              </p>
            </div>
            <div className="flex justify-start mt-6">
              <a
                href="https://www.onlinekonstelace.cz/o-mne"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-[#024ca2] text-white font-semibold text-base flex items-center justify-center py-3 px-8 rounded-full min-h-[48px] border border-[#024ca2] transition-all duration-200 ease-in-out hover:bg-transparent hover:text-[#024ca2] active:opacity-90">
                Zjistěte o mně více
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
