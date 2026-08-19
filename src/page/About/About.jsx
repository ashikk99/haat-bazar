import React from "react";

const About = () => {
    return (
        <section className="py-16 bg-white">
            <div className="w-11/12 md:w-5/6 mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#063b2b] mb-4">
                        About <span className="text-[#e8a817]">Haat Bazar</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Your trusted online marketplace for quality products,
                        affordable prices, and a simple shopping experience.
                    </p>
                </div>

                {/* About Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Article */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#063b2b] mb-5">
                            Welcome to Haat Bazar
                        </h2>

                        <p className="text-gray-600 leading-7 mb-4">
                            Haat Bazar is a modern online marketplace designed
                            to make shopping simple, convenient, and enjoyable.
                            Our platform offers a wide range of quality products
                            including fashion, electronics, home essentials,
                            beauty products, baby products, and more.
                        </p>

                        <p className="text-gray-600 leading-7 mb-4">
                            We believe that everyone deserves access to quality
                            products at affordable prices. That's why Haat Bazar
                            focuses on providing a smooth and reliable shopping
                            experience for every customer.
                        </p>

                        <p className="text-gray-600 leading-7">
                            Our goal is to connect customers with trusted
                            products while making online shopping easier,
                            faster, and more enjoyable.
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">

                    {/* Mission */}
                    <div className="p-8 rounded-2xl bg-[#f5faf8] border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#063b2b] mb-4">
                            Our Mission
                        </h2>

                        <p className="text-gray-600 leading-7">
                            Our mission is to create a trusted digital
                            marketplace where customers can easily find
                            quality products at reasonable prices. We want to
                            provide a secure, convenient, and customer-friendly
                            shopping experience.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="p-8 rounded-2xl bg-[#fffaf0] border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#063b2b] mb-4">
                            Our Vision
                        </h2>

                        <p className="text-gray-600 leading-7">
                            Our vision is to become a trusted e-commerce
                            platform that brings customers and businesses
                            together. We aim to grow with technology while
                            delivering better products and services every day.
                        </p>
                    </div>

                </div>

                {/* Why Choose Us */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-[#063b2b] mb-8">
                        Why Choose Haat Bazar?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="p-6 rounded-xl shadow-sm border">
                            <div className="text-4xl mb-3">🛍️</div>
                            <h3 className="font-bold text-xl mb-2">
                                Quality Products
                            </h3>
                            <p className="text-gray-600">
                                We focus on providing quality products for our customers.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl shadow-sm border">
                            <div className="text-4xl mb-3">💰</div>
                            <h3 className="font-bold text-xl mb-2">
                                Affordable Price
                            </h3>
                            <p className="text-gray-600">
                                Get great products at competitive and affordable prices.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl shadow-sm border">
                            <div className="text-4xl mb-3">🚚</div>
                            <h3 className="font-bold text-xl mb-2">
                                Fast Delivery
                            </h3>
                            <p className="text-gray-600">
                                We aim to provide a smooth and reliable delivery experience.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl shadow-sm border">
                            <div className="text-4xl mb-3">❤️</div>
                            <h3 className="font-bold text-xl mb-2">
                                Customer First
                            </h3>
                            <p className="text-gray-600">
                                Your satisfaction is always one of our top priorities.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;