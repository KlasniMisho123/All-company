import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {
  return (
    // [#D32F2F]
    // [#A10000]
    // [#F44336] 
    // fixed / absolute / middle outer-w transparent?
    <div>
        <div className='flex items-center justify-between px-2 py-4 md:px-6 absolute z-100 bg-[#FAFAFA] text-[#D32F2F] rounded-b-lg w-full border-b-2  border-b-[#D32F2F]'> 
          <Logo />
          <Navbar />
          <div className='flex items-center gap-2 cursor-pointer text-lg transition-all duration-300 hover:backdrop-blur-3xl font-semibold group tuncate '>
            <span> Login </span>
            < i className="fa-solid fa-right-to-bracket transition-all duration-300 group-hover:translate-x-1 "/>
          </div>
        </div>
      {/* Dropdown Navbar  */}
      <div className='bg-green-500'>
        
      </div>
    </div>
  )
}
