import Image from "next/image";
export default function PartnerSection() {
    return (
        <section className="bg-white text-black min-h-[80vh] py-10 md:py-20">
            <div className="container mx-auto md:flex-row flex flex-col" >
                <div className="md:w-5/6 px-10 md:px-20">
                    <h2 className="text-2xl lg:text-3xl font-thin">Our Partners love us!</h2>
                    <p className="mt-10 text-sm leading-4 lg:leading-8 font-thin">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex a totam commodi nemo laborum neque repellat quidem atque dolor nulla, reiciendis fugiat esse blanditiis provident odio praesentium exercitationem placeat. consectetur adipisicing elit. Omnis ex a totam commodi.
                        <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ex a totam commodi nemo
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