import React from 'react'

const LeftSideButton = ({className,title, subject, paragraph}) => {
  return (
    <section className=' '>
     <div className="header-border border-2 font-jos text-[15px] text-center w-[150px] py-2">
      <h1 className= {`  font-jos text-[15px] text-[#292E36] tracking-[4px] uppercase ${className} `} >{title}</h1>
    </div>
    <div className= {`sm:w-[500px] flex flex-col  py-4 ${className}`} >
    <h1 className={`font-cormo text-[35px] py-2 font-semibold text-[#292E36] ${className}`}>{subject}</h1>
      <p className= {` text-justify font-jos text-[20px] font-normal text-[#555555] ${className}`} >{paragraph}</p>
    </div>
    </section>
  )
}

export default LeftSideButton