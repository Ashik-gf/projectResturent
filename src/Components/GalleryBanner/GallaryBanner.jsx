import React from 'react'
import { reservationBanner } from '../../Constant'
import LeftSideButton from '../../uitls/Button/LeftSideButton/LeftSideButton';


const GallaryBanner = () => {
  return (
    <section  className=' h-full sm:min-h-screen max-w-screen-xl  flex-center'>
        <div style={{backgroundImage:`url(${reservationBanner})`}}
         className=" w-full h-[400px] flex justify-start items-center bg-cover object-right sm:px-16 ">
            <div className="">
                <LeftSideButton 
                className={'text-white'} 
                title={'RESERVATION'}
                subject={'This evening will be graet!'}
                paragraph={'Lorem Ipsum is that it has a more-or-less normal look like readable English. '}>
                </LeftSideButton>
                <div className="flex items-center gap-8 py-8">
                    <button className=' btn-border text-orange'>
                        Book a Table
                    </button>
                    <h1 className=' text-white'>Get in Touch</h1>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default GallaryBanner