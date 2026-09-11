import React, { useState } from "react";

const AddProducts = () => {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    // পরে এখানে API call করবেন
    // fetch("http://localhost:5000/products", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    alert("Product added successfully!");

    setProduct({
      title: "",
      image: "",
      category: "",
      price: "",
      stock: "",
      description: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#063b2b]">
          Add New Product
        </h1>

        <p className="text-gray-500 mt-1">
          Add a new product to your Haat Bazar store.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">

        <form onSubmit={handleSubmit}>

          {/* Product Information */}
          <div className="mb-8">

            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Product Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Product Name */}
              <div className="md:col-span-2">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>

                <input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="
                    w-full px-4 py-3
                    border border-gray-300
                    rounded-xl
                    outline-none
                    focus:border-[#063b2b]
                    focus:ring-2 focus:ring-[#063b2b]/10
                  "
                  required
                />

              </div>

              {/* Image URL */}
              <div className="md:col-span-2">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image URL
                </label>

                <input
                  type="url"
                  name="image"
                  value={product.image}
                  onChange={handleChange}
                  placeholder="https://example.com/product.jpg"
                  className="
                    w-full px-4 py-3
                    border border-gray-300
                    rounded-xl
                    outline-none
                    focus:border-[#063b2b]
                    focus:ring-2 focus:ring-[#063b2b]/10
                  "
                  required
                />

              </div>

              {/* Category */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>

                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3
                    border border-gray-300
                    rounded-xl
                    outline-none
                    bg-white
                    focus:border-[#063b2b]
                    focus:ring-2 focus:ring-[#063b2b]/10
                  "
                  required
                >

                  <option value="">
                    Select Category
                  </option>

                  <option value="Men">
                    Men
                  </option>

                  <option value="Women">
                    Women
                  </option>

                  <option value="Baby">
                    Baby
                  </option>

                  <option value="Electronics">
                    Electronics
                  </option>

                  <option value="Grocery">
                    Grocery
                  </option>

                  <option value="Others">
                    Others
                  </option>

                </select>

              </div>

              {/* Price */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (৳)
                </label>

                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  min="0"
                  className="
                    w-full px-4 py-3
                    border border-gray-300
                    rounded-xl
                    outline-none
                    focus:border-[#063b2b]
                    focus:ring-2 focus:ring-[#063b2b]/10
                  "
                  required
                />

              </div>

              {/* Stock */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stock Quantity
                </label>

                <input
                  type="number"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  placeholder="Enter stock quantity"
                  min="0"
                  className="
                    w-full px-4 py-3
                    border border-gray-300
                    rounded-xl
                    outline-none
                    focus:border-[#063b2b]
                    focus:ring-2 focus:ring-[#063b2b]/10
                  "
                  required
                />

              </div>

            </div>

          </div>

          {/* Description */}
          <div className="mb-8">

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Description
            </label>

            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="6"
              placeholder="Write a detailed description about this product..."
              className="
                w-full px-4 py-3
                border border-gray-300
                rounded-xl
                outline-none
                resize-none
                focus:border-[#063b2b]
                focus:ring-2 focus:ring-[#063b2b]/10
              "
              required
            ></textarea>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 border-t pt-6">

            <button
              type="button"
              onClick={() =>
                setProduct({
                  title: "",
                  image: "",
                  category: "",
                  price: "",
                  stock: "",
                  description: "",
                })
              }
              className="
                px-6 py-3
                rounded-xl
                border border-gray-300
                text-gray-700
                font-medium
                hover:bg-gray-100
                transition
              "
            >
              Clear
            </button>

            <button
              type="submit"
              className="
                px-7 py-3
                rounded-xl
                bg-[#063b2b]
                text-white
                font-semibold
                hover:bg-[#0b5741]
                transition
                shadow-md
              "
            >
              + Add Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddProducts;