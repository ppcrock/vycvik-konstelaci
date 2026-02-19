"use client"
import { motion } from "motion/react";
import Link from "next/link";

function CollaborationCard() {
    return (
        <section>
            <div className="container mx-auto px-4">
                <div className="bg-dark shadow-collaborator-shadow rounded-3xl lg:p-28 sm:p-16 p-6 flex flex-col gap-8">
                    <motion.h2
                        className="lg:text-7xl sm:text-5xl text-2xl font-semibold text-center text-transparent bg-clip-text"
                        animate={{
                            backgroundImage: [
                                "linear-gradient(to right, #25D2FC, #F157E3)",
                                "linear-gradient(to right, #E7A25F, #25D2FC)",
                            ],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                        }}
                    >
                        Ready to transform your vision into reality? Let's collaborate today!
                    </motion.h2>
                    <p className="text-white/60 sm:text-20 text-base text-center lg:px-20">
                        "Have a project in mind? We're here to turn your vision into reality. Our team of experts is ready to collaborate
                        and deliver exceptional results. Let’s work together to bring your ideas to life!"
                    </p>
                    <div className="flex items-center justify-center">
                        <Link href="/contact" className="bg-white py-3.5 px-8 border border-white text-dark rounded-full text-lg font-semibold hover:bg-transparent hover:text-white duration-300 cursor-pointer">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CollaborationCard