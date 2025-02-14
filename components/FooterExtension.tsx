import Link from 'next/link';

export default function FooterExtension() {
    return (
        <footer className="bg-black text-white py-10 px-8 relative">
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
                            <Link href="/about" className="group text-gray-300">
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
                        <li>Phone: +01 145577393</li>
                        <li>Email: mrsfindia@marolandSheetfed.com</li>
                        <li>Address: MR Sheetfed India Pvt Ltd <br />
                            A-7, Phase 2 Community Centre <br />
                            Naraina Industrial Area,
                            New Delhi – 110028
                        </li>
                    </ul>
                    <div className="mt-4 flex space-x-4">
                        {/* Social Media Icons */}
                        <a href="https://www.facebook.com/manrolandindia/" className="text-gray-300 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 0H2C.895 0 0 .895 0 2v20c0 1.105.895 2 2 2h10.617v-8.422H8.874V9.768h3.743V7.392c0-3.712 2.259-5.742 5.548-5.742 1.608 0 2.99.12 3.392.173v3.93H18.96c-1.657 0-1.98.788-1.98 1.944v2.546h4.03l-.524 3.81h-3.506V24H22c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2z" />
                            </svg>
                        </a>
                        <a href="https://x.com/manroland" className="text-gray-300 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.56c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.954-2.173-1.55-3.59-1.55-2.717 0-4.917 2.2-4.917 4.917 0 .386.044.762.127 1.124-4.084-.205-7.702-2.162-10.124-5.134-.424.729-.666 1.577-.666 2.482 0 1.712.871 3.223 2.191 4.108-.807-.026-1.566-.247-2.228-.616v.062c0 2.39 1.698 4.384 3.95 4.837-.413.113-.848.172-1.296.172-.317 0-.626-.031-.929-.089.626 1.955 2.444 3.379 4.6 3.419-1.68 1.317-3.808 2.104-6.115 2.104-.398 0-.79-.023-1.176-.068 2.181 1.399 4.768 2.215 7.548 2.215 9.051 0 13.999-7.498 13.999-13.999 0-.213-.004-.425-.014-.637.961-.695 1.796-1.562 2.457-2.548l-.047-.02z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/manroland-sheetfed-india-ltd" className="text-gray-300 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
