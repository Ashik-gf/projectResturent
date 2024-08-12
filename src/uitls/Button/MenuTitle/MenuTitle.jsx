import React from 'react'

const MenuTitle = ({title, className}) => {
  return (
  <div className={`w-full h-[200px] text-white  sm:h-[200px] flex-center bg-[#292E36] ${className}`}>
      <div className="header-border border-2 text-[15px] text-center max-w-[300px]">
      <h1 className= {` text-[40px] text-[#fffff] font-cormo tracking-[2px] font-semibold `} >{title}</h1>
    </div>
  
  </div>
  )
}

export default MenuTitle