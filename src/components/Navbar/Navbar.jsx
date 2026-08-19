import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="allproducts">All Products</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/catagory">Catagory</NavLink></li>
    </>
    return (
        <div className="navbar w-5/6 mx-auto bg-base-100 shadow-sm rounded-lg lg:px-15">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='h-15' src="/haat-bazar/logo.png" alt="" />
                <NavLink className=" text-sm lg:text-3xl font-bold text-[#063b2b]"  to="/">Haat <span className="text-[#e8a817]">Bazar</span> </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
}

export default Navbar;
