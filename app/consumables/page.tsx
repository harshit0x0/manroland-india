'use client';
import Link from "next/link";

export default function ConsumablesPage() {
    return (
        <main className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="bg-primary text-white text-center py-10 lg:py-20 px-8 group">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4">Consumables</h1>
                <div className={`w-0 mx-auto group-hover:w-third h-1 bg-red-500 transistion duration-500 ease-in-out`}></div>
            </section>
            <div className="bg-orange-400 w-fit mx-auto text-center px-8 py-6 text-white font-semibold rounded hover:bg-gray-800 transition duration-500 ease-in-out mt-4">
                <Link
                    href="/consumables/purchase"
                >
                    Purchase Consumables
                </Link>
            </div>

            <div className="container lg:px-12 mx-auto">
                <section className="pt-16 px-8 py-10 lg:pt-20 ">
                    <div className="max-w-6xl mx-auto ">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8"> Print Consumables from printcom® </h2>
                        <div className="text-lg leading-8 text-sm ">
                            Manroland’s R&D department drives the ongoing development of consumables and materials to continually set new standards in print. printcom® supplies customers with extensively tested, certified and process-compliant system components to further refine and optimise their printing systems. The use of expertly produced, consistently manufactured parts can significantly cut wastage, save energy costs and reduce environmental impact.
                            <ul className="list-disc pl-12 mt-4">
                                <li>Speed-up of commissioning with start-up sets </li>
                                <li>Optimized printing quality </li>
                                <li>Increased availability of the printing system </li>
                                <li>Minimized organizing times in procurement </li>
                                <li>Reduced production costs </li>
                                <li>High flexibility in application </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-6 py-2 mb-20">
                    <div className="space-y-8">
                        <details
                            className="border rounded-lg"
                        >
                            <summary className="cursor-pointer bg-gradient-to-r from-gray-200 to-primaryLight hover:bg-primaryLight p-4 text-lg duration-500 ease-in-out">                                Blankets
                            </summary>
                            <div className="p-4 text-sm     leading-7">
                                <h3 className="text-lg font-bold mt-4  mb-4">A key component for good print results.</h3>
                                <p>
                                    Among consumable materials, the blanket occupies a prominent
                                    position. When it fits perfectly, it has the makings of a bestseller, but even the slightest dimensional fault
                                    spoils the results.
                                </p>
                                <p className="mt-4 lg:mt-6">
                                    Manroland are in a position to recommend suitable blankets for every application. printcom® has developed a
                                    comprehensive certification process and as no-one your Manroland Sheetfed press as well as we do, we also know
                                    what our customers need. Applications such as coating, general commercial printing or packaging printing
                                    places special demands on the blanket. Our certification process takes this into account.
                                </p>
                                <p className="mt-4 lg:mt-6">
                                    The top priority is not only to ascertain which blanket is technically the best. It’s more a matter of
                                    efficient benchmarking to ensure stable performance on the press and this can result in an inexpensive blanket
                                    being recommended.
                                </p>
                                <p className="mt-4 lg:mt-6">
                                    Take advantage of the printcom® certification process to achieve good print results easily and quickly. Make
                                    high quality your standard. We are happy to advise you on your specific blanket solution.
                                </p>
                            </div>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="cursor-pointer bg-gradient-to-r from-gray-200 to-primaryLight hover:bg-primaryLight p-4 text-lg duration-500 ease-in-out">                                Coatings
                            </summary>
                            <div className="p-4 text-sm leading-7">
                                <h3 className="font-bold mt-4 mb-2">Improve your enhancement with printcom® coatings.</h3>
                                <p className="">
                                    Choosing the right coating is decisive for the quality of an enhanced printed product. Whether you are looking
                                    for high gloss, a fascinating visual and haptic effect, or simply protection: with the wide variety of
                                    printcom® coatings, we can offer you the right solution for virtually every application.
                                </p>
                                <h3 className="font-bold mt-6 mb-2">We are the experimental laboratory, not you..</h3>
                                <p className="">
                                    Before a coating is printcom® -certified, it undergoes intensive tests. In close cooperation with the Print
                                    Technology Center in Offenbach, we examine the function and quality of the coatings under production
                                    conditions. We also test their technical suitability in the printing process regarding compatibility with
                                    printing inks, fountain solution, or for a ROLAND InlineFoiler application.
                                </p>
                            </div>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="cursor-pointer bg-gradient-to-r from-gray-200 to-primaryLight hover:bg-primaryLight p-4 text-lg duration-500 ease-in-out">Fountain Solutions
                            </summary>
                            <div className="p-4 text-sm leading-7">
                                <p className="mt-4 lg:mt-6">
                                    An inferior founts solution can cause numerous printing problems. Piling on the blanket, scumming, smearing,
                                    poor drying, over-emulsification, plate corrosion, plates running blind, and so on and so forth. Many
                                    undesirable effects originate from an insufficiently tested fount solution. With a printcom®-certified fountain
                                    solution, you reliably guard against all problem sources with long and short runs.
                                </p>
                                <p className="mt-4 lg:mt-6">
                                    printcom® fount solutions have been used successfully all over the world for many years in thousands of
                                    presses. The major advantage over customary founts is printing process compliancy and material compatibility.
                                    Normal founts tests are only concerned with corrosion protection – but not with long-term interaction with a
                                    specific type of press.
                                </p>
                                <div>
                                    <h3 className="font-bold mt-6 mb-2">The printcom® fount solution testing process concentrates on:</h3>

                                    <ul className="list-disc pl-8">

                                        <li>Corrosion protection </li>
                                        <li>Clean running behavior </li>
                                        <li>Contamination resistance </li>
                                        <li>Ascertaining the fount solution latitude (working window smearing borderline – water marks) </li>
                                        <li>Behaviour with special applications (e.g. cold foiling) </li>
                                        <li>Interaction with special inks (e.g. metallic inks, UV inks, inks with high layer thicknesses) </li>
                                        <li>Ink build-up on the dampening rollers </li>
                                        <li>Water conductivity </li>
                                    </ul>
                                </div>
                            </div>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="cursor-pointer bg-gradient-to-r from-gray-200 to-primaryLight hover:bg-primaryLight p-4 text-lg duration-500 ease-in-out">                                Lubricants
                            </summary>
                            <div className="p-4 text-sm leading-7">
                                <h3 className="font-bold mt-4 mb-2">Preserve the Life and Value of Your Press</h3>
                                <p className="mt-4 lg:mt-6">
                                    Utilizing high-quality lubricants and oils is a critical contributor to extending the lifetime of your press.
                                    Operating costs can also be reduced due to extending wear-part life.
                                </p>
                                <p className="mt-4 lg:mt-6">
                                    printcom® lubricants and oils provide superb adhesiveness and high load capacity, protecting your equipment
                                    from mechanical wear. All printcom® products are tested to ensure compatibility with non-ferrous metals and
                                    common sealing compounds. They also provide outstanding aging resistance providing you the security that they
                                    will perform at the highest level throughout the entire maintenance duration.
                                </p>
                            </div>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="cursor-pointer bg-gradient-to-r from-gray-200 to-primaryLight hover:bg-primaryLight p-4 text-lg duration-500 ease-in-out">Printing Inks
                            </summary>
                            <div className="p-4 text-sm leading-7">
                                <h3 className="font-bold mt-4 mb-2">Brilliant Results Guaranteed</h3>
                                <p className="mt-4 lg:mt-6">
                                    printcom® inks provide brilliant results. Certified! Highly scuff-resistant inks, low-misting inks for high-speed applications, perfecting inks, UV inks for paper, carton and foils, universal ink series for standard applications, premium ink series for extraordinary quality requirements, and poster inks with high lightfastness.
                                </p>
                                <p className="mt-4 lg:mt-6">
                                    All our printing inks, apart from poster inks, comply with DIN ISO 2846-1, conforming to Process Standard Offset (PSO) and providing the best prerequisites for meeting the requirements of DIN ISO 12647-2, the industrial production standard for print products.
                                </p>
                            </div>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="cursor-pointer bg-gradient-to-r from-gray-200 to-primaryLight hover:bg-primaryLight p-4 text-lg duration-500 ease-in-out">                                Rollers
                            </summary>
                            <div className="p-4 text-sm leading-7">
                                <h3 className="font-bold mt-4 mb-2">Precise Specifications for Reduced Downtime</h3>
                                <p className="mt-4 lg:mt-6">
                                    printcom® rollers are engineered to provide extended life and are of the highest quality. Manroland has spent decades working with best-in-class partners to develop roller compounds that are resistant to most pressroom chemistry.
                                </p>
                                <p className="mt-4 lg:mt-6">
                                    Their dimensional stability helps reduce heat in the printing units, resulting in improved ink flow and reduced blanket piling. printcom® roller compounds offer reduced shrinking and swelling properties resulting in reduced maintenance costs.
                                </p>
                            </div>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="cursor-pointer bg-gradient-to-r from-gray-200 to-primaryLight hover:bg-primaryLight p-4 text-lg duration-500 ease-in-out">                                Silicones
                            </summary>
                            <div className="p-4 text-sm leading-7">
                                <h3 className="font-bold mt-4 mb-2">Outperforming the Competition</h3>
                                <p className="mt-4 lg:mt-6">
                                    printcom® silicones provide a significant return on investment by lowering the annual consumption in the pressroom, as well as laying a consistently even film to reduce streaking and cockling.
                                </p>
                                <p className="mt-4 lg:mt-6">
                                    By reducing the amount of silicone used, printcom® silicones offer superior performance and value.
                                </p>
                            </div>
                        </details>

                        <details className="border rounded-lg">
                            <summary className="cursor-pointer bg-gradient-to-r from-gray-200 to-primaryLight hover:bg-primaryLight p-4 text-lg duration-500 ease-in-out">Special Chemistry
                            </summary>
                            <div className="p-4 text-sm leading-7">
                                <h3 className="font-bold mt-4 mb-2">Achieving the Highest Level of Press Performance and Protection</h3>
                                <p className="mt-4 lg:mt-6">
                                    printcom® special chemistry is specifically designed to work with other printcom® products to compliment the entire process. All products have been thoroughly tested to ensure their compatibility with all common pressroom materials.
                                </p>
                                <p className="mt-4 lg:mt-6">
                                    Using printcom® specialty chemistry can extend the life time of other consumable materials such as blankets, rollers, and press components, resulting in reduced operating costs and increased press uptime.
                                </p>
                            </div>
                        </details>
                        <details className="border rounded-lg">
                            <summary className="cursor-pointer bg-gradient-to-r from-gray-200 to-primaryLight hover:bg-primaryLight p-4 text-lg duration-500 ease-in-out">                                Washes
                            </summary>
                            <div className="p-4 text-sm leading-7">
                                <h3 className="font-bold mt-4 mb-2">The Advantages of Rigorous Testing</h3>
                                <p className="mt-4 lg:mt-4">
                                    Among the process-compliant system components, washing agents play an important role. Selecting the right washing agent has a major influence on printing quality and the economics of the entire printing process. The powerful washing agent printcom® wash performed brilliantly in all stages of our rigorous tests.
                                </p>
                                <h3 className="font-bold mt-6 mb-2">Double testing for better results.</h3>
                                <p className="mt-4 lg:mt-4">
                                    Besides FOGRA certification, printcom® products are subjected to a second series of tests to ensure they are particularly suitable for use with Manroland Sheetfed presses. This ensures optimal process conditions and prevents press damage in long-run operation. With no exaggeration, the test results of the premium product can be described as sensational. Here is an overview of the outstanding qualities.
                                </p>
                                <h3 className="font-bold mt-4 lg:mt-6">
                                    The powerful washing agent printcom® wash has several outstanding qualities:
                                </h3>
                                <ul className="list-disc pl-8 mt-4 lg:mt-6">
                                    <li className="mb-2"><b>Multifunctional: </b> printing blankets, cylinders or inking rollers, brush-type or blade-type washing units – printcom® wash gets the best possible results.</li>
                                    <li className="mb-2"><b>Economical: </b> the outstanding cleaning power means a little goes a long way.</li>
                                    <li className="mb-2"><b>Non-abrasive: </b> the combination of mild cleaning agents prolongs the intervals between maintenance.</li>
                                    <li className="mb-2"><b>Stable: </b> the high emulsion stability simplifies handling.</li>
                                    <li className="mb-2"><b>Residue-free: </b> very good flow properties through effective grime dispersion.</li>
                                    <li className="mb-2"><b>Benefit: </b> optimal washing results with shorter washing times and longer intervals between washing.</li>
                                </ul>
                                <p className="mt-4 lg:mt-6">

                                </p>
                            </div>
                        </details>

                    </div>
                </div>
            </div>



        </main>);


}
