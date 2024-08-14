import React from "react";
import MenuTitle from "../../uitls/Button/MenuTitle/MenuTitle";
import Button from "../../uitls/Button/Button";
import { chefsp, team2 } from "../../Constant";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Slider2 from "../../uitls/Slider/Slider2";
import LeftSideButton from "../../uitls/Button/LeftSideButton/LeftSideButton";
import ProgressBar from "../../uitls/progressBar/ProgressBar";
import Reservation from "../../Components/Reservation/Reservation";
import { Link } from "react-router-dom";
const iconList = [
  { icon: <FaInstagram />, path: "#" },
  { icon: <FaFacebookF />, path: "#" },
  { icon: <FaTwitter />, path: "#" },
  { icon: <FaLinkedinIn />, path: "#" },
];

const OurSafe = () => {
  
  return (
    <section className=" max-w-7xl mx-auto h-full text-white ">
      <MenuTitle title={"Our Chefs"} />
      {/* Chefs */}
      <div className="w-full h-full sm:h-[1000px] flex-center py-8">
        <div className="  w-full flex flex-col justify-center items-center">
          <Button title={"TEAM"} subject={"Meet Our Professional Chefs"} />
          <div className=" w-full  flex flex-col justify-center items-center   sm:grid sm:grid-cols-3 sm:w-[900px] gap-4 sm:px-16">
            {team2.map((item) => (
              <div key={item.id} className=" flex-center group relative">
               <Link to={`/singleChefs/${item.id}`}>
               <img
                  className=" cursor-pointer h-[300px] sm:h-[350px]"
                  src={item.photo1}
                />
               </Link>
                
                <div className=" hidden bg-black absolute bottom-[70px] w-full h-[40px] mx-auto group-hover:flex  justify-center items-center">
                  {iconList.map((icon) => (
                    <div
                      key={icon.index}
                      className=" px-4 flex justify-between items-center"
                    >
                      <a className=" flex justify-center" href={icon.path}>
                        <p className="text-2xl"> {icon.icon}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Client Say */}
      <div className="bg-black h-screen sm:py-20">
        <Slider2 />
      </div>

      <div className="flex flex-col gap-8 h-[800px] sm:flex-row justify-center items-center">
        <div className=" flex flex-col  ">
          <LeftSideButton
            title={"BEST CHEFS"}
            subject={"Only Skilled Team"}
            paragraph={
              "Bring tothe table survival strategies to ensured proactived domination At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined  touchpoints for offshoring."
            }
          />
          <div className="py-4">
            <ProgressBar progress1={30} progress2={70} progress3={50} />
          </div>
        </div>
        <aside className=" w-full sm:w-5/12 p-4">
          <img
            className="h-[530px] w-full object-cover shadow-md"
            src={chefsp}
            alt="Image description"
          />
        </aside>
      </div>
      
      <Reservation />
    </section>
  );
};

export default OurSafe;
