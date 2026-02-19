"use client"
import Image from "next/image"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { motion } from "motion/react";

function Hero() {
    const User = [
        {
            img: "/images/users/user-1.webp",
        },
        {
            img: "/images/users/user-2.webp",
        },
        {
            img: "/images/users/user-3.webp",
        },
        {
            img: "/images/users/user-4.webp",
        },
    ]
    return (
        <section className="relative overflow-hidden">
            <div className="relative before:absolute before:h-3/4 before:w-full before:bg-linear-to-r before:from-cyan-gradient before:via-white before:to-purple-gradient dark:before:from-dark-cyan-gradient dark:before:via-black dark:before:to-dark-purple-gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
                <div className='container mx-auto px-4'>
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col lg:items-start items-center gap-6 lg:mb-0 mb-6 py-10 max-w-4xl mx-auto">
                            <div className="flex sm:flex-row flex-col items-center gap-4">
                                <div className="flex items-center -space-x-4">
                                    {User.map((item, index) => (
                                        <div className="rounded-full overflow-hidden border-2 border-white w-fit" key={index}>
                                            <Image src={item.img} alt="user" width={40} height={40} />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="text-warning flex items-center sm:justify-start justify-center mb-1">
                                        <Icon icon={"tabler:star-filled"} width={16} height={16} />
                                        <Icon icon={"tabler:star-filled"} width={16} height={16} />
                                        <Icon icon={"tabler:star-filled"} width={16} height={16} />
                                        <Icon icon={"tabler:star-filled"} width={16} height={16} />
                                        <Icon icon={"tabler:star-half-filled"} width={16} height={16} />
                                    </div>
                                    <p className="text-dark/60 dark:text-white/60">
                                        Dokončeno více než 200 výcviků
                                    </p>
                                </div>
                            </div>
                            <h1 className="lg:text-start text-center">
                                Výcvik <span className="instrument-font italic font-normal dark:text-white/70">rodinných a firemních konstelací</span> 2026/27
                            </h1>
                            <p className="text-lg xl:max-w-xl lg:text-start text-center">
                                Pohnutka, proč jsem se rozhodl výcvik uspořádat, byla vytvořit skupinu lidí, které předám své dovednosti, jež jsem nabyl v rodinném, obchodním, manažerském a konstelářském životě. Tito lidé budou s pomocí této inspirace metodu šířit nebo budu těžit z intenzivního hlubšího prožitku pro zlepšení, či pochopení vlastní životní situace.
                            </p>
                            <div className="flex w-full lg:justify-start justify-center">
                                <Link
                                    href='/contact'
                                    className='group bg-primary text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-full md:py-3 border border-primary transition-all duration-200 ease-in-out hover:bg-transparent hover:text-primary'>
                                    <span className='flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-28'>
                                        Chci výcvik
                                    </span>
                                    <svg
                                        width='40'
                                        height='40'
                                        viewBox='0 0 40 40'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-44 group-hover:rotate-45'>
                                        <rect
                                            width='40'
                                            height='40'
                                            rx='20'
                                            className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-primary'
                                        />
                                        <path
                                            d='M15.832 15.3334H24.1654V23.6667'
                                            className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                                            strokeWidth='1.66667'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                        <path
                                            d='M15.832 23.6667L24.1654 15.3334'
                                            className='stroke-[#1B1D1E] transition-colors duration-500 ease-in-out group-hover:stroke-white'
                                            strokeWidth='1.66667'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="rounded-full p-1 bg-success outline-2 outline-success/20"></div>
                                <p className='text-base font-semibold text-dark dark:text-white'>Ve výcviku jsou ještě volná místa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
