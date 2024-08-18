import React from 'react'
import Button from '../../uitls/Button/Button'

const MailForm = () => {
  return (
    <div className=' w-full px-4 sm:px-0'>
        <Button title={'MAIL US'}
        subject={'Have a Question?'}
        />
         <form className=" w-full flex flex-col gap-8">
            {/* NAme & Email */}
            <div className=" w-full flex sm:flex-row flex-col justify-between gap-4">
              <input
                placeholder="Name"
                type="text"
                className=" w-full h-[40px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black"
              />
              <input
                placeholder="Email"
                type="Email"
                className=" w-full h-[40px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black"
              />
            </div>
            {/* subject & Phone */}
            <div className=" w-full flex sm:flex-row flex-col justify-between gap-4">
              <input
                placeholder="Subject"
                type="text"
                className=" w-full h-[40px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black"
              />
              
              <input
                placeholder="Phone"
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                required
                className=" w-full h-[40px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black"
              />
              
            </div>
            {/* time & person */}
            <div className=" w-full flex sm:flex-row flex-col justify-between gap-4">
              <input
                placeholder="Messege"
                type="textarea"
                className=" w-full h-[100px] border-[1px] border-[#292E36] px-4 outline-0
    placeholder:text-black placeholder:font-jos"
              />
             
            </div>
            <button type="submit"
            className=" btn-border w-[150px] font-jos"
            >
Send
            </button>
          </form>
           <div className="flex flex-col justify-center items-center">
            <Button />
           </div>
    </div>
  )
}

export default MailForm