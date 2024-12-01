'use client';

import React, { useEffect, useState } from 'react';
import VideoGroup from './ui/VideoGroup';

const IntroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);
    const [showCustomCursor, setShowCustomCursor] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(window.innerWidth > 546);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('intro');
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        // Update cursor position
        const handleMouseMove = (e: MouseEvent) => {
            setTimeout(() => {
                setCursorPosition({ x: e.clientX, y: e.clientY });
            }, 10);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <section
                className={`h-[80vh] md:h-[100vh] bg-gradient-to-b from-primary to-black flex text-center text-white relative group ${isVisible ? 'visible' : ''
                    }`}
                id="intro"
                onMouseEnter={() => setShowCustomCursor(true)} // Show custom cursor
                onMouseLeave={() => setShowCustomCursor(false)} // Hide custom cursor
            >
                {/* only on desktop */}
                {isDesktop && <VideoGroup />}
                <div
                    className={`mx-auto w-full md:w-1/2 my-auto z-5 space-y-8  fade-up ${isVisible ? 'visible' : ''}`}
                    onMouseEnter={() => setIsZoomed(true)}
                    onMouseLeave={() => setIsZoomed(false)}
                >
                    <h2
                        className="text-3xl md:text-5xl font-bold z-5"
                    >
                        Pioneering Printing Excellence
                    </h2>
                    <p className="px-10">
                        We are a leading provider of high-quality printing services for both individuals and
                        businesses in India. Our team of experienced professionals is dedicated to delivering
                        exceptional results that meet your unique needs.
                    </p>
                </div>
            </section>
            {/* Custom Cursor */}
            {showCustomCursor && isDesktop && (
                <div
                    className={`custom-cursor`}
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        transform: isZoomed ? 'scale(1.8)' : 'scale(1)',
                        zIndex: 0,
                        backgroundColor: isZoomed ? 'black' : 'white',
                        transition: 'transform 0.3s ease',
                        pointerEvents: 'none'
                    }}
                />)}
        </div>
    );
};

export default IntroSection;
