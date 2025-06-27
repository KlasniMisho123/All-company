'use client'

import SquareAnimation from '@/components/SquareAnimation';
import { Urbanist } from 'next/font/google';
import React from 'react'


const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function page() {
  return (
    <div>
      <div className='h-[50vh] -mt-1 bg-cover bg-center flex items-center justify-center'
      style={{backgroundImage:"url(https://xtratheme.com/elementor/factory/wp-content/uploads/sites/8/2018/09/slider-industrial-2.jpg)"}}
      >
        
        <div className='flex flex-col text-6xl font-semibold custom-selection-bg text-center  text-white '>
          <h2 className='bg-[var(--light-red)] py-3'> Our Company </h2>
          <h2 className=''> Services </h2>
        </div>

      </div>
      <section className='flex flex-col items-center pb-[350px]'>
        <div className='flex flex-col items-center justify-center my-12 gap-2 '>
          <h5 className='text-gray-300 text-lg '>What Can We Do?</h5>
          <h2 className='text-5xl '>OUR SERVICES <span className='text-red-500'> OVERVIEW </span> </h2>
          <p className='text-gray-300 max-w-[40%] text-center text-xl mt-4'> A factory, manufacturing plant or a production plant is an industrial site,
            usually consisting of buildings and machinery </p>
        </div>

        <div className='flex gap-10 w-[60%] '>
          <div className={'mt-8 flex-1 relative flex flex-col items-center gap-2 h-[53vh] p-4 rounded-lg bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300  shadow-2xl text-black ' + urbanist.className }>
              <h5 className='text-xl '> Logo design </h5>
              <div className='h-[50%] w-full overflow-hidden border-2 border-slate-400 rounded-xl bg-gradient-to-r from-red-300 to-gray-300 shadow-lg'> 
                <SquareAnimation />
              </div>
              <p className="text-gray-800 text-sm leading-relaxed ">
                Crafting impactful and memorable logo designs that capture your brand's identity and leave a lasting impression.
              </p>

              <p className="text-white text-sm leading-relaxed bg-[var(--light-red)] px-1 ">
                Pricing
              </p>
              <button className='w-full border-2 py-1 mt-1 transiiton-all duration-200 cursor-pointer hover:bg-[var(--light-red)] '> Order Now </button>
          </div>

          <div className='mt-0 flex-1 p-4 rounded-lg bg-red-300 '>
            wedding decorations
          </div>

          <div className='mt-4  flex-1 p-4 rounded-lg bg-red-300 '>
            Product Design
          </div>

          {/* <div>
            Addvertisement board Design
          </div>

          <div>
            Web Design
          </div> */}
        </div>

      </section>

    </div>
  )
}
