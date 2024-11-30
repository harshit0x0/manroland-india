import ProductCard from "./ProductCard";

export default function Explore() {
    return (
        <section className="py-10 px-4 md:px-12 pb-20 bg-gray-400">
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
                />
            </div>
        </section>
    );

}