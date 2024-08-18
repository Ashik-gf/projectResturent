import React from "react";
import Button from "../../uitls/Button/Button";
import { blogItem } from "../../Constant";

const Blogs = () => {
  return (
    <section className=" max-w-7xl mx-auto  flex flex-row justify-center items-center p-16  ">
      <div className=" h-full w-full">
        <Button
          className={""}
          title={"BLOG"}
          subject={"Be First Who Read News"}
          paragraph={
            "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content making."
          }
        />
        <div className=" flex flex-col sm:flex sm:flex-row sm:justify-center items-center gap-4">
          {blogItem.map((item) => (
            <div className=" w-full sm:w-[500px]" key={item.id}>
              <img className=" w-full h-[300px]" src={item.photo} />
              {/* date */}
              <div className="flex-center gap-4 py-8">
                <div className="header-border border-2 font-jos text-[15px] text-center w-[150px] py-2">
                  <h1
                    className={`  font-jos text-[15px] text-[#292E36] tracking-[4px]`}
                  >
                    {item.title}
                  </h1>
                </div>
                <div className="header-border  font-jos text-[15px] text-center w-[150px] py-2">
                  <h1
                    className={`  font-jos text-[15px] text-[#292E36] tracking-[4px]`}
                  >
                    {item.date}
                  </h1>
                </div>
              </div>
              {/* subject */}
              <div className=" text-justify ">
                <h1 className=" text-[#292E36] py-2 px-8 font-cormo text-2xl font-bold ">
                The Most Popular Delicious Food Of Mediterranean Cuisine
                </h1>
                <p className=" py-2 px-8 text-[#555555] text-[20px] font-normal font-jos justify-start">
                Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
