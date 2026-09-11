
import React, { useRef } from "react";
import Products from "./Products";

const ProductCarousel = () => {
    const carouselRef = useRef(null);

    const products = [
        {
            id: 1,
            name: "Baby Shoes",
            price: 550,
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            description: "Comfortable and stylish baby shoes.",
        },
        {
            id: 2,
            name: "Baby Dress",
            price: 750,
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            description: "Beautiful baby dress for your little one.",
        },
        {
            id: 3,
            name: "Baby Toy",
            price: 450,
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            description: "Safe and attractive toy for babies.",
        },
        {
            id: 4,
            name: "Baby Bag",
            price: 650,
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            description: "Cute and useful baby bag.",
        },
        {
            id: 5,
            name: "Baby Product",
            price: 650,
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            description: "High quality baby product.",
        },
        {
            id: 6,
            name: "Baby Product",
            price: 650,
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            description: "High quality baby product.",
        },
        {
            id: 7,
            name: "Baby Product",
            price: 650,
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            description: "High quality baby product.",
        },
        {
            id: 8,
            name: "Baby Product",
            price: 650,
            image:
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            description: "High quality baby product.",
        },
    ];

    // Next button
    const nextSlide = () => {
        carouselRef.current?.scrollBy({
            left: 350,
            behavior: "smooth",
        });
    };

    // Previous button
    const previousSlide = () => {
        carouselRef.current?.scrollBy({
            left: -350,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-10 w-11/12 lg:w-6/7 mx-auto">

            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Trending Products
                </h2>

                <p className="text-gray-500 mt-2">
                    Explore our popular products
                </p>
            </div>

            {/* ================= DESKTOP CAROUSEL ================= */}
            <div className="relative hidden lg:block">

                {/* Previous Button */}
                <button
                    onClick={previousSlide}
                    className="
                        absolute
                        left-0
                        top-1/2
                        -translate-y-1/2
                        z-10
                        btn
                        btn-circle
                        btn-warning
                        shadow-lg
                    "
                >
                    ❮
                </button>

                {/* Products Carousel */}
                <div
                    ref={carouselRef}
                    className="
                        flex
                        gap-6
                        overflow-x-auto
                        scroll-smooth
                        px-12
                        py-4
                        scrollbar-hide
                    "
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="
                                flex-shrink-0
                                w-[25%]
                            "
                        >
                            <Products product={product} />
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="
                        absolute
                        right-0
                        top-1/2
                        -translate-y-1/2
                        z-10
                        btn
                        btn-circle
                        btn-warning
                        shadow-lg
                    "
                >
                    ❯
                </button>
            </div>


            {/* ================= MOBILE + TABLET GRID ================= */}
            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    gap-6
                    // justify-items-center
                    lg:hidden
                "
            >
                {products.map((product) => (
                    <div key={product.id} className="w-full flex justify-center">
                        <Products product={product} />
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ProductCarousel;
