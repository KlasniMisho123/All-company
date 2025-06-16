import React from 'react'

export default function HeroGrid() {
  return (
    <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-4 p-4 h-[600px]">
        <div
        className='bg-cover relative w-full h-full bg-blue-300 rounded-3xl rb-circle cursor-pointer '
        style={{ backgroundImage: "url('/nenesProject.jpg')" }}
        ></div>

        <div className="flex flex-col items-start gap-6 p-4">
  {/* Rectangle full-width stat */}
  <div className="bg-black text-white w-full h-[120px] grid-t-element rounded-xl flex items-center justify-center text-lg font-medium">
    Projects Completed Element
  </div>

  {/* Circle with square corner stat */}
  <div className="relative w-[200px] h-[200px] bg-black rounded-full overflow-hidden">
    {/* Square bottom-right corner overlay */}
    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-black"></div>

    {/* Text content */}
    <div className="absolute top-6 left-6 text-white space-y-1">
      <p className="text-sm">Active</p>
      <p className="text-sm">Professionals</p>
    </div>

    <div className="absolute bottom-4 right-4 text-white text-xl font-bold">
      13,422
    </div>
  </div>
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