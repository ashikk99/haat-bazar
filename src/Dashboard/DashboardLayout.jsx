import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";

import {
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingCart,
  Users,
  Menu,
  X,
  LogOut,
  Store,
  Settings,
} from "lucide-react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Products",
      path: "/dashboard/products",
      icon: Package,
    },
    {
      name: "Add Product",
      path: "/dashboard/add-product",
      icon: PlusCircle,
    },
    {
      name: "Orders",
      path: "/dashboard/orders",
      icon: ShoppingCart,
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: Users,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    // Firebase logout থাকলে এখানে signOut() করবেন
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= Mobile Navbar ================= */}
      <div className="lg:hidden flex items-center justify-between bg-[#063b2b] text-white px-5 py-4 sticky top-0 z-50">

        <div className="flex items-center gap-2">
          <Store size={28} />
          <h2 className="text-xl font-bold">
            Haat <span className="text-[#e8a817]">Bazar</span>
          </h2>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-[#0b5741]"
        >
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* ================= Overlay ================= */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        ></div>
      )}

      {/* ================= Sidebar ================= */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-64
          bg-[#063b2b] text-white
          flex flex-col
          transition-transform duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >

        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/10">

          <div className="flex items-center gap-3">

            <div className="bg-[#e8a817] p-2 rounded-lg">
              <Store size={25} className="text-[#063b2b]" />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Haat <span className="text-[#e8a817]">Bazar</span>
              </h2>

              <p className="text-xs text-gray-300">
                Admin Dashboard
              </p>
            </div>

          </div>

        </div>

        {/* Menu */}
        <div className="flex-1 px-4 py-6 overflow-y-auto">

          <p className="text-xs uppercase text-gray-400 font-semibold px-3 mb-3">
            Main Menu
          </p>

          <nav className="space-y-2">

            {menuItems.map((item) => {

              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3
                    px-4 py-3
                    rounded-xl
                    font-medium
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-[#e8a817] text-[#063b2b] shadow-lg"
                        : "text-gray-200 hover:bg-[#0b5741] hover:text-white"
                    }
                    `
                  }
                >

                  <Icon size={21} />

                  <span>{item.name}</span>

                </NavLink>
              );
            })}

          </nav>

        </div>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">

          <button
            onClick={handleLogout}
            className="
              w-full
              flex items-center gap-3
              px-4 py-3
              rounded-xl
              text-red-300
              hover:bg-red-500/10
              hover:text-red-400
              transition
            "
          >
            <LogOut size={21} />

            <span className="font-medium">
              Logout
            </span>
          </button>

        </div>

      </aside>

      {/* ================= Main Content ================= */}
      <main className="lg:ml-64 min-h-screen">

        {/* Desktop Topbar */}
        <header className="hidden lg:flex bg-white h-20 items-center justify-between px-8 border-b sticky top-0 z-30">

          <div>
            <h1 className="text-2xl font-bold text-[#063b2b]">
              <NavLink to="/">Dashboard</NavLink>
            </h1>

            <p className="text-sm text-gray-500">
              Welcome back, Admin
            </p>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-[#063b2b] text-white flex items-center justify-center font-bold">
              A
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                Admin
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

          </div>

        </header>

        {/* Page Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
};

export default DashboardLayout;