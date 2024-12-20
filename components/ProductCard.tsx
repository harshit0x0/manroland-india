import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RedUnderLine from './ui/redUnderline';

type ProductCardProps = {
    title: string;
    description: string;
    image: string;
    url: string;
};

export default function ProductCard({ title, description, image, url }: ProductCardProps) {
    return (
        <div
            className="relative group w-full min-h-80 rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Translucent Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 md:bg-opacity-70 group-hover:bg-opacity-90 transition-all duration-300" />

            {/* Text Content */}
            <div className="relative z-10 flex flex-col justify-between text-white h-full px-5 md:px-20 pt-12 pb-8">
                <div>
                    <h3 className="text-4xl group-hover:text-red-500 font-semibold mb-2 transition-all duration-300">
                        {title}
                        <RedUnderLine width='3/4' />
                        {/* <div className='w-0 group-hover:w-3/4 h-0.5 bg-red-500 transistion duration-300'></div> */}
                    </h3>
                    <p className="text-grey-100 leading-8 text-sm font-thin mt-10 mb-4">{description}</p>
                </div>
                <div>
                    <a
                        href={`/products/` + url}
                        className="mt-12 w-fit rounded text-lg text-gray-300 transition-all underline duration-300"
                    >
                        View Product <FontAwesomeIcon icon={faCircleArrowRight} className='mt-2 text-transparent pl-4 group-hover:pl-0 group-hover:text-white  transistion duration-500 h-6' />
                    </a>
                </div>
            </div>
        </div>
    );
}
