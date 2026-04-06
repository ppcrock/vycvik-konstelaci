# CONTEXT – vycvikkonstelaci.cz

## Projekt
- **Web**: vycvikkonstelaci.cz – výcvik rodinných a firemních konstelací Jana Krejčiříka
- **Stack**: Next.js (App Router), Tailwind CSS v4, Framer Motion, NextAuth
- **Repo**: github.com/ppcrock/vycvik-konstelaci
- **Vercel project**: prj_w7EIirTWw7QblxyhLZZDJExKEs9e
- **Dev server**: port 3002

## Status
- Web je funkční a nasazený
- Logo, favicon, sekce O mně, program výcviku – vše aktualizováno (2026-04-06)

## Recent Changes (2026-04-06)
- Správné logo (PNG) + favicon (JK ikona)
- Sekce Krejča: nová fotka, layout fotka vlevo / text vpravo
- Nadpis "Program výcviku rodinných a firemních konstelací" s animací
- Menu scroll oprava, šířka programu omezena

## Struktura
```
Optura-agency-main/package/
├── src/app/
│   ├── components/homepage/
│   │   ├── achievements/    # Program výcviku (10 seminářů)
│   │   ├── herosection/     # Hero sekce
│   │   ├── konstelator/     # Sekce O mně (Krejča)
│   │   ├── contact/         # Kontakt
│   │   └── vycvik-form/     # Přihláška
│   ├── components/layout/
│   │   ├── header/          # Navigace + Logo
│   │   └── footer/          # Patička
│   └── layout.tsx           # Root layout (favicon, metadata)
├── public/images/
│   ├── logo/                # Loga (vycvik-konstelaci-logo*.png)
│   ├── krejca-outdoor.jpg   # Fotka Jana
│   └── hero-konstelace.jpg  # Hero obrázek
└── docs/                    # Dokumentace
```
