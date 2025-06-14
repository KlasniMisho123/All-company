'use client'
import React, { useState } from 'react'
import Logo from './Logo'

export default function Footer() {
  const [selectedNav, setSelectedNav ] = useState("")

   function handleSelectedNav(nav:string):void {
    setSelectedNav(nav);
  }

  return (
    <div className='px-2 pt-6 pb-4 border-t-2 rounded-t-lg bg-black '>
      <div className='flex justify-evenly'>
        <div></div>
        <div></div>

        <div>
          {/* Use Auth -> so it shows Active Nav */}
          <Logo selectedNav={selectedNav} setSelectedNav={setSelectedNav} handleSelectedNav={handleSelectedNav} />
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  )
}
