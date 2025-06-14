'use client'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'

export default function Footer() {
  {/* Use Auth -> so it shows Active Nav */}
  const [selectedNav, setSelectedNav ] = useState("")
  const [currentYear, setCurrentYear ] = useState(0)

   function handleSelectedNav(nav:string):void {
    setSelectedNav(nav);
  }

  useEffect(()=>{
    const d = new Date();
    let year = d.getFullYear();
    setCurrentYear(year)
  },[])

  return (
    <div className='px-2 pt-6 pb-4 border-t-2 rounded-t-lg bg-black text-white '>
      <div className='mx-18'>
        <div className='flex justify-between '>
          <div>About</div>
          <div>Services</div>
          <div className='flex gap-2 items-center group'>
            <Logo selectedNav={selectedNav} setSelectedNav={setSelectedNav} handleSelectedNav={handleSelectedNav} />
            <span className='transition-all duration-300 group-hover:scale-125'> Design </span>
          </div>
          <div>Careers</div>
          <div>Team</div>
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
