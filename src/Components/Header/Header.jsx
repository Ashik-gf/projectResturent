import logoimg from "../../assets/logo.svg";
import { BsCart2 } from "react-icons/bs";
import { navList } from "../../Constant";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const iconList = [
  { icon: <FaInstagram />, path: "#" },
  { icon: <FaFacebookF />, path: "#" },
  { icon: <FaTwitter />, path: "#" },
  { icon: <FaLinkedinIn />, path: "#" },
];
const Header = () => {
  return (
    <header className=" max-w-7xl mx-auto   bg-[#292E36] text-white">
      {/* Header LOgo Section */}
      <div className=" flex flex-col sm:px-16 lg:grid grid-cols-3 justify-self-center ">
        <div className=" cursor-pointer hidden lg:flex items-center col-span-1">
          <div className=" flex-col normal-text  w-[232px] h-[54px] border-[1px] border-[#E1B168] flex-center">
            Call-01773122981
          </div>
        </div>

        <div className="col-span-1 flex-center py-4 ">
          <img
            className=" border-[1px] border-dashed divide-x-4 divide-y-8 h-[170px] py-2"
            src={logoimg}
          />
        </div>

        <div className=" px-10 lg:px-0 col-span-1 w-full flex items-center justify-end">
          <p className=" cursor-pointer text-white text-4xl pr-4 flex-col flex-center">
            <BsCart2 />
          </p>
          <Link to={'/regarvTable'} >
            <button className="btn w-[100%] md:w-[300px] lg:w-[250px] hover:text-white transition-colors duration-700 normal-text text-center text-black">
            Reservation
          </button>
          </Link>
        
          {/*  */}
          <div className=" hidden md:flex px-10 md:w-[300px] lg:hidden my-4">
          <div className=" h-[54px] w-[100%] normal-text mx-auto border-[1px] border-[#E1B168] flex-center">
            Call-01773122981
          </div>
        </div>
        </div>
        <div className=" px-10 md:hidden md:w-[300px] lg:hidden my-4">
          <div className=" h-[54px] w-[100%] normal-text mx-auto border-[1px] border-[#E1B168] flex-center">
            Call-01773122981
          </div>
        </div>
      </div>



      {/* Menu Section */}
      <div className="w-full h-[1px] bg-gray-400"></div>
      <nav className=" lg:px-16 w-full hidden sm:flex flex-col justify-center items-center lg:flex-row  lg:flex lg:justify-between lg:items-center h-[81px]">
        <ul className=" flex flex-grow gap-4 lg:gap-8">
          {navList.map((nav) => (
            <NavLink
              to={nav.path}
              className={({ isActive }) =>
                [
                  isActive
                    ? " text-orange font-jos text-[20px] font-normal "
                    : " text-gray text-[20px] font-jos font-normal hover:text-orange",
                ].join(" ")
              }
            >
              {nav.title}
            </NavLink>
          ))}
        </ul>
        {/* Icons  */}
        <ul className=" flex gap-4">
          {iconList.map((icon) => (
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  isActive
                    ? "hover:text-gray-400 text-hover font-jos "
                    : " text-gray text-xl font-normal hover:text-orange",
                ].join(" ")
              }
            >
              <p className=" text-[24px]">{icon.icon}</p>
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className="w-full h-[1px] bg-gray-400 mt-2"></div>
    </header>
  );
};

export default Header;
