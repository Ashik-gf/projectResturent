import React from "react";
import MenuTitle from "../../uitls/Button/MenuTitle/MenuTitle";
import {
  gallary1,
  gallary2,
  gallary3,
  gallary4,
  gallary5,
  gallary6,
  gallary7,
  gallary8,
} from "../../Constant";
import GallaryBanner from "../../Components/GalleryBanner/GallaryBanner";
import LeftSideButton from "../../uitls/Button/LeftSideButton/LeftSideButton";
import { Link } from "react-router-dom";

const Gallary = () => {
  return (
    <section className=" max-w-7xl h-full mx-auto">
      <MenuTitle title={"Gallary"} />
      {/* Gallary photos */}
      <div class=" flex flex-col justify-center items-center gap-4 py-16 sm:px-16">
        {/* 1st line */}
        <div className=" h-full sm:h-[300px] overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className=" group cursor-pointer relative h-full w-full sm:w-1/2">
            <Link to={"/gallarySingle/1"}>
              <img className="  object-cover" src={gallary1} />
              <div className=" hidden absolute top-0  h-full w-full group-hover:bg-[#292E36B3] flex-center flex-col opacity-95">
                <h1 className=" hidden group-hover:flex  font-cormo font-extrabold text-[40px] text-white">
                  Italian Pasta
                </h1>
                <p className=" hidden group-hover:flex text-[22px] font-jos font-normal text-orange">
                  Recipes
                </p>
              </div>
            </Link>
          </div>
          <div className=" sm:w-1/2 w-full flex flex-col sm:flex-row gap-4 overflow-hidden ">
            <Link to={"/gallarySingle/2"}>
              <div className=" group cursor-pointer relative h-full w-full">
                <img className="  object-cover w-full h-full" src={gallary2} />
                <div className=" absolute top-0  h-full w-full group-hover:bg-[#292E36B3] flex-center flex-col opacity-95">
                  <h1 className=" hidden group-hover:flex  font-cormo font-extrabold text-[40px] text-white">
                    Chines Pasta
                  </h1>
                  <p className=" hidden group-hover:flex text-[22px] font-jos font-normal text-orange">
                    Recipes
                  </p>
                </div>
              </div>
            </Link>

            <div className=" group cursor-pointer relative h-full w-full ">
              <Link to={"/gallarySingle/3"}>
                <img className="  object-cover w-full h-full" src={gallary3} />
                <div className=" absolute top-4  h-full w-full group-hover:bg-[#292E36B3] flex-center flex-col opacity-95">
                  <h1 className="  hidden group-hover:flex font-cormo font-extrabold text-[40px] text-white">
                    Stuffed Pasta
                  </h1>
                  <p className=" hidden group-hover:flex text-[22px] font-jos font-normal text-orange">
                    Recipes
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* 2nd line */}
        <div className=" h-full sm:h-[300px] overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className=" sm:w-1/2 w-full flex flex-col sm:flex-row gap-4 overflow-hidden ">
            <Link to={"/gallarySingle/1"}>
              <div className=" group cursor-pointer relative h-full w-full">
                <img className="  object-cover w-full h-full" src={gallary4} />
                <div className=" absolute top-0  h-full w-full group-hover:bg-[#292E36B3] flex-center flex-col opacity-95">
                  <h1 className=" hidden group-hover:flex  font-cormo font-extrabold text-[40px] text-white">
                    Chines Pasta
                  </h1>
                  <p className=" hidden group-hover:flex text-[22px] font-jos font-normal text-orange">
                    Recipes
                  </p>
                </div>
              </div>
            </Link>

            <Link to={"/gallarySingle/1"}>
              <div className=" group cursor-pointer relative h-full w-full ">
                <img className="  object-cover w-full h-full" src={gallary5} />
                <div className=" absolute top-4  h-full w-full group-hover:bg-[#292E36B3] flex-center flex-col opacity-95">
                  <h1 className="  hidden group-hover:flex font-cormo font-extrabold text-[40px] text-white">
                    Stuffed Pasta
                  </h1>
                  <p className=" hidden group-hover:flex text-[22px] font-jos font-normal text-orange">
                    Recipes
                  </p>
                </div>
              </div>
            </Link>
          </div>
         
          <div className=" group cursor-pointer relative h-full w-full sm:w-1/2">
             <Link to={'/gallarySingle/1'}>
              <img className="  object-cover" src={gallary6} />
            <div className=" hidden absolute top-0  h-full w-full group-hover:bg-[#292E36B3] flex-center flex-col opacity-95">
              <h1 className=" hidden group-hover:flex  font-cormo font-extrabold text-[40px] text-white">
                Italian Pasta
              </h1>
              <p className=" hidden group-hover:flex text-[22px] font-jos font-normal text-orange">
                Recipes
              </p>
            </div>
          </Link>
            
          </div>

        </div>

        <div className=" sm:pt-20">
          <button className=" btn-border w-[300px]">See All dishes</button>
        </div>
      </div>
      <GallaryBanner />
      <div className=" flex flex-col pb-20">
        <div className="flex flex-col gap-8 h-full sm:flex-row justify-center items-center">
          <div className=" flex flex-col  ">
            <LeftSideButton
              className={""}
              title={"FEATURE"}
              subject={"Always fresh ingredientsTeam"}
              paragraph={
                "The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time."
              }
            />
            <div className="w-94 sm:py-8">
              <button className=" btn-border text-orange">View Menu</button>
            </div>
          </div>
          <aside className=" w-full sm:w-5/12">
            <img
              className="h-full w-full object-cover shadow-md"
              src={gallary7}
              alt="Image description"
            />
          </aside>
        </div>
        {/* 2nd */}
        <div className="flex flex-col gap-8 h-full sm:flex-row justify-center items-centern">
          <aside className=" w-full sm:w-5/12">
            <img
              className="h-full w-full object-cover shadow-md"
              src={gallary8}
              alt="Image description"
            />
          </aside>

          <div className=" pt-12">
            <LeftSideButton
              className={""}
              title={"BEST CHEFS"}
              paragraph={
                "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area."
              }
            >
              <h1 className=" text-[45px] font-extrabold font-cormo leading-10 py-4">
                We invite you to visit our restaurant
              </h1>
            </LeftSideButton>
            <div className="w-94 sm:py-8">
              <button className=" btn-border text-orange">View Menu</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
