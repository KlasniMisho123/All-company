import Image from 'next/image'
import React from 'react'

type TeamMemberInfo = {
    imgSrc: string,
    name: string,
    position: string,
}

export default function TeamMemberCard(props:TeamMemberInfo) {
    const {imgSrc, name, position} = props
  return (
    <div className="relative flex-1 rounded-2xl bg-slate-800 w-max h-[300px] max-w-[250px] overflow-hidden shadow-lg group overflow-hidden ">
        <Image
            height={400}
            width={400}
            src={imgSrc}
            className="w-full h-full object-cover"
            loading="lazy"
            alt="Team member"
        />

        {/* Gradient and text overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 z-10 bg-green-500 h-fit transition-all duration-500 group-hover:h-full">
            <div className="text-white font-semibold text-lg">{name}</div>
            <div className="text-gray-300 text-sm">{position}</div>
            <div className="absolute bg-red-500 h-0 group-hover:h-full transition-all duration-500 z-20 flex items-center justify-center text-white text-xl font-bold">
                PIPE
            </div>
        </div>

        {/* Hover effect overlay */}
    </div>
  )
}
