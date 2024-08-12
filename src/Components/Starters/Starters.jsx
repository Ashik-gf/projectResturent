import React from "react";
import { starters, strts } from "../../Constant";

const Starters = () => {
  return (
    <section className=" max-w-7xl mx-auto flex flex-col sm:flex-row h-full sm:px-16 py-16 sm:py-4">
      {/* left side */}
      <aside className=" w-full sm:w-5/12 p-4">
        <img
          className="h-[600px] w-full object-cover shadow-md"
          src={strts}
          alt="Image description"
        />
      </aside>
      {/* Right side */}
      <aside className=" w-full sm:w-7/12 h-full px-4">
        {/* starter */}
        <div className=" w-full h-full pb-8">
          <h1 className=" text-[40px] font-cormo font-extrabold">Starters</h1>
          <div className=" flex flex-col gap-10 py-4 ">
            {starters.map((item) => (
              <div
                className=" flex flex-col sm:flex-row  justify-between gap-8"
                key={item.id}
              >
                <div className="flex gap-4 items-center">
                  <img className=" h-[78px] w-[85px]" src={item.photo} />
                  <div className="">
                    <h1 className=" font-cormo font-extrabold text-xl text-[#292E36]">
                      {item.title}
                    </h1>
                    <p className=" font-jos font-normal text-[15px] text-left text-[#555555] ">
                      {item.details}
                    </p>
                  </div>
                </div>
                <div className=" flex justify-ends items-center gap-4">
                  <div className=" hidden sm:flex border-[1px] w-[200px] border-dashed border-[#AAAAAA]"></div>
                  <p className=" justify-end sm:justify-start text-[25px] sm:text-[20px] font-extrabold font-cormo text-[#292E36]">
                    <span className=" sm:hidden">Price: </span>
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button type="button" className=" btn-border text-orange py-4">
                See All Dishes
        </button>
      </aside>
    </section>
  );
};

export default Starters;
