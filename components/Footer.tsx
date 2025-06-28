'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { Exo_2 } from 'next/font/google';
import RateingElement from './RateingElement';

const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});

export default function Footer() {
  {/* Use Auth -> so it shows Active Nav */}
  const [currentYear, setCurrentYear ] = useState(0)

  useEffect(()=>{
    const d = new Date();
    const year = d.getFullYear();
    setCurrentYear(year)
  },[])

  return (
    <div className='px-2 pt-6 pb-2 border-t-1 rounded-t-lg bg-black text-white border-[var(--error-color)] '>
      <div className='mx-18'>
        <section className='flex justify-between items-center gap-6 '>
          <div className='flex w-max text-xl '><span className='ml-1 font-semibold bg-gradient-to-r from-[var(--error-color)] to-black px-1 text-2xl font-bold '> NEWSLETTER </span></div>
          <div className='flex flex-1'> 
            <RateingElement/>
          </div>
          <div className="flex flex-1 border rounded-lg overflow-hidden p-2 w-full ">
            <input type="text" className="flex-1 px-2 py-2 focus:outline-none " placeholder="Enter Email..." />
            <button className="px-8 py-2 bg-white shadow-lg font-semibold rounded text-[var(--error-color)] transition-all duration-200 cursor-pointer hover:text-white hover:bg-[var(--error-color)]">Submit</button>
          </div>
        </section>
        <div className='border-b-1 border-gray-400 pb-4 '></div>
       <div className="flex justify-between gap-6 text-lg font-medium text-gray-400 pt-4">
          <Link className={"cursor-pointer transition-colors duration-300 hover:text-white " + exo2.className}
            href={'/aboutus'}
          > About</Link>
          <Link className={"cursor-pointer transition-colors duration-300 hover:text-white " + exo2.className}
          href={'/services'} >Services</Link>

          <div className="flex gap-2 items-center cursor-pointer text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-3">
           <div className='flex items-center '>
                <Image
                className='rounded-full min-h-11 min-w-11 h-11 w-11 object-cover border-2 transition-all duration-300 border-[#D32F2F] '
                src="/alllogo.jpg"
                alt="Company Logo"
                width={120}
                height={60}         
                />
            </div>
            <span className="transition-all duration-300 ">Design</span>
          </div>

          <Link className={"cursor-pointer transition-colors duration-300 hover:text-white " + exo2.className}
          href={''} >Careers</Link>
          <Link className={"cursor-pointer transition-colors duration-300 hover:text-white " + exo2.className}
          href={''} >Team</Link>
       </div>

        <div className='py-4 flex justify-between'>
          <span>
          {currentYear !=0 && (
            <span>© 2021–{currentYear} AllDesign. All rights reserved.</span>
          )}
          </span>
          <div className='flex gap-4 items-center self-end '>
            <Link className=' transition-all duration-300 group px-2 py-1 rounded-full hover:bg-orange-400 '
            href={'https://www.instagram.com/alldesign.ge/'}
            target="_blank"
            >
               <i className="fa-brands fa-instagram text-2xl transition-all duration-300 cursor-pointer "></i>
            </Link>

            <Link className=' transition-all duration-300 group px-[10px] py-[5px] rounded-full hover:bg-blue-500 '
            href={"https://www.facebook.com/musagajievi/"}
            target="_blank"
            >
               <i className="fa-brands fa-facebook-f text-xl transition-all duration-300 cursor-pointer "></i>

            </Link>

            <div className=' transition-all duration-300 group px-2 py-1 rounded-full hover:bg-red-500 '
            title='alldesign.ge@gmail.com'
            >
               <i className="fa-solid fa-envelope text-xl transition-all duration-300 cursor-pointer "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
