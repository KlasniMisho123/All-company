import { Urbanist } from 'next/font/google';
import React from 'react'
import HeroGrid from './HeroGrid';
import ServicesCard from './ServicesCard';

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
      <section className='mx-30 my-20 bg-gray-200 p-4 '> 
        <h2 className='text-center text-4xl font-bold text-[var(--dark-red-color)]  '> What We Offer </h2> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {/* 1. Primary Service - Red for impact */}
      <ServicesCard 
        color="red" 
        icon="fa-solid fa-brush" 
        title="Brand Design"
        paragraph="Crafting bold visual identities that stand out in your market"
        linkSrc="/services/brand-design"
      />

      {/* 2. Core Service - Deep blue for trust */}
      <ServicesCard 
        color="blue" 
        icon="fa-solid fa-object-group" 
        title="UI/UX Systems"
        paragraph="Building intuitive interfaces with proven design patterns"
        linkSrc="/services/ui-ux"
      />

      {/* 3. Technical Service - Light blue for clarity */}
      <ServicesCard 
        color="sky" 
        icon="fa-solid fa-code" 
        title="Web Development"
        paragraph="Clean, efficient code that brings designs to life"
        linkSrc="/services/development"
      />

      {/* 4. Premium Service - Dark for sophistication */}
      <ServicesCard 
        color="slate" 
        icon="fa-solid fa-chart-pie" 
        title="Data Visualization"
        paragraph="Transforming complex data into compelling stories"
        linkSrc="/services/data-viz"
      />
    </div>

      </section>
    </div>
  )
}


