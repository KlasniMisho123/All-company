'use client'
import React, { useState } from 'react'
import Logo from './Logo'
// import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {

  const [isSideNavActive, setIsSideNavActive ] = useState(false)
  // [#D32F2F]
  // [#A10000]
  // [#F44336] 
  // fixed / absolute / middle outer-w transparent?

  function handleSideNav():void {
    setIsSideNavActive(!isSideNavActive)
  }

  return (
    <div>
      <div className='flex items-center justify-between p-2 sm:py-4 sm:px-6 absolute z-100 bg-[#FAFAFA] text-[#D32F2F] rounded-b-lg w-full border-b-2 border-b-[#D32F2F] '> 
        <Logo />
        <div className='hidden sm:flex'>
          <Navbar />
        </div>

        {/* <div className='hidden sm:flex'>
          <div className='flex items-center gap-2 cursor-pointer transition-all duration-300 hover:backdrop-blur-3xl font-semibold group tuncate '>
            <span> Login </span>
            < i className="fa-solid fa-right-to-bracket transition-all duration-300 group-hover:translate-x-1 "/>
          </div>
        </div> */}

        {/* <div className='flex sm:hidden'> */}

        <div className='flex'>
          <button className='flex flex-col items-center cursor-pointer transition-all duration-300 hover:backdrop-blur-3xl font-semibold group tuncate '
          onClick={handleSideNav}
          >
               <i className="fa-solid fa-minus text-lg -mt-2"></i>
               <i className="fa-solid fa-minus text-lg -mt-3"></i>
               <i className="fa-solid fa-minus text-lg -mt-3"></i>
          </button>
        </div>

      </div>
      {/* Dropdown Navbar  */}
      
      {isSideNavActive? <div className='bg-green-500 min-h-[100px] '>
        
      </div> : null}
    </div>
  )
}
