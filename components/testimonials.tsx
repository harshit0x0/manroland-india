'use client'

// import { useEffect } from "react";

import Image from "next/image";

const testimonialData = [
    {
        name: "Deepak Walia",
        designation: "Managing Director, Manroland India",
        url: "/images/bikano.jpg",
        message: "I am very happy that vaishali pandey is doing such a great job.",
    },
    {
        name: "Peter Sir",
        designation: "Assistant Retired Managing Director, Manroland India",
        url: "/images/cadbury.jpg",
        message: "I am very happy that vaishali pandey is doing such a great job. I am retired",
    },
    {
        name: "Deepak Walia",
        designation: "Managing Director, Manroland India",
        url: "/images/bikano.jpg",
        message: "I am very happy that vaishali pandey is doing such a great job.",
    },
    {
        name: "Peter Sir",
        designation: "Assistant Retired Managing Director, Manroland India",
        url: "/images/cadbury.jpg",
        message: "I am very happy that vaishali pandey is doing such a great job. I am retired",
    },
];


export default function Testimonials() {

    return (
        <section className="bg-primary text-white py-10 relative overflow-hidden">
            <div className="container mx-auto ">
                {/* <div className="absolute top-0 left-0 w-full h-full z-1">
                    <svg viewBox="100 100 1200 1200" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="90,20 900,300 30, 350 1000, 700" fill="none" stroke="#9970DB" strokeWidth="15" />
                    </svg>
                </div> */}
                <h2 className="text-2xl lg:text-4xl font-thin text-center mb-10 z-2">What Our Cusomers Say</h2>
                <div className="relative overflow-hidden" id="scrollParent">
                    <div className="flex animate-scroll space-x-6 lg-space-x-12 w-[150%] " id="scrollContainer">
                        {/* Testimonial Cards */}
                        {testimonialData.map((data, index) => (
                            <div
                                key={index}
                                className="w-[600px] bg-black bg-opacity-50 text-gray-200 rounded-lg shadow-lg p-6 lg:p-12"
                            >
                                <p className="italic text-lg mb-4">
                                    {data.message}
                                </p>
                                <div className="flex items-center">
                                    <Image
                                        src={data.url}
                                        alt="Client"
                                        className="w-12 h-12 rounded-full mr-4"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h4 className="font-bold">{data.name}</h4>
                                        <p className="text-sm text-gray-500">{data.designation}</p>
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

