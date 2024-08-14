import React from "react";
import MenuTitle from "../../uitls/Button/MenuTitle/MenuTitle";
import { singleGallary } from "../../Constant";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import Reservation from "../Reservation/Reservation";

const GallarySingle = () => {
  return (
    <section className=" h-full">
      <MenuTitle title={"Gallery Single"} />
      <div className="w-full h-full space-y-12 sm:px-16 sm:py-32">
        {singleGallary.map((pic) => (
          <div className=" w-full h-[380px] flex flex-row justify-center items-center gap-8">
            <div className="w-3/5">
              <img className=" h-[380px] w-full object-cover" src={pic.photo} />
            </div>
            <div className=" w-2/5 flex flex-col justify-start space-y-3 ">
              <h1 className=" text-[45px] font-extrabold font-cormo leading-10">{pic.title}</h1>
              <p className=" text-xl font-jos font-normal leading-6 text-[#555555]" >{pic.par}</p>
              <p className=" text-xl font-jos font-normal leading-6 text-[#555555]">{pic.par2}</p>
              <p className=" font-extrabold text-[22px] font-cormo" >
                CATEGORY: <span className=" font-normal text-[#555555]" >{pic.category}</span>
              </p>
              <p className=" font-extrabold text-[22px] font-cormo">
                DATE: <span className=" font-normal text-[#555555]">{pic.date}</span>
              </p>
              <p className=" font-extrabold text-[22px] font-cormo">
                TAGS: <span className=" font-normal text-[#555555]">{pic.tags}</span>
              </p>
              <div className="icon flex justify-start items-center gap-2">
                <p className=" font-extrabold text-[22px] font-cormo">SHARE:</p>
                <ul className=" flex justify-start items-center gap-4">
                  <li>
                    <a className=" text-orange text-xl" href="">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a className=" text-orange text-xl" href="">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a className=" text-orange text-xl" href="">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a className=" text-orange text-xl" href="">
                      <FaPinterest />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Reservation />
    </section>
  );
};

export default GallarySingle;
