import React from 'react'
import Button from '../../uitls/Button/Button'
import { team } from '../../Constant'

const Team = () => {
  return (
    <section className=' h-full sm:py-32 py-4 w-full bg-[#FFF8F5]'>
<Button className={'py-0'} title={'Team'} subject={'Meet Our Professional Chefs'} />
<div className=" flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-16">
    {
        team.map(item=>(
            <div key={item.id} className=" h-[400]">
                    <img className=' w-full cursor-pointer h-[350px]' src={item.photo} />
            </div>
        ))
    }
</div>
    </section>
  )
}

export default Team