'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';


export default function Logo() {
  const [selectedNav, setSelectedNav ] = useState("")

  function handleSelectedNav(nav:string):void {
    setSelectedNav(nav);
  }
  
  return (
    <Link className='flex items-center '
    href={"/"}
    onClick={() => handleSelectedNav("/")}
    >
      <Image
      src="/logo.jpg"
      alt="Company Logo"
      className='rounded-full min-h-11 min-w-11 h-11 w-11 object-cover border-2 transition-all duration-300 hover:scale-125 cursor-pointer border-[#D32F2F] '
      width={120}
      height={60}         
      />
    </Link>
  )
}
