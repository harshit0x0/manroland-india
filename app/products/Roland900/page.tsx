import React from 'react';
import Image from 'next/image';

const sections = [
    {
        title: "ROLAND 900 Evolution",
        content: `As a pioneer of print innovation, Manroland Sheetfed has developed many world firsts since the company was established in 1871. 
    Now completing its breakthrough Evolution family, comes the ROLAND 900 Evolution, further underlining Manroland Sheetfed’s position 
    as a world leader in large format press manufacture.`,
        image: "/images/roland900/first.jpg", // Replace with actual image paths
    },
    {
        title: "Automation for Outstanding Performance",
        content: `With a wealth of new technologies to enhance performance, shorten make-ready times and lower energy consumption, 
    the ROLAND 900 Evolution is perfect for both short and long production runs. Autoprint represents the highest degree of automation available, 
    providing uninterrupted productivity at the touch of a button.`,
        image: "/images/roland900/second.jpg",
    },
    {
        title: "Innovation for Quality and Productivity",
        content: `Manroland Sheetfed’s ongoing commitment to innovation continues to produce breakthrough technologies to push the boundaries of what is possible in offset printing. 
    For ease of use, cost savings, and excellence of output, ROLAND 900 Evolution is the embodiment of this vision.`,
        image: "/images/roland900/third.jpg",
    },
    {
        title: "Optimized Investment with ProServ 360°",
        content: `Manroland Sheetfed provides its complementary ProServ360° supplier maintenance program for press and peripherals for the entire 24-month period following hand-over. 
    This all-inclusive program has been developed to help ensure maximum return on customers’ investment by ensuring presses operate at peak efficiency and maximum up-time.`,
        image: "/images/roland900/fourth.jpg",
    },
    {
        title: "Driven by Sustainability",
        content: `The innovation that is the DNA of Manroland Sheetfed is driven by an ongoing quest for sustainability. 
    The ROLAND 900 Evolution boasts a host of features focused on reduction of waste paper as well as significant noise emission.`,
        image: "/images/roland900/sixth.jpg",
    },
];

const Roland900 = () => {
    return (
        <main className="relative bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300 min-h-screen overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 blur-3xl rounded-full absolute top-10 left-20 animate-pulse" />
                <div className="w-60 h-60 bg-gradient-to-br from-pink-400 to-yellow-500 blur-3xl rounded-full absolute bottom-10 right-20 animate-pulse" />
            </div>

            <header className="relative py-16 px-10 bg-opacity-60 bg-white backdrop-blur-md text-center rounded-xl shadow-xl mx-auto max-w-full">
                <h1 className="text-4xl lg:text-6xl text-gray-900">ROLAND 900 Evolution</h1>
                <p className="mt-4 lg:text-lg text-gray-700 max-w-3xl mx-auto">
                    The breakthrough large-format press that pushes the boundaries of printing innovation.
                </p>
            </header>

            {sections.map((section, index) => (
                <section
                    key={index}
                    className={`relative flex flex-col-reverse ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        } items-center py-16 px-2 lg:px-16`}
                >
                    <div className="lg:w-1/2 px-2 ">
                        <div className="bg-white min-h-[300px] bg-opacity-70 backdrop-blur-lg shadow-lg rounded-xl p-6 lg:p-8 lg:py-16">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">{section.title}</h2>
                            <p className="text-gray-700">{section.content}</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full mb-8 px-4">
                        <Image
                            src={section.image}
                            alt={section.title}
                            width={500}
                            height={300}
                            className="object-cover rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </section>
            ))}
        </main>

    );
};

export default Roland900;
