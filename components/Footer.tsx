'use client'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Exo_2 } from 'next/font/google';

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
       <div className="flex justify-between gap-6 text-lg font-medium text-gray-400 ">
          <Link className={"cursor-pointer transition-colors duration-300 hover:text-white " + exo2.className}
            href={'/aboutus'}
          > About</Link>
          <Link className={"cursor-pointer transition-colors duration-300 hover:text-white " + exo2.className}
          href={'/services'} >Services</Link>

          <div className="flex gap-2 items-center cursor-pointer text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-3">
           <div className='flex items-center '>
                <img
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

        <div className='border-b-1 border-gray-400 pb-4 '></div>
        <div className='py-4 flex justify-between'>
          <span>
          {currentYear !=0 && (
            <span>© 2021–{currentYear} AllDesign. All rights reserved.</span>
          )}
          </span>
          <div className='flex gap-4 items-center self-end '>
            <Link className=' transition-all duration-300 group px-2 py-1 rounded-full hover:bg-orange-400 '
            href={'https://www.instagram.com/alldesign.ge/'}
            >
               <i className="fa-brands fa-instagram text-2xl transition-all duration-300 cursor-pointer "></i>
            </Link>

            <Link className=' transition-all duration-300 group px-[10px] py-[5px] rounded-full hover:bg-blue-500 '
            href={"https://www.facebook.com/musagajievi/"}
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
