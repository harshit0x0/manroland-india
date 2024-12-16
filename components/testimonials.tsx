'use client'
import Image from "next/image";
export default function Testimonials() {
    return (
        <section className="bg-primary text-white py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-4xl font-thin text-center mb-10">What Our Clients Say</h2>
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll space-x-6">
                        {/* Testimonial Cards */}
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="w-[300px] lg:w-[400px] bg-white text-gray-800 rounded-lg shadow-lg p-6"
                            >
                                <p className="italic text-lg mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis
                                    urna. Praesent vehicula eros ac urna euismod.
                                </p>
                                <div className="flex items-center">
                                    <Image
                                        src={``}
                                        alt="Client"
                                        className="w-12 h-12 rounded-full mr-4"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h4 className="font-bold">John Doe</h4>
                                        <p className="text-sm text-gray-500">CEO, ExampleCorp</p>
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

