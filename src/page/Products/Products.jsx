import React from "react";
import { useNavigate } from "react-router";

const Products = ({ product }) => {

    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate("/order", {
            state: {
                product: product
            }
        });
    };

    return (
        <div className="card bg-base-100 w-[250px] h-[300px] max-w-full shadow-sm">

            <figure>
                <img
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body p-4">

                <h2 className="card-title text-lg">
                    {product?.name}

                    <div className="badge badge-secondary">
                        NEW
                    </div>
                </h2>

                <p className="text-sm text-gray-600">
                    {product?.description}
                </p>

                <div className="flex">
                    <p className="text-xl font-bold text-green-700">
                        ৳{product?.price}
                    </p>

                    <div className="card-actions justify-between items-center">

                        <button
                            onClick={handleBuyNow}
                            className="btn btn-sm bg-[#063b2b] text-white hover:bg-[#0b5741]"
                        >
                            Buy Now
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;