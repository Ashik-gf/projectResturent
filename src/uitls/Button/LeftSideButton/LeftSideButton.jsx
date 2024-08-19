import React from 'react'

const LeftSideButton = ({className,title, subject, paragraph, children}) => {
  return (
    <section className=' w-full flex flex-col sm:justify-center items-center sm:items-start '>
     <div className=" font-jos text-[15px] text-center py-[2px]">
      <h1 className= {` header-border max-w-fit  font-jos text-[15px] text-[#292E36] tracking-[4px] uppercase ${className} `} >{title}</h1>
    </div>
    <div className= {` w-full sm:max-w-[500px] flex flex-col items-center sm:items-start px-2 py-4 ${className}`} >
    <h1 className={`font-cormo text-[35px] py-2 font-semibold text-[#292E36] ${className}`}>{subject}</h1>
    <h1 className={`font-cormo text-[35px] py-[1px] font-semibold text-[#292E36] ${className}`}>{children}</h1>
      <p className= {` text-justify font-jos text-[20px] font-normal text-[#555555] ${className}`} >{paragraph}</p>
    </div>
   
    </section>
  )
}

export default LeftSideButton