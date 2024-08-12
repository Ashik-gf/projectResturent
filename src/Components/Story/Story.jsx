import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import photo1 from "../../assets/story.svg";
const Story = () => {
  return (
    <section className=" max-w-7xl h-full py-8 sm:py-12 bg-orange2 flex-center">
      <div className=" w-full h-full pt-12 px-16 ">
        {/* contact story menu */}
        <div className=" flex flex-col py-4 sm:flex sm:flex-row gap-4 px-4">
          {/* conatact */}
          <div className="w-full h-full flex  gap-2  ">
            <div className=" h-[50px] w-[50px] bg-black text-white rounded-full flex-center">
              <p className=" text-white text-2xl ">
                <CiLocationOn />
              </p>
            </div>
            <div className="">
              <h1 className=" font-bold font-cormo">Locate Us</h1>
              <p className=" text-[12px]">
                Riverside 25, San Francisco, California
              </p>
            </div>
          </div>
          {/* OpenHoure */}
          <div className="w-full h-full flex gap-2  ">
            <div className=" h-[50px] w-[50px] bg-black text-white rounded-full flex-center">
              <p className=" text-white text-2xl ">
                <FaRegClock />
              </p>
            </div>
            <div className="">
              <h1 className=" font-bold font-cormo">Open Hours</h1>
              <p className=" text-[12px]">Mon To Fri 9:00 AM - 9:00 PM</p>
            </div>
          </div>
          {/* reservation */}
          <div className="w-full h-full flex gap-2  ">
            <div className=" h-[50px] w-[50px] bg-black text-white rounded-full flex-center">
              <p className=" text-white text-2xl ">
                <FaRegClock />
              </p>
            </div>
            <div className="">
              <h1 className=" font-bold font-cormo">Reservation</h1>
              <p className=" text-[12px]">hirestaurantate@gmail.com</p>
            </div>
          </div>
        </div>
        {/* story */}
        <div className="  flex flex-col gap-4 items-center p-4 sm:flex-row sm:justify-between w-full h-full sm:h-[400px]">
          <div className=" sm:w-1/2 flex justify-between items-center">
            <img className=" w-[400px] lg:w-[400px] lg:h-[335px]" src={photo1} />
          </div>
          {/* story */}
          <div className=" sm:w-1/2 text-justify ">
           <div className="">
           <h1 className=" font-cormo text-2xl font-bold">The Story</h1>
            <p className=" text-[20px] font-cormo leading-5">Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using 'Content here, content gfshere', 
              makinlook like readable English. Many desktop publishing packages.
              </p>
           </div>
           {/* 2part of story */}
           <div className=" flex gap-4 py-2"> 
           <div className="1996">
            <h1 className="font-cormo text-2xl font-bold">1996</h1>
            <p className="text-[20px] font-cormo leading-5">Lorem Ipsum is that it has a more-or-less normal distribution </p>
           </div>
           <div className="1996">
            <h1 className="font-cormo text-2xl font-bold">2021</h1>
            <p className="text-[20px] font-cormo leading-5">Lorem Ipsum is that it has a more-or-less normal distribution </p>
           </div>
           </div>
           {/* josep part */}
           <div className="">
            <h1 className=" text-[10px] py-2">JOSEFINE</h1>
            <h1 className=" text-xl font-bold">Josefine</h1>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
