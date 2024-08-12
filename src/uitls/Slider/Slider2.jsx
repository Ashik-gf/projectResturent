import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { timage } from '../../Constant'; // Assuming timage is an image URL

const Slider2 = () => {
  const [sliderNumber, setSliderNumber] = useState(1);
  const imageCount = 3; // Assuming there are 3 images (adjust based on actual number)

  const rightBtn = () => {
    if (sliderNumber < imageCount) {
      setSliderNumber(sliderNumber + 1);
    } else {
      setSliderNumber(1);
    }
  };

  const leftBtn = () => {
    if (sliderNumber > 1) {
      setSliderNumber(sliderNumber - 1);
    } else {
      setSliderNumber(imageCount);
    }
  };

  return (
    <div className="container  flex justify-center items-center gap-8 w-full h-[300px] rounded-md">
      <aside className="h-32 w-32 flex-center">
        <p onClick={leftBtn} className="left-btn cursor-pointer text-orange text-[80px]">
          <IoIosArrowBack />
        </p>
      </aside>

      {/* Slider */}
      <div className="frame relative h-[300px] w-[605px] overflow-hidden rounded-md">
        <div className={`slider h-full w-[${imageCount * 600}px] flex items-center`}>
          {Array(imageCount)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="image w-[600px]">
                <div className="w-[600px]">
                  <p className="text-center font-cormo italic font-normal text-xl text-white leading-9">
                    <span>{index + 1}</span>
                    "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy   
 foster collaborative thinking further overall value proposition organically   
 friendly."
                  </p>
                  <div className="flex flex-col justify-center items-center gap-2 py-2 text-white">
                    <img className="h-[80px]" src={timage} alt="Image description" />
                    <h1 className="font-cormo text-[22px]">Daniyal Sppra</h1>
                    <p className="text-orange font-jos text-md">Designer</p>
                  </div>
                </div>
              </div>
            ))}
          <style jsx>{`
            .slider {
              transform: translateX(-${(sliderNumber - 1) * 600}px);
              transition: transform 0.5s ease-in-out;
            }
          `}</style>
        </div>
      </div>

      <aside className="h-32 w-32 flex-center">
        <p onClick={rightBtn} className="right-btn cursor-pointer text-orange leading-loose text-[80px] rotate-180">
          <IoIosArrowBack />
        </p>
      </aside>
    </div>
  );
};

export default Slider2;
