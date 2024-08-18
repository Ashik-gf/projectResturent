import React from 'react'
import { choseItem, choseUs } from '../../Constant'
import LeftSideButton from '../../uitls/Button/LeftSideButton/LeftSideButton'

const ChoseUs = () => {
  return (
    
    <section className=" max-w-7xl h-full sm:min-h-screen mx-auto flex-center px-2 pb-12 sm:pb-40 sm:px-16">
    <div className=" w-full h-full sm:h-[600px]  gap-4 flex flex-col sm:flex-row">
       {/* right side */}
      <aside className=" w-full h-full sm:w-1/2 ">
        <img className=" object-cover w-full h-full sm:h-full " src={choseUs} />
      </aside>
      {/* left Side */}
      <aside className="  w-full h-full sm:w-1/2 py-24">
        <LeftSideButton title={'Why Choose Us'} subject={'Why We Are The Best?'}
        paragraph={'Bring the table winwin survival strateges ensure proactive  the domination the end of the day going forward new normal that has evolved froms generation on the runway heading  towards streamlined cloud solution generated content in real times will have multiple touchpoints.'}
        />
      
      <div className="flex sm:flex-col py-4">
<div className="">
    <div className="h-full w-full grid grid-cols-2 gap-4  ">
        {
            choseItem.map(item=>(
            
            <div key={item.id}
            className=' border-2 border-[#EAEAEA] w-full h-[60px] p-2'
            >
                <div className=" h-full gap-2 flex items-center">
                 <img src={item.photo} />  
                 <p className=' font-jos font-normal text-[#292E36] text-[22px] leading-8'>{item.title}</p> 
                </div>

            </div>))
        }
    </div>
</div>
      </div>
      </aside>
     
    </div>
  </section>
  )
}

export default ChoseUs