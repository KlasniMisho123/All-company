'use client'

import ContactUsElement from '@/components/ContactUsElement';
import SquareAnimation from '@/components/SquareAnimation';
import TriangleAnimation from '@/components/TriangleAnimation';
import WorkStages from '@/components/WorkStages';
import { Urbanist } from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function page() {
  return (
    <div>
      <div className='h-[50vh] -mt-1 bg-cover bg-center flex items-center justify-center'
      style={{backgroundImage:"url(/slider-industrial.jpg)"}}
      >
        
        <div className='flex flex-col text-6xl font-semibold custom-selection-bg text-center text-white select-none '>
          <h2 className=''>Our Company</h2>
          <h2 className=''>Services</h2>
        </div>

      </div>
      <section className='flex flex-col items-center '>
        <div className='flex flex-col items-center justify-center my-12 gap-2 '>
          <h5 className='text-gray-300 text-lg '>What Can We Do?</h5>
          <h2 className='text-5xl '>OUR SERVICES <span className='bg-[var(--light-red)] text-white px-1'> OVERVIEW </span> </h2>
          <p className='text-gray-200 max-w-[50%] text-center text-xl mt-4'> A factory, manufacturing plant or a production plant is an industrial site,
            usually consisting of buildings and machinery </p>
        </div>

        <div className='flex gap-10 w-[65%] '>
          <div className={'mt-8 flex-1 relative flex flex-col items-center gap-4 p-4 rounded-lg shadow-2xl text-white overflow-hidden bg-cover bg-center ' + urbanist.className}
           style={{backgroundImage: "url(/logo-service.jpg)"}}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className='relative z-10 flex flex-col gap-3 w-full p-4 bg-black/60 rounded-xl'>
              <h5 className='text-2xl font-bold'>Logo Design</h5>
              <div className='h-[50%] w-full overflow-hidden border-2 border-slate-400 rounded-xl bg-gradient-to-r from-[var(--light-yellow)] to-transparent hover:bg-transparent shadow-lg'>
                <SquareAnimation />
              </div>
              <p className="text-sm leading-relaxed">
                Crafting impactful and memorable logo designs that capture your brand&apos;s identity and leave a lasting impression.
              </p>
              <p className="text-sm leading-relaxed text-[var(--error-color)] font-semibold">Pricing</p>
              <button className='relative flex items-center justify-center w-full border py-1 rounded transition-all duration-300 cursor-pointer group overflow-hidden font-semibold border-slate-800 hover:border-[var(--error-color)] bg-slate-800 text-white'>
                <span className='transition-opacity duration-300 group-hover:opacity-0'>Order Now</span>
                <span className="absolute z-0 h-[110%] w-full origin-left scale-x-0 bg-[var(--error-color)] transition-transform duration-500 group-hover:scale-x-100"></span>
                <div className='absolute flex items-center gap-1 justify-center z-10 inset-x-0 text-center opacity-0 transition-all duration-300 group-hover:opacity-100'>
                  <span> Excellent Choice </span><i className="fa-regular fa-gem text-lg text-blue-400"></i>
                </div>
              </button>
            </div>
          </div>

          <div className={'mt-0 flex-1 relative flex flex-col items-center gap-4 p-4 rounded-xl shadow-2xl text-white overflow-hidden bg-cover bg-center ' + urbanist.className} style={{ backgroundImage: "url(/wedding-service.jpg)" }}>
            <div className="absolute inset-0 bg-black/5"></div>
            <div className='relative h-full z-10 flex flex-col gap-3 w-full p-4 bg-black/15 rounded-xl'>
              <h5 className='text-2xl font-bold'>Wedding Decor</h5>
              <div className='h-[50%] w-full overflow-hidden border-2 border-slate-400 rounded-xl shadow-lg'>
                <div className='invisible'>
                  <SquareAnimation />
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Elegant, personalized designs that bring your wedding vision to life — from florals to lighting and beyond.
              </p>
              <p className="text-sm leading-relaxed text-[var(--error-color)] font-semibold">Pricing</p>
              <button className='relative flex items-center justify-center w-full border py-1 rounded transition-all duration-300 cursor-pointer group overflow-hidden font-semibold border-slate-800 hover:border-[var(--error-color)] bg-slate-800 text-white'>
                <span className='transition-opacity duration-300 group-hover:opacity-0'>Order Now</span>
                <span className="absolute z-0 h-[110%] w-full origin-left scale-x-0 bg-[var(--error-color)] transition-transform duration-500 group-hover:scale-x-100"></span>
                <div className='absolute flex items-center gap-1 justify-center z-10 inset-x-0 text-center opacity-0 transition-all duration-300 group-hover:opacity-100'>
                  <span> Excellent Choice </span><i className="fa-regular fa-gem text-lg text-blue-400"></i>
                </div>
              </button>
            </div>
          </div>

          <div className={'mt-4 flex-1 relative flex flex-col items-center gap-4 p-4 rounded-lg shadow-2xl text-white overflow-hidden bg-cover bg-center ' + urbanist.className}
            style={{ backgroundImage: "url(product-service.jpg)" }}>

            <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex flex-col gap-3 w-full p-4 bg-black/60 rounded-xl">
            <h5 className='text-2xl font-bold'>Product Design</h5>

              <div className='h-[50%] w-full overflow-hidden border-2 border-slate-400 rounded-xl shadow-lg'>
                <TriangleAnimation />
              </div>

              <p className="text-sm leading-relaxed">
                Your product&apos;s look and feel matters — we craft designs that reflect your brand and connect with customers.
              </p>

              <p className="text-sm leading-relaxed text-[var(--error-color)] font-semibold">
                Pricing
              </p>

              <button className='relative flex items-center justify-center w-full border py-1 rounded transition-all duration-300 cursor-pointer group overflow-hidden font-semibold border-slate-800 hover:border-[var(--error-color)] bg-slate-800 text-white'>
                <span className='transition-opacity duration-300 group-hover:opacity-0'>Order Now</span>
                <span className="absolute z-0 h-[110%] w-full origin-left scale-x-0 bg-[var(--error-color)] transition-transform duration-500 group-hover:scale-x-100"></span>
                <div className='absolute flex items-center gap-1 justify-center z-10 inset-x-0 text-center opacity-0 transition-all duration-300 group-hover:opacity-100'>
                  <span> Excellent Choice </span><i className="fa-regular fa-gem text-lg text-blue-400"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Contact us Link element? */}
      {/* Customer Qoute Rateing Element*/}
      {/* Our Service Description? what we do? */}
      <section className='flex flex-col gap-8 mx-auto w-[95%] p-4 bg-gradient-to-b from-transparent to-slate-900 mt-20 mb-12 rounded-xl shadow-lg  '>
          <div className={'flex item-center gap-2 justify-center text-xl ' + urbanist.className} > 
            <i className="fa-solid fa-lightbulb text-[var(--shiny-yellow)] animate-bounce text-3xl"></i>
            <p>
              We combine industry-leading tools with a human-centered approach to design that inspires and connects:
            </p>
          </div>
         <ul className='flex flex-col p-4 space-y-2 w-[60%]'>
          <li className='flex items-center gap-3 py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-yellow-400 hover:translate-x-3'>
            <i className='fas fa-paint-brush text-yellow-400'></i>
            <span className='text-lg font-semibold group-hover:text-yellow-400'>Adobe Photoshop</span>
            <span className='text-slate-300'> - Image editing & retouching</span>
          </li>
          <li className='flex items-center gap-3 py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-red-600 hover:translate-x-3'>
            <i className='fas fa-vector-square text-red-600'></i>
            <span className='text-lg font-semibold group-hover:text-red-600'>Adobe Illustrator</span>
            <span className='text-slate-300 '> - Vector graphics & logo design</span>
          </li>
          <li className='flex items-center gap-3 py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-pink-600 hover:translate-x-3'>
            <i className='fas fa-cubes text-pink-500'></i>
            <span className='text-lg font-semibold group-hover:text-pink-500'>Figma</span>
            <span className='text-slate-300'> - Collaborative UI/UX design</span>
          </li>
          <li className='flex items-center gap-3 py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-purple-600 hover:translate-x-3'>
            <i className='fas fa-film text-purple-600'></i>
            <span className='text-lg font-semibold group-hover:text-purple-600'>After Effects</span>
            <span className='text-slate-300'> - Motion graphics & animation</span>
          </li>
          <li className='flex items-center gap-3 py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-teal-600 hover:translate-x-3'>
            <i className='fas fa-camera-retro text-teal-500'></i>
            <span className='text-lg font-semibold group-hover:text-teal-500'>Lightroom</span>
            <span className='text-slate-300'> - Photo color correction & enhancement</span>
          </li>
          <li className='flex items-center gap-3 py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-blue-600 hover:translate-x-3'>
            <i className='fas fa-fingerprint text-blue-600'></i>
            <span className='text-lg font-semibold group-hover:text-blue-600'>Blender</span>
            <span className='text-slate-300'> - 3D modeling & product visualization</span>
          </li>
        </ul>
        <div className='border-t-2 pt-8 '> DisplayFlex </div>
      </section>
      <ContactUsElement/>
      <WorkStages/>
    </div>
  )
}
