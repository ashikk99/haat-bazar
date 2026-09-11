
import React from "react";
import { useLocation } from "react-router";

const OrderForm = () => {

    const location = useLocation();

    // Products page থেকে product data আসবে
    const product = location.state?.product;

    const handleOrder = (e) => {
        e.preventDefault();

        const form = e.target;

        const orderData = {
            name: form.name.value,
            phone: form.phone.value,
            address: form.address.value,
            quantity: form.quantity.value,
            product: product,
        };

        console.log("Order Data:", orderData);

        alert("Order placed successfully!");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">

            <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg">

                <h2 className="text-3xl font-bold text-center mb-8">
                    Customer Order Form
                </h2>

                {/* Product Information */}
                {product && (
                    <div className="flex gap-4 bg-gray-100 p-4 rounded-lg mb-6">

                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-24 h-24 object-cover rounded-lg"
                        />

                        <div>
                            <h3 className="text-xl font-bold">
                                {product.name}
                            </h3>

                            <p className="text-green-600 font-bold">
                                ৳{product.price}
                            </p>
                        </div>

                    </div>
                )}

                <form onSubmit={handleOrder} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="font-semibold">
                            Customer Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full mt-2"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="font-semibold">
                            Mobile Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="01XXXXXXXXX"
                            className="input input-bordered w-full mt-2"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="font-semibold">
                            Delivery Address
                        </label>

                        <textarea
                            name="address"
                            placeholder="Enter your full address"
                            className="textarea textarea-bordered w-full mt-2"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="font-semibold">
                            Quantity
                        </label>

                        <input
                            type="number"
                            name="quantity"
                            min="1"
                            defaultValue="1"
                            className="input input-bordered w-full mt-2"
                            required
                        />
                    </div>

                    {/* Payment */}
                    <div>
                        <label className="font-semibold">
                            Payment Method
                        </label>

                        <select
                            name="payment"
                            className="select select-bordered w-full mt-2"
                        >
                            <option value="cod">
                                Cash on Delivery
                            </option>

                            <option value="bkash">
                                bKash
                            </option>

                            <option value="nagad">
                                Nagad
                            </option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-warning w-full text-lg"
                    >
                        Confirm Order
                    </button>

                </form>

            </div>
        </div>
    );
};

export default OrderForm;

