'use client'
interface VideoProps extends React.HTMLProps<HTMLVideoElement> {
    src: string;
}

export function Video({ src, ...props }: VideoProps) {
    return (
        <video
            {...props}
            preload="auto"
            autoPlay={false}
            loop={true}
            className="w-full h-full rounded-lg border-2 border-blue-500"
            muted
            onMouseOver={(e) => { (e.target as HTMLVideoElement).play(); }}
            onMouseLeave={(e) => { (e.target as HTMLVideoElement).pause(); }}
        >
            <source src={src} type="video/mp4" />
        </ video>
    )
}

