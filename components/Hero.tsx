import { Urbanist } from 'next/font/google';
import React from 'react'
import HeroGrid from './HeroGrid';
import Link from 'next/link';
import WorkStages from './WorkStages';
import StrongSidesScroll from './StrongSidesScroll';
import Button from './Button';
import Services from './Services';
import ClientCompanies from './ClientCompanies';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Hero() {
  return (
    <div className=''>
      <section
      
        className="relative px-8 px-30 py-24 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full h-screen min-h-[600px] bg-center overflow-hidden "
        style={{ backgroundImage: "url(projects-bg.avif)" }}
      >
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="text-lg font-semibold ">Designs That Speak for You</h4>
          <h2 className={"text-6xl max-w-[600px] font-semibold leading-tight "  + urbanist.className}>
          <span className={"pl-1 pr-4 border-2 border-[var(--error-color)] text-[var(--error-color)] rounded-r-full rounded-l-none mb-4 truncate "}> Get Custom Visuals </span><br/>
            for Social Media,
            Branding, Events, and More
          </h2>
          <h4 className="text-lg font-semibold "> <i className="fa-solid fa-hammer text-[var(--error-color)] forging "></i> Crafted <span className="text-[var(--error-color)] "> Uniquely </span> . Designed Just for You.</h4>
            <Button
              title={"Order Design"}
              linkSrc={"/contactus"}
              icon={<></>}
              customClassName={""}
              />
            
            <div className="text-gray-300 mt-2">
              Already have an account?&nbsp;
              <span className="relative group font-bold cursor-pointer inline-block">
                <span className="transition-all duration-500 group-hover:text-[var(--error-color)]">Log In</span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-[var(--error-color)] transition-transform duration-500 group-hover:scale-x-100"></span>
              </span>
          </div>
        </div>
        <HeroGrid />
      </section>
      <StrongSidesScroll />
      <section className='mx-30 px-20 py-10 w-[80%] h-[400px] shadow-sm rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 flex justify-between '>
        <div className=''>
          <div className="relative inline-block group mt-2 ">
            <h1 className="text-3xl md:text-4xl font-bold ">
              All Design
              <div className="h-1 w-0 bg-[var(--error-color)] transition-all duration-500 group-hover:w-full"></div>
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
           className="flex items-center gap-2 text-xl text-white bg-[var(--error-color,_#D32F2F)] border-2 border-[var(--error-color,_#D32F2F)] truncate
           font-semibold cursor-pointer rounded-full px-8 py-3 hover:bg-white hover:text-[var(--error-color,_#D32F2F)] transition-all duration-300 shadow-sm overflow-hidden plane-flight  "
           href={'/aboutus'}
           >
            About Us <i className="fa-solid fa-paper-plane "></i>
          </Link>
        </div>
      </section>

      <Services />
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ">
          <div className="bg-white mx-2  my-6 py-6 text-black rounded md:py-8 lg:py-10 md:mx-4 lg:mx-8 md:my-12">
              <div className="flex justify-center items-center overflow-hidden">
                <div className="flex flex-row justify-center items-center px-2 gap-2 sm:gap-4 sm:px-4 md:gap-10 lg:gap-20  ">
                  <div className='flex justify-center items-center p-8 border-2 border-gray-100 rounded w-20 h-20 cursor-pointer 
                  transition-all transition-duration-600 shadow-md  hover:shadow-none bg-[var(--error-color)] hover:bg-transparent group  hover:border-[var(--error-color)] '>
                    <i className="fa-brands fa-rocketchat text-4xl text-gray-100 group-hover:text-[var(--error-color)] "></i>
                  </div>
                  <div className="space-y-0 sm:space-y-4">
                    <h1 className={" font-bold text-gray-800 text-lg sm:text-xl lg:text-2xl " + urbanist.className}>
                      Need a Customer Service?
                    </h1>
                    <p className="text-gray-600 overflow-hidden text-ellipsis hidden sm:inline sm:appear sm:text-sm md:text-base">
                      Our team is ready to assist you with any issues or questions you may have.
                    </p>
                  </div>

                <div className="flex my-6 gap-[20%] sm:gap-[10%]  ">
                  <Link className="flex-1 max-w-40 border-2 py-3 px-6 rounded-lg text-white bg-[var(--error-color)] border-[var(--error-color)] hover:border-white hover:brightness-90 text-center
                  transition-all duration-300 cursor-pointer shadow-sm whitespace-nowrap"
                  href={'/support'}
                  // onClick={() => {handleSelectedNavSection('support')}}
                  >
                    Contact Us
                  </Link>
                </div>

                </div>
              </div>
            </div>
          </section>
      <WorkStages />
      <ClientCompanies />
      {/*Highlighted Cleint Cards, Reveal from bottom? */}
    </div>
  )
}


