"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { TextGenerateEffect } from '@/app/components/shared/animation/text-generate-effect';
import { motion, useInView } from "motion/react";
import { useRef } from 'react';

function Testimonial() {
    const TestimonialData = [
        {
            img: "/images/testimonial/testimonial-img-1.webp",
            name: "Luke Van de Berg",
            designation: "Brand Designer",
            review: "“Syncrowave has revolutionized the way we manage our sales and marketing efforts. the intuitive design and powerful analytics have made it easier than ever to track our progress and make informed decisions”"
        },
        {
            img: "/images/testimonial/testimonial-img-2.webp",
            name: "Maya Patel",
            designation: "Head of Marketing",
            review: "“Working with Optura was a game‐changer for our brand. Their team understood our vision from day one, and delivered a website that not only looks stunning but also converts. We saw a 45% increase in leads within the first month.”"
        },
        {
            img: "/images/testimonial/testimonial-img-3.webp",
            name: "Rohan Singh",
            designation: "CEO",
            review: "“Optura’s design and development process was seamless. They communicated clearly, hit every milestone, and delivered on time. Our new site feels fresh, modern, and is easy for our customers to use.”"
        },
        {
            img: "/images/testimonial/testimonial-img-4.webp",
            name: "Nikhil Agarwal",
            designation: "Product Lead",
            review: "“Optura turned our concept into reality. The level of professionalism and creativity they brought was outstanding — our visitors love the new design.”"
        },
        {
            img: "/images/testimonial/testimonial-img-5.webp",
            name: "Sameer Rao",
            designation: "Founder & CTO",
            review: "“We needed a partner who understood both branding and tech — Optura was that and more. Their solutions are smart, elegant, and built for results.”"
        },
    ]

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="dark:bg-white/20 ' + className + '">' + '</span>';
        },
    };

    const sectionRef = useRef(null);
    const inView = useInView(sectionRef)
    const leftAnimation = (index: any) => ({
        initial: { x: '-5%', opacity: 0 },
        animate: inView ? { x: 0, opacity: 1 } : { x: '-10%', opacity: 0 },
        transition: { duration: 0.4, delay: 0.7 + index * 0.3 },
    })

    return (
        <section ref={sectionRef}>
            <div className="relative before:absolute before:h-3/4 before:w-full before:bg-linear-to-r before:from-cyan-gradient before:via-white before:to-purple-gradient dark:before:from-dark-cyan-gradient dark:before:via-black dark:before:to-dark-purple-gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
                <div className="container lg:max-w-7xl px-4 mx-auto">
                    <h2 className="max-w-xl mx-auto text-center">
                        What our
                        <span className='instrument-font italic font-normal dark:text-white/70'>
                            {' '}
                            satisfied
                            {' '}
                        </span>
                        customers are saying about us
                    </h2>
                    <div className="mt-11">
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            pagination={pagination}
                            modules={[Pagination]}
                            grabCursor={true}
                        >
                            {TestimonialData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="grid lg:grid-cols-2 gap-6 items-center justify-between sm:p-8">
                                        <motion.div {...leftAnimation(index)} className="p-1 bg-white dark:bg-dark shadow-testimonial-shadow rounded-2xl h-full">
                                            <Image src={item.img} alt={item.name} width={616} height={616} className='rounded-2xl h-full w-full' />
                                        </motion.div>
                                        <div className="shadow-testimonial-shadow p-12 rounded-2xl flex flex-col justify-between gap-6 lg:h-[616px] bg-white dark:bg-dark">
                                            <h3 className='md:text-3xl text-lg font-medium'>
                                                <TextGenerateEffect words={item.review} duration={0.2} />
                                            </h3>
                                            <div>
                                                <h4 className='text-primary font-semibold'>
                                                    {item.name}
                                                </h4>
                                                <p>
                                                    {item.designation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial