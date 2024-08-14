import React from "react";
import MenuTitle from "../../uitls/Button/MenuTitle/MenuTitle";
import { useLoaderData } from "react-router-dom";
import { icon04, icon05, icon06, icon07, promoBnr } from "../../Constant";
import Button from "../../uitls/Button/Button";
import Reservation from "../Reservation/Reservation";

const SingleChefs = () => {
  const data = useLoaderData();
  const {
    name,
    id,
    experience,
    mail,
    contact,
    locate,
    time,
    details,
    job,
    photo1,
  } = data;
  return (
    <section className=" max-w-7xl mx-auto min-h-fit ">
      <MenuTitle title={"Single Chefs"} />
      <div className=" h-full sm:h-[700px] gap-4 flex flex-col justify-center   sm:flex-row sm:justify-between sm:px-16 py-8 sm:py-24">
        <aside className="  h-full w-full sm:w-4/12  ">
          <div className=" w-full h-[450px] overflow-hidden ">
            <img
              className=" h-[550px] w-full object-cover"
              src={photo1}
              alt="Your Image"
            />
          </div>
        </aside>
        {/* details */}
        <aside className=" w-full sm:w-8/12">
        
          <div className="  w-full flex flex-col  gap-8">
              {/* Name and Job */}
            <div className="flex flex-col justify-center items-center sm:justify-start gap-2 sm:gap-5">
              <h1 className=" text-2xl font-cormo font-extrabold leading-4 space-y-6">
                {name}
              </h1>
              <p className="p-2 text-xl text-orange font-jos leading-3 space-y-4">
                {job}
              </p>
            </div>
            <p className=" p-2 sm:p-0 font-jos text-justify text-[#555555] text-xl font-normal">
              {details}
            </p>
          </div>

          <div className=" flex flex-col justify-center gap-8 pt-8">
            <div className="w-full flex flex-col sm:flex-row gap-4 px-2  justify-between ">
              {/* icon details */}
              <div className=" sm:w-1/2 flex  justify-start items-center gap-4">
                <div className="flex flex-row justify-center items-center p-2 bg-black h-[60px] w-[60px] rounded-full">
                  <img className=" h-8" src={icon04} />
                </div>
                <div className="flex flex-col">
                  <h1 className=" text-[#292E36] text-[22px] font-cormo font-extrabold">
                    Experience
                  </h1>
                  <p className=" font-jos text-[16px] font-normal text-[#4A4A4A]">
                    {experience}
                  </p>
                </div>
              </div>
              {/* icon 2 */}
              <div className=" sm:w-1/2  flex justify-start items-center gap-4">
                <div className="flex flex-row justify-center items-center p-2 bg-black h-[60px] w-[60px] rounded-full">
                  <img className=" h-8" src={icon05} />
                </div>
                <div className="flex flex-col">
                  <h1 className=" text-[#292E36] text-[22px] font-cormo font-extrabold">
                    Mail
                  </h1>
                  <p className=" font-jos text-[16px] font-normal text-[#4A4A4A]">
                    {mail}
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd line */}
            <div className=" w-full flex flex-col sm:flex-row gap-4 px-2  justify-between ">
              {/* icon details */}
              {/* c */}
              <div className=" sm:w-1/2 flex justify-start items-center gap-4">
                <div className="flex flex-row justify-center items-center p-2 bg-black h-[60px] w-[60px] rounded-full">
                  <img className=" h-8" src={icon06} />
                </div>
                <div className="flex flex-col">
                  <h1 className=" text-[#292E36] text-[22px] font-cormo font-extrabold">
                    Contact Us
                  </h1>
                  <p className=" font-jos text-[16px] font-normal text-[#4A4A4A]">
                    {contact}
                  </p>
                </div>
              </div>
              {/* icon 2 */}
              <div className=" sm:w-1/2  flex justify-start items-center gap-4">
                <div className="flex flex-row justify-center items-center p-2 bg-black h-[60px] w-[60px] rounded-full">
                  <img className=" h-8" src={icon07} />
                </div>
                <div className="flex flex-col">
                  <h1 className=" text-[#292E36] text-[22px] font-cormo font-extrabold">
                    Locate Us
                  </h1>
                  <p className=" font-jos text-[16px] font-normal text-[#4A4A4A]">
                    {locate}
                  </p>
                  <p>{time}</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>




      <div className=" relative w-full h-[400px] bg-[#292E36] pt-12 sm:pt-20">
        <Button
          className={"text-white "}
          title={"PROMO"}
          subject={"My Promo Video"}
        />
        <div className=" absolute sm:bottom-[-100px] sm:left-[200px] h-[300px] w-full sm:w-[800px]">
          <img className=" object-cover sm:h-[300px] w-full" src={promoBnr} />
        </div>
      </div>




      <div className="sm:pt-40">
         <Reservation />
      </div>
     
    </section>
  );
};

export default SingleChefs;
