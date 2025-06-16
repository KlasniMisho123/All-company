'use client'
import { Urbanist } from 'next/font/google';
import React, { useEffect, useState } from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function HeroGrid() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 2000);
    // ✅ cleanup on unmount
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-4 p-4 h-[600px] ">
        <div
        className={`bg-cover relative w-full h-full bg-blue-300 rounded-3xl cursor-pointer ${animated ? 'rb-circle' : ' rb-circle-start'}`}
        style={{ backgroundImage: "url('/nenesProject.jpg')" }}
        ></div>

        <div
          className={`bg-cover overflow-hidden bg-gray-900/90 text-white w-full rounded-xl flex flex-col items-center justify-center gap-1 p-4 text-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300 ${animated ? 't-circle ' : 't-circle-start '} ` + urbanist.className }
          style={{ backgroundImage: "url('projects-bg.avif')" }}
        >
          <span className="text-sm sm:text-base tracking-wide text-white ">Designs Completed</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-blue-500">50+</span>
          <span className="h-1 rounded-full mt-1 bg-blue-500 w-10 sm:w-12"></span>
          <span className="text-xs sm:text-sm text-gray-400 mt-1 text-center">
            Purposeful work for real people and bold ideas.
          </span>
        </div>

        <div
        className={`bg-cover relative w-full h-full bg-blue-300 rounded-3xl cursor-pointer ${animated ? 'lb-circle' : ' lb-circle-start '}`}
        style={{ backgroundImage: "url('/coffeeLogo.jpg')" }}
        ></div>

        <div
        className={`bg-cover relative w-full h-full bg-blue-300 rounded-3xl cursor-pointer cursor-pointer ${animated ? 'r-circle' : ' r-circle-start '}`}
        style={{ backgroundImage: "url('/naturaleza.jpg')" }}
        ></div>
        
        <div
        className="bg-center bg-cover bg-no-repeat border-2 border-red-500 w-full h-full overflow-hidden rounded-2xl c-circle"
        style={{ backgroundImage: "url('/alllogo.jpg')" }}
        ></div>

      <div
        className={`bg-cover relative w-full h-full bg-blue-300 rounded-3xl cursor-pointer ${animated ? 'l-circle' : "l-circle-start" }`}
        style={{ backgroundImage: "url('/shawrma.jpg')" }}
        ></div>
        
        <div
        className={`bg-cover relative w-full h-full bg-blue-300 rounded-3xl cursor-pointer ${animated ? 'tr-circle e' : ' tr-circle-start '}`}
        style={{ backgroundImage: "url('/fight-club.jpg')" }}
        ></div>

        <div
          className={`bg-cover overflow-hidden bg-gray-900/90 text-white w-full rounded-xl flex flex-col items-center justify-center gap-1 p-4 text-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300 ${animated ? 'b-circle ' : 'b-circle-start '}` + urbanist.className }
          style={{ backgroundImage: "url('projects-bg.avif')" }}
        >
          <span className="text-sm sm:text-base tracking-wide text-white ">Years of Service</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-blue-500">4+</span>
          <span className="h-1 rounded-full mt-1 bg-blue-500 w-10 sm:w-12"></span>
          <span className="text-xs sm:text-sm text-gray-400 mt-1 text-center">
            Consistent quality, built on trust and creativity.
          </span>
        </div>

        

        <div
        className={`bg-cover relative w-full h-full bg-blue-300 rounded-3xl cursor-pointer ${animated ? 'tl-circle ' : ' tl-circle-start '}`}
        style={{ backgroundImage: "url('/t-shirts.jpg')" }}
        ></div>
    </div>
  )
}

{/* <div className='h-[100px] w-[100px] bg-red-500 circle '>  </div> */}