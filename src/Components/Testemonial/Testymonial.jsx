import React from "react";
import Button from "../../uitls/Button/Button";

import Slider2 from "../../uitls/Slider/Slider2";


const Testymonial = () => {
  const textItems = [
    "1 Leverage agile frameworks to provide a robust synopsis for high-level overviews.Iterative approaches to corporate strategy foster collaborative thinking Organically foster collaborative thinking to further the overall value proposition.",
    "2 Leverage agile frameworks to provide a robust synopsis for high-level overviews.Iterative approaches to corporate strategy foster collaborative thinking Organically foster collaborative thinking to further the overall value proposition.",
    "3 Leverage agile frameworks to provide a robust synopsis for high-level overviews.Iterative approaches to corporate strategy foster collaborative thinking Organically foster collaborative thinking to further the overall value proposition.",
  ];
  return (
    <section className=" w-full sm:h-[800px] bg-[#292E36] flex flex-col justify-center py-8">
      <div className=" sm:flex sm:flex-row sm:justify-center sm:items-center ">
        <Button
          className={"text-white"}
          title={"Testimonial"}
          subject={"What Our Clients Say"}
        />
      </div>
     
        <Slider2 
         textItems={textItems}
        
        />
    
    </section>
  );
};

export default Testymonial;
