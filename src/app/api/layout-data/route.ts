import { NextResponse } from "next/server";

const headerData = [
    { label: 'O mně', href: '/aboutus' },
    { label: 'Služby', href: '/services' },
    { label: 'Kontakt', href: '/contact' },
];

const footerData = {
    brand: {
        name: "Výcvik konstelací",
    },
    socialLinks: [
        { name: "Facebook", url: "https://www.facebook.com/onlinekonstelace", icon: "tabler:brand-facebook" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/jankrejcirik/", icon: "tabler:brand-linkedin" },
        { name: "Instagram", url: "https://www.instagram.com/onlinekonstelace", icon: "tabler:brand-instagram" },
        { name: "YouTube", url: "https://www.youtube.com/@onlinekonstelace", icon: "tabler:brand-youtube" },
    ],
    copyright: "©2026 Výcvik konstelací"
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