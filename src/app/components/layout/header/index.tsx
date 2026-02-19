'use client'

import { useEffect, useRef, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeader from './Navigation/MobileHeader'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const { data: session } = useSession()
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menuData, setMenuData] = useState<any[]>([]);
    const [user, setUser] = useState<{ user: any } | null>(null)
    const [sticky, setSticky] = useState(false)
    const pathname = usePathname()
    const hasMounted = useRef(false);

    const handleScroll = () => {
        setSticky(window.scrollY >= 80)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if (!hasMounted.current) {
            hasMounted.current = true;

            const fetchData = async () => {
                try {
                    const res = await fetch('/api/layout-data');
                    if (!res.ok) throw new Error('Failed to fetch');
                    const data = await res.json();
                    setMenuData(data?.headerData);
                } catch (error) {
                    console.error('Error fetching services:', error);
                }
            };

            fetchData();
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    const handleSignOut = () => {
        localStorage.removeItem('user')
        signOut()
        setUser(null)
    }

    return (
        <>
            <header
                className={`fixed top-0 z-50 w-full border-b border-dark/10 dark:border-white/10 ${sticky
                    ? 'backdrop-blur-xs bg-white/90 dark:bg-dark/90'
                    : ''
                    } ${className}`}>
                <div className={`container mx-auto px-4`}>
                    <nav className={`flex items-center py-3 justify-between`}>
                        <Logo />
                        <div className='hidden lg:flex rounded-3xl py-1 px-2 border border-dark/5 dark:border-light/5'>
                            <ul className='flex items-center gap-0 2xl:gap-2'>
                                {menuData?.map((item, index) => (
                                    <HeaderLink key={index} item={item} />
                                ))}
                            </ul>
                        </div>
                        <div className='flex items-center gap-1 xl:gap-4'>
                            <div className='hidden max-lg:flex'>
                                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'>
                                        <path
                                            fill='none'
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeMiterlimit='10'
                                            strokeWidth='1.5'
                                            d='M4.5 12h15m-15 5.77h15M4.5 6.23h15'
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className='flex items-center gap-1 xl:gap-4'>
                                {user?.user || session?.user ? (
                                    <div className='hidden lg:flex gap-4'>
                                        <button
                                            onClick={() => handleSignOut()}
                                            className='flex group font-normal items-center gap-1 transition-all duration-200 ease-in-out text-white px-4 py-2 bg-dark dark:bg-white/15 rounded-full hover:text-dark hover:bg-white dark:hover:bg-white/5 dark:hover:text-white border border-dark'>
                                            Sign Out
                                            <Icon icon='solar:logout-outline' width='25' height='25' />
                                        </button>
                                        <div className='relative group'>
                                            <Image
                                                src='/images/home/avatar_1.jpg'
                                                alt='Image'
                                                width={40}
                                                height={40}
                                                quality={100}
                                                className='rounded-full cursor-pointer'
                                            />
                                            <p className='absolute w-fit text-sm text-center z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-white dark:bg-white/5 text-dark/60 p-1 min-w-28 rounded-lg shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3'>
                                                {user?.user || session?.user?.name}
                                            </p>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {sidebarOpen && (
                <div
                    className='fixed top-0 left-0 w-full h-full bg-black/50 z-40'
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-dark shadow-lg transform transition-transform duration-300 max-w-xs ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    } z-50`}>
                <div className='flex items-center justify-between p-4'>
                    <p className='text-lg font-bold text-dark dark:text-white'>Menu</p>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        aria-label='Close mobile menu'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'>
                            <path
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </div>
                <div className='p-4'>
                    <ul className='flex flex-col'>
                        {menuData && menuData.map((item, index) => (
                            <MobileHeader
                                key={index}
                                item={item}
                                onNavigate={() => setSidebarOpen(false)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
