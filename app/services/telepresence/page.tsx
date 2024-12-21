import React from "react";

const TelePresence = () => {
    return (
        <main className="bg-gray-50 text-gray-800">
            {/* Header Section */}
            <header className="bg-primary text-white py-16 px-10 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold">TelePresence Service</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg">
                    Rapid response, preventive analysis, and 24/7 support to keep your printing system running seamlessly.
                </p>
            </header>

            {/* Introduction Section */}
            <section className="container mx-auto py-16 px-6 lg:px-20 space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">The Need for TelePresence</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Breakdown losses and harsh delivery time of printing products from print buyers give printing companies immense pressures. When a failure happens, the speed and quality of the service response are critical factors. TelePresence ensures reliable detection of the failure’s cause, identification of the correct replacement parts, and remote support, all of which reduce downtime and travel costs.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section className="container mx-auto py-16 px-6 lg:px-20 space-y-12">
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800">What is TelePresence?</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Rapid Assistance */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-primary mb-4">Rapid Assistance</h3>
                            <p className="text-gray-600 leading-relaxed">
                                When a fault message is received, a service technician promptly carries out a remote diagnosis and liaises with the operating personnel. Most problems are resolved remotely, reducing downtimes and avoiding travel costs.
                            </p>
                        </div>

                        {/* Preventive Remote Analysis */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-primary mb-4">Preventive Remote Analysis</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Regular remote analysis helps identify weak points early and allows for timely rectification. This enables proactive scheduling of service work, minimizing unexpected disruptions.
                            </p>
                        </div>

                        {/* 24/7 Support */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-primary mb-4">24/7 Global Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                TelePresence operates on the ‘Follow the Sun’ principle, with expert personnel stationed globally to provide support in German and English via remote diagnosis and telephone, 24 hours a day, 7 days a week.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="bg-gray-200 py-16 px-6 lg:px-20">
                <div className="container mx-auto text-center space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Why Choose TelePresence?</h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        With TelePresence, you can experience unparalleled support, reduced downtimes, and proactive maintenance that ensures your printing system operates at peak efficiency, day in and day out.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default TelePresence;
