'use client';
import OurProducts from "@/components/products/OurProducts";
import PartnerProducts from "@/components/products/PartnersProducts";

export default function ProductsPage() {
    return (
        <main className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="bg-primary text-white text-center py-20 px-8">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4">Our Products</h1>
                <p className="text-md lg:text-lg max-w-3xl mx-auto">
                    Explore our range of world-class printing machines designed to deliver excellence
                    and innovation for all your printing needs.
                </p>
            </section>

            <OurProducts />
            <PartnerProducts />

        </main>
    );
}
