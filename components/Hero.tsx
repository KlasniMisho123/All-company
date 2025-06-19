import { Urbanist } from 'next/font/google';
import React from 'react'
import HeroGrid from './HeroGrid';
import ServicesCard from './ServicesCard';
import Link from 'next/link';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Hero() {
  return (
    <div className='pb-12'>
      {/* Dark Background */}
      <section
        // Color Version
        className="px-30 py-12 flex flex-col md:flex-row gap-2 bg-no-repeat w-full h-full " 
        // className="relative px-8 py-24 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full h-screen min-h-[600px] bg-cover bg-center overflow-hidden"
        // style={{ backgroundImage: "url(https://i.pinimg.com/736x/35/4f/ae/354fae3e4cfbfce294dea9fa6f53f8bd.jpg)" }}
      >
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="text-lg font-semibold ">Designs That Speak for You</h4>
          <h2 className={"text-6xl max-w-[600px] font-semibold leading-tight "  + urbanist.className}>
          <span className={"pl-1 pr-4 border-2 border-[var(--error-color)] text-[var(--error-color)] rounded-r-full rounded-l-none mb-4 truncate "}> Get Custom Visuals </span><br/>
            for Social Media,
            Branding, Events, and More
          </h2>
          <h4 className="text-lg font-semibold "> <i className="fa-solid fa-hammer text-[var(--error-color)] forging "></i> Crafted <span className="text-[var(--error-color)] "> Uniquely </span> . Designed Just for You.</h4>
          <div className="pt-4">
            <button className="text-xl text-white bg-[var(--error-color,_#D32F2F)] border-2 border-[var(--error-color,_#D32F2F)] font-semibold cursor-pointer rounded-full px-8 py-3 hover:bg-white hover:text-[var(--error-color,_#D32F2F)] transition-all duration-300 shadow-sm">
              Order Now
            </button>
            <div className="text-gray-300 mt-2">
              Already have an account?&nbsp;
              <span className="relative group font-bold cursor-pointer inline-block">
                <span className="transition-all duration-500 group-hover:text-[var(--error-color)]">Log In</span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-[var(--error-color)] transition-transform duration-500 group-hover:scale-x-100"></span>
              </span>
            </div>
          </div>
        </div>
        <HeroGrid />
      </section>

      <section className='mx-30 my-10 px-20 py-10 w-[90%] h-[400px] shadow-sm rounded bg-gradient-to-r from-slate-900 to-slate-800 flex justify-between '>
        <div className=''>
          <div className="relative inline-block group mt-2 ">
            <h1 className="text-3xl md:text-4xl font-bold ">
              All Design
              <div className="h-1 w-0 bg-red-500 transition-all duration-500 group-hover:w-full"></div>
            </h1>
          </div>
          <p className="text-gray-200 max-w-2xl text-center md:text-left text-lg leading-relaxed mt-4">
            Where creativity meets strategy—explore our comprehensive design solutions. <br />
            See how we transform visions into brands
          </p>
          <div className='flex flex-col gap-2 mt-6'>
            <div className='flex items-center gap-2 group '>
              <i className='fa-solid fa-lightbulb text-2xl p-2 px-3 transition-all duration-500 border-2 border-transparent rounded-full group-hover:border-yellow-400  group-hover:bg-white group-hover:text-yellow-400 shadow-sm '></i>
              <span className='text-yellow-400' >Client&apos;s Vision</span>
            </div>
            <div className='flex items-center gap-2 group'>
              <i className='fa-solid fa-cubes text-2xl text-2xl p-2  transition-all duration-500 border-2 border-transparent rounded-full group-hover:border-teal-500  group-hover:bg-white group-hover:text-teal-500 shadow-sm '></i>
              <span className='text-teal-500' >Quality Product</span>
            </div>
            <div className='flex items-center gap-2 group'>
              <i className='fa-solid fa-handshake text-2xl text-2xl p-2 px-1.5 transition-all duration-500 border-2 border-transparent rounded-full group-hover:border-blue-500 group-hover:bg-white group-hover:text-blue-500 shadow-sm '></i>
              <span className='text-blue-500 ' >Trusted Partnership</span>
            </div>
          </div>
        </div>
        <div className='self-center '>
          <Link
           className="flex items-center gap-2 text-xl text-white bg-[var(--error-color,_#D32F2F)] border-2 border-[var(--error-color,_#D32F2F)] 
           font-semibold cursor-pointer rounded-full px-8 py-3 hover:bg-white hover:text-[var(--error-color,_#D32F2F)] transition-all duration-300 shadow-sm overflow-hidden plane-flight  "
           href={'/aboutus'}
           >
            About Us <i className="fa-solid fa-paper-plane "></i>
          </Link>
        </div>
      </section>

      <section className='mx-30 my-10 rounded-xl  p-4 py-10 '> 
        <h2 className={'text-center text-4xl font-bold ' + urbanist.className}> Our <span className='text-3xl bg-gradient-to-r from-[var(--error-color)] to-[#1F2937] tracking-widest font-semibold px-1 '> Services </span> </h2> 
        <p className={`text-center bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent font-medium text-lg md:text-xl max-w-2xl mx-auto ${urbanist.className}`}>
           We deliver innovative, client-focused services designed to solve real challenges and drive sustainable growth. </p> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <ServicesCard 
            color="red" 
            icon="fa-solid fa-compass-drafting" 
            title="Brand Identity"
            paragraph="Complete visual systems from logos to style guides"
            linkSrc="/services/branding"
          />

          <ServicesCard 
            color="blue" 
            icon="fa-solid fa-pen-fancy" 
            title="Print Design"
            paragraph="Stunning business cards, letterheads & packaging"
            linkSrc="/services/print"
          />

          <ServicesCard 
            color="sky" 
            icon="fa-solid fa-bullhorn" 
            title="Advertising"
            paragraph="Eye-catching campaigns for print and digital"
            linkSrc="/services/advertising"
          />

          <ServicesCard 
            color="pink"
            icon="fa-solid fa-champagne-glasses" 
            title="Event Branding"
            paragraph="Memorable visuals for exhibitions and launches"
            linkSrc="/services/events"
          />
        </div>

      </section>
    </div>
  )
}


