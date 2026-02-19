'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import IntroOverlay from '@/app/components/shared/animation/IntroOverlay';

interface AnimatedWrapperProps {
    children: React.ReactNode;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children }) => {
    const [startAnim, setStartAnim] = useState(false);
    const [introDone, setIntroDone] = useState(false);

    return (
        <>
            {!introDone && (
                <IntroOverlay
                    onStartExit={() => setStartAnim(true)}
                    onFinish={() => setIntroDone(true)}
                />
            )}

            {/* Only render content wrapper if intro started or is done */}
            {(startAnim || introDone) && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.77, 0, 0.175, 1],
                    }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    {children}
                </motion.div>
            )}
        </>
    );
};

export default AnimatedWrapper;
