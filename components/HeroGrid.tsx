'use client'
import React, { useEffect, useState } from 'react'

export default function HeroGrid() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 3000);
    // ✅ cleanup on unmount
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-4 p-4 h-[600px]">
        <div
        className={`bg-cover relative w-full h-full bg-blue-300 rounded-3xl cursor-pointer ${animated ? 'rb-circle' : ' rb-circle-ani'}`}
        style={{ backgroundImage: "url('/nenesProject.jpg')" }}
        ></div>

        {/* Rectangle full-width stat */}
        <div className="bg-gray-900 text-white w-full grid-t-element rounded-xl flex items-center justify-center text-lg ">
          Projects Completed Element
        </div>

        <div
        className='bg-cover relative w-full h-full bg-blue-300 rounded-3xl lb-circle cursor-pointer '
        style={{ backgroundImage: "url('/coffeeLogo.jpg')" }}
        ></div>

        <div
        className='bg-cover relative w-full h-full bg-blue-300 rounded-3xl r-circle cursor-pointer '
        style={{ backgroundImage: "url('/naturaleza.jpg')" }}
        ></div>
        
        <div
        className="bg-center bg-cover bg-no-repeat border-2 border-red-500 w-full h-full overflow-hidden rounded-2xl c-circle"
        style={{ backgroundImage: "url('/alllogo.jpg')" }}
        ></div>

      <div
        className='bg-cover relative w-full h-full bg-blue-300 rounded-3xl l-circle cursor-pointer '
        style={{ backgroundImage: "url('/shawrma.jpg')" }}
        ></div>
        
        <div
        className='bg-cover relative w-full h-full bg-blue-300 rounded-3xl tr-circle cursor-pointer '
        style={{ backgroundImage: "url('/fight-club.jpg')" }}
        ></div>

        <div className="bg-gray-900 text-white w-full grid-b-element rounded-xl flex items-center justify-center text-lg ">
          Projects Completed Element
        </div>

        <div
        className='bg-cover relative w-full h-full bg-blue-300 rounded-3xl tl-circle cursor-pointer '
        style={{ backgroundImage: "url('/t-shirts.jpg')" }}
        ></div>
    </div>
  )
}

{/* <div className='h-[100px] w-[100px] bg-red-500 circle '>  </div> */}