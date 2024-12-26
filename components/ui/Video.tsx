'use client';

import { useRef} from "react";

interface VideoProps extends React.HTMLProps<HTMLVideoElement> {
    src: string;
}

export function Video({ src, ...props }: VideoProps) {
    const ref = useRef<HTMLVideoElement>(null);

    // useEffect(() => {
    //     const video = ref.current;
    //     if (video) {
    //         const handlePlay = () => console.log("Video is playing");
    //         const handlePause = () => console.log("Video is paused");

    //         video.addEventListener("play", handlePlay);
    //         video.addEventListener("pause", handlePause);

    //         return () => {
    //             video.removeEventListener("play", handlePlay);
    //             video.removeEventListener("pause", handlePause);
    //         };
    //     }
    // }, []);

    const playVid = async () => {
        const video = ref.current;
        if(!video) return;
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended 
        && video.readyState > video.HAVE_CURRENT_DATA;
        if (!isPlaying) {
            video.play();
        }
        // if (ref.current && ref.current.paused) {
        //     try {
        //         await ref.current?.play();
        //     } catch (error) {
        //         console.error("Error playing video:", error);
        //     }
        // }
    };

    const pauseVid = () => {
        const video = ref.current;
        if(!video) return;
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended 
        && video.readyState > video.HAVE_CURRENT_DATA;
        if (isPlaying) {
            video.pause();
        }
        // try {
        //     if (ref.current && !ref.current.paused) {
        //         ref.current.pause();
        //     }
        // } catch (error) {
        //     console.error("Error pausing video:", error);
        // }
    };

    return (
        <video
            {...props}
            ref={ref}
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
