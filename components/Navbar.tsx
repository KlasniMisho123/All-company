import Link from 'next/link'
import React, { useEffect } from 'react'

type NavbarProps = {
  selectedNav: string;
  setSelectedNav: React.Dispatch<React.SetStateAction<string>>;
  handleSelectedNav: (nav: string) => void;
};

export default function Navbar(props:NavbarProps) {
  const {selectedNav, setSelectedNav, handleSelectedNav } = props
  
  useEffect(() => {
    const path = window.location.pathname
    setSelectedNav(path)
  },[setSelectedNav])

  return (
    <div className="flex gap-4 font-semibold ">
      <Link
        href="/"
        onClick={() => handleSelectedNav("/")}
        className={`flex gap-2 items-center cursor-pointer rounded-full px-4 py-2 shadow-md transition-all duration-300 ease-in-out 
          hover:scale-105 hover:bg-red-600 hover:text-white 
          ${selectedNav === "/" ? "bg-red-700 text-white ring-2 ring-red-500 " : "bg-white text-red-700"}
        `}
      >
        <i className="fa-solid fa-house"></i>
        <span>Home</span>
      </Link>

      <Link
        href="/services"
        onClick={() => handleSelectedNav("/services")}
        className={`flex gap-2 items-center cursor-pointer rounded-full px-4 py-2 shadow-md transition-all duration-300 ease-in-out 
          hover:scale-105 hover:bg-red-600 hover:text-white 
          ${selectedNav === "/services" ? "bg-red-700 text-white ring-2 ring-red-500 " : "bg-white text-red-700"}
        `}
      >
        <span>Services</span>
      </Link>

      <Link
        href="/aboutus"
        onClick={() => handleSelectedNav("/aboutus")}
        className={`flex gap-2 items-center cursor-pointer rounded-full px-4 py-2 shadow-md transition-all duration-300 ease-in-out truncate
          hover:scale-105 hover:bg-red-600 hover:text-white 
          ${selectedNav === "/aboutus" ? "bg-red-700 text-white ring-2 ring-red-500 " : "bg-white text-red-700"}
        `}
      >
        <span>About us</span>
        <i className="fa-solid fa-feather-pointed"></i>
      </Link>
    </div>

  )
}
