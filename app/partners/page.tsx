import React from 'react';
import Image from 'next/image';

const partnersData = [
    {
        name: "Busch",
        logo: "/images/logos/busch-logo.jpg", // Replace with actual image paths
        description: "Leading manufacturer of industrial printing components.",
        website: "https://partner-a.com",
    },
    {
        name: "Printcom",
        logo: "/images/logos/printcom-logo.jpg", // Replace with actual image paths
        description: "Leading manufacturer of industrial printing components.",
        website: "https://partner-a.com",
    },
    {
        name: "CreaseStream",
        logo: "/images/logos/creaseStream-logo.jpeg",
        description: "Renowned for providing innovative technology solutions.",
        website: "https://partner-b.com",
    },
    {
        name: "Smag Graphique",
        logo: "/images/logos/smagGraphique-logo.jpeg",
        description: "Leading manufacturer of industrial printing components.",
        website: "https://partner-c.com",
    },
    {
        name: "Westland",
        logo: "/images/logos/westland-logo.jpeg",
        description: "Leading manufacturer of industrial printing components.",
        website: "https://partner-c.com",
    },
];

const Partners = () => {
    return (
        <section className="py-16 px-8 bg-gray-50 text-gray-800">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
                <p className="text-lg text-gray-600">
                    Meet our trusted sister companies and collaborators who supply machine parts and innovative solutions.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:px-24 group">
                {partnersData.map((partner, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-xl hover:bg-black rounded-lg m-3 transform transition duration-500 hover:scale-105"
                    >
                        <div className='relative h-44'>
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                fill
                                className="w-full h-40 object-contain p-4 bg-gray-100"
                            />
                        </div>
                        <div className="p-6 border-2 border-red">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-100">{partner.name}</h3>
                            <p className="text-gray-600 mb-4">{partner.description}</p>
                            <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary-dark font-semibold group-hover:underline"
                            >
                                Visit Website &rarr;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
