'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function IntroOverlay({ onStartExit, onFinish }: any) {
    const [show, setShow] = useState(true);
    const [startExit, setStartExit] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStartExit(true);
            if (onStartExit) onStartExit();
        }, 500);

        const endTimeout = setTimeout(() => {
            setShow(false);
            if (onFinish) onFinish();
        }, 1000);

        return () => {
            clearTimeout(startTimeout);
            clearTimeout(endTimeout);
        };
    }, [onStartExit, onFinish]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[999] bg-dark h-screen flex items-center justify-center flex-col"
                    initial={{ y: 0 }}
                    animate={{
                        y: startExit ? '-100%' : 0,
                    }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                    style={{ overflow: 'hidden', willChange: 'transform' }}
                >
                    <div className="flex items-center gap-3">
                        <p className="text-4xl text-light">Welcome to</p>
                        <img src="/images/logo/DarkModeLogo.svg" alt="Logo" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
