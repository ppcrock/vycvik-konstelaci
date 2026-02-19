"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from "motion/react";
import { useRef } from 'react';

function OnlinePresence() {
  const onlinePresenceList = [
    {
      image: '/images/products/crypgo.webp',
      title: 'CrypGo Web — Cryptocurrency Landing page',
      tag: ['Landing page'],
      link: 'https://getnextjstemplates.com/products/crypgo-nextjs-tailwind-free-landing-page-template',
      description: 'The CrypGo landing page is a versatile solution designed for customization. you can use it as a foundation to build your own crypto-related websites'
    },
    {
      image: '/images/products/studiova.webp',
      title: 'Studiova — Creative Agency Template',
      tag: ['Agency template'],
      link: 'https://getnextjstemplates.com/products/studiova-nextjs-template',
      description: 'Studiova is a modern and stylish creative agency template designed for branding studios, design firms, and digital agencies.'
    },
    {
      image: '/images/products/homely.webp',
      title: 'Homely — Real Estate Template',
      tag: ['Real estate template'],
      link: 'https://getnextjstemplates.com/products/homely-nextjs-website-template',
      description: 'Homely is a modern real estate template built with Framer, designed for seamless property listings, blogs, and CMS integration.'
    },
    {
      image: '/images/products/gleamer.webp',
      title: 'Gleamer — Cleaning Website Template ',
      tag: ['Mobile app'],
      link: 'https://getnextjstemplates.com/products/gleamer-nextjs-template',
      description: 'Achieve your health goals with FitBite, a smart diet tracker that monitors your meals, tracks calories, and offers personalized nutrition insights.'
    },
  ]

  // ref to the whole section for scroll measurement
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef)
  const bottomAnimation = (index: any) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  })
  return (
    <section id='work' ref={sectionRef} className='overflow-hidden'>
      <div className="relative before:absolute before:h-3/4 before:w-full before:bg-linear-to-r before:from-cyan-gradient before:via-white before:to-purple-gradient dark:before:from-dark-cyan-gradient dark:before:via-black dark:before:to-dark-purple-gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className='container lg:max-w-7xl mx-auto px-4'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-14'>
            <div className='max-w-2xl text-center'>
              <h2>
                How we transformed a small business’s
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  online presence
                </span>
              </h2>
            </div>
            <div className='grid lg:grid-cols-2 gap-x-6 gap-y-16'>
              {onlinePresenceList?.map((items: any, index: any) => {
                return (
                  <motion.div
                    key={index}
                    {...bottomAnimation(index)}
                    className='group flex flex-col gap-6 cursor-pointer'>
                    <div
                      className='relative h-full'
                    >
                      <Image
                        src={items.image}
                        alt={items.title}
                        width={625}
                        height={410}
                        className='rounded-2xl w-full h-full'
                      />
                      <Link
                        href={items.link}
                        target='_blank'
                        className='absolute top-0 left-0 bg-black/50  w-full h-full rounded-2xl hidden group-hover:flex items-center justify-center'>
                        <span className='py-3 px-6 w-fit h-fit rounded-full bg-white dark:bg-dark hover:bg-dark dark:hover:bg-white text-dark dark:text-white hover:text-white dark:hover:text-dark text-lg font-medium'>
                          View more
                        </span>
                      </Link>
                    </div>

                    <div className='flex flex-col items-start gap-4'>
                      <div className='flex gap-3'>
                        {items.tag?.map((tag: any, index: number) => (
                          <p
                            key={index}
                            className='text-sm border border-dark/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark dark:hover:bg-white text-dark dark:text-white hover:text-white dark:hover:text-dark'>
                            {tag}
                          </p>
                        ))}
                      </div>
                      <h3 className='group-hover:text-primary'>
                        {items.title}
                      </h3>
                      <p className='sm:text-lg'>
                        {items.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlinePresence;
