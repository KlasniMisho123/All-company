import { Urbanist } from 'next/font/google';
import React from 'react'
import HeroGrid from './HeroGrid';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Hero() {
  return (
    <div className='pb-12'>
      {/* Dark Background */}
      <section className="mx-30 my-12 flex flex-col md:flex-row  gap-2  ">
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="text-lg text-[var(--error-color)] font-semibold ">Designs That Speak for You</h4>
          <h2 className={"text-6xl max-w-[600px] font-semibold leading-tight "  + urbanist.className}>
          <span className={"pl-1 pr-4 border-2 border-blue-500 text-blue-500 rounded-r-full rounded-l-none mb-4 truncate "}> Get Custom Visuals </span><br/>
            for Social Media,
            Branding, Events, and More
          </h2>
          <h4 className="text-lg font-semibold "> <i className="fa-solid fa-hammer text-blue-500 forging "></i> Crafted <span className="text-blue-500 "> Uniquely </span> . Designed Just for You.</h4>
          <div className="pt-4">
            <button className="text-xl text-white bg-[var(--error-color,_#D32F2F)] border-2 border-[var(--error-color,_#D32F2F)] font-semibold cursor-pointer rounded-full px-8 py-3 hover:bg-white hover:text-[var(--error-color,_#D32F2F)] transition-all duration-300 shadow-sm">
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
        <HeroGrid />
      </section>
      {/* Page padding Can be Set on parent component aswell */}
      <section className='mx-30 my-20'> 
        <h2 className='text-center text-4xl font-bold text-[var(--dark-red-color)] '> What We Offer </h2> 

        <div className='flex mt-8 gap-6 '>
          <div className="relative h-[280px] w-[240px] 0 shadow-xl rounded-2xl overflow-hidden bg-red-300 ">
            {/* Background layer (visible through cutout) */}
            <div className="absolute inset-0 "></div>

            {/* Foreground card with rounded rectangular cutout */}
            <div className="absolute inset-0 p-1 card-cutout ">
              {/* Icon */}
              <div className="absolute bg-green-300 z-100 rounded-full h-10 w-10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="font-bold text-lg">Title Goes Here</h3>
                <p className="text-gray-600 text-sm">Tailored to meet individual needs perfectly balanced.</p>
                <a href="#" className="inline-block text-red-500 font-medium text-sm mt-3 hover:underline">
                  Read more →
                </a>
              </div>
            </div>
          </div>

          <div> Card 2</div>
          <div> Card 3</div>
          <div> Card 4</div>
        </div>

      </section>
    </div>
  )
}


