import React from "react";
import { NavLink } from "react-router";

const HeroBanner = () => {
    return (
        <section className="w-full bg-white">
            <div className="relative w-5/6 mx-auto overflow-hidden rounded-2xl bg-[#f8f8f6]">

                {/* Background Shape */}
                <div className="absolute right-[-100px] top-[-100px] h-[450px] w-[450px] rounded-full bg-[#f3b51b] opacity-20"></div>

                <div className="relative grid min-h-[500px] grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-2 md:px-10 lg:px-16">

                    {/* Left Content */}
                    <div className="z-10">

                        {/* Logo / Brand */}
                        <div className="flex items-center gap-2">
                            <img className='h-20 pb-5' src="/haat-bazar/logo.png" alt="" />
                        <h2 className="mb-5 text-3xl font-bold text-[#063b2b]">
                            Haat <span className="text-[#e8a817]">Bazar</span>
                        </h2>
</div>
                        {/* Heading */}
                        <h1 className="text-4xl font-extrabold leading-tight text-[#063b2b] md:text-5xl lg:text-6xl">
                            Shop the Best,
                            <br />
                            <span className="text-[#e8a817]">
                                Live the Style
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
                            Discover trendy fashion, top quality products and amazing
                            deals — all in one place.
                        </p>

                        {/* Button */}
                        <NavLink
                            to="/allproducts"
                            className="mt-7 inline-block rounded-lg bg-[#063b2b] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#0b5540]"
                        >
                            🛒 SHOP NOW
                        </NavLink>

                        {/* Features */}
                        <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-gray-700">
                            <span>✓ Premium Quality</span>
                            <span>✓ Best Prices</span>
                            <span>✓ Secure Shopping</span>
                            <span>✓ Fast Delivery</span>
                        </div>
                    </div>

                    {/* Right Product Area */}
                    <div className="relative flex lg:min-h-[350px] items-center justify-center">

                        {/* Yellow Circle */}


                        {/* Product Image */}
                        <img
                            src="/haat-bazar/banner-product 2.png"
                            alt="Haat Bazar Products"
                            className="relative z-10 w-full max-w-[500px] object-contain"
                        />

                        {/* Discount Badge */}
                        <div className="absolute bottom-5 left-2 z-20 flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-white bg-[#063b2b] text-center text-white shadow-xl md:left-0">
                            <span className="text-3xl font-bold text-[#f3b51b]">
                                50%
                            </span>
                            <span className="text-xs font-semibold">
                                OFF
                            </span> <span className="text-xs">UP TO</span>

                        </div>

                    </div>
                </div>

                {/* Bottom Benefits */}
                <div className="grid grid-cols-2 border-t bg-white md:grid-cols-4">

                    <div className="border-b p-5 text-center md:border-b-0 md:border-r">
                        <div className="text-2xl">🚚</div>
                        <h3 className="mt-2 font-bold text-[#063b2b]">
                            Free Delivery
                        </h3>
                        <p className="text-sm text-gray-500">
                            Orders over ৳2000
                        </p>
                    </div>

                    <div className="border-b p-5 text-center md:border-b-0 md:border-r">
                        <div className="text-2xl">↩️</div>
                        <h3 className="mt-2 font-bold text-[#063b2b]">
                            Easy Returns
                        </h3>
                        <p className="text-sm text-gray-500">
                            7 Days Return
                        </p>
                    </div>

                    <div className="border-r p-5 text-center">
                        <div className="text-2xl">🔒</div>
                        <h3 className="mt-2 font-bold text-[#063b2b]">
                            Secure Payment
                        </h3>
                        <p className="text-sm text-gray-500">
                            100% Secure
                        </p>
                    </div>

                    <div className="p-5 text-center">
                        <div className="text-2xl">🎧</div>
                        <h3 className="mt-2 font-bold text-[#063b2b]">
                            Customer Support
                        </h3>
                        <p className="text-sm text-gray-500">
                            24/7 Support
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroBanner;