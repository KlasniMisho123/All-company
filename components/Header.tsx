'use client'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {

  // const [isSideNavActive, setIsSideNavActive ] = useState(false)
  const [isSideNavActive, setIsSideNavActive ] = useState(true)
  const [isMenuActive, setIsMenuActive ] = useState(false)
  const [aniEnabled, setAniEnabled] = useState(false)

  function handleSideNav():void {
    setIsMenuActive(!isMenuActive)
    setTimeout(()=>{
      setIsSideNavActive(!isSideNavActive)
    },2000)
  }

  useEffect(() => {
    setTimeout(()=>{
      setAniEnabled(true)
    },1000)
  },[])

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between gap-2 p-2 sm:py-4 sm:px-6 z-100 bg-[#FAFAFA] text-[#D32F2F] rounded-b-lg w-full border-b-2 border-b-[#D32F2F] min-w-fit '> 
        <Logo />
        <div className='hidden sm:flex'>
          <Navbar />
        </div>

        <div className='hidden sm:flex'>
          <div className='flex items-center gap-2 cursor-pointer transition-all duration-300 hover:backdrop-blur-3xl font-semibold group tuncate '>
            <span> Login </span>
            < i className="fa-solid fa-right-to-bracket transition-all duration-300 group-hover:translate-x-1 "/>
          </div>
        </div>

        <div className='flex items-center sm:hidden sm:items-start '>
          <button className='flex flex-col items-center cursor-pointer transition-all duration-300 hover:backdrop-blur-3xl font-semibold tuncate hover:opacity-90 '
          onClick={handleSideNav}>
               <i className={"fa-solid fa-minus text-lg " + ( aniEnabled ? isMenuActive ? "menu-line-1 " : " " : " rev-menu-line-1")}></i>
               <i className={"fa-solid fa-minus text-lg -mt-3 " + ( aniEnabled ? isMenuActive ? "menu-line-2 " : "rev-menu-line-2 " : " ")}></i>
               <i className={"fa-solid fa-minus text-lg -mt-3 " + ( aniEnabled ? isMenuActive ? "menu-line-3 " : "rev-menu-line-3 " : " ")}></i>
          </button>
        </div>

      </div>
      {isMenuActive?

       <div className={`transition-all duration-500 ease-in-out overflow-hidden bg-gray-300 
           border-b-2 border-b-[#D32F2F] rounded drop-down-navbar ${isSideNavActive? ' max-h-[500px] opacity-100 ' : ' max-h-0 opacity-0 ' }`}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>Login</div>
        </div>

       : null}

    </div>
  )
}
