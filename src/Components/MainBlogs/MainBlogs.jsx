import React from 'react'
import { mainBlog } from '../../Constant'
import { Link } from 'react-router-dom'

const MainBlogs = () => {
  return (
    <div>
         <div className=" grid sm:grid-cols-2 gap-8 py-8">
          {mainBlog.map((item) => (
            <div className=" cursor-pointer relative w-full sm:w-[500px]" key={item.id}>
              <div className=" group">
                 <img className=" object-cover w-full h-[250px]" src={item.photo} />
                
                 <div className=" hidden absolute top-0  h-[250px] w-full transition duration-700  group-hover:bg-[#292E36B3] flex-center flex-col opacity-95">
                 <Link to={`/singleBlog/${item.id}`}>
                  <button className=" border-[1px] border-orange px-[32px] py-[10px] hidden group-hover:flex  font-jos  text-[20px] text-white">
                See More
              </button>
                 </Link>
            </div>
              </div>
             
              {/* date */}
              <div className="flex justify-start gap-4 py-4 px-8">
                <div className="header-border border-2 font-jos text-[15px] text-center max-w-[150px] py-2">
                  <h1
                    className={`  font-jos text-[15px] text-[#292E36] tracking-[4px]`}
                  >
                    {item.title}
                  </h1>
                </div>
                <div className="header-border  font-jos text-[15px] text-center max-w-[150px] py-2">
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
                {item.subject}
                </h1>
                <p className=" py-2 px-8 text-[#555555] text-[20px] font-normal font-jos justify-start">
                {item.details}
                </p>
              </div>
              {/* block */}
             
            </div>
          ))}
        </div>
    </div>
  )
}

export default MainBlogs