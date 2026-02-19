"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, useInView } from "motion/react";
import { useRef } from 'react';

function FAQ() {
    const FAQData = [
        {
            question: "What services does Optura Agency offer?",
            answer: "At Optura, we offer a comprehensive range of creative and technical services, including UI/UX design, responsive web development, mobile app design, content creation, brand identity, and more. We tailor our solutions to fit your unique business goals."
        },
        {
            question: "How long does a typical project take?",
            answer: "The duration of a project varies based on the specific requirements, including scope, complexity, features, and design needs. Smaller projects may take a few weeks, while larger or more custom builds could take several months. We’ll provide a timeline after our initial consultation."
        },
        {
            question: "How is pricing structured at Optura Agency?",
            answer: "Pricing at Optura is customized for each project. We consider the scope, functionality, design complexity, and timeline to provide a fair and transparent quote. Our goal is to offer high-quality solutions that align with your budget and business needs."
        },
        {
            question: "Do you offer ongoing support after project completion?",
            answer: "Yes, absolutely. We offer dedicated post-launch support to help with implementation, performance monitoring, and issue resolution. In addition, we provide ongoing maintenance packages for clients who require regular updates, feature enhancements, or technical support."
        },
        {
            question: "How often will I receive updates on my project?",
            answer: "Communication is key, and we’re flexible with update frequency. Whether you prefer weekly check-ins, milestone-based updates, or real-time collaboration, we’ll tailor the communication to suit your preferences and keep you fully informed throughout the process."
        },
        {
            question: "How do I get started with Optura Agency?",
            answer: "Getting started is easy! Just fill out the contact form below with your project details and objectives. Once we review your requirements, we’ll reach out to schedule a consultation and provide a customized quote tailored to your needs."
        }
    ];
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef)
    const bottomAnimation = (index: any) => ({
        initial: { y: '5%', opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
        transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
    })
    return (
        <section id="faq" ref={sectionRef}>
            <div className="relative before:absolute before:h-3/4 before:w-full before:bg-linear-to-r before:from-cyan-gradient before:via-white before:to-purple-gradient dark:before:from-dark-cyan-gradient dark:before:via-black dark:before:to-dark-purple-gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
                <div className="container lg:max-w-7xl mx-auto">
                    <div className='max-w-[425px] text-center mx-auto'>
                        <h2>
                            Got questions?
                            We’ve got {' '}
                            <span className='instrument-font italic font-normal dark:text-white/70'>
                                answers
                            </span>
                        </h2>
                    </div>
                    <div className="mt-14">

                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="0"
                        >
                            {FAQData.map((item, index) => (
                                <motion.div key={index} {...bottomAnimation(index)}>
                                    <AccordionItem value={`${index}`}>
                                        <AccordionTrigger>{item.question}</AccordionTrigger>
                                        <AccordionContent>{item.answer}</AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ 