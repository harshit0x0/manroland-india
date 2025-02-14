'use client';

import Image from "next/image";

const messages = [
    {
        name: "Peter Rego",
        role: "Director Sales and Buises Development",
        message: "Technology is our canvas. With every solution we create, we strive to paint a masterpiece.",
        image: "/images/people/PeterRigo.jpg",
    },
    {
        name: "Deepak Walia",
        role: "Managing Director",
        message: "Our journey is fueled by passion and dedication to innovation. Together, we aim to redefine excellence.",
        image: "/images/people/deepakWalia.jpg", // Replace with actual paths
    },
    {
        name: "Vijay Kumar",
        role: "All India Service Head",
        message: "Operational brilliance is the backbone of our success. It’s a privilege to steer this ship forward.",
        image: "/images/people/VijayKumar.jpg",
    },
];

export default function AboutPage() {
    return (
        <main className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-10% from-gray-900 to-primary text-white text-center py-20 px-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Manroland  <div className="inline-block "><div>India <div className="w-full h-1 bg-orange-500"></div></div></div></h1>
                <div className="md:text-md max-w-4xl mx-auto mt-12 text-gray-300 animate-fadeIn animate-slideUp">
                    Manroland Sheetfed GmbH is a leading global producer of sheetfed offset printing presses and related technologies for commercial, packaging, and publishing applications.
                    We are a proud member of the <div className="inline-block mx-1"><div>Langley Group <div className="w-full h-0.5 bg-green-500"></div></div></div>
                    Founded in 1871 on the finest traditions of <div className="inline-block"><div>German engineering excellence<div className="w-full h-0.5 bg-green-500"></div></div></div>, the company is a global watchword for quality, precision, and supreme reliability.
                    Manroland Sheetfed India is the Indian branch of Manroland Sheetfed.
                </div>
            </section>

            {/* messages by important people */}
            <section className="bg-gradient-to-b from-white to-gray-100 py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-10  animate-fadeIn">A Message From Our Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {messages.map((person, index) => (
                            <div
                                key={index}
                                className="p-6 bg-primaryLight text-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500 animate-slideUp"
                            >
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    height={200}
                                    width={200}
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-2xl font-bold text-center mb-2">{person.name}</h3>
                                <p className="text-center text-sm text-gray-500 mb-4">{person.role}</p>
                                <p className="text-gray-700 text-center leading-relaxed">{person.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="bg-gray-800 text-white w-full py-20 px-8 mx-auto">
                <div className="max-w-6xl mx-auto text-center md:w-1/2">
                    <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
                    <p className="text-lg leading-relaxed">
                        Our mission is to revolutionize the printing industry by offering cutting-edge
                        technology, unparalleled quality, and exceptional customer service. We aim to
                        empower businesses with sustainable and innovative solutions that drive success.
                    </p>
                </div>
            </section>

            {/* Scope and Philosophy Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800 animate-fadeIn"> Scope and Philosophy</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10 animate-slideUp">
                        At the heart of our work lies a commitment to innovation, sustainability, and client satisfaction. We believe in pushing boundaries while staying true to values that define us. Our scope encompasses achieving global excellence and crafting solutions that inspire change.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp">
                        <div className="p-6  bg-slate-100 rounded-lg shadow-lg transition-transform hover:scale-105">
                            <h3 className="text-2xl  font-semibold mb-4 text-gray-800">Innovation</h3>
                            <p className="text-gray-600">
                                We constantly seek innovative ways to redefine industry standards, ensuring we deliver cutting-edge solutions to our clients.
                            </p>
                        </div>
                        <div className="p-6  bg-slate-100 rounded-lg shadow-lg transition-transform hover:scale-105">
                            <h3 className="text-2xl  font-semibold mb-4 text-gray-800">Sustainability</h3>
                            <p className="text-gray-600">
                                Sustainability is at the core of everything we do, driving us to adopt eco-friendly practices and build a better tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-b md:bg-gradient-to-r from-blue-400 via-gray-300  to-emerald-500 py-20 px-8 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="text-center">
                            <div className="bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 10h11M9 21V3m12 3v12m-9-3h6m-3-3v6"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Cutting-Edge Technology</h3>

                            <p className="text-sm mt-4">
                                Our advanced machinery, including the Roland 700 and Roland 900, ensures
                                precision and efficiency for every project.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center mt-6">
                            <div className="bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8  "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Unmatched Expertise</h3>

                            <p className="text-sm mt-4">
                                With years of experience, our team delivers consistent excellence in every
                                project we undertake.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center">
                            <div className="bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8  "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9.75 17.8a5 5 0 106.5 0m-1.428-5.53A7.978 7.978 0 0112 4a7.978 7.978 0 01-2.322 8.27m.936-1.51A5 5 0 0112 6a5 5 0 011.386 7.76"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sustainability Focus</h3>
                            <p className="text-sm mt-4">
                                We prioritize eco-friendly practices to reduce our environmental impact and
                                promote sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-8">
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
}
