import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    // [#D32F2F]
    // [#A10000]
    // [#F44336] 
    // fixed / absolute / middle outer-w transparent?
    <div className='flex items-center justify-between py-4 px-6 absolute z-100 bg-[#FAFAFA] text-[#D32F2F] rounded-b-lg w-full border-b-2  border-b-[#D32F2F]'> 
      <div className=''>
        <Logo />
      </div>
      <div className='flex gap-4 font-semibold '>
          <div className='cursor-pointer transition-all duration-300 hover:scale-105 hover:backdrop-blur-3xl '>Home</div>
          <div className='cursor-pointer transition-all duration-300 hover:scale-105 hover:backdrop-blur-3xl '>Services</div>
          <div className='cursor-pointer transition-all duration-300 hover:scale-105 hover:backdrop-blur-3xl ' >About us</div>
      </div>
      <div>Login</div>
  </div>
  )
}
