'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10 md:gap-16">
          <div className="text-center">
            <h2>
              Kontakt{' '}
              <span className="instrument-font italic font-normal dark:text-white/70">na mě</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-3xl mx-auto">
            <div className="flex-shrink-0 w-[40%] max-w-[200px] relative overflow-hidden">
              <Image
                src="/images/krejca.png"
                alt="Jan Krejčiřík – Krejča"
                width={200}
                height={267}
                className="w-full h-auto object-contain"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none bg-gradient-to-t from-white to-transparent dark:from-dark"
                aria-hidden
              />
            </div>

            <div className="flex flex-col gap-5 text-dark dark:text-white text-center md:text-left">
              <div className="flex flex-col gap-0.5">
                <p className="text-2xl font-semibold">Krejča</p>
                <p className="text-base text-dark/60 dark:text-white/60">Jan Krejčiřík</p>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="flex-shrink-0 w-5 h-5 text-primary" aria-hidden />
                  <Link href="tel:+420724714188" className="text-lg hover:underline">
                    +420 724 714 188
                  </Link>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="flex-shrink-0 w-5 h-5 text-primary" aria-hidden />
                  <Link href="mailto:jan.krejcirik@shifting.cz" className="text-lg hover:underline">
                    jan.krejcirik@shifting.cz
                  </Link>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin className="flex-shrink-0 w-5 h-5 text-primary" aria-hidden />
                  <span className="text-lg">
                    Masarykova 37, 602 00 Brno
                    <br />
                    <span className="text-dark/60 dark:text-white/60 text-sm">II. poschodí</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
