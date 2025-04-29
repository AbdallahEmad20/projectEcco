import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IoMenu, IoCloseSharp } from "react-icons/io5";

import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";



const HeaderLeft = ({ toggle, setToggle, navBar }) => {


  return (
    <>
      <div className="hidden lg:block">
        <div className="flex items-center gap-4">


          <Link
            to="/donate"
            className="justify-center items-center bg-[#EC221F] rounded-sm w-[130px] h-[46px] !font-semibold text-[16px] text-white text-sm text-center capitalize leading-[46px] duration-300"
          >
            Get Quote
          </Link>

          <HiOutlineUser size={24} color="#fff" className="cursor-pointer" />

          {/* استخدام أيقونة العربة */}
          <div>
            <HiOutlineShoppingCart size={24} color="#fff" className="cursor-pointer" />
            <span className="!font-bold text-[8px] text-white">$0,00</span>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        {!toggle ? (
          <IoMenu
            onClick={() => setToggle(!toggle)}
            size={35}
            className={`cursor-pointer ${navBar ? "text-main" : "text-white"}`}
          />
        ) : (
          <IoCloseSharp
            onClick={() => setToggle(!toggle)}
            size={35}
            className={`cursor-pointer ${navBar ? "text-main" : "text-white"}`}
          />
        )}
      </div>
    </>
  );
};

HeaderLeft.propTypes = {
  toggle: PropTypes.bool,
  navBar: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default HeaderLeft;
