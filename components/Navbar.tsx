import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function Navbar() {
  const [activeNav, setActiveNav ] = useState("")

    useEffect(() => {
      const path = window.location.pathname
      setActiveNav(path)
    },[])

  return (
    <div className='flex gap-4 font-semibold '>
        <Link className={`flex gap-2 items-center cursor-pointer transition-all duration-300  border-1 rounded-full px-4 py-2 shadow-md hover:shadow-none hover:bg-[#D32F2F]
         hover:text-white ` + (activeNav==="/" ? "bg-[#D32F2F] text-white" : " ")}
        href={'/'}>
            <i className="fa-solid fa-house"></i>
            <span> Home </span>
        </Link>
        <Link className={`flex gap-2 items-center cursor-pointer transition-all duration-300  border-1 rounded-full px-4 py-2 shadow-md hover:shadow-none hover:bg-[#D32F2F]
         hover:text-white ` + (activeNav==="/services" ? "bg-[#D32F2F] text-white " : " ")}
        href={'/services'}>
            <span> Services </span>
        </Link>
        <Link className={`flex gap-2 items-center cursor-pointer transition-all duration-300  border-1 rounded-full px-4 py-2 shadow-md hover:shadow-none hover:bg-[#D32F2F]
         hover:text-white truncate ` + (activeNav==="/aboutus" ? "bg-[#D32F2F] text-white" : " ")} 
        href={'/aboutus'}>
            <span> About us </span>
        <i className="fa-solid fa-feather-pointed"></i>
        </Link>
    </div>
  )
}
