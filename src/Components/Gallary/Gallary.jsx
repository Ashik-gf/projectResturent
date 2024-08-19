import React from 'react'
import Button from '../../uitls/Button/Button'
import { img1, img2, img3, img4, img5 } from '../../Constant'

const Gallary = () => {
  return (
    <section className=' max-w-7xl h-full py-32 bg-white'>
        <Button className={''} title={'Galary'} subject={'What We Make'} />
        <div className=" flex flex-col sm:flex-row sm:justify-center sm:items-center w-full h-full sm:h-[500px] gap-2">
            <aside className=' flex flex-col justify-center items-center gap-2'>
                <div className="h-[290px] w-full sm:w-[300px] overflow-hidden">
                <img className='w-full ' src={img1} />
                </div>
                <img className=' h-[200px] w-full' src={img2} />
            </aside>
            <div className="flex justify-center items-center">
                <img className=' h-[500px]' src={img3} />
            </div>
            <aside className=' flex flex-col justify-center items-center gap-2'>
                <div className="h-[290px] w-[300px] overflow-hidden">
                <img className=' ' src={img4} />
                </div>
                <img className=' h-[200px]' src={img5} />
            </aside>

        </div>
    </section>
  )
}

export default Gallary