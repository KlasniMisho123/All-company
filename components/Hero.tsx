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
        // Color Version, projects-bg.avif -> HeroGrid Stats
        className="px-30 py-12 flex flex-col md:flex-row gap-2 bg-no-repeat w-full h-full " 
        // className="relative px-8 px-30 py-24 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full h-screen min-h-[600px] bg-center overflow-hidden "
        // style={{ backgroundImage: "url(projects-bg.avif)" }}
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
              Services
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

      <section className='mx-30 my-10 px-20 py-10 w-[80%] h-[400px] shadow-sm rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 flex justify-between '>
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
      <section className='mx-30 my-10 rounded-xl  p-4 py-10 '>
        <h4 className='text-2xl'> Work Process </h4>
        <div className='flex justify-between mt-2 gap-4 '>
          <div className='flex-1 flex flex-col gap-8 mt-4 '>
            <h2 className='text-4xl font-semibold '> Our business   <span className='text-[var(--error-color)]'> Process Road </span> </h2>
            <p className='text-gray-100 mt-2 max-w-[80%]'>
              <span className='text-lg'> 🎨 </span> From the first pencil sketch to the final brand guidelines, our design process transforms raw ideas into iconic visual identities. 
              Each phase blends strategic thinking with artistic mastery—keeping you engaged at every turn, while crafting results that don&apos;t just meet briefs,
              but redefine categories.
            </p>
            <div className='p-2 px-4 border-2 bg-yellow-400 border-yellow-400 rounded-xl '>01. Research Phase</div>
            <div className='p-2 px-4 border-2 bg-blue-400 border-blue-400 rounded-xl '>02. Visual Exploration</div>
            <div className='p-2 px-4 border-2 bg-red-400 border-red-400 rounded-xl '>03. System Design</div>
            <div className='p-2 px-4 border-2 bg-green-400 border-green-400 rounded-xl '>04. System Design</div>
          </div>

          <div className='flex-1 grid grid-cols-2 gap-8 mt-4'>

            <div className='flex flex-col w-full bg-white h-[350px] rounded-xl shadow-lg duration-300 transition-all overflow-hidden hover:border-yellow-400 border-3 group relative'>
              <div className='flex-1 flex items-center'>
                <i className="fa-solid fa-lightbulb text-8xl text-yellow-400/60 ml-4 fa-bounce"></i>
                <h1 className='absolute ml-10 text-black text-3xl '>DISCOVERY</h1>
              </div>
              <div className='flex-1 p-4 pt-0 text-gray-700 group-hover:text-yellow-400 transition-all'>
                We decode your brand DNA through research, moodboards, and strategy sessions.
              </div>
              <div className='absolute bottom-4 right-4 text-yellow-400 opacity-0 group-hover:opacity-100 duration-300 transition-all'>
                01
              </div>
            </div>

            <div className='flex flex-col w-full bg-white h-[350px] rounded-xl shadow-lg duration-300 transition-all overflow-hidden hover:border-blue-400 border-3 group relative mt-6'>
              <div className='flex-1 flex items-center'>
                <i className="fa-solid fa-pen-fancy text-8xl text-blue-400/60 ml-4 group-hover:rotate-12 transition-transform"></i>
                <h1 className='absolute ml-10 text-black text-3xl '>CONCEPT</h1>
              </div>
              <div className='flex-1 p-4 pt-0 text-gray-700 group-hover:text-blue-400 transition-all'>
                Transforming insights into 3 distinct visual directions for your brand.
              </div>
              <div className='absolute bottom-4 right-4 text-blue-400 opacity-0 group-hover:opacity-100 duration-300 transition-all'>
                02
              </div>
            </div>
            
            <div className='flex flex-col w-full bg-white h-[350px] rounded-xl shadow-lg duration-300 transition-all overflow-hidden hover:border-red-400 border-3 group relative'>
              <div className='flex-1 flex items-center'>
                <i className="fa-solid fa-fingerprint text-8xl text-red-400/60 ml-4 group-hover:rotate-45 transition-transform"></i>
                <h1 className='absolute ml-10 text-black text-3xl'>IDENTITY CORE</h1>
              </div>
              <div className='flex-1 p-4 pt-0 text-gray-700 group-hover:text-red-400 transition-all'>
                Crafting logo, color, and typography systems that become unmistakably yours.
              </div>
              <div className='absolute bottom-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 duration-300 transition-all'>
                03
              </div>
            </div>

            <div className='flex flex-col w-full bg-white h-[350px] rounded-xl shadow-lg duration-300 transition-all overflow-hidden hover:border-green-400 border-3 group relative '>
              <div className='flex-1 flex items-center'>
                <i className="fa-solid fa-box-open text-8xl text-green-400/60 ml-4 group-hover:animate-bounce"></i>
                <h1 className='absolute ml-10 text-black text-3xl '>DELIVERY</h1>
              </div>
              <div className='flex-1 p-4 pt-0 text-gray-700 group-hover:text-green-400 transition-all'>
                Complete brand packages with guidelines and implementation support.
              </div>
              <div className='absolute bottom-4 right-4 text-green-400 opacity-0 group-hover:opacity-100 duration-300 transition-all'>
                04
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Highlighted Cleint Logo Infinite Scroll */}
      {/*String Sides/Advantages Infinite Scroll */}
    </div>
  )
}


