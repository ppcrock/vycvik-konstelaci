"use client";
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link'
import Logo from '../header/Logo'

const Footer = () => {
    const [footerData, setFooterData] = useState<{
        brand?: { name?: string };
        socialLinks?: { name: string; url: string; icon: string }[];
        copyright?: string;
    } | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/layout-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setFooterData(data?.footerData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <footer className='xl:pt-20 pb-14'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col items-center gap-8 text-center'>
                    <Logo />
                    {footerData?.socialLinks && footerData.socialLinks.length > 0 && (
                        <div className='flex items-center gap-6'>
                            {footerData.socialLinks.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-dark/70 hover:text-primary dark:text-white/70 dark:hover:text-primary transition-colors'
                                    aria-label={item.name}
                                >
                                    <Icon icon={item.icon} width={24} height={24} />
                                </Link>
                            ))}
                        </div>
                    )}
                    {footerData?.copyright && (
                        <p className='text-dark/60 dark:text-white/60 text-sm'>
                            {footerData.copyright}
                        </p>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer
