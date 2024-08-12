import React from 'react'
import offerPhotos from '../../assets/offers.svg';
import p1 from '../../assets/p1.svg'
import { deshirt, mainDesh, starters } from '../../Constant';

const Offer = () => {
  return (
    <section className=' max-w-7xl mx-auto flex flex-col sm:flex-row h-full sm:px-16 sm:py-4'>
        {/* left side */}
        <aside className='flex flex-col gap-3 w-full sm:w-4/12 h-full px-4 py-2'>
            <h1 className=' font-jos text-lg font-normal'>Menu</h1>
            <h1 className=' font-cormo text-3xl font-semibold'>Try Our Special Offers</h1>
            <p className=' text-justify flex flex-nowrap text-[20px] font-jos'>
            Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content making it look like readable English.
             </p>
             <img className=' py-8 h-[500px] w-full' src={offerPhotos} />
        </aside>
        {/* Right side */}
        <aside className=' w-full sm:w-8/12 h-full px-4'>
           {/* starter */}
          <div className=" w-full h-full">
          <h1 className=' text-[40px] font-cormo font-extrabold'>Starters</h1>
            <div className=" flex flex-col gap-2 ">
              {
                starters.map(item=>(
                  <div
                  className=' flex flex-col sm:flex-row  justify-between'
                  key={item.id}>
                  <div className="flex gap-4 items-center">
                  <img className=' h-[128px] w-[85px]' src={item.photo} />
                    <div className="">
                      <h1 className=' font-cormo font-extrabold text-2xl text-[#292E36]'>{item.title}</h1>
                      <p className=' font-jos font-normal text-[20px] text-left text-[#555555] '>{item.details}</p>
                    </div>
                  </div>
                  <div className=" flex justify-ends items-center gap-4">
                    <div className=" hidden sm:flex border-[1px] w-[200px] border-dashed border-[#AAAAAA]"></div>
                    <p className=' justify-end sm:justify-start text-[25px] sm:text-[30px] font-extrabold font-cormo text-[#292E36]'>
                      <span className=' sm:hidden'>Price: </span>{item.price}</p>
                  </div>
                  </div>
                ))
              }
            </div>
          </div>
           {/* Main Desh */}
          <div className=" w-full h-full">
          <h1 className=' text-[40px] font-cormo font-extrabold'>Main Dish</h1>
            <div className=" flex flex-col gap-2 ">
              {
                mainDesh.map(item=>(
                  <div
                  className=' flex flex-col sm:flex-row  justify-between'
                  key={item.id}>
                  <div className="flex gap-4 items-center">
                  <img className=' h-[128px] w-[85px]' src={item.photo} />
                    <div className="">
                      <h1 className=' font-cormo font-extrabold text-2xl text-[#292E36]'>{item.title}</h1>
                      <p className=' font-jos font-normal text-[20px] text-left text-[#555555] '>{item.details}</p>
                    </div>
                  </div>
                  <div className=" flex justify-ends items-center gap-4">
                    <div className=" hidden sm:flex border-[1px] w-[200px] border-dashed border-[#AAAAAA]"></div>
                    <p className=' justify-end sm:justify-start text-[25px] sm:text-[30px] font-extrabold font-cormo text-[#292E36]'>
                      <span className=' sm:hidden'>Price: </span>{item.price}</p>
                  </div>
                  </div>
                ))
              }
            </div>
          </div>
           {/* Dessert */}
          <div className=" w-full h-full">
          <h1 className=' text-[40px] font-cormo font-extrabold'>Dessert</h1>
            <div className=" flex flex-col gap-2 ">
              {
                deshirt.map(item=>(
                  <div
                  className=' flex flex-col sm:flex-row  justify-between'
                  key={item.id}>
                  <div className="flex gap-4 items-center">
                  <img className=' h-[128px] w-[85px]' src={item.photo} />
                    <div className="">
                      <h1 className=' font-cormo font-extrabold text-2xl text-[#292E36]'>{item.title}</h1>
                      <p className=' font-jos font-normal text-[20px] text-left text-[#555555] '>{item.details}</p>
                    </div>
                  </div>
                  <div className=" flex justify-ends items-center gap-4">
                    <div className=" hidden sm:flex border-[1px] w-[200px] border-dashed border-[#AAAAAA]"></div>
                    <p className=' justify-end sm:justify-start text-[25px] sm:text-[30px] font-extrabold font-cormo text-[#292E36]'>
                      <span className=' sm:hidden'>Price: </span>{item.price}</p>
                  </div>
                  </div>
                ))
              }
            </div>
          </div>

        </aside>
    </section>
  )
}

export default Offer