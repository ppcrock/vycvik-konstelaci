import React from "react";
import Image from "next/image";
import CountUp from "../../shared/animation/CountUp";

function WebResults() {
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
    const data = [
        {
            title: "Projects Completed",
            value: 5500
        },
        {
            title: "Global Clients",
            value: 250
        },
        {
            title: "Years of operation",
            value: 8
        },
        {
            title: "Team Size",
            value: 45
        },
        {
            title: "Client Retention",
            value: 95
        }
    ]
    return (
        <section className="relative" id="aboutus">
            <div className="relative before:absolute before:h-3/4 before:w-full before:bg-linear-to-r before:from-cyan-gradient before:via-white before:to-purple-gradient dark:before:from-dark-cyan-gradient dark:before:via-black dark:before:to-dark-purple-gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-0 before:blur-3xl before:-z-10">
                <div className="container mx-auto px-4 relative">
                    <div className="mt-14 z-30">
                        <Image src="/images/web-result/web-result.webp" alt="web-results" width={1920} height={768} />
                    </div>
                </div>
                <div className="bg-white dark:bg-[#121212] lg:py-16 py-8 lg:absolute relative flex-wrap lg:bottom-0 z-30 w-full ">
                    <div className="container mx-auto px-4 grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-y-10">
                        {data.map((item, index) => (
                            <div key={index} className="flex lg:justify-center justify-start gap-4">
                                <div className="h-full w-0.5 bg-gradient-to-b from-primary to-white"></div>
                                <div>
                                    <h3 className="sm:text-4xl text-2xl lg:text-5xl">
                                        <CountUp to={item.value} />
                                        <span className="text-dark/20 dark:text-white/20">
                                            {item.title === "Client Retention" ? '%' : '+'}
                                        </span>
                                    </h3>
                                    <p>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WebResults;