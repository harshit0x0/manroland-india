'use client';

import { useRef, useState, useEffect } from "react";

interface VideoProps extends React.HTMLProps<HTMLVideoElement> {
    src: string;
}

export function Video({ src, ...props }: VideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handlePlay = () => setIsPlaying(true);
            const handlePause = () => setIsPlaying(false);

            video.addEventListener("play", handlePlay);
            video.addEventListener("pause", handlePause);

            return () => {
                video.removeEventListener("play", handlePlay);
                video.removeEventListener("pause", handlePause);
            };
        }
    }, []);

    const playVid = async () => {
        if (videoRef.current && videoRef.current.paused) {
            try {
                await videoRef.current.play();
            } catch (error) {
                console.error("Failed to play video:", error);
            }
        }
    };

    const pauseVid = () => {
        if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
        }
    };

    return (
        <video
            {...props}
            ref={videoRef}
            preload="auto"
            loop
            muted
            className="w-full h-full rounded-lg border-2 border-blue-500"
            onMouseOver={playVid}
            onMouseLeave={pauseVid}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
