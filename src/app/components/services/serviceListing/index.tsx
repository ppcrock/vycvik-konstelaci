"use client"
import { Icon } from "@iconify/react"
import { motion, useInView } from "motion/react"
import { useRef, useState, useEffect } from "react"
import ExpandableCard from "@/app/components/shared/serviceCard"
import Link from "next/link"

function ServicesListing() {
    const [services, setServices] = useState<any[]>([])
    const ref = useRef(null)
    const inView = useInView(ref)
    const hasMounted = useRef(false)

    const bottomAnimation = (index: number) => ({
        initial: { y: "5%", opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: "10%", opacity: 0 },
        transition: { duration: 0.2, delay: index * 0.3 },
    })

    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true

            const fetchData = async () => {
                try {
                    const res = await fetch("/api/layout-data")
                    if (!res.ok) throw new Error("Failed to fetch layout data")
                    const data = await res.json()
                    setServices(data?.ServiceData || [])
                } catch (error) {
                    console.error("Error fetching services:", error)
                }
            }

            fetchData()
        }
    }, [])

    return (
        <section ref={ref} id="services">
            <div className="relative before:absolute before:h-3/4 before:w-full before:bg-linear-to-r before:from-cyan-gradient before:via-white before:to-purple-gradient dark:before:from-dark-cyan-gradient dark:before:via-black dark:before:to-dark-purple-gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
                <div className="container mx-auto px-4 lg:max-w-7xl">
                    <div className="flex flex-col justify-center items-center gap-10 lg:gap-14">
                        <div className="max-w-[425px] text-center">
                            <h1 className="text-5xl font-medium">
                                Where innovation meets{" "}
                                <span className="instrument-font italic font-normal dark:text-white/70">
                                    aesthetics
                                </span>
                            </h1>
                        </div>
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                            {services.map((item, index) => (
                                <motion.div key={index} {...bottomAnimation(index)} className="shadow-inovative-card-shadow bg-white dark:bg-dark rounded-lg border gap-6 border-dark/5 dark:border-white/5 flex items-center justify-between p-8 ">
                                    <h3 className="text-2xl text-dark dark:text-white font-normal">
                                        {item.title}
                                    </h3>
                                    <Icon icon={item.icon} width={48} height={48} className="light-icon" />
                                </motion.div>
                            ))}

                            {services.length === 0 && (
                                <p className="text-center text-dark/70 dark:text-white/70 col-span-full py-12">
                                    Loading services...
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesListing
