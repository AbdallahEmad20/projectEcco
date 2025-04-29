import { useState } from "react";
import HeaderRight from "./HeaderRight";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  const [toggle, setToggle] = useState(false);
 



  return (
    <header
      className={`flex items-center justify-between  h-[80px] duration-300  md:px-26    bg-black px-5  `}
    >
      <HeaderRight  />
      <HeaderCenter toggle={toggle}  />
      <HeaderLeft toggle={toggle} setToggle={setToggle}  />
    </header>
  );
};

export default Header;
