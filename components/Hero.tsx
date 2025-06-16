import { Inter, Urbanist } from 'next/font/google';
import React from 'react'
import HeroGrid from './HeroGrid';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Hero() {
  return (
    <div className=''>
      <section className="mx-30 my-12 flex flex-col md:flex-row  gap-2 ">
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="text-lg text-[var(--error-color)] font-semibold ">Designs That Speak for You</h4>
          <h2 className={"text-6xl max-w-[600px] font-semibold leading-tight "  + urbanist.className}>
          <span className={"pl-1 pr-4 border-2 border-blue-500 text-blue-500 rounded-r-full rounded-l-none mb-4 truncate "}> Get Custom Visuals </span><br/>
            for Social Media,
            Branding, Events, and More
          </h2>
          <h4 className="text-lg font-semibold "> <i className="fa-solid fa-hammer text-blue-500 forging "></i> Crafted <span className="text-blue-500 "> Uniquely </span> . Designed Just for You.</h4>
          <div className="pt-4">
            <button className="text-xl text-white bg-[var(--error-color,_#D32F2F)] border-2 border-[var(--error-color,_#D32F2F)] font-semibold cursor-pointer rounded-full px-8 py-4 hover:bg-white hover:text-[var(--error-color,_#D32F2F)] transition-all duration-300 shadow-sm">
              Order Now
            </button>
            <div className="text-gray-700 mt-2">
              Already have an account?&nbsp;
              <span className="relative group font-bold cursor-pointer inline-block">
                <span className="transition-all duration-500 group-hover:text-blue-500">Log In</span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-500 group-hover:scale-x-100"></span>
              </span>
            </div>
          </div>
        </div>
        {/* Clippath Displayed pictures */}
        <HeroGrid />
      </section>

    </div>
  )
}


