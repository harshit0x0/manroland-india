'use client'

// import { useEffect } from "react";
import TypewriterText from "./ui/TextEffects/typewriter";

import Image from "next/image";

const testimonialData = [
    {
        name: "Mr.Amit Gulati",
        designation: "Director, Galaxy offset",
        url: "/images/people/AmitGulati.jpg",
        message: "“We run the machine at higher speeds like 15k-16k also. Great performance throughout.”",
    },
    {
        name: "Mr. Ramesh Kejriwal",
        designation: "Chairman, Parksons packaging",
        url: "/images/people/RameshKejriwal.jpg",
        message: "“We have been using manroland since our inception. The machine has unmatched performance”",
    },
    {
        name: "Mr. Amit Shah",
        designation: "Managing Director, Spectrum Scan",
        url: "/images/people/AmitShah.jpg",
        message: "“If you ask me- no machine can match the print quality of manroland on different substrates”",
    },
    {
        name: "Mr. Pravin Patel",
        designation: "Hira Prints",
        url: "/images/people/PravinPatel.jpg",
        message: "“The entire team is very humble,engineers are very efficient and qualified.we recieve fantastic support from manroland.”",
    },
];


export default function Testimonials() {

    return (
        <section className="bg-gradient-to-r h-[80vh] from-pink-200 via-violet-300 to-indigo-400 text-white py-10 relative overflow-hidden">
            <div className="container m-auto flex flex-col justify-center h-full">
                {/* <div className="absolute top-0 left-0 w-full h-full z-1">
                    <svg viewBox="100 100 1200 1200" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="90,20 900,300 30, 350 1000, 700" fill="none" stroke="#9970DB" strokeWidth="15" />
                    </svg>
                </div> */}
                <TypewriterText
                    text="Testimonials that Shine..."
                    className="text-2xl lg:text-5xl font-bold text-violet-700 opacity-60 text-center mb-12 z-2"
                />
                {/* <h2 className="text-2xl lg:text-4xl font-thin text-center mb-12 z-2">Testimonials that Shine</h2> */}
                <div className="relative overflow-hidden " id="scrollParent">
                    <div className="flex animate-scroll space-x-6 lg-space-x-12 text-center w-[280%] lg:w-[150%] " id="scrollContainer">
                        {/* Testimonial Cards */}
                        {testimonialData.map((data, index) => (
                            <div
                                key={index}
                                className="w-[600px] bg-black bg-opacity-50 text-gray-200 rounded-lg shadow-lg p-6 lg:p-12"
                            >
                                <p className="italic text-lg mb-4">
                                    {data.message}
                                </p>
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={data.url}
                                        alt="Client"
                                        className="h-20 w-20 lg:w-40 lg:h-40 rounded-full mr-4"
                                        width={200}
                                        height={200}
                                    />
                                    <div className="mt-4">
                                        <h4 className="font-bold text-lg lg:text-xl text-gray-900">{data.name}</h4>
                                        <p className="text-sm text-gray-100">{data.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    display: flex;
                    animation: scroll 20s linear infinite;
                }

                /* Clone for infinite loop */
                .animate-scroll:after {
                    content: "";
                    display: flex;
                    flex: 1;
                }
            `}</style>
        </section>
    );
}

