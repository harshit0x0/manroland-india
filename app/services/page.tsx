import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
    const services = [
        {
            name: "ProServC",
            description:
                "Enhance your productivity with our professional service care package designed to maintain peak press performance.",
            link: "/services/proserv",
            imgUrl: '/images/roland900/second.jpg'
        },
        {
            name: "TelePresence",
            description:
                "Get instant support and troubleshooting with our cutting-edge TelePresence solution for remote diagnostics.",
            link: "/services/telepresence",
            imgUrl: '/images/telepresence.jpg'
        },
        {
            name: "Augmented Reality (AR)",
            description:
                "Experience immersive problem-solving with AR technology, enabling efficient support and training sessions.",
            link: "/services/ar",
            imgUrl: '/images/vr.jpg'
        },
        {
            name: "Press Pilot Guide",
            description:
                "Navigate your printing operations effortlessly with the Press Pilot Guide, ensuring optimal efficiency.",
            link: "/services/press-pilot-guide",
            imgUrl: '/images/roland900/fifth.jpg'
        },
    ];

    return (
        <main className="bg-gray-100 min-h-screen py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Initial Paragraph */}
                <header className="text-center mb-12">
                    <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
                    <div className="text-sm lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Even the 500 millionth impression has to look as fresh as the first one. This means that a press
                        must be kept in good shape. We recommend service packages. After all, professional service is the
                        only way to ensure that a highly productive printing system can deliver
                        <div className="inline-block mx-1"><div> day one quality <div className="w-full h-0.5 md:h-1 bg-red-500 mt-0"></div></div></div>
                        quality for many years.
                    </div>
                </header>

                {/* Service Cards */}
                <div className="space-y-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col overflow-hidden rounded-lg group h-[400px] lg:h-[300px] lg:flex-row ${index % 2 === 0 ? "lg:flex-row-reverse" : ""} items-center`}
                        >
                            {/* Image Section */}
                            <div className="lg:w-1/2 w-full h-full overflow-hidden shadow-lg relative bg-black">

                                <Image
                                    src={`${service.imgUrl}`} // Example image path
                                    alt={service.name}
                                    className="transition-transform duration-500 group-hover:scale-110"
                                    layout="fill"
                                />

                            </div>

                            {/* Text Section */}
                            <div className="lg:w-1/2 w-full h-full group-hover:bg-black transition duration-500  flex flex-col justify-center p-6 lg:p-12 bg-white shadow-lg ">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                                    {service.name}
                                </h2>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <a
                                    href={service.link}
                                    className="inline-block text-blue-800 mt-4 rounded-lg font-semibold transition-transform duration-300 hover:underline hover:translate-y-1"
                                >
                                    Learn More <FontAwesomeIcon icon={faCircleArrowRight} className='mt-1 text-gray-400 pl-1 group-hover:pl-0 hover:text-white transistion duration-500 h-6' />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
