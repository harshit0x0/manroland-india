import Image from 'next/image';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

type ProductCardProps = {
    title: string;
    description: string;
    image: string;
};

export default function ProductCard({ title, description, image }: ProductCardProps) {
    return (
        <div
            className="relative group w-full h-80 rounded-sm overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Translucent Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-80 transition-all duration-300" />

            {/* Text Content */}
            <div className="relative z-10 flex flex-col text-white h-full px-12 py-8">
                <h3 className="text-4xl mb-2 transition-all duration-300">
                    {title}
                </h3>
                <p className="text mt-4 mb-4">{description}</p>
                <a
                    href="#"
                    className="py-2 rounded text-white transition-all group-hover:underline duration-300"
                >
                    Learn More <faCircleArrowRight />
                </a>
            </div>
        </div>
    );
}
