import React from 'react'
import { call1, location1, mail1 } from '../../Constant'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa6'

const ContactInfo = () => {
  return (
    <div>
         <div className=" w-full flex flex-col justify-start items-start bg-[#FFF8F5] p-12 space-y-3">
          <h1 className=" font-cormo text-2xl font-extrabold">
            Contact Information
          </h1>
          <p className=" text-justify">
            Bring the table winwin survival strateges ensure proactive
            domination the end of the day going real times multiple touchpoints.
          </p>
          <div className=" flex flex-col gap-4 py-2">
             {/* loacation */}
            <div className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 flex-center rounded-full bg-black">
                <img src={location1} />
              </div>
              <p>Riverside 25, San Francisco, California</p>
            </div>
            {/* mail */}
            <div className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 flex-center rounded-full bg-black">
                <img src={mail1} />
              </div>
              <p>evanmattew@mail.com</p>
            </div>
            {/* call */}
            <div className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 flex-center rounded-full bg-black">
                <img src={call1} />
              </div>
              <p>800-234-678</p>
            </div>
          </div>
          {/* constct ICON */}
          <div className="icon flex flex-row gap-4 py-4">

          <div className="w-12 h-12 flex-center rounded-full bg-[#292E361A] bg-opacity-10">
                <a href='#' className=' text-xl'><FaInstagram /></a>
              </div>
          <div className="w-12 h-12 flex-center rounded-full bg-[#292E361A] bg-opacity-10">
                <a href='#' className=' text-xl'><FaFacebook /></a>
              </div>
          <div className="w-12 h-12 flex-center rounded-full bg-[#292E361A] bg-opacity-10">
                <a href='#' className=' text-xl'><FaTwitter /></a>
              </div>
          <div className="w-12 h-12 flex-center rounded-full bg-[#292E361A] bg-opacity-10">
                <a href='#' className=' text-xl'><FaPinterest /></a>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ContactInfo