import React, { useState } from "react";
import {
    Eye,
    Search,
    Package,
    Clock,
    CheckCircle,
    XCircle,
    Truck,
} from "lucide-react";

const Orders = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    const [orders, setOrders] = useState([
        {
            id: "#HB1001",
            customer: "Rahim Ahmed",
            email: "rahim@gmail.com",
            product: "Premium T-Shirt",
            amount: 850,
            date: "09 Sep 2026",
            status: "Pending",
        },
        {
            id: "#HB1002",
            customer: "Karim Hasan",
            email: "karim@gmail.com",
            product: "Baby Dress",
            amount: 1200,
            date: "08 Sep 2026",
            status: "Processing",
        },
        {
            id: "#HB1003",
            customer: "Nusrat Jahan",
            email: "nusrat@gmail.com",
            product: "Women's Kurti",
            amount: 1500,
            date: "07 Sep 2026",
            status: "Delivered",
        },
        {
            id: "#HB1004",
            customer: "Sakib Khan",
            email: "sakib@gmail.com",
            product: "Smart Watch",
            amount: 2500,
            date: "06 Sep 2026",
            status: "Shipped",
        },
        {
            id: "#HB1005",
            customer: "Mim Akter",
            email: "mim@gmail.com",
            product: "Baby Shoes",
            amount: 950,
            date: "05 Sep 2026",
            status: "Cancelled",
        },
        {
            id: "#HB1006",
            customer: "Mim Akter",
            email: "mim@gmail.com",
            product: "Baby Shoes",
            amount: 950,
            date: "05 Sep 2026",
            status: "Cancelled",
        },
        {
            id: "#HB1007",
            customer: "Mim Akter",
            email: "mim@gmail.com",
            product: "Baby Shoes",
            amount: 950,
            date: "05 Sep 2026",
            status: "Pending",
        },
        {
            id: "#HB1008",
            customer: "Mim Akter",
            email: "mim@gmail.com",
            product: "Baby Shoes",
            amount: 950,
            date: "05 Sep 2026",
            status: "Cancelled",
        },
    ]);

    const handleViewOrder = (id) => {
        setOrders((previousOrders) =>
            previousOrders.map((order) =>
                order.id === id && order.status === "Pending"
                    ? {
                        ...order,
                        status: "Processing",
                    }
                    : order
            )
        );
    };

    const filteredOrders = orders.filter((order) => {
        const searchMatch =
            order.customer.toLowerCase().includes(search.toLowerCase()) ||
            order.id.toLowerCase().includes(search.toLowerCase()) ||
            order.product.toLowerCase().includes(search.toLowerCase());

        const statusMatch =
            status === "All" || order.status === status;

        return searchMatch && statusMatch;
    });

    const getStatusStyle = (orderStatus) => {
        switch (orderStatus) {
            case "Pending":
                return "bg-yellow-100 text-yellow-700";

            case "Processing":
                return "bg-blue-100 text-blue-700";

            case "Shipped":
                return "bg-purple-100 text-purple-700";

            case "Delivered":
                return "bg-green-100 text-green-700";

            case "Cancelled":
                return "bg-red-100 text-red-700";

            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const getStatusIcon = (orderStatus) => {
        switch (orderStatus) {
            case "Pending":
                return <Clock size={15} />;

            case "Processing":
                return <Package size={15} />;

            case "Shipped":
                return <Truck size={15} />;

            case "Delivered":
                return <CheckCircle size={15} />;

            case "Cancelled":
                return <XCircle size={15} />;

            default:
                return null;
        }
    };

    return (
        <div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>
                    <h1 className="text-3xl font-bold text-[#063b2b]">
                        Orders
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage and track all customer orders.
                    </p>
                </div>

                <div className="bg-white px-5 py-3 rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500">
                        Total Orders
                    </p>

                    <p className="text-2xl font-bold text-[#063b2b]">
                        {orders.length}
                    </p>
                </div>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="text-gray-500 text-sm">
                        Pending
                    </p>

                    <h2 className="text-2xl font-bold text-yellow-600 mt-2">
                        {orders.filter((o) => o.status === "Pending").length}
                    </h2>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="text-gray-500 text-sm">
                        Processing
                    </p>

                    <h2 className="text-2xl font-bold text-blue-600 mt-2">
                        {orders.filter((o) => o.status === "Processing").length}
                    </h2>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="text-gray-500 text-sm">
                        Shipped
                    </p>

                    <h2 className="text-2xl font-bold text-purple-600 mt-2">
                        {orders.filter((o) => o.status === "Shipped").length}
                    </h2>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="text-gray-500 text-sm">
                        Delivered
                    </p>

                    <h2 className="text-2xl font-bold text-green-600 mt-2">
                        {orders.filter((o) => o.status === "Delivered").length}
                    </h2>
                </div>

            </div>

            {/* Search & Filter */}
            <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">

                <div className="flex flex-col md:flex-row gap-4">

                    {/* Search */}
                    <div className="relative flex-1">

                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search by order ID, customer or product..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="
                w-full
                border border-gray-200
                rounded-xl
                py-3 pl-12 pr-4
                outline-none
                focus:border-[#063b2b]
              "
                        />

                    </div>

                    {/* Status Filter */}
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="
              border border-gray-200
              rounded-xl
              px-5 py-3
              outline-none
              focus:border-[#063b2b]
              bg-white
            "
                    >
                        <option value="All">All Orders</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>

                </div>

            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[900px]">

                        <thead className="bg-gray-50 border-b">

                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    Order
                                </th>

                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    Customer
                                </th>

                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    Product
                                </th>

                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    Amount
                                </th>

                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    Date
                                </th>

                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    Status
                                </th>

                                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600">
                                    Action
                                </th>
                            </tr>

                        </thead>

                        <tbody>

                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((order) => (

                                    <tr
                                        key={order.id}
                                        className="border-b last:border-b-0 hover:bg-gray-50 transition"
                                    >

                                        {/* Order ID */}
                                        <td className="px-6 py-5">
                                            <span className="font-semibold text-[#063b2b]">
                                                {order.id}
                                            </span>
                                        </td>

                                        {/* Customer */}
                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-3">

                                                <div className="
                          w-10 h-10
                          rounded-full
                          bg-[#063b2b]
                          text-white
                          flex items-center justify-center
                          font-bold
                        ">
                                                    {order.customer.charAt(0)}
                                                </div>

                                                <div>
                                                    <p className="font-semibold text-gray-800">
                                                        {order.customer}
                                                    </p>

                                                    <p className="text-xs text-gray-500">
                                                        {order.email}
                                                    </p>
                                                </div>

                                            </div>

                                        </td>

                                        {/* Product */}
                                        <td className="px-6 py-5 text-gray-700">
                                            {order.product}
                                        </td>

                                        {/* Amount */}
                                        <td className="px-6 py-5">

                                            <span className="font-bold text-gray-800">
                                                ৳{order.amount}
                                            </span>

                                        </td>

                                        {/* Date */}
                                        <td className="px-6 py-5 text-gray-500">
                                            {order.date}
                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-5">

                                            <span
                                                className={`
                          inline-flex items-center gap-1.5
                          px-3 py-1.5
                          rounded-full
                          text-xs font-semibold
                          ${getStatusStyle(order.status)}
                        `}
                                            >
                                                {getStatusIcon(order.status)}
                                                {order.status}
                                            </span>

                                        </td>

                                        {/* Action */}
                                        <td className="px-6 py-5 text-center">

                                            <button

                                            onClick={handleViewOrder}
                                                className="
                          p-2.5
                          rounded-lg
                          bg-gray-100
                          text-gray-600
                          hover:bg-[#063b2b]
                          hover:text-white
                          transition
                        "
                                                title="View Order"
                                            >
                                                <Eye size={18} />
                                            </button>

                                        </td>

                                    </tr>

                                ))
                            ) : (

                                <tr>
                                    <td
                                        colSpan="7"
                                        className="text-center py-12 text-gray-500"
                                    >
                                        No orders found.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default Orders;