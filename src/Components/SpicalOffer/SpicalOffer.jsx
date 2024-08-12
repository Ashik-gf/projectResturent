import React from "react";
import Button from "../../uitls/Button/Button";
import { backgroundImage, bgPhoto, offerBanner, populerDish } from "../../Constant";

const SpicalOffer = () => {
  return (
    <section className="  max-w-7xl px-16 mx-auto flex flex-col justify-center w-full h-full md:w-full sm:w-[1200px] lg:pt-[150px] ">
      {/* Offer */}
      <div className=" h-full flex flex-col justify-center py-4  ">
        <header className=" p-8">
          <Button
            title=" OFFER"
            subject="Our special  Offer dishes"
            paragraph="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making"
          />
        </header>
        <div className=" py-4 flex flex-col sm:flex sm:flex-row justify-between gap-4">
          {/* 1st part */}
          <div className="flex bg-[#c7eaf2]">
            <div
              className=" h-full w-full flex items-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <img className="  w-full px-4" src={bgPhoto} />
            </div>
          </div>
          {/* 2nd part */}
          <div className="flex bg-[#d7d7d7]">
            <img className=" " src={offerBanner} />
          </div>
        </div>
      </div>
      {/* Menu */}
      <div className=" h-full  py-4   ">
      <header>
          <Button
            title=" MENU"
            subject="Popular Dishes"
            paragraph="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making"
          />
        </header>
        <div className="  sm:flex sm:justify-between sm:items-center gap-4 py-8">
            {
                populerDish.map(dish=>(
                    <div className=" cursor-pointer  w-full mx-auto" key={dish.id}>
                        <img className=" w-full p-2" src={dish.photo} />
                       <div className="px-2">
                       <div className="flex justify-between items-center">
                            <h1 className=" text-[#292E36] text-[25px] font-extrabold font-cormo">{dish.title}</h1>
                            <p className=" text-[20px]">{dish.price}</p>
                        </div>
                        <p className=" text-[#555555] font-jos text-[20px] font-normal">
                            {dish.details}
                        </p>
                       </div>
                    </div>
                ))
            }
        </div>
      </div>
      <div className="w-full flex justify-center items-center sm:py-20">
        <button className=" btn-border">
            View All dishes
        </button>
      </div>
    </section>
  );
};

export default SpicalOffer;
