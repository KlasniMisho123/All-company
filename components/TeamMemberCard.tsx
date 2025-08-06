import Image from 'next/image'
import React from 'react'

type TeamMemberInfo = {
    imgSrc: string,
    name: string,
    position: string,
    desc: string,
}

export default function TeamMemberCard(props:TeamMemberInfo) {
    const {imgSrc, name, position, desc} = props
  return (
    <div className="relative flex-1 rounded-2xl bg-slate-800 w-max h-[300px] max-w-[250px] overflow-hidden shadow-lg group">
        <Image
            height={400}
            width={400}
            src={imgSrc}
            className="w-full h-full object-cover"
            loading="lazy"
            alt="Team member"
        />

        <div className='relatuve absolute inset-0 bg-slate-800/50 h-[70px] transition-all duration-700 self-end group-hover:h-full '>
        <div className='absolute inset-0 h-0 transition-all duration-600 group-hover:w-full bg-center bg-cover ' style={{backgroundImage:"url('https://i.pinimg.com/736x/a4/be/12/a4be122848eb20671fb3d14eb7ab1ba9.jpg')"}}></div>
            <div className="absolute inset-0 z-20 flex flex-col-reverse justify-start">
                <div className="text-white text-xs md:text-sm lg:text-base  flex px-4
                h-0 group-hover:h-[100%] transition-all duration-600 ease-in-out">
                    {desc}
                </div>

                <div className="flex flex-col justify-end p-4 text-white font-semibold text-lg">
                    <div className="text-white font-semibold text-base sm:text-lg md:text-xl">
                        {name}
                    </div>
                    <div className="text-gray-200 text-xs sm:text-sm md:text-base mt-1">
                        {position}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
