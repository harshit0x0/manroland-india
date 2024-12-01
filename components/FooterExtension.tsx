import Link from 'next/link';

export default function FooterExtension() {
    return (
        <footer className="bg-black text-white py-10 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">About Manroland</h3>
                    <p className="text-sm text-gray-300">
                        Manroland India is a leading provider of innovative printing solutions,
                        offering cutting-edge technology with exceptional service.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className='md:pl-8'>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 pl-2">
                        <li>
                            <Link href="/about-us" className="group text-gray-300">
                                About us
                                <div className={`w-0 group-hover:w-1/4 h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="group text-gray-300">
                                Products
                                <div className={`w-0 group-hover:w-1/4 h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="group text-gray-300">
                                Services
                                <div className={`w-0 group-hover:w-1/4 h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/support" className="group text-gray-300">
                                Support
                                <div className={`w-0 group-hover:w-1/4 h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="group text-gray-300">
                                Contact
                                <div className={`w-0 group-hover:w-1/4 h-0.5 bg-red-500 transistion duration-500 ease-in-out`}></div>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Phone: +91-123-456-7890</li>
                        <li>Email: support@manrolandindia.com</li>
                        <li>Address: Manroland India, 123 Business Park, New Delhi, India</li>
                    </ul>
                    <div className="mt-4 flex space-x-4">
                        {/* Social Media Icons */}
                        <a href="#" className="text-gray-300 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 0H2C.895 0 0 .895 0 2v20c0 1.105.895 2 2 2h10.617v-8.422H8.874V9.768h3.743V7.392c0-3.712 2.259-5.742 5.548-5.742 1.608 0 2.99.12 3.392.173v3.93H18.96c-1.657 0-1.98.788-1.98 1.944v2.546h4.03l-.524 3.81h-3.506V24H22c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.56c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.954-2.173-1.55-3.59-1.55-2.717 0-4.917 2.2-4.917 4.917 0 .386.044.762.127 1.124-4.084-.205-7.702-2.162-10.124-5.134-.424.729-.666 1.577-.666 2.482 0 1.712.871 3.223 2.191 4.108-.807-.026-1.566-.247-2.228-.616v.062c0 2.39 1.698 4.384 3.95 4.837-.413.113-.848.172-1.296.172-.317 0-.626-.031-.929-.089.626 1.955 2.444 3.379 4.6 3.419-1.68 1.317-3.808 2.104-6.115 2.104-.398 0-.79-.023-1.176-.068 2.181 1.399 4.768 2.215 7.548 2.215 9.051 0 13.999-7.498 13.999-13.999 0-.213-.004-.425-.014-.637.961-.695 1.796-1.562 2.457-2.548l-.047-.02z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23.994 4.65c-.889.394-1.845.66-2.852.775a4.993 4.993 0 0 0 2.188-2.743 9.933 9.933 0 0 1-3.127 1.195 4.983 4.983 0 0 0-3.575-1.55c-3.675 0-6.127 3.1-5.4 6.561-4.08-.216-7.686-2.165-10.115-5.134-.387.674-.612 1.457-.612 2.293 0 1.65.84 3.106 2.115 3.96-.78-.025-1.52-.238-2.165-.593v.06c0 2.307 1.643 4.234 3.822 4.666-.4.108-.824.166-1.26.166-.307 0-.604-.03-.896-.086.606 1.88 2.343 3.267 4.406 3.308-1.635 1.28-3.697 2.05-5.937 2.05-.385 0-.766-.023-1.143-.065 2.11 1.355 4.614 2.143 7.307 2.143 8.778 0 13.576-7.268 13.576-13.577 0-.207-.004-.414-.012-.62.93-.688 1.732-1.547 2.372-2.525l-.043-.02z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
