import React from 'react'
import LeftSideButton from '../../../uitls/Button/LeftSideButton/LeftSideButton'
import { aboutB, josifPhoto, logoTrans, star } from '../../../Constant'

const AboutBanner = () => {
  return (
    <div>
         <div className=" w-full px-16 h-[700px] flex-between ">
       <div className="flex flex-col">
       <LeftSideButton
        title={'About Us'}
        subject={'Quality and  Tradition'}
        paragraph={'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content gfshere making look like readable English. Many desktop publishing packages.'}
        />
          <div className="flex flex-col gap-8">
            <p>JOSEFINE</p>
            <h1 className=' text-[45px] font-jos font-normal'>Josefine</h1>
            <button className=' w-[200px] btn-border text-orange'>
              See More
            </button>
          </div>
       </div>

       <div className=" relative flex">
        <img className=' h-[500px] rounded-tr-[250px]' src={aboutB} />
        <img className=' absolute -top-8 -right-12 h-[200px] opacity-95' src={logoTrans}/>
       {/* josafe */}
        <div className=" w-[300px] h-[200px] flex flex-col gap-2 p-4 bg-white absolute bottom-0 -left-32">
<div className="flex justify-start items-center gap-5 p-2 bg-white">
<div style={{backgroundImage:`url(${josifPhoto})`}} className="h-20 w-20 rounded-full">
</div>
<div className="flex flex-col gap-2">
    <h1 className=' text-[#292E36] text-[25px] font-cormo font-extrabold'>Josefine</h1>
    <p className='text-[#4A4A4A] font-jos text-md font-normal'>CEO & Founder</p>
  </div>
</div>
<div className="w-full text-warp px-2">
  <p className=' text-[16px] font-jos font-normal'>
  Capitalize on low hanging fruit
to identify a ballpark
  </p>
</div>
<div className="flex-center gap-2">
  <img className=' cursor-pointer' src={star} />
  <img className=' cursor-pointer' src={star} />
  <img className=' cursor-pointer' src={star} />
  <img className=' cursor-pointer' src={star} />
  <img className=' cursor-pointer' src={star} />
</div>
        </div>
       </div>
        </div>
    </div>
  )
}

export default AboutBanner