import Image from "next/image";

export default function Roland700() {
    const sections = [
        {
            title: "ROLAND 700 Evolution",
            content: `As pioneers of print innovation, Manroland has developed many world firsts since the company was established in 1871. In 2016 we introduced the world’s most technologically advanced sheetfed press, the ROLAND 700 Evolution. Today the ROLAND 700 Evolution family comprises: the ROLAND 700 Evolution Elite, our flagship model; the ROLAND 700 Evolution Speed, our 20,000 sheets per hour model; and the ROLAND 700 Evolution Lite, the most recent addition to the family. Same legendary quality and entry-level model.`,
            image: "/images/roland700/first.jpg", // Replace with your image path
        },
        {
            title: "Outstanding Performance",
            content: `Thanks to Manroland’s Simultaneous Plate Loading technology, plate loading and blanket cleaning all takes place simultaneously, resulting in significant cost savings, higher productivity and superior print quality.`,
            image: "/images/roland700/second.jpg",
        },
        {
            title: "Highest Print Quality",
            content: `Outstanding print quality has been a notable feature of the ROLAND 700 series since its conception. The TripleFlow delivers more control than any other comparable technology on the market. InlineInspector 3.0 ensures constant high quality and InlineColorPilot 3.0 measures and controls color automatically.`,
            image: "/images/roland700/third.jpg",
        },
        {
            title: "Stand Out from the Crowd",
            content: `Welcome to the Manroland world of compelling inline effects achieved with OnePass technology. Achieve high-quality coating application, haptic effects on cardboard, and dazzling cold foil applications with InlineFoiler 2.0.`,
            image: "/images/roland700/fourth.jpg",
        },
        {
            title: "Technology You Can Trust",
            content: `Built with the precision of a fine Swiss watch, critical components in every ROLAND press are manufactured to tolerances up to 30 times finer than a human hair. With simultaneous make-ready processes, high net output, and inline enhancement, the ROLAND 700 Evolution delivers unmatched excellence in offset printing.`,
            image: "/images/roland700/fifth.jpg",
        },
        {
            title: "Eco-Friendly",
            content: `Driven by an ongoing quest for sustainability, the ROLAND 700 Evolution focuses on reducing waste and noise emissions. EcologicPilot monitors job-specific power consumption values, and QuickChange Surface reduces landfill waste with recyclable press wash.`,
            image: "/images/roland700/sixth.jpg",
        },
    ];

    return (
        <div className="relative bg-gradient-to-r from-teal-100 via-cyan-100 to-sky-200 min-h-screen overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0">
                <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-blue-500 blur-3xl rounded-full absolute top-10 left-16 animate-pulse" />
                <div className="w-60 h-60 bg-gradient-to-br from-purple-400 to-pink-500 blur-3xl rounded-full absolute bottom-10 right-20 animate-pulse" />
            </div>



            <header className="relative py-16 px-10 bg-opacity-60 bg-white backdrop-blur-md text-center rounded-xl shadow-xl mx-auto max-w-full">
                <h1 className="text-4xl lg:text-5xl  text-gray-900">ROLAND 700 Evolution</h1>
                <p className="mt-4 lg:text-lg text-gray-700 max-w-3xl mx-auto">
                    The breakthrough large-format press that pushes the boundaries of printing innovation.
                </p>
            </header>

            <div className="container mx-auto py-4 lg:py-16 px-2 lg:px-4 relative">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col-reverse md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            } items-center py-8`}
                    >
                        <div className="md:w-1/2 px-2 min-h-[300px]">
                            <div className="bg-white bg-opacity-70 backdrop-blur-lg shadow-lg rounded-xl p-6 py-10 lg:p-8 lg:py-16">
                                <h2 className="text-3xl font-bold mb-4 text-gray-900">{section.title}</h2>
                                <p className="text-gray-700">{section.content}</p>
                            </div>
                        </div>
                        <div className="w-full px-2  mb-6 md:w-1/2 md:px-4">
                            <Image
                                src={section.image}
                                alt={section.title}
                                width={500}
                                height={300}
                                className="rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
