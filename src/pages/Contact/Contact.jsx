import React from "react";
import MenuTitle from "../../uitls/Button/MenuTitle/MenuTitle";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import MailForm from "../../Components/Mailform/MailForm";
import Button from "../../uitls/Button/Button";
import { call1, calli, gmail, mail1, visit1, visit2 } from "../../Constant";

const Contact = () => {
  return (
    <section className=" max-w-7xl h-full mx-auto sm:pb-20">
      <MenuTitle title={"Contact Us"} />
      {/* contact info  */}
      <div className="w-full sm:h-full">
        <div className=" w-full py-4 sm:py-32 flex sm:flex-row flex-col justify-center items-center sm:px-16 gap-4">
          {/* Contsct Information */}
          <div className=" w-full sm:w-1/2">
            <ContactInfo />
          </div>

          {/* MAil */}
          <div className=" w-full sm:w-1/2 flex flex-col justify-center items-center">
            <MailForm />
          </div>
        </div>
      </div>
      {/* visit us */}
      <div className=" w-full h-full flex flex-col justify-center items-center sm:px-16">
        <Button title={"VISIT US!"} subject={"Come and visit our Branches"} />
        {/* left side */}
        <div className=" w-full  flex flex-col sm:flex-row justify-center items-center py-8 sm:py-16">
          <aside className=" border-[1px] w-full sm:w-1/2 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2 px-2 sm:px-0 ">
            {/* info */}
            <div className="w-full sm:w-1/2 gap-4 flex flex-col sm:px-4 ">
              <h1 className=" font-cormo font-extrabold text-[30px] leading-9">Los Angeles, CA</h1>
              <p className=" font-jos text-[18px] font-normal">Riverside 25, San Francisco California</p>
              
              <div className=" flex  gap-4 items-center">
                <img className=" " src={gmail}/>
              <p className=" font-jos font-normal text-[18px] text-[#4A4A4A]">contact@restaurantate.com</p></div>
              <div className=" w-full flex gap-4 items-center">
                <img className="  " src={calli}/>
                <p className=" font-jos font-normal text-[18px] text-[#4A4A4A]">(487) 870 - 1087</p></div>
            </div>
            <div className=" w-full sm:w-1/2 h-full">
              <img className=" w-full object-cover h-[400px] "  src={visit1} />
            </div>
          </aside>
          {/* right side */}
          <aside className=" border-[1px] w-full sm:w-1/2 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2 px-2 sm:px-0 ">
            {/* info */}
            <div className="w-full sm:w-1/2 gap-4 flex flex-col sm:px-4 ">
              <h1 className=" font-cormo font-extrabold text-[30px] leading-9">Los Angeles, CA</h1>
              <p className=" font-jos text-[18px] font-normal">Riverside 25, San Francisco California</p>
              
              <div className=" flex  gap-4 items-center">
                <img className=" " src={gmail}/>
              <p className=" font-jos font-normal text-[18px] text-[#4A4A4A]">contact@restaurantate.com</p></div>
              <div className=" w-full flex gap-4 items-center">
                <img className="  " src={calli}/>
                <p className=" font-jos font-normal text-[18px] text-[#4A4A4A]">(487) 870 - 1087</p></div>
            </div>
            <div className=" w-full sm:w-1/2 h-full">
              <img className=" w-full object-cover h-[400px] "  src={visit1} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
