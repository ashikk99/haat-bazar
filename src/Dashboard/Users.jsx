import React, { useState } from "react";
import {
    Search,
    Eye,
    UserCheck,
    UserX,
    Users as UsersIcon,
} from "lucide-react";

const Users = () => {
    const [search, setSearch] = useState("");

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Rahim Ahmed",
            email: "rahim@gmail.com",
            phone: "01712345678",
            orders: 12,
            joined: "12 Aug 2026",
            status: "Active",
        },
        {
            id: 2,
            name: "Karim Hasan",
            email: "karim@gmail.com",
            phone: "01812345678",
            orders: 8,
            joined: "15 Aug 2026",
            status: "Active",
        },
        {
            id: 3,
            name: "Nusrat Jahan",
            email: "nusrat@gmail.com",
            phone: "01912345678",
            orders: 15,
            joined: "20 Aug 2026",
            status: "Active",
        },
        {
            id: 4,
            name: "Sakib Khan",
            email: "sakib@gmail.com",
            phone: "01612345678",
            orders: 5,
            joined: "25 Aug 2026",
            status: "Blocked",
        },
        {
            id: 5,
            name: "Mim Akter",
            email: "mim@gmail.com",
            phone: "01512345678",
            orders: 10,
            joined: "28 Aug 2026",
            status: "Active",
        },
        {
            id: 6,
            name: "Arif Hossain",
            email: "arif@gmail.com",
            phone: "01312345678",
            orders: 3,
            joined: "01 Sep 2026",
            status: "Active",
        },
    ]);

    // Search
    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.phone.includes(search)
    );

    // Block / Unblock
    const handleStatusChange = (id) => {
        setUsers((previousUsers) =>
            previousUsers.map((user) =>
                user.id === id
                    ? {
                        ...user,
                        status:
                            user.status === "Active"
                                ? "Blocked"
                                : "Active",
                    }
                    : user
            )
        );
    };

    return (
        <div>

            {/* ================= Header ================= */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>
                    <h1 className="text-3xl font-bold text-[#063b2b]">
                        Users
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage all registered customers.
                    </p>
                </div>

                {/* Total Users */}
                <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl shadow-sm border">

                    <div className="bg-[#063b2b]/10 p-3 rounded-lg">
                        <UsersIcon
                            size={24}
                            className="text-[#063b2b]"
                        />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Total Users
                        </p>

                        <p className="text-2xl font-bold text-[#063b2b]">
                            {users.length}
                        </p>
                    </div>

                </div>

            </div>

            {/* ================= Statistics ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

                {/* Total */}
                <div className="bg-white p-5 rounded-xl shadow-sm border">
                    <p className="text-gray-500 text-sm">
                        Total Users
                    </p>

                    <h2 className="text-2xl font-bold mt-2 text-[#063b2b]">
                        {users.length}
                    </h2>
                </div>

                {/* Active */}
                <div className="bg-white p-5 rounded-xl shadow-sm border">
                    <p className="text-gray-500 text-sm">
                        Active Users
                    </p>

                    <h2 className="text-2xl font-bold mt-2 text-green-600">
                        {
                            users.filter(
                                (user) => user.status === "Active"
                            ).length
                        }
                    </h2>
                </div>

                {/* Blocked */}
                <div className="bg-white p-5 rounded-xl shadow-sm border">
                    <p className="text-gray-500 text-sm">
                        Blocked Users
                    </p>

                    <h2 className="text-2xl font-bold mt-2 text-red-600">
                        {
                            users.filter(
                                (user) => user.status === "Blocked"
                            ).length
                        }
                    </h2>
                </div>

            </div>

            {/* ================= Search ================= */}
            <div className="bg-white p-5 rounded-2xl shadow-sm mb-6">

                <div className="relative max-w-xl">

                    <Search
                        size={20}
                        className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
                    />

                    <input
                        type="text"
                        placeholder="Search user by name, email or phone..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
              w-full
              border border-gray-200
              rounded-xl
              py-3
              pl-12
              pr-4
              outline-none
              focus:border-[#063b2b]
              focus:ring-2
              focus:ring-[#063b2b]/10
            "
                    />

                </div>

            </div>

            {/* ================= Users Table ================= */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[900px]">

                        {/* Table Header */}
                        <thead className="bg-gray-50 border-b">

                            <tr>

                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    User
                                </th>

                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    Phone
                                </th>

                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    Orders
                                </th>

                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    Joined
                                </th>

                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                                    Status
                                </th>

                                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        {/* Table Body */}
                        <tbody>

                            {filteredUsers.length > 0 ? (

                                filteredUsers.map((user) => (

                                    <tr
                                        key={user.id}
                                        className="
                      border-b
                      last:border-b-0
                      hover:bg-gray-50
                      transition
                    "
                                    >

                                        {/* User */}
                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-3">

                                                {/* Avatar */}
                                                <div className="
                          w-11
                          h-11
                          rounded-full
                          bg-[#063b2b]
                          text-white
                          flex
                          items-center
                          justify-center
                          font-bold
                        ">
                                                    {user.name.charAt(0)}
                                                </div>

                                                <div>

                                                    <p className="font-semibold text-gray-800">
                                                        {user.name}
                                                    </p>

                                                    <p className="text-sm text-gray-500">
                                                        {user.email}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* Phone */}
                                        <td className="px-6 py-5 text-gray-600">
                                            {user.phone}
                                        </td>

                                        {/* Orders */}
                                        <td className="px-6 py-5">

                                            <span className="
                        bg-[#063b2b]/10
                        text-[#063b2b]
                        px-3
                        py-1.5
                        rounded-full
                        text-sm
                        font-semibold
                      ">
                                                {user.orders}
                                            </span>

                                        </td>

                                        {/* Joined */}
                                        <td className="px-6 py-5 text-gray-500">
                                            {user.joined}
                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-5">

                                            {user.status === "Active" ? (

                                                <span className="
                          inline-flex
                          items-center
                          gap-1.5
                          bg-green-100
                          text-green-700
                          px-3
                          py-1.5
                          rounded-full
                          text-xs
                          font-semibold
                        ">
                                                    <UserCheck size={15} />
                                                    Active
                                                </span>

                                            ) : (

                                                <span className="
                          inline-flex
                          items-center
                          gap-1.5
                          bg-red-100
                          text-red-700
                          px-3
                          py-1.5
                          rounded-full
                          text-xs
                          font-semibold
                        ">
                                                    <UserX size={15} />
                                                    Blocked
                                                </span>

                                            )}

                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-5">

                                            <div className="flex items-center justify-center gap-2">

                                                {/* View */}
                                                <button
                                                    className="
                            p-2.5
                            rounded-lg
                            bg-gray-100
                            text-gray-600
                            hover:bg-[#063b2b]
                            hover:text-white
                            transition
                          "
                                                    title="View User"
                                                >
                                                    <Eye size={18} />
                                                </button>

                                                {/* Block / Unblock */}
                                                <button
                                                    onClick={() =>
                                                        handleStatusChange(user.id)
                                                    }
                                                    className={`
                            p-2.5
                            rounded-lg
                            transition

                            ${user.status === "Active"
                                                            ? "bg-red-50 text-red-600 hover:bg-red-600 hover:text-white"
                                                            : "bg-green-50 text-green-600 hover:bg-green-600 hover:text-white"
                                                        }
                          `}
                                                    title={
                                                        user.status === "Active"
                                                            ? "Block User"
                                                            : "Unblock User"
                                                    }
                                                >

                                                    {user.status === "Active" ? (
                                                        <UserX size={18} />
                                                    ) : (
                                                        <UserCheck size={18} />
                                                    )}

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="
                      text-center
                      py-12
                      text-gray-500
                    "
                                    >
                                        No users found.
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

export default Users;