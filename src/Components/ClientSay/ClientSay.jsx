import React, { useEffect, useRef } from 'react'
import { clientSay, light1 } from '../../Constant'
import LeftSideButton from '../../uitls/Button/LeftSideButton/LeftSideButton'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const ClientSay = () => {
    const cllientRef = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(cllientRef.current, {
           opacity:0,

        }, {
            opacity:1,
            duration:3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cllientRef.current,
                start: "top 70%",
                end: "bottom 90%",
           
                scrub: true,
            }
        }



        )
    }, [])
    return (
        <section ref={cllientRef}  className=' max-w-7xl bg-[#292E36] text-white h-full sm:pl-[200px] py-12 sm:py-[80px]  flex flex-col'>
            <LeftSideButton
                className={'text-white'}
                title={' Testimonial'}
                subject={'  What our clients say'}
                paragraph={'We love to hear from customers, so please leave a comment or say hello in an email.'} />

            <div className=" p-4 sm:pb-20">
                <div  className=" flex flex-col items-center gap-4 sm:flex sm:flex-row sm:justify-evenly  ">
                    {
                        clientSay.map(comment => (
                            <div className=' flex flex-col justify-center cursor-pointer
                     px-8 items-start w-[320px] h-[250px] bg-[#343942]'
                                key={comment.id}>
                                <div className="flex justify-start gap-4 items-center py-2">
                                    <img className=' h-[80px] w-[80px]' src={comment.photo} />
                                    <div className=" flex flex-col">
                                        <h1 className=' text-[20px] font-semibold'>{comment.name}</h1>
                                        <p className=' text-orange'>{comment.city}</p>
                                    </div>
                                </div>
                                <div className="flex border-[1px] border-[#797E89] w-full"></div>
                                <div className="py-2">
                                    <p className=' font-cormo italic text-[16px] text-[]'>
                                        <span>"</span>
                                        {comment.comments}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* banner */}
            <div className=" px-5 flex-center">
                <img src={light1} />
            </div>
        </section>
    )
}

export default ClientSay