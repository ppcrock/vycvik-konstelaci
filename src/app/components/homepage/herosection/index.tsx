"use client"
import Image from "next/image"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import { stagger, useAnimate, useInView } from "motion/react";

function AnimatedWords({ children }: { children: string }) {
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
                    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-start">
                        <div className="flex flex-col lg:items-start items-center gap-6 lg:mb-0 mb-6 py-10">
                            <h1 className="lg:text-start text-center">
                                <AnimatedWords>Výcvik</AnimatedWords> <span className="instrument-font italic font-normal dark:text-white/70"><AnimatedWords>rodinných</AnimatedWords></span><br /><span className="instrument-font italic font-normal dark:text-white/70"><AnimatedWords>a firemních konstelací</AnimatedWords></span> <AnimatedWords>2026/27</AnimatedWords>
                            </h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="text-lg xl:max-w-xl lg:text-start text-center"
                            >
                                Pohnutka, proč jsem se rozhodl výcvik uspořádat, byla vytvořit skupinu lidí, které předám své dovednosti, jež jsem nabyl v rodinném, obchodním, manažerském a konstelářském životě. Tito lidé budou s pomocí této inspirace metodu šířit nebo budu těžit z intenzivního hlubšího prožitku pro zlepšení, či pochopení vlastní životní situace.
                            </motion.p>
                            <div className="flex w-full lg:justify-start justify-center">
                                <a
                                    href='#prihlaska'
                                    onClick={(e) => { e.preventDefault(); document.getElementById('prihlaska')?.scrollIntoView({ behavior: 'smooth' }) }}
                                    className='cursor-pointer bg-[#024ca2] text-white font-semibold text-base flex items-center justify-center py-3 px-8 rounded-full min-h-[48px] border border-[#024ca2] transition-all duration-200 ease-in-out hover:bg-transparent hover:text-[#024ca2] active:opacity-90'>
                                    Mám zájem o výcvik
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="rounded-full p-1 bg-success outline-2 outline-success/20"></div>
                                <p className='text-base font-semibold text-dark dark:text-white'>Ve výcviku jsou ještě volná místa</p>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex justify-center lg:mt-16"
                        >
                            <Image
                                src="/images/hero-konstelace.jpg"
                                alt="Výcvik konstelací"
                                width={400}
                                height={300}
                                className="rounded-2xl shadow-2xl object-cover w-full max-w-sm lg:max-w-none h-auto"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
