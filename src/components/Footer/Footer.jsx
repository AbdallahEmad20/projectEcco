import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import imageFooter1 from "../../assets/Payment_footer-removebg-preview-e1740799581299.png.png"
import LogoFooter from "../../assets/771b8f6b645d7fe53ce0fbaf8375eedc456a2018.png"
import symbolIcon from "../../assets/wpf_sent.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-black px-4 md:px-20 py-10 md:py-14 text-white">

            {/* Main Grid */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-4">

                {/* ✅ أول قسمين جنب بعض في الموبايل */}
                <div className="gap-6 grid grid-cols-2 col-span-full md:col-span-2">
                    {/* Products */}
                    <div className="space-y-6">
                        <h3 className="!font-bold text-lg">Products</h3>
                        <ul className="space-y-2 text-sm">
                            {["Auto Parts", "Batteries", "Tyres", "Rims", "All Products"].map((item, index) => (
                                <li key={index} className="!font-semibold text-[#BDBDBD] hover:text-white hover:underline cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help and Support */}
                    <div className="space-y-6">
                        <h3 className="!font-bold text-lg">Help and Support</h3>
                        <ul className="space-y-2 text-sm">
                            {["Track My Order", "Contact us", "My account", "Blog", "FAQ"].map((item, index) => (
                                <li key={index} className="!font-semibold text-[#BDBDBD] hover:text-white hover:underline cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* About US */}
                <div className="space-y-6">
                    <h3 className="!font-bold text-lg">About US</h3>
                    <ul className="space-y-2 text-sm">
                        {["Why O2Mart?", "Become Partner", "Privacy Policy", "Terms of Use", "Warranty & Returns Policy"].map((item, index) => (
                            <li key={index} className="!font-semibold text-[#BDBDBD] hover:text-white hover:underline cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Logo + Info + Social (صف منفصل) */}
                <div className="flex flex-col items-center space-y-8 col-span-full md:col-span-1 mx-auto">
                    <div className="flex items-center space-x-2">
                        <img src={LogoFooter} alt="Logo" className="h-8" />
                    </div>
                    <div className="text-[#BDBDBD] text-sm md:text-left text-center leading-6">
                        Customer Service Hours<br />
                        Monday–Friday:<br />
                        7:00am–8:00pm.<br />
                        Sunday: Closed.
                    </div>
                    <div className="flex justify-center space-x-4 pt-2 text-2xl">
                        <a href="#" className="hover:text-white"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white"><FaInstagram /></a>
                        <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Payment + Subscribe Form */}
            <div className="flex md:flex-row flex-col justify-between items-center gap-8 mt-10">

                {/* Payment Methods */}
                <div className="flex-shrink-0">
                    <img src={imageFooter1} alt="Payment Methods" className="h-6" />
                </div>

                {/* Subscribe Form */}
                <div className="w-full max-w-md">
                    <p className="mb-2 font-semibold text-[#EC221F] text-sm md:text-left text-center">Get the Latest Deals & Updates</p>
                    <div className="relative w-full max-w-sm">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-grow bg-white px-4 py-2 pr-10 border-2 border-white focus:outline-none w-full h-full overflow-hidden text-black placeholder-gray-400"
                        />
                        <img
                            src={symbolIcon}
                            width={20}
                            height={20}
                            className="top-1/2 right-3 absolute text-gray-400 -translate-y-1/2 transform"
                        />
                    </div>
                </div>
            </div>

            {/* Separator Line */}
            <div className="my-8 border-gray-700 border-t"></div>

            {/* Footer Bottom Row */}
            <Link className="block text-[#FFFFFF] text-[14px] text-center cursor-pointer">
                Copyright © 2025 O2Mart. All Rights Reserved
            </Link>
        </footer>
    )
}

export default Footer
