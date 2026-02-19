"use client";
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link'
import Logo from '../header/Logo'

const Footer = () => {
    const [footerData, setfooterData] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/layout-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setfooterData(data?.footerData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <footer className='xl:pt-20 pb-14'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col xl:flex-row gap-10 justify-between'>
                    <div className='flex flex-col gap-6 max-w-md justify-between'>
                        <div>
                            <Logo />
                            <p className='mt-6'>{footerData?.brand?.tagline}</p>
                        </div>
                        <p className='text-dark dark:text-white text-20 font-medium'>
                            {footerData?.copyright}
                        </p>
                    </div>
                    <div className='grid sm:grid-cols-4 gap-6 w-full'>
                        <div className='flex flex-col gap-4'>
                            <p className='font-medium text-dark dark:text-white'>{footerData?.menu?.name}</p>
                            <ul className='flex flex-col gap-3'>
                                {footerData?.menu?.links.map((item: any, index: any) => {
                                    return (
                                        <li
                                            key={index}
                                            className='text-dark/60 hover:text-primary dark:text-white/60 w-fit'>
                                            <Link href={item.url}>{item.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='font-medium text-dark dark:text-white'>{footerData?.support?.name}</p>
                            <ul className='flex flex-col gap-3'>
                                {footerData?.support?.links.map((item: any, index: any) => {
                                    return (
                                        <li
                                            key={index}
                                            className='text-dark/60 hover:text-primary dark:text-white/60 w-fit'>
                                            <Link href={item.url}>{item.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='font-medium text-dark dark:text-white'>{footerData?.socials?.name}</p>
                            <ul className='flex flex-col gap-3'>
                                {footerData?.socials?.links.map((item: any, index: any) => {
                                    return (
                                        <li
                                            key={index}
                                            className='text-dark/60 hover:text-primary dark:text-white/60 w-fit'>
                                            <Link href={item.url} className='flex items-center gap-3'>
                                                <Icon icon={item.icon} />
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='font-medium text-dark dark:text-white'>{footerData?.terms?.name}</p>
                            <ul className='flex flex-col gap-3'>
                                {footerData?.terms?.links.map((item: any, index: any) => {
                                    return (
                                        <li
                                            key={index}
                                            className='text-dark/60 hover:text-primary dark:text-white/60 w-fit'>
                                            <Link href={item.url} className='flex items-center'>
                                                <Icon icon={item.icon} />
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
