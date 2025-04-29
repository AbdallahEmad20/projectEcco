// import PropTypes from "prop-types";
import Logo from "../../assets/Link.png"

const HeaderRight = () => {

  return (
    <div>
      <img
        src={Logo}
        loading="lazy"
        className="rounded h-[30px] md:h-[40px]"
        alt="logo"

      />
    </div>
  );
};

// HeaderRight.propTypes = {
//   navBar: PropTypes.bool,
// };

export default HeaderRight;
