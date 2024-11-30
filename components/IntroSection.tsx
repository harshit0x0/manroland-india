'use client';

import React, { useEffect, useState } from 'react';
import VideoGroup from './ui/VideoGroup';

const IntroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);
    const [showCustomCursor, setShowCustomCursor] = useState(false);

    useEffect(() => {
        const section = document.getElementById('intro');

        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, [isVisible]);

    useEffect(() => {
        // Update cursor position
        const handleMouseMove = (e: MouseEvent) => {
            setTimeout(() => {
                setCursorPosition({ x: e.clientX, y: e.clientY });
            }, 100);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <section
                className={`h-[80vh] md:h-[100vh]  bg-gradient-to-b from-primary to-black flex text-center text-white relative group ${isVisible ? 'visible' : ''
                    }`}
                id="intro"
                onMouseEnter={() => setShowCustomCursor(true)} // Show custom cursor
                onMouseLeave={() => setShowCustomCursor(false)} // Hide custom cursor
            >
                {/* only on desktop */}
                {window.innerWidth > 546 && <VideoGroup />}
                <div
                    className={`mx-auto w-full md:w-1/2 my-auto space-y-8  fade-up ${isVisible ? 'visible' : ''}`}
                >
                    <h2
                        className="text-3xl md:text-5xl font-bold z-2"
                        onMouseEnter={() => setIsZoomed(true)}
                        onMouseLeave={() => setIsZoomed(false)}
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
            {showCustomCursor && window.innerWidth > 546 && (
                <div
                    className={`custom-cursor`}
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        transform: isZoomed ? 'scale(2)' : 'scale(1)',
                        zIndex: isZoomed ? 1 : 100,
                        backgroundColor: isZoomed ? 'black' : 'white',
                        transition: 'transform 0.3s ease'
                    }}
                />)}
        </div>
    );
};

export default IntroSection;
