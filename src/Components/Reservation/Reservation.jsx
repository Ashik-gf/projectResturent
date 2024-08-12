import React from 'react'
import { reservation } from '../../Constant'
import Button from '../../uitls/Button/Button'

const Reservation = () => {
  return (
    <section
     style={{backgroundImage:`url(${reservation})`}}
     className='w-full h-[1000px] sm:h-[800px] bg-cover flex-center'
     >
      <div className=" sm:w-[980px] h-[100%] sm:h-[565px] p-20 bg-[#292E36F2] bg-opacity-95 ">
    <Button  className={'text-white font-jos tracking-[4px]'}  title={'Reservation'} subject={'Book your table now'} />
    <div className=" flex flex-col sm:flex-row gap-8 w-full pt-8 ">
      <input
      placeholder='Name'
      className=' w-full h-[68px] bg-transparent
       border-[1px] border-[#858585] px-4 
       appearance-none outline-none
       placeholder:text-[22px] 
       placeholder:font-jos 
       placeholder:font-semibold
      placeholder:text-white
      text-white text-[22px]
      
       ' type='text' />
      <input
      placeholder='Email'
      className=' w-full h-[68px] bg-transparent
       border-[1px] border-[#858585] px-4 
       appearance-none outline-none
       placeholder:text-[22px] 
       placeholder:font-jos 
       placeholder:font-semibold
      placeholder:text-white
      text-white text-[22px]
      
       ' type='Email' />
    </div>
    {/*  */}
    <div className="flex flex-col sm:flex-row gap-8 w-full py-8 ">
      <input
      placeholder='Person'
      className=' w-full h-[68px] bg-transparent
       border-[1px] border-[#858585] px-4 
       appearance-none outline-none
       placeholder:text-[22px] 
       placeholder:font-jos 
       placeholder:font-semibold
      placeholder:text-white
      text-white text-[22px]
      
       ' type='text' />
      <input
      placeholder='Timing'
      className=' w-full h-[68px] bg-transparent
       border-[1px] border-[#858585] px-4 
       appearance-none outline-none
       placeholder:text-[22px] 
       placeholder:font-jos 
       placeholder:font-semibold
      placeholder:text-white
      text-white text-[22px]
      
       ' type='text' />
      <input
      placeholder='Date'
      className=' w-full h-[68px] bg-transparent
       border-[1px] border-[#858585] px-4 
       appearance-none outline-none
       placeholder:text-[22px] 
       placeholder:font-jos 
       placeholder:font-semibold
      placeholder:text-white
      text-white text-[22px]
      
       ' type='text' />
    </div>
    <div className="flex-center">
      <button className=' flex-center px-8 py-8 bg-white w-[232px] h-[60px]'>
       <h1 className=' font-jos text-[22px] font-normal'> Book a Table</h1>
      </button>
    </div>
      </div>
    </section>
  )
}

export default Reservation