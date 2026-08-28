import React from "react";
import { FaArrowUp, FaBoxOpen, FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";


const Overview = () => {
  const stats = [
    {
      title: "Total Products",
      value: "1,250",
      icon: <FaBoxOpen />,
      change: "+12.5%",
    },
    {
      title: "Total Orders",
      value: "856",
      icon: <FaShoppingCart />,
      change: "+8.2%",
    },
    {
      title: "Total Customers",
      value: "3,420",
      icon: <FaUsers />,
      change: "+18.4%",
    },
    {
      title: "Total Revenue",
      value: "$24,580",
      icon: <FaDollarSign />,
      change: "+15.6%",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-1001",
      customer: "Rahim Ahmed",
      product: "Baby T-Shirt",
      amount: "$25",
      status: "Delivered",
    },
    {
      id: "#ORD-1002",
      customer: "Karim Hasan",
      product: "Men's Panjabi",
      amount: "$45",
      status: "Pending",
    },
    {
      id: "#ORD-1003",
      customer: "Nusrat Jahan",
      product: "Baby Shoes",
      amount: "$32",
      status: "Shipped",
    },
    {
      id: "#ORD-1004",
      customer: "Sakib Khan",
      product: "Smart Watch",
      amount: "$65",
      status: "Confirmed",
    },
    {
      id: "#ORD-1005",
      customer: "Mim Akter",
      product: "Women's Dress",
      amount: "$40",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        <p className="mt-1 text-gray-500">
          Welcome back! Here's what's happening with your store.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-800">
                  {stat.value}
                </h2>

                <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
                  <FaArrowUp size={11} />
                  <span>{stat.change}</span>
                  <span className="text-gray-400">
                    from last month
                  </span>
                </div>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#063b2b] text-xl text-white">
                {stat.icon}
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Sales Overview */}
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2 rounded-2xl bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Sales Overview
              </h2>

              <p className="text-sm text-gray-500">
                Monthly sales performance
              </p>
            </div>

            <select className="select select-bordered select-sm">
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
            </select>
          </div>

          {/* Simple Chart */}
          <div className="flex h-64 items-end gap-3 md:gap-6">

            {[45, 70, 55, 80, 65, 90, 75, 95, 70, 85, 100, 88].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex h-full flex-1 flex-col justify-end"
                >
                  <div
                    style={{ height: `${height}%` }}
                    className="rounded-t-lg bg-[#063b2b] transition-all hover:bg-[#e8a817]"
                  ></div>

                  <span className="mt-2 text-center text-xs text-gray-400">
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ][index]}
                  </span>
                </div>
              )
            )}

          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">

          <h2 className="text-xl font-bold text-gray-800">
            Order Summary
          </h2>

          <p className="text-sm text-gray-500">
            Today's order status
          </p>

          <div className="mt-6 space-y-5">

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-600">
                  Pending
                </span>

                <span className="font-semibold">
                  24
                </span>
              </div>

              <progress
                className="progress progress-warning w-full"
                value="35"
                max="100"
              ></progress>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-600">
                  Confirmed
                </span>

                <span className="font-semibold">
                  42
                </span>
              </div>

              <progress
                className="progress progress-info w-full"
                value="55"
                max="100"
              ></progress>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-600">
                  Shipped
                </span>

                <span className="font-semibold">
                  31
                </span>
              </div>

              <progress
                className="progress progress-primary w-full"
                value="70"
                max="100"
              ></progress>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-600">
                  Delivered
                </span>

                <span className="font-semibold">
                  86
                </span>
              </div>

              <progress
                className="progress progress-success w-full"
                value="90"
                max="100"
              ></progress>
            </div>

          </div>
        </div>

      </div>

      {/* Recent Orders */}
      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Recent Orders
            </h2>

            <p className="text-sm text-gray-500">
              Latest customer orders
            </p>
          </div>

          <button className="btn btn-sm bg-[#063b2b] text-white hover:bg-[#e8a817] hover:text-black">
            View All
          </button>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">

          <table className="table">

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {recentOrders.map((order) => (
                <tr key={order.id}>

                  <td className="font-semibold">
                    {order.id}
                  </td>

                  <td>
                    {order.customer}
                  </td>

                  <td>
                    {order.product}
                  </td>

                  <td className="font-semibold">
                    {order.amount}
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        order.status === "Delivered"
                          ? "badge-success"
                          : order.status === "Pending"
                          ? "badge-warning"
                          : order.status === "Shipped"
                          ? "badge-info"
                          : "badge-primary"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
};

export default Overview;