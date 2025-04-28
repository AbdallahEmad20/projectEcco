import React from 'react'
import imageFooter1 from "../../assets/Payment_footer-removebg-preview-e1740799581299.png.png"
import LogoFooter from "../../assets/771b8f6b645d7fe53ce0fbaf8375eedc456a2018.png"
import symbolIcon from "../../assets/wpf_sent.png"

const Footer = () => {
    return (
        <footer className="bg-black text-white paddingX paddingY">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-4">

                {/* Products */}
                <div className="space-y-4">
                    <h3 className="!font-bold text-lg">Products</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="!font-medium text-[#BDBDBD]">Auto Parts</li>
                        <li className="!font-medium text-[#BDBDBD]">Batteries</li>
                        <li className="!font-medium text-[#BDBDBD]">Tyres</li>
                        <li className="!font-medium text-[#BDBDBD]">Rims</li>
                        <li className="!font-medium text-[#BDBDBD]">All Products</li>
                    </ul>
                    <div className="flex space-x-3 pt-4">
                        <img src={imageFooter1} alt="Google Pay" className="h-5" />
                    </div>
                </div>

                {/* Help and Support */}
                <div className="space-y-4">
                    <h3 className="!font-bold text-lg">Help and Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="!font-medium text-[#BDBDBD]">Track My Order</li>
                        <li className="!font-medium text-[#BDBDBD]">Contact us</li>
                        <li className="!font-medium text-[#BDBDBD]">My account</li>
                        <li className="!font-medium text-[#BDBDBD]">Blog</li>
                        <li className="!font-medium text-[#BDBDBD]">FAQ</li>
                    </ul>
                </div>

                {/* About US */}
                <div className="space-y-4">
                    <h3 className="!font-bold text-lg">About US</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="!font-medium text-[#BDBDBD]">Why O2Mart?</li>
                        <li className="!font-medium text-[#BDBDBD]">Become Partner</li>
                        <li className="!font-medium text-[#BDBDBD]">Privacy Policy</li>
                        <li className="!font-medium text-[#BDBDBD]">Terms of Use</li>
                        <li className="!font-medium text-[#BDBDBD]">Warranty & Returns Policy</li>
                    </ul>
                </div>

                {/* Logo and Subscribe */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <img src={LogoFooter} alt="Logo" className="h-8" />
                        <span className="!font-bold text-2xl">Mart</span>
                    </div>
                    <div className="text-[#BDBDBD] text-sm">
                        Customer Service Hours<br />
                        Monday-Friday: 7:00am-8:00pm.<br />
                        Sunday: Closed.
                    </div>
                    <div className="flex space-x-4 pt-2">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="pt-4">
                        <p className="mb-2 font-semibold text-red-500 text-sm">Get the Latest Deals & Updates</p>
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

            </div>

            <div className="mt-10 pt-6 border-gray-700 border-t text-gray-500 text-sm text-center">
                Copyright © 2025 O2Mart. All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer
