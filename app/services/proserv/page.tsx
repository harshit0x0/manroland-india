import Image from "next/image";
import React from "react";

const ProServ = () => {
    const services = [
        {
            title: "ProServ Basic Plus",
            description: `The standard package for total reliability.`,
            details: [
                "Detailed analysis on the current condition of your press, its optional systems and safety devices.",
                "Detailed information on the technical condition of your press.",
                "High productivity, reliability and quality through regular maintenance.",
                "Professional recommendations for increased press performance.",
                "Safety checks for the press operator(s).",
            ],
            imgUrl: '/images/roland900/fourth.jpg'
        },
        {
            title: "ProServ Comfort 360°",
            description: `Access to the global service network and telephone support network.`,
            details: [
                "Detailed analysis on the current condition of your press, its optional systems and safety devices.",
                "Detailed information on the technical condition of your press.",
                "The highest productivity, reliability and quality through regular maintenance.",
                "Extended on-call duty and diagnostics services via TelePresence.",
                "Professional recommendations for increased press performance.",
                "Safety checks for the press operator(s).",
            ],
            imgUrl: '/images/roland900/second.jpg'
        },
        {
            title: "ProServ 360°",
            description: `The evolution of excellence continues with the partnership of ProServ 360° and the ROLAND 700 Evolution.`,
            details: [
                "Optimizing efficiency with maximum performance and a faster return on investment.",
                "Two full inspections of motors, main drive, pumps, blowers, dryer, and spray-powder components.",
                "Remote diagnostics via TelePresence for efficient troubleshooting.",
                "Proactive SMART services with an inbuilt Maintenance Manager.",
                "24/7 TeleSupport Centre providing routine remote check-ups, fault diagnosis, and detailed reports.",
                "Productivity analysis with OEE and KPI reports.",
            ],
            imgUrl: '/images/roland900/third.jpg'
        },
    ];

    return (
        <main className="bg-gray-400 text-gray-800">
            <header className="bg-primary text-white py-16 px-10 text-center">
                <h1 className="text-2xl lg:text-4xl lg:text-5xl font-bold">ProServ Packages</h1>
                <p className="mt-4 max-w-3xl mx-auto text-sm lg:text-lg">
                    Even the 500 millionth impression has to look as fresh as the first one. This means that a press must be kept in good shape. We recommend service packages to ensure day-one quality for many years.
                </p>
            </header>

            <section className="container mx-auto py-16 lg:px-6 px-4 bg-gray-400 space-y-12 text-sm">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col rounded-lg overflow-hidden lg:flex-row ${index % 2 === 0 ? "lg:flex-row-reverse" : ""} items-center`}
                    >

                        <div className="lg:w-1/3 w-full hidden lg:block overflow-hidden shadow-lg relative bg-gray-200 h-64 flex items-center justify-center">
                            <Image
                                src={`${service.imgUrl}`} // Example image path
                                alt={service.title}
                                className="transition-transform duration-500 group-hover:scale-110"
                                layout="fill"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="lg:w-2/3 w-full bg-blue-50 shadow-lg">
                            <h2 className="text-2xl bg-primary py-6 px-6 lg:px-12 font-bold text-white">{service.title}</h2>
                            <div className="bg-gray-100 py-6 px-6 lg:px-12">
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="list-disc list-inside space-y-3 text-gray-700">
                                    {service.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="py-10 mt-20 px-8 bg-gray-200 text-black">
                <div className="max-w-6xl mx-auto text-center" >
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <p className="text-lg mb-8">
                        Have questions or want to learn more about our services? Get in touch with us.
                    </p>
                    <a
                        href="/contact"
                        className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-opacity-90"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

        </main>
    );
};

export default ProServ;
