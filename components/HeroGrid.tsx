import React from 'react'

export default function HeroGrid() {
  return (
    <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-4 p-4 h-[600px]">
        <div
            className='bg-center bg-cover bg-no-repeat w-full h-full bg-blue-300 rounded-3xl '
            style={{ backgroundImage: "url('/star.png')" }}
        >
            <div className='h-[100px] w-[100px] bg-white circle '>  </div>
        </div>
        <div className='bg-red-500 w-full h-full'></div>
        <div className='bg-red-500 w-full h-full'></div>
        <div className='bg-red-500 w-full h-full'></div>

        {/* Image cell */}
        <div
            className='bg-center bg-cover bg-no-repeat w-full h-full'
            style={{ backgroundImage: "url('/star.png')" }}
        ></div>

        <div className='bg-red-500 w-full h-full'></div>
        <div className='bg-red-500 w-full h-full'></div>
        <div className='bg-red-500 w-full h-full'></div>
        <div className='bg-red-500 w-full h-full'></div>
    </div>
  )
}

{/* <div className='h-[100px] w-[100px] bg-red-500 circle '>  </div> */}