import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

export default function Header() {
  return (
    // [#D32F2F]
    // [#A10000]
    // [#F44336] 
    // fixed / absolute / middle outer-w transparent?
    <div>
        <div className='flex items-center justify-between py-4 px-6 absolute z-100 bg-[#FAFAFA] text-[#D32F2F] rounded-b-lg w-full border-b-2  border-b-[#D32F2F]'> 
          <Logo />
            <div className='flex gap-4 font-semibold '>
                <Link className='flex gap-2 items-center cursor-pointer transition-all duration-300  border-1 rounded-full px-4 py-2 shadow-md hover:shadow-none hover:bg-[#D32F2F] hover:text-white'
                href={'/'}>
                  <i className="fa-solid fa-house"></i>
                  <span> Home </span>
                </Link>
                <Link className='flex gap-2 items-center cursor-pointer transition-all duration-300  border-1 rounded-full px-4 py-2 shadow-md hover:shadow-none hover:bg-[#D32F2F] hover:text-white'
                href={'/services'}>
                  <span> Services </span>
                </Link>
                {/* Page Idea */}
                <Link className='flex gap-2 items-center cursor-pointer transition-all duration-300  border-1 rounded-full px-4 py-2 shadow-md hover:shadow-none hover:bg-[#D32F2F] hover:text-white'
                href={'/services'}>
                  Order Project
                </Link>
                <Link className='flex gap-2 items-center cursor-pointer transition-all duration-300  border-1 rounded-full px-4 py-2 shadow-md hover:shadow-none hover:bg-[#D32F2F] hover:text-white' 
                href={'/aboutus'}>
                  <span> About us </span>
                <i className="fa-solid fa-feather-pointed"></i>
                </Link>
            </div>
          <div className='cursor-pointer text-lg transition-all duration-300 hover:backdrop-blur-3xl font-semibold group'>
            <span>Login </span>
            < i className="fa-solid fa-right-to-bracket transition-all duration-300 ml-1 group-hover:translate-x-1 "/>
          </div>
      </div>
      {/* Dropdown Navbar  */}
      <div className='bg-green-500'>
        
      </div>
    </div>
  )
}
