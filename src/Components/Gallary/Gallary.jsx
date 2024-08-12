import React from 'react'
import Button from '../../uitls/Button/Button'
import { img1, img2, img3, img4, img5 } from '../../Constant'

const Gallary = () => {
  return (
    <section className=' max-w-7xl h-full py-32 bg-white'>
        <Button className={''} title={'Galary'} subject={'What We Make'} />
        <div className="flex-center w-full h-[500px] gap-2 border-2">
            <aside className=' flex flex-col justify-center items-center gap-2'>
                <div className="h-[290px] w-[300px] overflow-hidden">
                <img className=' ' src={img1} />
                </div>
                <img className=' h-[200px]' src={img2} />
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