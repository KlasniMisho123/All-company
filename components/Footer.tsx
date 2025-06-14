'use client'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'

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
          {currentYear !=0 && (
            <span>© 2021–{currentYear} AllDesign. All rights reserved.</span>
          )}
          <div className='flex gap-4 items-center '>
            <div>
               <i className="fa-brands fa-instagram text-xl"></i>
            </div>

            <div>
               <i className="fa-brands fa-facebook-f text-xl"></i>
            </div>

            <div
            title='alldesign.ge@gmail.com'
            >
               <i className="fa-solid fa-envelope text-xl"></i>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
