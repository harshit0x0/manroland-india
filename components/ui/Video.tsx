'use client'
interface VideoProps extends React.HTMLProps<HTMLVideoElement> {
    src: string;
}

export function Video({ src, ...props }: VideoProps) {

    // @ts-expect-error because of video element
    function playVideo(e) {
        const videoPromise = (e.target as HTMLVideoElement).play();
        if (videoPromise !== undefined) {
            videoPromise.then(() => {
                e.target.play();
                e.target.currentTime = 0;
            }).catch(error => { console.log(error) });
        }
    }

    return (
        <video
            {...props}
            preload="auto"
            autoPlay={false}
            loop={true}
            className="w-full h-full rounded-lg border-2 border-blue-500"
            muted
            onMouseOver={playVideo}
            onMouseLeave={(e) => { (e.target as HTMLVideoElement).pause(); }}
        >
            <source src={src} type="video/mp4" />
        </ video>
    )
}

