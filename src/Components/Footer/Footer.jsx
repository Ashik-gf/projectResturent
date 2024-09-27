import React from "react";
import logoimg from "../../assets/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { contact, workingHour } from "../../Constant";
const iconList = [
  { icon: <FaInstagram />, path: "#" },
  { icon: <FaFacebookF />, path: "#" },
  { icon: <FaTwitter />, path: "#" },
  { icon: <FaLinkedinIn />, path: "#" },
];
const Footer = () => {
  return (
    <footer className=" max-w-7xl bg-[#292E36] py-4 ">
     <div className=" sm:px-16 md:px-4">
       {/* Logo, Icon */}
       <div className=" flex flex-col justify-between gap-4 items-center lg:flex-row ">
        <a className=" cursor-pointer text-white underline font-jos">
          Instagram Feed
        </a>

        <div className="col-span-1 flex-center ">
          <img
            className=" h-[100px]  py-4 lg:h-[180px] lg:w-[300px] "
            src={logoimg}
          />
        </div>

        <ul className=" flex gap-4">
          {iconList.map((icon) => (
            <a href={icon.path}>
              <p className=" text-[24px] text-hover text-white">{icon.icon}</p>
            </a>
          ))}
        </ul>
      </div>
      {/* containt */}
      {/* Make Sure that Latter spaceing */}
      <div className=" sm:grid grid-cols-12 py-4 flex flex-col-reverse gap-4   text-xl font-normal px-2 ">
        {/* contact */}
        <div className="col-span-4 ">
        <div className=" flex-col-center">
          <div >
           <h1 className="text-[20px] header-border text-white cursor-pointer mb-4 tracking-[3px]">Contact</h1> 
          </div>
            <ul className=" leading-10">
              {
                contact.map((work, index)=>(
                <li key={index}>
                <p className="text-white"><span className=" text-orange mr-2"></span>{work.add}</p>
                <p className="text-white"><span className=" text-orange mr-2">Email:</span>{work.email}</p>
                <p className="text-white"><span className=" text-orange mr-2">Dail:</span>{work.call}</p>
                </li>))
              }
            </ul>
        </div>
        </div>
        {/* Search option */}
        <div className=" col-span-4 text-white ">
          <div className="flex-col-center leading-tight">
          <h1>Join Our Mailing list for Updates</h1>
          <p>,</p>
          <h1>Get new & offer events</h1>
          </div>
          <div className="search flex-center py-2">
            <input
            placeholder="Email "
            className=" w-full h-16 bg-transparent outline-none border-[1px]
             border-[#858585] px-4 py-1 placeholder:font-normal text-xl placeholder:text-white"
             type="text"/>
             <input
             placeholder="Search"
             className="w-[50%] h-16 bg-white text-black text-center py-5 placeholder:text-black"
             type="submit"/>
          </div>
        </div>
        {/* Working Hour */}
        <div className=" sm:col-span-4 flex-col-center ">
          <div >
           <h1 className="text-[20px] header-border text-white cursor-pointer mb-4">Working Hours</h1> 
          </div>
          
            <ul className=" leading-10">
              {
                workingHour.map((work, index)=>(
                <li key={index}>
                <p className="text-white"><span className=" text-orange mr-2">{work.day}:</span>{work.time}</p>
                </li>))
              }
            </ul>
        </div>
      </div>
     </div>
     <div className=" text-white px-8 lg:px-16">
      <div className=" flex sm:flex sm:justify-between   ">
        <div className=" flex md:flex-center lg:justify-start lg:items-center text-white"> 
        <p>© Copyright - Restaurantate | Designed by <span className="text-orange">VictorFlow</span> Templates - Powered by 
           <span className=" text-orange">Webflow</span>
           <span className=" sm:hidden ml-8">Styleguide / Licenses </span>
           </p>
            </div>
            <div className=" hidden lg:flex">
            <h1 className=" md:text-end">
            Styleguide / Licenses 
            </h1>
            </div>
      </div>
     </div>
    </footer>
  );
};

export default Footer;
