'use client';

import Image from 'next/image';

const products = [
    {
        id: 1,
        name: 'Roland 700',
        description:
            'The Roland 700 sets a new standard in precision and productivity. Designed for high-speed, high-quality printing, it’s the ideal choice for modern print operations.',
        image: '/images/Roland700.png', // Replace with your image path
    },
    {
        id: 2,
        name: 'Roland 900',
        description:
            'The Roland 900 combines cutting-edge technology with exceptional reliability, delivering outstanding results for large-format printing projects.',
        image: '/images/Roland900.png', // Replace with your image path
    },
];

export default function ProductsPage() {
    return (
        <main className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="bg-primary text-white text-center py-20 px-8">
                <h1 className="text-5xl font-bold mb-4">Our Products</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    Explore our range of world-class printing machines designed to deliver excellence
                    and innovation for all your printing needs.
                </p>
            </section>

            {/* Products Section */}
            <section className="py-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Machines</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="relative group rounded-lg overflow-hidden shadow-lg"
                            >
                                {/* Product Image */}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={500}
                                    height={300}
                                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:bg-opacity-70"></div>

                                {/* Text Content */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-500 group-hover:opacity-100">
                                    <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                                    <p className="text-center">{product.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
