import React from "react";
import { booking } from "../../Constant";
import LeftSideButton from "../../uitls/Button/LeftSideButton/LeftSideButton";

const BookingPage = () => {
  return (
    <section className=" max-w-7xl min-h-screen mx-auto flex-center px-2 py-12 sm:py-40 sm:px-16">
      <div className=" w-full h-full sm:h-[500px]  gap-4 flex flex-col-reverse sm:flex-row">
        {/* left Side */}
        <aside className="  w-full h-full sm:w-1/2">
          <LeftSideButton
            title={"Reservation"}
            className={"space-y-0"}
            subject={"Book your table now"}
            paragraph={
              "The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time."
            }
          />

          <form className=" flex flex-col gap-8">
            {/* NAme & Email */}
            <div className=" w-full flex sm:flex-row flex-col justify-between gap-4">
              <input
                placeholder="Name"
                type="text"
                className=" w-full h-[40px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black"
              />
              <input
                placeholder="Email"
                type="Email"
                className=" w-full h-[40px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black"
              />
            </div>
            {/* Phone & Date */}
            <div className=" w-full flex sm:flex-row flex-col justify-between gap-4">
              <input
                placeholder="Phone"
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                required
                className=" w-full h-[40px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black"
              />
              <input
                placeholder="date"
                type="date"
                className=" w-full h-[40px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black"
              />
            </div>
            {/* time & person */}
            <div className=" w-full flex sm:flex-row flex-col justify-between gap-4">
              <input
                placeholder="Time"
                type="time"
                className=" w-full h-[40px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black"
              />
              <input
                placeholder="Person"
                type="text"
                className=" w-full h-[40px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black"
              />
            </div>
            <button type="submit"
            className=" btn-border w-[200px]"
            >
Book table
            </button>
          </form>
        </aside>
        {/* right side */}
        <aside className=" w-full sm:w-1/2 ">
          <img className=" object-cover w-full h-[400px] sm:h-full " src={booking} />
        </aside>
      </div>
    </section>
  );
};

export default BookingPage;
