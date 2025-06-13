'use client'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Link from 'next/link'

export default function Header() {
  const [selectedNav, setSelectedNav ] = useState("")
  const [isSideNavActive, setIsSideNavActive ] = useState(false)
  const [isMenuActive, setIsMenuActive ] = useState(false)
  const [aniEnabled, setAniEnabled] = useState(false)

  
  function handleSelectedNav(nav:string):void {
    setSelectedNav(nav)
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
    <div className='flex flex-col '>
      <div className='flex items-center justify-between gap-2 p-2 sm:py-4 sm:px-6 z-100 bg-[#FAFAFA] text-[#D32F2F] rounded-b-lg w-full border-b-2 border-b-[#D32F2F] min-w-fit '> 
        <Logo />
        <div className='hidden sm:flex'>
          <Navbar selectedNav={selectedNav} setSelectedNav={setSelectedNav} handleSelectedNav={handleSelectedNav} />
        </div>

        <div className='hidden sm:flex'>
          <div className='flex items-center gap-2 cursor-pointer transition-all duration-300 hover:backdrop-blur-3xl font-semibold group tuncate '>
            <span> Login </span>
            < i className="fa-solid fa-right-to-bracket transition-all duration-300 group-hover:translate-x-1 "/>
          </div>
        </div>

        <div className='flex items-center sm:hidden sm:items-start cursor-pointer px-1 '
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
       <div className={`transition-all duration-2000 ease-in-out overflow-hidden bg-[#FFF5F5] 
           border-b-2 border-b-[#D32F2F] rounded  ${isSideNavActive? ' drop-down-navbar -mt-2 ' : ' rev-drop-down-navbar ' }`}>
             <div className="flex flex-col p-4 pt-6 text-gray-800 font-medium">
                <Link className="flex gap-2 items-center text-blue-400 hover:text-blue-500 relative group cursor-pointer font-medium border-b border-gray-700 p-4"
                  href='/'
                  onClick={() => {handleSelectedNav('/home')}}>
                  <i className="fa-solid fa-moon text-sky-400"></i>
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <div className="hover:text-[#D32F2F] transition-colors duration-300 cursor-pointer">2</div>
                <div className="hover:text-[#D32F2F] transition-colors duration-300 cursor-pointer">3</div>
                <div className="hover:text-[#D32F2F] transition-colors duration-300 cursor-pointer">Login</div>
              </div>
        </div>

       )}

    </div>
  )
}
