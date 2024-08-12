import React, { useState } from "react";
import { quate, timage } from "../../Constant";
import { IoIosArrowBack } from "react-icons/io";

const Slider = () => {
  const [next, setNext] = useState('');
  const [back, setBack] = useState('');
  const handelNext = () => {
    setBack()
  };
  const handelback = () => {
    setNext()
  };
  return (
    <section className=" sm:w-[800px] border-2 flex justify-between overflow-hidden">
      <div className=" w-[800px] border-2 flex flex-col items-center justify-center ">
        <div className="flex flex-col justify-center items-center">
          <img className=" h-16 w-16" src={quate} />
          <div className=" py-8 gap-12 flex justify-between items-center">
            {/* left */}
            <aside onClick={handelback} className=" h-32 w-32 flex-center">
              <p className="  text-orange text-[80px]">
                <IoIosArrowBack />
              </p>
            </aside>
            {/* Card */}
            <div className= {`${next} w-[500px] flex flex-row justify-between overflow-hidden`} >
            <div className=" w-full border-2 flex flex-row justify-between overflow-hidden">
              <div className=" w-[500px] border-2">
                <p className=" text-center font-cormo italic font-normal text-xl text-white leading-9">
                  "Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking further overall value
                  proposition organicallfriendly.
                </p>
                <div className="flex flex-col justify-center items-center gap-2 py-2 text-white">
                  <img className=" h-[80px]" src={timage} />
                  <h1 className=" font-cormo text-[22px]">Daniyal Sppra</h1>
                  <p className=" text-orange font-jos  text-md">Designer</p>
                </div>
              </div>
            </div>
            {/* Card2 */}
            <div className= {`  ${back}  w-[500px] border-2 flex flex-row justify-between overflow-hidden`} >
              <div className=" w-[500px] border-2">
                <p className=" text-center font-cormo italic font-normal text-xl text-white leading-9">
                  "Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking further overall value
                  proposition organicallfriendly.
                </p>
                <div className="flex flex-col justify-center items-center gap-2 py-2 text-white">
                  <img className=" h-[80px]" src={timage} />
                  <h1 className=" font-cormo text-[22px]">Daniyal Sppra</h1>
                  <p className=" text-orange font-jos  text-md">Designer</p>
                </div>
              </div>
            </div>
            </div>
            {/* right */}
            <aside onClick={handelNext} className=" h-32 w-32 flex-center">
              <p className=" text-orange text-[80px] rotate-180">
                <IoIosArrowBack />
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
