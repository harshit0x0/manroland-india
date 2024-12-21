import React from "react";

const EvolutionSpeed700 = () => {
    return (
        <main className="bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 text-gray-800">
            {/* Header Section */}
            <header className="bg-gray-200 opacity-80 text-gray-800 py-16 px-10 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold">ROLAND 700 Evolution Speed</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg">
                    3B Format 20,000 SPH Sheetfed Litho Press
                </p>
            </header>

            {/* Introduction Section */}
            <section className="container mx-auto pt-16 px-6 lg:px-20 ">
                <div className="">
                    {/* <h2 className="text-2xl font-bold text-gray-800">Product Overview</h2> */}
                    <p className="text-gray-600 leading-relaxed">
                        The ROLAND 700 Evolution Speed, designed from the ground up with a sleek, futuristic look, brings unprecedented levels of efficiency, productivity, and print quality. It is the flagship model of high-volume converting presses, featuring world-class inking units, advanced technology, and a maximum speed of 20,000 sph. Cutting-edge features like InlineColorPilot 3.0, InlineInspector 3.0, PressPilot, IntegrationPilot, and Autoprint make it a market leader.
                    </p>
                </div>
            </section>

            {/* youtubeVideo */}
            <section className="container mx-auto py-16 px-6 lg:px-20">
                <div className="aspect-w-16 aspect-h-9 mx-auto">
                    <iframe
                        className="mx-auto"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Q6yrIa88T_U?si=oT7bE-HwZsBZEIvW"
                        title="YouTube video player"
                        allow="accelerometer;
                        autoplay; clipboard-write; 
                        encrypted-media; gyroscope; 
                        picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto py-16 px-6 lg:px-20 space-y-12 ">
                <h2 className="text-3xl font-bold text-gray-800">Features & Benefits</h2>
                <ul className="space-y-6 text-gray-600 list-disc list-inside">
                    <li>Simultaneous Plate Loading and Processes</li>
                    <li>Coating PPL</li>
                    <li>Total efficiency at 20,000 sph</li>
                    <li>Autoprint – Hands-free and automatic job completion</li>
                    <li>IntegrationPilot 2.0 – Job handling on the highest level</li>
                    <li>Unmatched print quality and reliability</li>
                </ul>
            </section>

            {/* Outstanding Performance Section */}
            <section className="container mx-auto bg-gray-200  my-4 py-16 px-6 lg:px-20 space-y-8 border-2">
                <h2 className="text-3xl font-bold text-gray-800">Outstanding Performance</h2>
                <p className="text-gray-600 leading-relaxed">
                    With Simultaneous Plate Loading, processes like plate exchange, blanket cylinder cleaning, and back cylinder washing can be completed in less than 4 minutes. This advanced functionality drastically reduces make-ready times, making the ROLAND 700 Evolution Speed ideal for short production runs and high-volume jobs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Powered by DirectDrive technology, it ensures seamless printing and coating plate changes, roller washing, and simultaneous blanket washing for superior flexibility and reduced setup times.
                </p>
            </section>

            {/* Highest Print Quality Section */}
            <section className="container mx-auto bg-gray-200 py-16  mt-12 px-6 lg:px-20">
                <div className="container mx-auto space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">Highest Print Quality</h2>
                    <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Outstanding print quality has always been a hallmark of the ROLAND 700 series. The new-generation Evolution Speed surpasses all competitors with its TripleFlow technology for unmatched ink distribution control, InlineInspector 3.0 for precise defect detection, and InlineColorPilot 3.0 for automatic color adjustments, ensuring consistent, superior results.
                    </p>
                </div>
            </section>

            {/* Technical Specifications Section */}
            <section className="container mx-auto py-16 px-6 lg:px-20 space-y-12">
                <h2 className="text-3xl font-bold text-gray-800">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-primary mb-4">SPEED</h3>
                        <p className="text-gray-600">Sheets Per Hour: 20,000</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-primary mb-4">STOCK THICKNESS</h3>
                        <p className="text-gray-600">0.09 – 0.7 mm</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-primary mb-4">3B FORMAT</h3>
                        <p className="text-gray-600">
                            Sheet Format: 750 x 1050 mm<br />
                            Print Format: 715 x 1030 mm<br />
                            Plate Format: 785 x 1040 mm
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-primary mb-4">PLINTH</h3>
                        <p className="text-gray-600">Height: 334mm or 667mm</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EvolutionSpeed700;
