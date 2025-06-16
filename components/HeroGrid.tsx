import React from 'react'

export default function HeroGrid() {
  return (
    <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-4 p-4 h-[600px]">
        <div
        className='bg-cover relative w-full h-full bg-blue-300 rounded-3xl rb-circle cursor-pointer '
        style={{ backgroundImage: "url('/nenesProject.jpg')" }}
        ></div>

        <div className='bg-black text-white w-full h-full grid-t-element'>
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
            className='bg-center bg-cover bg-no-repeat w-full h-full'
            style={{ backgroundImage: "url('/star.png')" }}
        ></div>
      <div
        className='bg-cover relative w-full h-full bg-blue-300 rounded-3xl l-circle cursor-pointer '
        style={{ backgroundImage: "url('/shawrma.jpg')" }}
        ></div>
        
        <div
        className='bg-cover relative w-full h-full bg-blue-300 rounded-3xl tr-circle cursor-pointer '
        style={{ backgroundImage: "url('/fight-club.jpg')" }}
        ></div>
        <div className='bg-red-500 w-full h-full grid-b-element '></div>
        <div
        className='bg-cover relative w-full h-full bg-blue-300 rounded-3xl tl-circle cursor-pointer '
        style={{ backgroundImage: "url('/t-shirts.jpg')" }}
        ></div>
    </div>
  )
}

{/* <div className='h-[100px] w-[100px] bg-red-500 circle '>  </div> */}