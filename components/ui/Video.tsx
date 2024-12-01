'use client';

import { useRef, useEffect } from "react";

interface VideoProps extends React.HTMLProps<HTMLVideoElement> {
    src: string;
}

export function Video({ src, ...props }: VideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // Adding event listeners (optional, for logging or other effects)
            const handlePlay = () => console.log("Video is playing");
            const handlePause = () => console.log("Video is paused");

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
                setTimeout(async () => {
                    await videoRef.current?.play();
                }, 200)
            } catch (error) {
                console.error("Error playing video:", error);
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
