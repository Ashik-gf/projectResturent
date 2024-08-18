import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const blogsData = useLoaderData();
  const { photo, title, subject, date, details } = blogsData;
  return (
    <section className=" sm:px-16 sm:py-24 flex flex-col justify-center items-center">
      {/* tite and Date */}
      <div className="flex-center gap-4 py-4 px-8">
        <div className="header-border border-2 font-jos text-[15px] text-center max-w-[150px] py-2">
          <h1
            className={`  font-jos text-[15px] text-[#292E36] tracking-[4px]`}
          >
            {title}
          </h1>
        </div>
        <div className="header-border  font-jos text-[15px] text-center max-w-[150px] py-2">
          <h1
            className={`  font-jos text-[15px] text-[#292E36] tracking-[4px]`}
          >
            {date}
          </h1>
        </div>
      </div>

      {/* subject */}
      <div className=" w-full sm:max-w-[750px] flex flex-col justify-center items-center px-4">
        <h1 className=" text-[45px] font-extrabold font-cormo leading-12">
          {subject}
        </h1>
        <p className=" text-justify font-jos text-xl font-normal text-[#555555]">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making.
        </p>
      </div>
      <div className="flex-center w-full h-[400px] my-12 px-4">
        <img className=" w-full h-full object-cover " src={photo} />
      </div>
      <div className=" text-justify leading-7 w-full sm:max-w-[750px] flex flex-col px-4 ">
        <p className=" text-[#555555] font-jos text-xl">
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </p>
        <h1 className=" text-[#292E36] text-[35px] font-cormo font-extrabold text-start py-8">Perfect Food for all Hungry Livings</h1>
        <p>
          Objectively integrate enterprise-wide strategic theme areas with
          functionalized infrastructures ipsum Interactively productized premium
          technologies where as interdependent quality vectors rapaciously
          utilize enterprise experiences via 24/7 markets.
        </p>
        <ol className=" list-disc font-jos text-xl font-normal px-4 py-8 space-y-4">
          <li>
            Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
          </li>
          <li>
            Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent
          </li>
          <li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
        </ol>
      </div>
      <div className=" flex justify-center items-center w-full sm:w-[750px] h-[300px] bg-[#FFF8F5] px-4 ">
<p className=" px-12 text-[30px] font-extrabold font-cormo text-center">The ultimate learn-how-to-cook book filled with 100+ amazing,
 easy-to-follow recipes for every occasion plus helpful
kitchen tricks to inspire young cooks</p>
      </div>

      <div className=" w-full sm:w-[750px] h-full px-4">
<h1 className=" font-cormo text-[35px] font-extrabold text-[#292E36]">What burger recipes exist you can follow?</h1>
      <p className=" text-justify font-jos tex-xl text-[#555555]">At risus viverra adipiscing at tellus integer feugiat pretium fusce id velit ut tortor sagittis scelerisque purus semper eget lectus urna duis convallis porta nibh venenatis crase sed felis egets neque laoreet  aliquam nunc lobortis mattis aliquam faucibus purus in.</p>
      <ul className=" list-decimal pl-12">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
      
    </section>
  );
};

export default SingleBlog;
