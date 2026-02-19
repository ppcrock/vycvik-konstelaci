'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'

const OFFSET = 80

const useActiveLink = (setActiveLink: (link: string) => void) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const updateActiveLink = () => {
      const fullPath = window.location.hash
        ? `${pathname}${window.location.hash}`
        : pathname
      setActiveLink(fullPath)
    }

    const handleScrollOffset = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition - OFFSET,
              behavior: 'smooth',
            })
          }, 0)
        }
      }
    }

    updateActiveLink()
    handleScrollOffset()

    window.addEventListener('hashchange', updateActiveLink)
    window.addEventListener('hashchange', handleScrollOffset)

    return () => {
      window.removeEventListener('hashchange', updateActiveLink)
      window.removeEventListener('hashchange', handleScrollOffset)
    }
  }, [pathname, searchParams, setActiveLink])
}

const HeaderLink: React.FC<{ item: any }> = ({ item }) => {
  const [activeLink, setActiveLink] = useState('')

  useActiveLink(setActiveLink)

  const isActive = activeLink === item.href

  const baseLinkClass = `px-4 py-2 font-medium rounded-3xl transition-colors ${isActive
    ? 'bg-dark dark:bg-white text-white dark:text-dark'
    : 'dark:text-white hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark'
    }`

  // Item with submenu (hover dropdown)
  if (item.submenu && item.submenu.length > 0) {
    return (
      <li>
        <HoverCard openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <div className={`cursor-pointer ${baseLinkClass} flex items-center gap-1`}>
              {item.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m7 10l5 5l5-5"
                />
              </svg>
            </div>
          </HoverCardTrigger>

          <HoverCardContent
            align="start"
            sideOffset={10}
            className="bg-white dark:bg-dark shadow-lg rounded-lg mt-2 w-64 z-50 border"
          >
            {item.submenu.map((group: any, index: number) => (
              <div key={index} className="mb-2 border-b border-dark/20 dark:border-white/20 last:border-b-0">
                {group.links?.map((link: any, linkIndex: number) => (
                  <Link
                    key={linkIndex}
                    href={link.href || link.url}
                    className={`block px-4 py-2 text-sm font-medium rounded cursor-pointer transition-colors ${activeLink === (link.href || link.url)
                      ? 'bg-primary text-white'
                      : 'text-black dark:text-white hover:bg-primary/10 dark:hover:text-white'
                      }`}
                  >
                    {link.label || link.name}
                  </Link>
                ))}
              </div>
            ))}
          </HoverCardContent>
        </HoverCard>
      </li>
    )
  }

  // Regular link (no submenu)
  return (
    <li>
      <Link href={item.href} className={baseLinkClass}>
        {item.label}
      </Link>
    </li>
  )
}

export default HeaderLink
