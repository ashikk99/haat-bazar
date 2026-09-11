import React from 'react';
import { useNavigate } from 'react-router';

const Card = () => {

    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate("/order")
        console.log('Order Button click');
    };


    return (



        <div className="
            card
            bg-base-100
            w-[300px]
            h-[400px]
            md:w-[250px]
            md:h-[350px]
            lg:w-[250px]
            lg:h-[300px]
            xl:w-[350px]
            
            shadow-md
            my-5
            mx-auto
        ">

            {/* Image */}
            <figure className="w-full h-100 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body p-4">

                <h2 className="card-title text-lg">
                    Card Title
                </h2>

                <p className="text-sm">
                    A card component has a figure,
                    a body part, and actions.
                </p>

                <div className="card-actions justify-between">
                    <h1 className="text-xl font-bold text-amber-500">TK.500</h1>
                    <button
                        onClick={handleBuyNow}
                        className="btn btn-sm btn-primary">
                        Buy Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;