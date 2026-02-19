"use client"
import { Icon } from "@iconify/react";
import { motion, useInView } from "motion/react";
import { useRef } from 'react';

function Achievement() {
    const awards = [
        {
            id: '01',
            title: 'Základní princip přirozeného řádu',
            city: 'BRNO',
            dates: [
                { day: 'Pátek', date: '25. 9. 2026', time: '10:00-18:00' },
                { day: 'Sobota', date: '26. 9. 2026', time: '9:00-18:00' },
                { day: 'Neděle', date: '27. 9. 2026', time: '9:00-12:00' },
            ],
            icon: "tabler:scale",
            description:
                'Zaměření: Základní princip přirozeného řádu a vedení konstelací. Principy původní a současné rodiny. Zákon o pořadí, sounáležitosti a zákon rovnováhy',
        },
        {
            id: '02',
            title: 'Ostatní druhy konstelací',
            city: 'BRNO',
            dates: [
                { day: 'Pátek', date: '23. 10. 2026', time: '10:00-18:00' },
                { day: 'Sobota', date: '24. 10. 2026', time: '9:00-18:00' },
                { day: 'Neděle', date: '25. 10. 2026', time: '9:00-12:00' },
            ],
            icon: "tabler:network",
            description:
                'Zaměření: Individuální konstelace se zástupnými předměty, individuální konstelace se 2 lidmi. Integrační konstelace, rozhodovací konstelace, konstelace vnitřních osob, konstelace nového typu (konstelace duše a kostelce ducha), konstelace traumatu.',
        },
        {
            id: '03',
            title: 'Partnerské vztahy',
            city: 'BRNO',
            dates: [
                { day: 'Pátek', date: '20. 11. 2026', time: '10:00-18:00' },
                { day: 'Sobota', date: '21. 11. 2026', time: '9:00-18:00' },
                { day: 'Neděle', date: '22. 11. 2026', time: '9:00-12:00' },
            ],
            icon: "tabler:heart",
            description:
                'Zaměření: Principy co vztahy boří, co je buduje, princip přitažení partnera či partnerky, vlivy původních rodin na naše partnerské vztahy.',
        },
        {
            id: '04',
            title: 'Zdraví',
            city: 'BRNO',
            dates: [
                { day: 'Pátek', date: '18. 12. 2026', time: '10:00-18:00' },
                { day: 'Sobota', date: '19. 12. 2026', time: '9:00-18:00' },
                { day: 'Neděle', date: '20. 12. 2026', time: '9:00-12:00' },
            ],
            icon: "tabler:medical-cross",
            description:
                'Zaměření: Zdraví člověka, práce s duševními příčinami nemocí. Závislosti člověka na úrovni fyzické, mentální a duševní. Práce s nadváhou člověka a závislostmi.',
        },
        {
            id: '05',
            title: 'Mužská a ženská energie',
            city: 'BRNO',
            dates: [
                { day: 'Pátek', date: '15. 1. 2027', time: '10:00-18:00' },
                { day: 'Sobota', date: '16. 1. 2027', time: '9:00-18:00' },
                { day: 'Neděle', date: '17. 1. 2027', time: '9:00-12:00' },
            ],
            icon: "tabler:yin-yang",
            description:
                'Zaměření: Mužská a ženská energie a od toho se odvíjející, sebevědomí, sebehodnota, sebeláska.',
        },
        {
            id: '06',
            title: 'Životní energie a životní role',
            city: 'BRNO',
            dates: [
                { day: 'Pátek', date: '12. 2. 2027', time: '10:00-18:00' },
                { day: 'Sobota', date: '13. 2. 2027', time: '8:00-18:00' },
                { day: 'Neděle', date: '14. 2. 2027', time: '9:00-12:00' },
            ],
            icon: "tabler:sparkles",
            description:
                'Zaměření: Práce s fyzickou energií, emoční energií, duševní energií a energií duchovní. Propojení Těla, duše a ducha. Práce s životními rolemi a jejich rozplánováním.',
        },
        {
            id: '07',
            title: 'Práce s archetypy člověka',
            city: 'BRNO',
            dates: [
                { day: 'Pátek', date: '12. 3. 2027', time: '10:00-18:00' },
                { day: 'Sobota', date: '13. 3. 2027', time: '9:00-18:00' },
                { day: 'Neděle', date: '14. 3. 2027', time: '9:00-12:00' },
            ],
            icon: "tabler:user-circle",
            description:
                'Zaměření: Na techniku toolbox, příprava podkladů pro jednotlivé zástupné role do konstelace. Výběr: oboru, pozice, kvadrantu, u dětí školy, sportu nebo kroužku.',
        },
        {
            id: '08',
            title: 'Peníze a hojnost',
            city: 'BRNO',
            dates: [
                { day: 'Pátek', date: '9. 4. 2027', time: '10:00-18:00' },
                { day: 'Sobota', date: '10. 4. 2027', time: '9:00-18:00' },
                { day: 'Neděle', date: '11. 4. 2027', time: '9:00-12:00' },
            ],
            icon: "tabler:diamond",
            description:
                'Zaměření: Jak člověka v životě ovlivňují finanční předsevzetí a majetkové křivdy v předchozích generacích a jejich dopad na naše životy',
        },
        {
            id: '09',
            title: 'Pracovní, firemní a organizační konstelace 1',
            city: 'BRNO',
            dates: [
                { day: 'Pátek', date: '7. 5. 2027', time: '10:00-18:00' },
                { day: 'Sobota', date: '8. 5. 2027', time: '9:00-18:00' },
                { day: 'Neděle', date: '9. 5. 2027', time: '9:00-12:00' },
            ],
            icon: "tabler:chart-bar",
            description:
                'Zaměření: Základní principy fungování firem a organizací dle přirozeného řádu',
        },
        {
            id: '10',
            title: 'Pracovní, firemní a organizační konstelace 2',
            city: 'BRNO',
            dates: [
                { day: 'Pátek', date: '4. 6. 2027', time: '10:00-18:00' },
                { day: 'Sobota', date: '5. 6. 2027', time: '9:00-18:00' },
                { day: 'Neděle', date: '6. 6. 2027', time: '9:00-12:00' },
            ],
            icon: "tabler:trending-up",
            description:
                'Zaměření: Nejčastější problematika ve firmách, spory mezi majiteli, opakující se vzorce, konkurence, problémy rodinných firem a spolupracujících členů v jedné firmě. Loajalita zaměstnanců, firemní kultura a principy vedení firem dle přirozeného řádu',
        },
    ];
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef)
    const bottomAnimation = (index: any) => ({
        initial: { y: '5%', opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
        transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
    })
    return (
        <section>
            <div className="relative before:absolute before:h-3/4 before:w-full before:bg-linear-to-r before:from-cyan-gradient before:via-white before:to-purple-gradient dark:before:from-dark-cyan-gradient dark:before:via-black dark:before:to-dark-purple-gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
                <div className='container mx-auto px-4'>
                    <div className='flex justify-center text-center py-4 relative'>
                        <h2>
                            Výcvik
                            {' '}
                            <span className='instrument-font italic font-normal dark:text-white/70'>
                                konstelací <br />
                            </span>
                            {' '}
                            září–červen | 200 hodin | cena: 66 000 Kč
                        </h2>
                    </div>
                    {awards.map((award, index) => (
                        <div key={index} className="grid grid-cols-12 gap-4 border-b border-dark/10 dark:border-white/10 py-16 items-start" >
                            {/* Index & Icon */}
                            <div className="col-span-2 sm:col-span-1 flex items-start gap-3">
                                <span className="text-3xl font-medium text-dark dark:text-white">{award.id}</span>
                            </div>

                            <div className="col-span-2 sm:col-span-1 flex items-start gap-3">
                                <div className="text-dark dark:text-white flex items-center justify-center">
                                    <Icon icon={award.icon} width={40} height={40} className="text-dark dark:text-white" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Title & Location & Dates */}
                            <div className="col-span-12 lg:col-span-6 md:col-span-8">
                                <h3 className="md:text-3xl sm:text-2xl text-xl font-medium text-dark dark:text-white">{award.title}</h3>
                                <h4 className="md:text-2xl text-lg text-dark/60 dark:text-white/60 mb-2">{award.city}</h4>
                                <div className="flex flex-col gap-1">
                                    {award.dates.map((dateItem, dateIndex) => (
                                        <p key={dateIndex} className="text-dark/60 dark:text-white/60 text-base">
                                            {dateItem.day}: {dateItem.date} {dateItem.time}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="col-span-12 lg:col-span-4">
                                <h5 className="text-dark/60 dark:text-white/60 sm:text-xl text-lg font-normal">{award.description}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achievement
