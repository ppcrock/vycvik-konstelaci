"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const currentScroll = useRef(0);
    const targetScroll = useRef(0);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        // Function to update body height
        const updateHeight = () => {
            const height = scrollContainer.scrollHeight;
            document.body.style.height = `${height}px`;
        };

        updateHeight();

        // Update on resize of window
        window.addEventListener("resize", updateHeight);

        // Use ResizeObserver to watch for content changes
        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });
        resizeObserver.observe(scrollContainer);

        // Scroll listener
        const onScroll = () => {
            targetScroll.current = window.scrollY || window.pageYOffset;
        };
        window.addEventListener("scroll", onScroll);

        // Animation frame loop
        const render = () => {
            currentScroll.current += (targetScroll.current - currentScroll.current) * 0.1;
            const roundedScroll = Math.round(currentScroll.current * 100) / 100;

            gsap.set(scrollContainer, { y: -roundedScroll });

            requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener("resize", updateHeight);
            window.removeEventListener("scroll", onScroll);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div
            ref={scrollContainerRef}
            style={{ willChange: "transform" }}
            className="scroll-container"
        >
            {children}
        </div>
    );
}
