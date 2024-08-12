import React from "react";
import Button from "../../uitls/Button/Button";

import Slider2 from "../../uitls/Slider/Slider2";
import Gallary from "../Gallary/Gallary";

const Testymonial = () => {
  return (
    <section className=" w-full h-[800px] bg-[#292E36] flex flex-col justify-center">
      <div className=" sm:flex sm:flex-row sm:justify-center sm:items-center ">
        <Button
          className={"text-white"}
          title={"Testimonial"}
          subject={"What Our Clients Say"}
        />
      </div>
     
        <Slider2 />
    
    </section>
  );
};

export default Testymonial;
