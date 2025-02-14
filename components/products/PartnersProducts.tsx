import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link";
import { partners, partnerType } from "@/data/partners";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PartnersSection() {
    return (
        <div className="p-6 space-y-10">
            {partners.map((partner, index) => (
                <PartnerCard key={index} partner={partner} />
            ))}
        </div>
    );
}

function PartnerCard({ partner }: { partner: partnerType }) {
    const [hovered, setHovered] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth > 546) {
            setIsDesktop(true);
        }
    }, [])
    const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: false }));
    return (
        <motion.div
            className="relative w-full lg:w-3/4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:lg:w-7/8 hover:bg-violet-300 hover:text-white transistion duration-500"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            <div className="p-6 flex items-center space-x-4">
                <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={60}
                    height={60}
                    className="rounded-lg shadow-md"
                />

                <div>
                    <h3 className="text-lg lg:text-2xl mb-2 font-semibold text-gray-800 dark:text-gray-200">{partner.name}</h3>
                    <p className="text-sm lg:text-md text-gray-600 dark:text-gray-400 mb-4">{partner.description}</p>
                    <Link
                        href={partner.website}
                        className="text-blue-500 font-semibold hover:underline hover:text-black transistion duration-100 group">
                        Explore
                        <i className="ml-1 group-hover:ml-2 transistion duration-100">
                            <FontAwesomeIcon className="group-hover:-rotate-45 transistion duration-100" icon={faArrowRight} />
                        </i>
                    </Link>
                </div>

            </div>
            <motion.div
                className="overflow-hidden bg-gray-100 dark:bg-gray-800"
                animate={{ height: !isDesktop ? "auto" : hovered ? "auto" : 0 }}
            >
                <Carousel
                    plugins={[plugin.current]}
                    className="relative w-full"
                >
                    <CarouselContent>
                        {partner.products.map((product, idx) => (
                            <CarouselItem key={idx} className="flex flex-col-reverse lg:flex-row items-center p-4 py-6 bg-gray-800 ">
                                <div className="lg:w-1/2 mx-auto space-y-6 px-3">
                                    <h4 className="mt-2 text-center text-xl lg:text-3xl font-semibold text-gray-200 dark:text-gray-200">
                                        {product.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm lg:text-md dark:text-gray-200 text-center">{product.description}</p>
                                </div>
                                <div className="m-auto">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={isDesktop ? 300 : 150}
                                        height={isDesktop ? 300 : 150}
                                        className="rounded-lg shadow-md hover:scale-105 transistion duration-100"
                                        onMouseEnter={() => plugin.current.stop()}
                                        onMouseLeave={() => plugin.current.reset()}
                                    />
                                    <a
                                        href={product.url}
                                        className="mt-2 block text-center font-bold text-orange-200 dark:text-blue-400 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </motion.div>
        </motion.div>
    );
}
