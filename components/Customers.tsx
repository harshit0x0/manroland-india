'use client';
import { useEffect } from "react";
import Image from "next/image";

export default function CustomersSection() {
    useEffect(() => {
        const customer = document.querySelector("#customerSection");
        const distY = customer?.getBoundingClientRect().top;
        const loveText = document.getElementById("loveText");

        const handleScroll = () => {
            // console.log("scrolled");
            // console.log("window.scrollY: ", window.scrollY);
            if (!distY || !customer.clientHeight) return;
            if (window.scrollY > distY - 400 && window.scrollY < distY + customer?.clientHeight - 400) {
                loveText?.classList.add("text-red-600");
                loveText?.classList.add("text-5xl");
                // console.log("effects added");
            }
            else {
                loveText?.classList.remove("text-red-600");
                loveText?.classList.remove("text-5xl");
                // console.log("effects removed");
            }
        }
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("beforeunload", () => {
            window.scrollTo(0, 0);
        })
    }, []);

    return (
        <section className="bg-white text-black min-h-[100vh] py-10 flex items-center group" id="customerSection">
            <div className="container mx-auto md:flex-row flex flex-col" >
                <div className="md:w-5/6 px-10 md:px-20">
                    <h2 className="text-2xl lg:text-3xl font-thin">Our Customers <span className="font-bold transition-all duration-1000" id="loveText">love</span> us!</h2>
                    <p className="mt-10 text-sm leading-7 lg:leading-8 font-thin">
                        At Manroland, we take pride in delivering unparalleled printing solutions that exceed expectations. Our commitment to innovation, precision, and quality has earned us the trust of clients across the globe. Each partnership is built on understanding their unique needs and delivering results that drive success.
                        <br />
                        Beyond technology, it’s our dedication to customer support that sets us apart. Whether it’s personalized training, quick maintenance, or proactive consultation, our team ensures that every client feels valued and empowered.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-1 lg:gap-12 mt-10 md:mt-0">
                    <Image src="/images/customers/tcpl.jpg" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/customers/replica.png" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/customers/borkars.jpeg" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/customers/jash.jpeg" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/customers/galaxy.png" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/customers/hira.jpeg" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/customers/sainPackaging.png" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                </div>
            </div>
        </section>
    );
}