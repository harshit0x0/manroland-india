'use client';

export default function AboutPage() {
    return (
        <main className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="bg-primary text-white text-center py-20 px-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">About Manroland India</h1>
                <p className=" md:text-lg max-w-3xl mx-auto">
                    At Manroland India, we combine innovation, expertise, and dedication to deliver
                    world-class printing solutions tailored to meet the unique demands of the Indian market.
                </p>
            </section>

            {/* Our Mission Section */}
            <section className="py-20 px-8 md:w-1/2 mx-auto">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
                    <p className="text-lg leading-relaxed">
                        Our mission is to revolutionize the printing industry by offering cutting-edge
                        technology, unparalleled quality, and exceptional customer service. We aim to
                        empower businesses with sustainable and innovative solutions that drive success.
                    </p>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gray-200 py-20 px-8 lg:px-20">
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
