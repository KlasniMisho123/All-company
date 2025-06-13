import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function Navbar() {
  const [aselectedNav, setSelectedNav ] = useState("")

  function handleSelectedNav(nav:string):void {
    setSelectedNav(nav)
  }
  
    useEffect(() => {
      const path = window.location.pathname
      setSelectedNav(path)
    },[])

  return (
    <div className='flex gap-4 font-semibold '>
        <Link className={`flex gap-2 items-center cursor-pointer transition-all duration-300  border-1 rounded-full px-4 py-2 shadow-md hover:shadow-none hover:bg-[#D32F2F]
         hover:text-white ` + (aselectedNav==="/" ? "bg-[#D32F2F] text-white" : " ")}
          href={'/'}
          onClick={() => handleSelectedNav("/")}>
            <i className="fa-solid fa-house"></i>
            <span> Home </span>
        </Link>
        <Link className={`flex gap-2 items-center cursor-pointer transition-all duration-300  border-1 rounded-full px-4 py-2 shadow-md hover:shadow-none hover:bg-[#D32F2F]
         hover:text-white ` + (aselectedNav==="/services" ? "bg-[#D32F2F] text-white " : " ")}
        href={'/services'}
        onClick={() => handleSelectedNav("/services")}>
            <span> Services </span>
        </Link>
        <Link className={`flex gap-2 items-center cursor-pointer transition-all duration-300  border-1 rounded-full px-4 py-2 shadow-md hover:shadow-none hover:bg-[#D32F2F]
         hover:text-white truncate ` + (aselectedNav==="/aboutus" ? "bg-[#D32F2F] text-white" : " ")} 
        href={'/aboutus'}
        onClick={() => handleSelectedNav("/aboutus")}>
            <span> About us </span>
        <i className="fa-solid fa-feather-pointed"></i>
        </Link>
    </div>
  )
}
