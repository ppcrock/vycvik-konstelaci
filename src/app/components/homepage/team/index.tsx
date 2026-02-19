"use client"
import Singlemembers from "@/app/components/homepage/team/SingleMember"
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function Team() {
    const creativeMindList = [
        {
            image: '/images/team/logan.webp',
            name: 'Logan Dang',
            position: 'WordPress Developer',
        },
        {
            image: '/images/team/brian.webp',
            name: 'Brian Hanley',
            position: 'Project Manager',
        },
        {
            image: '/images/team/luke.webp',
            name: 'Luke Van de Berg',
            position: 'Brand Designer',
        },
        {
            image: '/images/team/rahat.webp',
            name: 'Rahat Chowhury',
            position: 'UX Researcher',
        },
        {
            image: '/images/team/ana.webp',
            name: 'Ana Belić',
            position: 'Social Media Specialist',
        },
        {
            image: '/images/team/barbora.webp',
            name: 'Barbora Kratochvilová',
            position: 'UI Designer',
        },
        {
            image: '/images/team/darko.webp',
            name: 'Darko Stanković',
            position: 'Product Designer',
        },
        {
            image: '/images/team/tomislav.webp',
            name: 'Tomislav Jozić',
            position: 'React Team Lead',
        },
    ]
    const ref = useRef(null)
    const inView = useInView(ref)
    const bottomAnimation = (index: any) => ({
        initial: { y: '5%', opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
        transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
    })
    return (
        <section ref={ref} id="team">
            <div className="relative before:absolute before:h-3/4 before:w-full before:bg-linear-to-r before:from-cyan-gradient before:via-white before:to-purple-gradient dark:before:from-dark-cyan-gradient dark:before:via-black dark:before:to-dark-purple-gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
                <div className="container lg:max-w-7xl px-4 mx-auto ">
                    <h2 className="max-w-lg mx-auto text-center">
                        Meet the
                        <span className='instrument-font italic font-normal dark:text-white/70'>
                            {' '}
                            creative minds
                            {' '}
                        </span>
                        behind our success
                    </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-14'>
                        {creativeMindList?.map((item, index) => (
                            <motion.div {...bottomAnimation(index)} key={index}>
                                <Singlemembers creativemind={item} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;