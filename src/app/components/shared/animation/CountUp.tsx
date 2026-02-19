"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    from?: number;
    to: number;
    duration?: number;
    className?: string;
    formatWithCommas?: boolean;
}

export default function CountUp({
    from = 0,
    to,
    duration = 2,
    className,
    formatWithCommas = true,
}: CountUpProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Only animate once
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.floor(latest));
    const [display, setDisplay] = useState(
        formatWithCommas ? from.toLocaleString() : from.toString()
    );

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(count, to, { duration });
        const unsubscribe = rounded.on('change', (v) => {
            setDisplay(formatWithCommas ? v.toLocaleString() : v.toString());
        });

        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [isInView, count, rounded, to, duration, formatWithCommas]);

    return (
        <motion.span ref={ref} className={className}>
            {display}
        </motion.span>
    );
}
