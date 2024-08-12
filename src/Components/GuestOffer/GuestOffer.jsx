import React from "react";

import { content } from "../../Constant";

const GuestOffer = () => {
  return (
    <section className=" max-w-7xl h-full sm:h-[600px] mx-auto bg-[#292E36] flex-center ">
      <div className=" w-full h-full sm:h-[240px] md:w-[700px]  mx-auto">
        <div className=" w-full h-full flex flex-col justify-center items-center gap-4 py-12 sm:py-0 sm:flex sm:flex-row sm:justify-center sm:items-center">
          {/* Menu details */}
          <div className=" w-full sm:w-[500px] h-[200px]">
            <section className=" text-white flex flex-col justify-center items-center sm:justify-start sm:items-start ">
              <div className="header-border border-2 font-jos text-[15px] text-center w-[150px] py-2">
                <h1
                  className={`  font-jos text-[15px] text-white tracking-widest `}
                >
                  What we offer
                </h1>
              </div>
              <div
                className={` w-full sm:w-[500px] flex flex-col items-center sm:justify-start sm:items-start py-4 `}
              >
                <h1
                  className={`font-cormo text-start justify-start text-[40px] font-semibold `}
                >
                  Our Great Services
                </h1>
                <p
                  className={` justify-center text-wrap sm:justify-start  font-jos text-[20px] font-normal text-white `}
                >
                  Lorem Ipsum is that it has a more-or-less normal distribution content making it look like readable English. 
                </p>
              </div>
            </section>
          </div>
          {/* Content */}
          <div className=" text-white sm:flex  gap-4 ">
            {
              content.map(item=>(
                <div className="h-[160px] w-[160px] flex-center bg-[#323841]">
                     <div className=" bg-[#292E36]  h-[140px] w-[140px] p-5  flex flex-col justify-center items-center gap-4">
                <img className=" h-16" src={item.icon} />
                <h1 className=" font-cormo ">{item.title}</h1>
                </div>
                </div>
             
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestOffer;
