import Image from "next/image";
export default function ClientSection() {
    return (
        <section className="bg-white text-black min-h-[100vh] py-10 flex items-center">
            <div className="container mx-auto md:flex-row flex flex-col" >
                <div className="md:w-5/6 px-10 md:px-20">
                    <h2 className="text-2xl lg:text-3xl font-thin">Our Clients love us!</h2>
                    <p className="mt-10 text-sm leading-7 lg:leading-8 font-thin">
                        At Manroland, we take pride in delivering unparalleled printing solutions that exceed expectations. Our commitment to innovation, precision, and quality has earned us the trust of clients across the globe. Each partnership is built on understanding their unique needs and delivering results that drive success.
                        <br /> <br />
                        Beyond technology, it’s our dedication to customer support that sets us apart. Whether it’s personalized training, quick maintenance, or proactive consultation, our team ensures that every client feels valued and empowered. At Manroland, your success is our success, and we’re honored to be part of your journey.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-1 lg:gap-12 mt-10 md:mt-0">
                    <Image src="/images/cadbury.jpg" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/bikano.jpg" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/patanjali.jpg" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/bikano.jpg" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/patanjali.jpg" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                    <Image src="/images/ITC.png" width={200} height={100} alt="logo-img" className="w-1/2 mx-auto h-auto" />
                </div>
            </div>
        </section>
    );
}