import React from "react";
import brnImage from '../../assets/bnr1.svg'
import bnrBg from '../../assets/bnr-bg.svg'


const Banner = () => {
  return (
    <section className=" max-w-7xl h-full mx-auto bg-black sm:px-16 sm:py-8  ">
      <div className=" flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="  sm:w-[500px] flex-col-center text-white">
         <div className=" w-[400px] h-[400px] sm:w-full ">
         <h1 className=" text-[40px] sm:text-[70px] font-semibold font-jos "> Welcome to Restaurantate </h1>
          <p className="  text-ellipsis text-[20px] sm:text-xl font-normal text-justify text-[#DFDFDF]">
          Simply dummy text of the printing and
           typesetting industry. Lorem Ipsum has been the industry's
            standard dummy .
          </p>
          <div className=" w-full flex justify-center py-12">
          <button className=" btn-border" type="button text-[22px] font-normal ">
            View Menu
          </button>
          </div>
         </div>
        </div>
        <div className=" w-[400px] mx-auto sm:w-[600px] relative h-[450px] ">
            <div className=" flex justify-end z-10">
                <img className="  h-[200px] opacity-25" src={bnrBg} />
            </div>
            <div className=" ">
            <img className=" absolute top-12 sm:top-12 sm:right-16 h-[400px] sm:h-[520px]" src={brnImage} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
