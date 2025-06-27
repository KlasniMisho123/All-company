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
        
        <div className='flex flex-col text-6xl font-semibold custom-selection-bg text-center text-white select-none '>
          <h2 className=''>Our Company</h2>
          <h2 className=''>Services</h2>
        </div>

      </div>
      <section className='flex flex-col items-center pb-[350px]'>
        <div className='flex flex-col items-center justify-center my-12 gap-2 '>
          <h5 className='text-gray-300 text-lg '>What Can We Do?</h5>
          <h2 className='text-5xl '>OUR SERVICES <span className='bg-[var(--light-red)] text-white px-1'> OVERVIEW </span> </h2>
          <p className='text-gray-300 max-w-[40%] text-center text-xl mt-4'> A factory, manufacturing plant or a production plant is an industrial site,
            usually consisting of buildings and machinery </p>
        </div>

        <div className='flex gap-10 w-[60%] '>
          <div className={'mt-8 flex-1 relative flex flex-col items-center gap-2 h-[53vh] p-4 rounded-lg bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300  shadow-2xl text-black ' + urbanist.className }>
              <h5 className='text-xl '> Logo Design </h5>
              <div className='h-[50%] w-full overflow-hidden border-2 border-slate-400 rounded-xl bg-gradient-to-r from-red-300 to-gray-300 shadow-lg'> 
                <SquareAnimation />
              </div>
              <p className="text-gray-800 text-sm leading-relaxed ">
                Crafting impactful and memorable logo designs that capture your brand's identity and leave a lasting impression.
              </p>

              <p className="text-white text-sm leading-relaxed bg-[var(--light-red)] px-1 ">
                Pricing
              </p>
              <button className='relative flex items-center justify-center w-full border-1 py-1 rounded transition-all duration-300 cursor-pointer group overflow-hidden font-semibold
              border-slate-800 hover:border-[var(--error-color)] bg-slate-800 text-white '>
                <span className='transition-opacity duration-300 group-hover:opacity-0'>Order Now</span>
                <span className="absolute z-0 h-[110%] w-full origin-left scale-x-0 bg-[var(--error-color)] transition-transform duration-500 group-hover:scale-x-100"></span>
                <div className='absolute flex items-center gap-1 justify-center z-10 inset-x-0 text-center opacity-0 transition-all duration-300 group-hover:opacity-100'>
                  <span> Excellent Choice </span><i className="fa-regular fa-gem text-lg text-blue-400 "></i>
                </div>
              </button>
          </div>

          <div className={'mt-0 flex-1 relative flex flex-col items-center bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 gap-2 p-4 rounded-lg shadow-2xl text-black overflow-hidden bg-cover bg-center ' + urbanist.className}
           style={{ backgroundImage: "url(/wedding-service.jpg)"}}
          >
              <h5 className='text-xl '> Wedding Decor </h5>
              <div className='h-[50%] w-full overflow-hidden border-2 border-slate-400 rounded-xl shadow-lg'> 

              </div>
              <p className="text-gray-900 text-sm leading-relaxed ">
                Elegant, personalized designs that bring your wedding vision to life — from florals to lighting and beyond.
              </p>

              <p className="text-white text-sm leading-relaxed bg-[var(--light-red)] px-1 ">
                Pricing
              </p>
              <button className='relative flex items-center justify-center w-full border-1 py-1 rounded transition-all duration-300 cursor-pointer group overflow-hidden font-semibold
              border-slate-800 hover:border-[var(--error-color)] bg-slate-800 text-white '>
                <span className='transition-opacity duration-300 group-hover:opacity-0'>Order Now</span>
                <span className="absolute z-0 h-[110%] w-full origin-left scale-x-0 bg-[var(--error-color)] transition-transform duration-500 group-hover:scale-x-100"></span>
                <div className='absolute flex items-center gap-1 justify-center z-10 inset-x-0 text-center opacity-0 transition-all duration-300 group-hover:opacity-100'>
                  <span> Excellent Choice </span><i className="fa-regular fa-gem text-lg text-blue-400 "></i>
                </div>
              </button>
          </div>

          <div className={'mt-4 flex-1 relative flex flex-col items-center bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 gap-2 p-4 rounded-lg shadow-2xl text-black overflow-hidden bg-cover bg-center ' + urbanist.className}
           style={{ backgroundImage: "url(https://i.pinimg.com/736x/81/28/ed/8128ed536bfd70b30687386fa45beacf.jpg)"}}
          >
              <h5 className='text-xl '> Product Design </h5>
              <div className='h-[50%] w-full overflow-hidden border-2 border-slate-400 rounded-xl shadow-lg'> 
                  <SquareAnimation />
              </div>
              <p className="text-gray-800 text-sm leading-relaxed ">
                Your product’s look and feel matters — we craft designs that reflect your brand and connect with customers.
              </p>

              <p className="text-white text-sm leading-relaxed bg-[var(--light-red)] px-1 ">
                Pricing
              </p>
              <button className='relative flex items-center justify-center w-full border-1 py-1 rounded transition-all duration-300 cursor-pointer group overflow-hidden font-semibold
              border-slate-800 hover:border-[var(--error-color)] bg-slate-800 text-white '>
                <span className='transition-opacity duration-300 group-hover:opacity-0'>Order Now</span>
                <span className="absolute z-0 h-[110%] w-full origin-left scale-x-0 bg-[var(--error-color)] transition-transform duration-500 group-hover:scale-x-100"></span>
                <div className='absolute flex items-center gap-1 justify-center z-10 inset-x-0 text-center opacity-0 transition-all duration-300 group-hover:opacity-100'>
                  <span> Excellent Choice </span><i className="fa-regular fa-gem text-lg text-blue-400 "></i>
                </div>
              </button>
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
