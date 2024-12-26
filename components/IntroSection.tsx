'use client';

import React, { useEffect, useState } from 'react';
import VideoGroup from './ui/VideoGroup';

const IntroSection = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);
    const [showCustomCursor, setShowCustomCursor] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
     
    const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setTimeout(() => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        }, 10);
    };

    useEffect(() => {
        if(typeof window !== "undefined" && window.innerWidth > 546){
            setIsDesktop(true);
        }   
    }, [])

    return (
        <div>
            <section
                className={`h-[80vh] md:h-[100vh] bg-gradient-to-b from-primary to-black flex text-center text-white relative group
                    }`}
                id="intro"
                onMouseEnter={(e) => {setCursorPosition({ x: e.clientX, y: e.clientY }); setShowCustomCursor(true); }} // Show custom cursor 
                onMouseLeave={() => {setShowCustomCursor(false); }} // Hide custom cursor
                onMouseMove={(e) => {handleMouseMove(e)}}
            >
                {/* only on desktop */}
                {isDesktop && <VideoGroup/>}


                <div
                    className={`mx-auto w-full md:w-1/2 my-auto z-5 space-y-8`}
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
            {isDesktop && (
                <div
                    className={`custom-cursor`}
                    style={{
                        width: '10px',
                        height: '10px',
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        transform: showCustomCursor ?  isZoomed ? 'scale(15)' : 'scale(8)' : 'scale(1)',
                        zIndex: 0,
                        opacity: showCustomCursor ? isZoomed ? '0.8': '1' : '0',
                        backgroundColor: isZoomed ? 'black' : 'white',
                        transition: 'transform 0.3s ease',
                        pointerEvents: 'none'
                    }}
                />)}
        </div>
    );
};

export default IntroSection;
