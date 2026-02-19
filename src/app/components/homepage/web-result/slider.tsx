'use client';

import React from 'react';
import Image from 'next/image';

interface Slide {
    id: number;
    image: string;
    title: string;
}

// Step 1: Define constants
const ROTATION_STEP = 12;
const TRANSLATE_X_STEP = 200;
const TRANSLATE_Y_STEP = 40;
const BASE_Z_INDEX = 10;

// Step 2: Slide data
const slides: Slide[] = [
    { id: 1, image: '/images/products/homely.png', title: 'Homely' },
    { id: 2, image: '/images/products/studiova.png', title: 'Studiova' },
    { id: 3, image: '/images/products/gleamer.png', title: 'Gleamer' },
    { id: 4, image: '/images/products/crypgo.png', title: 'Crypgo' },
    { id: 5, image: '/images/products/desgy.png', title: 'Desgy' },
];

// Step 3: Utility function for slide style
function getSlideStyle(index: number, centerIndex: number) {
    const offset = index - centerIndex;
    const angle = offset * ROTATION_STEP;
    const translateX = offset * TRANSLATE_X_STEP;
    const translateY = Math.abs(offset) * TRANSLATE_Y_STEP;
    const zIndex = BASE_Z_INDEX - Math.abs(offset);

    return {
        transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${angle}deg)`,
        transformOrigin: 'bottom center',
        zIndex,
    };
}

export default function CardSlider() {
    const centerIndex = Math.floor(slides.length / 2);

    return (
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-h-[764px] h-full">
                {slides.map((slide, index) => {
                    const style = getSlideStyle(index, centerIndex);

                    return (
                        <div
                            key={slide.id}
                            className="absolute top-0 left-1/2 transition-all duration-300"
                            style={{
                                ...style,
                                left: '50%',
                                transform: style.transform,
                                transformOrigin: style.transformOrigin,
                                zIndex: style.zIndex,
                            }}
                        >
                            <div className="rounded-xl shadow-product-shadow bg-white overflow-hidden w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                                <Image
                                    src={slide.image}
                                    alt={`Screenshot of ${slide.title} project`}
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-full"
                                    priority
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
