import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Link.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-wrap place-items-center">
            <section className="relative mx-auto w-full">
                <nav className="flex justify-between bg-gray-900 w-full text-white">
                    <div className="flex justify-between items-center py-6 w-full paddingX">
                        <Link className="font-heading font-bold text-3xl" to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>

                        {/* Links for lg and larger */}
                        <ul className="hidden lg:flex space-x-12 mx-auto px-4 font-heading font-semibold">
                            <li><Link className="hover:text-gray-200" to="/">Home</Link></li>
                            <li><Link className="hover:text-gray-200" to="/category">Category</Link></li>
                            <li><Link className="hover:text-gray-200" to="/collections">Collections</Link></li>
                            <li><Link className="hover:text-gray-200" to="/contact">Contact Us</Link></li>
                        </ul>

                        {/* Icons for lg and larger */}
                        <div className="hidden lg:flex items-center space-x-5">
                            <Link className="hover:text-gray-200" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </Link>

                            <Link className="flex items-center hover:text-gray-200" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="absolute flex -mt-5 ml-4">
                                    <span className="inline-flex absolute bg-pink-400 opacity-75 rounded-full w-3 h-3 animate-ping"></span>
                                    <span className="inline-flex relative bg-pink-500 rounded-full w-3 h-3"></span>
                                </span>
                            </Link>

                            <Link className="flex items-center hover:text-gray-200" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>
                        </div>

                        {/* Menubar Button for screens smaller than lg */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Dropdown menu for mobile only (less than lg) */}
                <div className={`lg:hidden bg-gray-800 text-white px-8 flex flex-col space-y-4 absolute w-full left-0 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 py-6 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
                    <Link className="hover:text-gray-200" to="/">Home</Link>
                    <Link className="hover:text-gray-200" to="/category">Category</Link>
                    <Link className="hover:text-gray-200" to="/collections">Collections</Link>
                    <Link className="hover:text-gray-200" to="/contact">Contact Us</Link>
                </div>
            </section>
        </div>
    );
};

export default Navbar;
