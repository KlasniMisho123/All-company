'use client'
import React, { useState } from 'react'
import ServicesCard from './ServicesCard';
import { Urbanist } from 'next/font/google';


const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Services() {
    const [pageIndex, setPageIndex ] = useState(0)

    function handleServicesScroll(side:string) {
        if(side == "right") {
            setPageIndex(prev => prev + 1);
        } else {
            if(pageIndex == 0) {
                return
            } else {
                setPageIndex(prev => prev - 1);
            }
        }
    }

  return (
    <section className='mx-30 my-10 rounded-xl  p-4 py-10 '> 
        <h2 className={'text-center text-4xl font-bold ' + urbanist.className}> Our <span className='text-3xl bg-gradient-to-r from-[var(--error-color)] to-[#1F2937] tracking-widest font-semibold px-1 '> Services </span> </h2> 
        <p className={`text-center bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent font-medium text-lg md:text-xl max-w-2xl mx-auto ${urbanist.className}`}>
           {pageIndex} We deliver innovative, client-focused services designed to solve real challenges and drive sustainable growth. </p> 
        <div className='flex px-4 justify-between text-2xl w-full '>
          {/* Conditions: move left/right, not allowed-style */}
          <button className="fa-solid fa-chevron-left cursor-pointer tranition-all duration-300 hover:text-red-500 hover:scale-110" 
            onClick={()=>{
                handleServicesScroll("left")
            }}
          >
          </button>

          <button className="fa-solid fa-chevron-right cursor-pointer tranition-all duration-300 hover:text-red-500 hover:scale-110 "
          onClick={()=>{
                handleServicesScroll("right")
            }}
          ></button>
        </div>

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
  )
}
