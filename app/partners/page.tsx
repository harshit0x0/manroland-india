import React from 'react';
import Image from 'next/image';

const partnersData = [
    {
        name: "Busch",
        logo: "/images/logos/busch-logo.jpg",
        description: "German engineering excellence – printing-related products manufactured by Gerhard BUSCH GmbH. Helping to maximise efficiencies in the print room.",
        website: "http://www.buschgraphic.co.uk/",
    },
    {
        name: "Zechini",
        logo: '/images/logos/zechini-logo.jpg',
        description: "Zechini designs machines for bookbinding, paper converting, luxury packaging and children's books. Led by brothers Fulvio and Roberto, it has a wide and widespread commercial network that continues to expand all over the world.",
        website: "https://zechini.com/",
    },
    {
        name: "Kolbus",
        logo: "/images/logos/kolbus-logo.jpg",
        description: "KOLBUS is known for its long tradition of engineering excellence and its dedication to quality in every aspect, from consulting and commissioning to high life-cycle availability for its machines, and works to develop new methods that will generate and support efficient production processes. ",
    },
    {
        name: "CreaseStream",
        logo: "/images/logos/creaseStream-logo.jpeg",
        description: "CreaseStream is an award-winning solution to  production problems for creasing and micro-perfoating. For the first time, low and medium volume printers can achieve flawless, accurate creasing every time, thanks to creasestream's amazingly versatile creasing and micro-perforating machine.",
        website: "https://www.creasestream.com/",
    },
    {
        name: "Smag Graphique",
        logo: "/images/logos/smagGraphique-logo.jpeg",
        description: "Design and manufacture of innovative solutions for the printing and finishing of labels and flexible packaging",
        website: "https://www.smag-graphique.com/",
    },
    {
        name: "Westland",
        logo: "/images/logos/westland-logo.jpeg",
        description: "The Westland Group, is an owner-managed family business and has around 800 employees in Europe, Asia and the USA. It is a leading international supplier of technically sophisticated elastomer components and, in addition to roller and sleeve rubber linings, also manufactures elastomer moulded parts for mechanical engineering, the household appliances and fittings industry as well as for gas control technology.",
        website: "https://www.westland.eu/",
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
                        className="bg-white shadow-xl flex flex-col justify-between hover:bg-black rounded-lg m-3 transform transition duration-500 hover:scale-105"
                    >
                        <div className='relative h-44'>
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                fill
                                className="w-full h-40 object-contain p-4 bg-gray-100"
                            />
                        </div>
                        <div className="p-6 ">
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
