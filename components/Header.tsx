'use client'
import React, { useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Link from 'next/link'

export default function Header() {
  const [selectedNav, setSelectedNav ] = useState("")
  const [isSideNavActive, setIsSideNavActive ] = useState(false)
  const [isMenuActive, setIsMenuActive ] = useState(false)
  const [aniEnabled, setAniEnabled] = useState(false)

  
  function handleSelectedNav(nav:string):void {
    setSelectedNav(nav);
  }
  
  function handleSelectedSideNav(nav:string):void {
    setSelectedNav(nav);
    handleSideNav();
  }

  function handleSideNav():void {
    setIsSideNavActive(!isSideNavActive)
    setAniEnabled(true)
    if (isMenuActive == true) {
      setTimeout(()=>{
        setIsMenuActive(!isMenuActive)
      }, 1500)
    } else {
      setIsMenuActive(!isMenuActive)
    }
  }


  return (
    <div className='relative w-full z-50 '>
      <div className='relative flex items-center justify-between gap-2 p-2 sm:py-4 sm:px-6 z-100 bg-[#FAFAFA] text-[#D32F2F] rounded-b-lg w-full border-b-2 border-b-[#D32F2F] min-w-fit '> 
        <Logo handleSelectedNav={handleSelectedNav} />
        <div className='hidden sm:flex'>
          <Navbar selectedNav={selectedNav} setSelectedNav={setSelectedNav} handleSelectedNav={handleSelectedNav} />
        </div>

        <div className='hidden sm:flex'>
          <div className='flex items-center gap-2 cursor-pointer transition-all duration-300 hover:backdrop-blur-3xl font-semibold group tuncate '>
            <span> Login </span>
            < i className="fa-solid fa-right-to-bracket transition-all duration-300 group-hover:translate-x-1 "/>
          </div>
        </div>

        <div className='flex items-center sm:hidden sm:items-start cursor-pointer p-2 '
        onClick={handleSideNav}
        >
          <button className='flex flex-col items-center  transition-all duration-300 hover:backdrop-blur-3xl font-semibold tuncate hover:opacity-90  '
          >
               <i className={"fa-solid fa-minus text-lg " + ( aniEnabled ? isSideNavActive ? "menu-line-1 " : "rev-menu-line-1 " : " ")}></i>
               <i className={"fa-solid fa-minus text-lg -mt-3 " + ( aniEnabled ? isSideNavActive ? "menu-line-2 " : "rev-menu-line-2 " : " ")}></i>
               <i className={"fa-solid fa-minus text-lg -mt-3 " + ( aniEnabled ? isSideNavActive ? "menu-line-3 " : "rev-menu-line-3 " : " ")}></i>
          </button>
        </div>
      </div>

      {isMenuActive && (
       <div className={`absolute  w-full top-full z-40  transition-all duration-2000 ease-in-out overflow-hidden bg-[#FFF5F5] 
           border-b-2 border-b-[#D32F2F] rounded  ${isSideNavActive? ' drop-down-navbar -mt-2 ' : ' rev-drop-down-navbar ' }`}>
             <div className="flex flex-col p-4 pt-6 text-gray-700 font-medium space-y-1">
                <Link
                  href="/"
                  onClick={() => handleSelectedSideNav('/')}
                  className={`flex items-center gap-2 px-4 py-3 rounded-md transition-all duration-500 hover:translate-x-3  ${
                    selectedNav === '/' 
                      ? 'bg-red-100 text-[#D32F2F] font-semibold' 
                      : 'hover:bg-blue-100  hover:text-[#D32F2F]'
                  }`}
                >
                  <i className="fa-solid fa-house text-[#D32F2F]"></i>
                  Home
                </Link>

                <Link
                  href="/services"
                  onClick={() => handleSelectedSideNav('/services')}
                  className={`flex items-center gap-2 px-4 py-3 rounded-md transition-all duration-500 group hover:translate-x-3 ${
                    selectedNav === '/services' 
                      ? 'bg-red-100 text-[#D32F2F] font-semibold' 
                      : 'hover:bg-blue-100 hover:text-[#D32F2F]'
                  }`}
                >
                  <i className="fa-solid fa-gear text-[#D32F2F] transition-all duration-500 group-hover:rotate-270 "></i>
                  Services
                </Link>

                <Link
                  href="/aboutus"
                  onClick={() => handleSelectedSideNav('/aboutus')}
                  className={`flex items-center gap-2 px-4 py-3 rounded-md transition-all duration-500 hover:translate-x-3 ${
                    selectedNav === '/aboutus' 
                      ? 'bg-red-100 text-[#D32F2F] font-semibold' 
                      : 'hover:bg-blue-100  hover:text-[#D32F2F]'
                  }`}
                >
                  <i className="fa-solid fa-users text-[#D32F2F]"></i>
                  About Us
                </Link>

                <div className="flex items-center gap-2 px-4 py-3 rounded-md transition-all duration-500 hover:bg-blue-100 hover:text-[#D32F2F] cursor-pointer hover:translate-x-3">
                  <i className="fa-solid fa-right-to-bracket text-[#D32F2F]  "></i>
                  Login
                </div>
              </div>

        </div>

       )}

    </div>
  )
}
