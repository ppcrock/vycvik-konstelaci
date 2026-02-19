import { Icon } from "@iconify/react"
import CountUp from "@/app/components/shared/animation/CountUp"
import Link from "next/link"

function Pricing() {
    const PlansData = [
        {
            plan: "Pro",
            description: "Ideal for those with a live website who need expert help refining its design, boosting SEO, and improving overall site performance.",
            price: 2500,
            url: "/contact",
            features: [
                "Up to 5 custom page designs.",
                "Advanced UI/UX design services.",
                "SEO optimization for up to 10 pages.",
                "Monthly analytics and performance reports.",
                "Priority email and chat support.",
            ]
        },
        {
            plan: "Pro Plus",
            description: "Great for active websites ready to scale, offering deeper design support, SEO expansion, and strategic enhancements for better growth.",
            price: 3800,
            url: "/contact",
            features: [
                "Up to 10 custom page designs.",
                "Advanced UI/UX design with prototyping.",
                "SEO optimization for up to 20 pages.",
                "Weekly analytics and performance reports.",
                "Social media strategy and integration.",
                "Dedicated account manager.",
                "2 rounds of revisions per design.",
                "3rd-party tool integration (CRM, Chatbots)"
            ]
        },
        {
            plan: "Custom",
            description: "If these plans don’t fit, let’s create one that truly suits you. Customize your subscription for a perfect fit, whether bigger or small!",
            price: 0,
            url: "/contact",
            features: [
                "Unlimited custom page designs.",
                "Comprehensive UI/UX research and testing.",
                "End-to-end branding services",
                "Custom integrations",
                "Dedicated design and development team.",
                "On-demand consultation and strategy planning.",
            ]
        }
    ]
    return (
        <section id="pricing">
            <div className="relative before:absolute before:h-3/4 before:w-full before:bg-linear-to-r before:from-cyan-gradient before:via-white before:to-purple-gradient dark:before:from-dark-cyan-gradient dark:before:via-black dark:before:to-dark-purple-gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
                <div className="container mx-auto px-4">
                    <div className='max-w-[425px] text-center mx-auto'>
                        <h2>
                            Pick the plan that fits your {' '}
                            <span className='instrument-font italic font-normal dark:text-white/70'>
                                Business
                            </span>
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-14">
                        {PlansData.map((item, index) => (
                            <div key={index} className="p-10 rounded-2xl border border-dark/25 dark:border-white/25 flex flex-col justify-between">
                                <div className="flex flex-col gap-12 flex-1">
                                    <div>
                                        <div className={`py-2.5 px-5 rounded-xl w-fit ${item.plan === "Custom" ? "bg-white dark:bg-dark" : "bg-dark dark:bg-white"}`}>
                                            <p className={`text-20  ${item.plan === "Custom" ? "dark:text-white text-dark" : "text-white dark:text-dark"} `}>
                                                {item.plan}
                                            </p>
                                        </div>
                                        <p className="mt-4">{item.description}</p>
                                    </div>
                                    <div>
                                        {item.plan === "Custom" ?
                                            <h3 className="text-5xl">
                                                Lets’s talk!
                                            </h3>
                                            : <h3 className="text-5xl">
                                                $<CountUp from={0} to={item?.price} /><span className="text-lg text-dark/60 dark:text-white/60">/month</span>
                                            </h3>
                                        }
                                    </div>
                                </div>
                                <div className="py-6 my-6 border-y border-dark/10 dark:border-white/10 flex-2">
                                    <ul>
                                        {item.features.map((features, index) => (
                                            <li key={index} className="mb-4 last:mb-0">
                                                <p className="flex text-dark dark:text-white items-center gap-4">
                                                    <Icon icon={"solar:unread-linear"} width={24} height={24} />
                                                    {features}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href={item.url} className="shadow-button-shadow w-full py-4 rounded-full border border-dark/10 dark:border-white/10 cursor-pointer text-center bg-white dark:bg-dark hover:bg-primary duration-300 hover:text-white">
                                    {item.plan === "Custom" ? "Book a call" : "Get started"}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing