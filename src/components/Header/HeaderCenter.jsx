import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";

const HeaderCenter = ({ toggle }) => {
  return (
    <>
      {/* Navbar Desktop */}
      <nav className="hidden lg:block h-full">
        <ul className="flex items-center gap-7 h-full">
          <li>
            <Link
              to="/"
              className="!font-semibold text-[15px] text-white hover:text-[#EC221F] capitalize"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/our-work"
              className="!font-semibold text-[15px] text-white hover:text-[#EC221F] capitalize"
            >
           auto parts
            </Link>
          </li>
          <li>
            <Link
              to="/our-story"
              className="!font-semibold text-[15px] text-white hover:text-[#EC221F] capitalize"
            >
              Batteries
            </Link>
          </li>
          <li>
            <Link
              to="/ways-to-give"
              className="!font-semibold text-[15px] text-white hover:text-[#EC221F] capitalize"
            >
              Tyres
            </Link>
          </li>
          <li>
            <Link
              to="/ways-to-give"
              className="!font-semibold text-[15px] text-white hover:text-[#EC221F] capitalize"
            >
              Rims
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navbar Mobile */}
      <nav
        className={`bg-black absolute right-0 z-20 py-5  ${toggle ? "top-[80px]" : "-top-[500px]"
          } w-full  py-2 duration-300 lg:hidden  `}
      >
      

        <ul className="flex flex-col items-center gap-7">
          <li>
            <Link
              to="/"
              className="!font-semibold text-[16px] text-white hover:text-[#EC221F] capitalize"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/our-work"
              className="!font-semibold text-[16px] text-white hover:text-[#EC221F] capitalize"
            >
              auto parts
            </Link>
          </li>
          <li>
            <Link
              to="/our-story"
              className="!font-semibold text-[16px] text-white hover:text-[#EC221F] capitalize"
            >
              Batteries
            </Link>
          </li>
          <li>
            <Link
              to="/ways-to-give"
              className="!font-semibold text-[16px] text-white hover:text-[#EC221F] capitalize"
            >
              Tyres
            </Link>
          </li>

          <li>
            <Link
              to="/ways-to-give"
              className="!font-semibold text-[16px] text-white hover:text-[#EC221F] capitalize"
            >
              Rims
            </Link>
          </li>



           <div className="flex-col items-center gap-4">
                 
          
                  <Link
                    to="/donate"
                    className="block justify-center items-center bg-[#EC221F] rounded-sm w-[130px] h-[46px] !font-semibold text-[16px] text-white text-sm text-center capitalize leading-[46px] duration-300"
                  >
                    Get Quote
                  </Link>
          
            <div className="flex justify-center items-center gap-4 mt-[15px]">
              <HiOutlineUser size={24} color="#fff" className="cursor-pointer" />

              {/* استخدام أيقونة العربة */}
              <div>
                <HiOutlineShoppingCart size={24} color="#fff" className="cursor-pointer" />
                <span className="!font-bold text-[8px] text-white">$0,00</span>
              </div>
              </div>
                </div>
         
        </ul>
      </nav>
    </>
  );
};

HeaderCenter.propTypes = {
  toggle: PropTypes.bool,
  navBar: PropTypes.bool,
};

export default HeaderCenter;
