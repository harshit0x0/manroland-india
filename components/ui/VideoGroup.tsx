'use client'
import { Video } from "./Video"

export default function VideoGroup() {
    return (
        <div>
            {/* left and right  */}
            <div className="container opacity-0 hover:opacity-100 absolute left-0 top-0 h-[200px] w-fit m-1 hover:m-6 hover:h-[250px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/First.mp4" />
            </div>
            <div className="container opacity-0 hover:opacity-100 absolute right-0 top-0 h-[200px] w-fit m-1 hover:m-6 hover:h-[250px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/second.mp4" />
            </div>

            {/* middle  */}
            <div className="container opacity-0 hover:opacity-100 absolute right-[20vw] top-[20vh] h-[150px] w-fit m-1 hover:m-6 hover:h-[250px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/third.mp4" />
            </div>
            <div className="container opacity-0 hover:opacity-100 absolute left-[20vw] bottom-[20vh] h-[150px] w-fit m-1 hover:m-6 hover:h-[250px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/fourth.mp4" />
            </div>

            {/* sides  */}
            <div className="container opacity-0 hover:opacity-100 absolute right-[0vw] top-[40vh] h-[150px] w-fit m-1 hover:m-6 hover:h-[200px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/five.mp4" />
            </div>
            <div className="container opacity-0 hover:opacity-100 absolute left-[0vw] bottom-[40vh] h-[150px] w-fit m-1 hover:m-6 hover:h-[200px]   hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/sixth.mp4" />
            </div>


            {/* bottom-middle  */}
            <div className="container opacity-0 hover:opacity-100 absolute right-[40vw] top-[5vh] h-[200px] w-fit m-1 hover:m-6 hover:h-[150px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/First.mp4" />
            </div>
            <div className="container opacity-0 hover:opacity-100 absolute left-[40vw] bottom-[5vh] h-[200px] w-fit m-1 hover:m-6 hover:h-[150px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/second.mp4" />
            </div>

            {/* top-bottom-side  */}
            <div className="container opacity-0 hover:opacity-100 absolute left-[30vw] bottom-0 h-[100px] w-fit m-1 hover:m-6 hover:h-[150px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/third.mp4" />
            </div>
            <div className="container opacity-0 hover:opacity-100 absolute right-[30vw] top-0 h-[100px] w-fit m-1 hover:m-6 hover:h-[150px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/fourth.mp4" />
            </div>

            {/* bottom  */}
            <div className="container opacity-0 hover:opacity-100 absolute left-0 bottom-0 h-[200px] w-fit m-1 hover:m-6 hover:h-[150px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/five.mp4" />
            </div>
            <div className="container opacity-0 hover:opacity-100 absolute right-0 bottom-0 h-[200px] w-fit m-1 hover:m-6 hover:h-[150px] hover:translate-x-5 transistion duration-1000">
                <Video src="/Videos/sixth.mp4" />
            </div>
        </div>
    )
}