'use client';

import { useState } from 'react';
import { sendMail } from '@/lib/sendMail';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { name, email, message } = formData;
            if (!name || !email || !message) {
                throw new Error("Missing required details");
            }
            const args = {
                senderAddress: email,
                recipients: {
                    to: [{
                        address: "vaishali.pandey@manrolandsheetfed.com",
                        displayName: "Manroland Sheetfed India- Vaishali Pandey"
                    }]
                },
                content: {
                    subject: `Message by ` + name,
                    plainText: message
                }
            }
            await sendMail(args);
            setSuccessMessage('Thank you for reaching out! We will get back to you shortly.');
            setFormData({ name: '', email: '', message: '' });
        } catch (e) {
            console.log(e);
            alert(`${e} Please try again!`);
        }
        // setTimeout(() => setIsLoading(false), 4000);
        setIsLoading(false);

    };

    return (
        <main className="bg-gray-100 text-gray-800">
            {/* Hero Section */}
            <section className="bg-primary text-white text-center py-20 px-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className=" md:text-lg max-w-3xl mx-auto">
                    Have questions or want to learn more about our products and services? Get in touch
                    with us. We&apos;re here to help!
                </p>
            </section>


            {/* Contact Form Section */}
            <section className="py-20 px-3 md:px-8 bg-primaryLight">
                <div className="lg:w-1/2 mx-auto bg-gray-200 rounded-lg shadow-lg p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Send Us a Message</h2>
                    {successMessage && (
                        <div className="bg-green-100 text-green-700 p-4 mb-6 rounded">
                            {successMessage}
                        </div>
                    )}
                    {isLoading && (
                        <div className="bg-green-200 text-gray-700 p-4 mb-6 rounded">
                            <div className="flex w-full items-center mx-auto">
                                <span className='text-lg font-bold text-center mr-4'>Sending Mail, Please Wait</span>
                                <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                            </div>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full  text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full  text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your Email Address"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                className="w-full  text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                rows={5}
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 px-4 rounded-lg font-bold hover:bg-opacity-90 transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            {/* Contact Details Section */}
            <section className="bg-gray-200 py-20 px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Address */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Our Address</h3>
                        <p className='text-sm text-gray-500'>
                            MR Sheetfed India Pvt Ltd <br />
                            A-7, Phase 2 Community Centre <br />
                            Naraina Industrial Area <br />
                            New Delhi – 110028

                        </p>
                    </div>

                    {/* Phone */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Call Us</h3>
                        <p className='text-sm text-gray-500'>
                            Phone:  +01 145577393<br />
                        </p>
                    </div>

                    {/* Email */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2">Email Us</h3>
                        <p className='text-sm text-gray-500'>
                            <a href="mailto:mrsfindia@manrolandsheetfed.com" className="text-primary hover:underline">
                                mrsfindia@manroland.sheetfed.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
