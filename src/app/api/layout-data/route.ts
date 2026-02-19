import { NextResponse } from "next/server";

const headerData = [
    { label: 'About us', href: '/aboutus' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Team', href: '/team' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
    {
        label: 'Pages',
        href: '#',
        submenu: [
            {
                label: "Pages",
                type: "group",
                links: [
                    { label: 'About us', href: '/aboutus' },
                    { label: 'Services', href: '/services' },
                    { label: 'Work', href: '/work' },
                    { label: 'Team', href: '/team' },
                    { label: 'Pricing', href: '/pricing' },
                    { label: 'Contact', href: '/contact' },
                ],
            },
            {
                label: "T&C",
                type: "group",
                links: [
                    { name: "Privacy Policy", url: "/privacy-policy" },
                    { name: "Term of service", url: "/terms-and-conditions" },
                    { name: "Documentation", url: "/documentation" }
                ],
            },
            {
                label: "Website",
                type: "group",
                links: [
                    { name: "Get NextJs Templates", url: "https://getnextjstemplates.com/" }
                ]
            }
        ]
    },
];

const footerData = {
    brand: {
        name: "Optura",
        tagline: "Empowering businesses with innovative solutions. Let's create something amazing together.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://twitter.com"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://linkedin.com/in"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://dribbble.com"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://instagram.com"
            }
        ]
    },
    menu: {
        name: "Menu",
        links: [
            { name: 'About us', url: '/aboutus' },
            { name: 'Services', url: '/services' },
            { name: 'Work', url: '/work' },
            { name: 'Team', url: '/team' },
            { name: 'Pricing', url: '/pricing' },
        ]
    },
    support: {
        name: "Support",
        links: [
            { name: "Contact us", url: "/contact" },
            { name: "About us", url: "/aboutus" },
            { name: "Work", url: "/work" },
            { name: "Services", url: "/services" },
            { name: "Pricing", url: "/pricing" },
        ]
    },
    socials: {
        name: "Socials",
        links: [
            { name: "Twitter", url: "https://twitter.com/wrappixel", icon: "tabler:brand-x" },
            { name: "Linkedin", url: "https://www.linkedin.com/company/wrappixel/", icon: "tabler:brand-linkedin" },
            { name: "Dribbble", url: "https://dribbble.com/wrappixel", icon: "tabler:brand-dribbble" },
            { name: "Instagram", url: "https://www.instagram.com/wrappixel", icon: "tabler:brand-instagram" },
        ]
    },
    terms: {
        name: "T&C",
        links: [
            { name: "Privacy Policy", url: "/privacy-policy" },
            { name: "Term of service", url: "/terms-and-conditions" },
            { name: "Documentation", url: "/documentation" }
        ]
    },
    copyright: "©2025 Optura. All Rights Reserved"
};

const ServiceData = [
    { title: "Brand Strategy", icon: "solar:palette-round-linear", description: "Crafting strong brand identities that resonate with your audience." },
    { title: "UI/UX Design", icon: "solar:magic-stick-3-linear", description: "Designing visually stunning and user-friendly interfaces." },
    { title: "Web Development", icon: "solar:window-frame-linear", description: "Building fast, modern, and scalable web experiences." },
    { title: "Mobile App Design", icon: "solar:iphone-linear", description: "Creating intuitive mobile designs for all devices." },
    { title: "Digital Marketing", icon: "solar:album-linear", description: "Expanding your reach through data-driven marketing strategies." },
    { title: "Search Engine Optimization (SEO)", icon: "solar:global-linear", description: "Improving your online visibility and search rankings." },
    { title: "Content Creation", icon: "solar:notes-linear", description: "Producing impactful, brand-aligned digital content." },
    { title: "Social Media Management", icon: "solar:users-group-rounded-linear", description: "Growing and engaging your audience authentically." },
    { title: "Analytics and Reporting", icon: "solar:chart-linear", description: "Delivering insights to drive smarter decisions." },
    { title: "Consultation Services", icon: "solar:hand-stars-linear", description: "Providing expert guidance for business growth." },
    { title: "E-Commerce Solutions", icon: "solar:cart-large-2-linear", description: "Developing seamless and conversion-driven stores." },
    { title: "Motion Graphics", icon: "solar:stars-line-linear", description: "Animating ideas with engaging motion visuals." },
]

export const GET = async () => {
    return NextResponse.json({
        headerData,
        footerData,
        ServiceData
    });
};