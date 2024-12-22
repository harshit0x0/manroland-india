import ProductCard from "./ProductCard";

export default function Explore() {
    return (
        <section className="py-20 px-4 md:px-12 pb-20 bg-gray-200">
            <h2 className="text-2xl md:text-3xl font-thin mb-10 md:mb-12 font-sans">Explore Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ProductCard
                    title="Roland 700"
                    description=" In 2016 we introduced the world’s most technologically advanced 
sheetfed press, the ROLAND 700 Evolution.
 Today the ROLAND 700 Evolution family comprises: the ROLAND 700 
Evolution Elite, our flagship model; the ROLAND 700 Evolution Speed, 
our 20,000 sheets per hour model; and the ROLAND 700 Evolution 
Lite, the most recent addition to the family. Same legendary quality 
and entry level model.
"
                    image="/images/Roland700.png"
                    url="Roland700"
                />
                <ProductCard
                    title="Roland 900"
                    description=" Now 
completing its breakthrough Evolution family, comes the ROLAND 
900 Evolution.
ROLAND 
900 Evolution large-format press for packaging and commercial 
printing comes with a wealth of cutting-edge automation 
technologies to deliver cost and energy savings for printers, along 
with ever faster make-ready times"
                    image="/images/Roland900.png"
                    url="Roland900"
                />
                <ProductCard
                    title="700 Evolution Speed"
                    description=" The ROLAND 700 Evolution Speed designed from the ground up and incorporating a sleek, futuristic look, incorporates many new technological developments, aimed to give printers unprecedented levels of efficiency, productivity, operation and quality."
                    image="/images/Roland900.png"
                    url="EvolutionSpeed700"
                />
            </div>
        </section>
    );

}