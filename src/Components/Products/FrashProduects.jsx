import React from 'react'
import { freshProducts, productsbanner } from '../../Constant'

const FrashProduects = () => {
  return (
   <section
   style={{backgroundImage:`url(${productsbanner})`}}
    className=" bg-cover flex justify-center items-center h-full py-4 sm:py-4 sm:h-[400px] w-full ">
  <div className="flex flex-col gap-8 sm:flex sm:flex-row  sm:gap-4 sm:px-16 ">
    {
        freshProducts.map(item=>(
            <div key={item.id}
            className={`w-[250px] ${item.border} flex flex-col justify-center items-center gap-2 py-2 text-white`} >
                <img className=' h-12 py-1  cursor-pointer' src={item.icon} />
                <h1 className=' cursor-pointer text-xl font-cormo font-semibold'>{item.title}</h1>
                <p className=' text-center cursor-pointer font-jos text-md font-normal'>{item.details}</p>
                <a className=' cursor-pointer text-orange' href={item.path}>See More</a>
            </div>
        ))
    }
  </div>
   </section>
  )
}

export default FrashProduects