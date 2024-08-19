import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { timage } from '../../Constant'; // Assuming timage is an image URL

const Slider2 = ({  textItems = [], personName = "Daniyal Sppra", personTitle = "Designer" }) => {
  const [sliderNumber, setSliderNumber] = useState(1);
  const images = [1,2,3];
  const imageCount = images.length || textItems.length;
  const rightBtn = () => {
    setSliderNumber((sliderNumber % imageCount) + 1);
  };

  const leftBtn = () => {
    setSliderNumber((sliderNumber - 2 + imageCount) % imageCount + 1);
  };

  return (
    <div className="container flex justify-between items-center gap-8 w-full h-[300px] sm:h-[350px] rounded-md sm:px-16">
      {/* Left Button */}
      <aside className="h-10 w-10 sm:h-20 sm:w-20 flex justify-center items-center">
        <p onClick={leftBtn} className="cursor-pointer text-orange text-[20px] sm:text-[40px]">
          <IoIosArrowBack />
        </p>
      </aside>

      {/* Slider */}
      <div className="relative h-full w-full sm:w-[600px]  overflow-hidden rounded-md">
        <div className="slider flex items-center transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${(sliderNumber - 1) * 100}%)` }}>
          {textItems.map((text, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-[600px] px-4 sm:px-0">
              <div className=" p-4 rounded-md bg-gray-800">
                <p className="font-cormo italic font-normal text-[13px] sm:text-xl text-white leading-5 sm:leading-9">
                  <span>{index + 1}</span> {text}
                </p>
                <div className="flex flex-col justify-center items-center gap-2 py-2 text-white">
                  <img className="h-[60px] sm:h-[80px]" src={timage} alt="Image description" />
                  <h1 className="font-cormo text-[18px] sm:text-[22px]">{personName}</h1>
                  <p className="text-orange font-jos text-sm sm:text-md">{personTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <aside className="h-10 w-10 sm:h-20 sm:w-20 flex justify-center items-center">
        <p onClick={rightBtn} className="cursor-pointer text-orange text-[20px] sm:text-[40px] rotate-180">
          <IoIosArrowBack />
        </p>
      </aside>
    </div>
  );
};

export default Slider2;
