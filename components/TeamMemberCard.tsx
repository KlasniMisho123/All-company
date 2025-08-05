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
    <div className="relative flex-1 flex rounded-2xl bg-slate-800 w-max h-[300px] max-w-[250px] overflow-hidden shadow-lg group  ">
        <Image
            height={400}
            width={400}
            src={imgSrc}
            className="w-full h-full object-cover"
            loading="lazy"
            alt="Team member"
        />

        {/* Gradient and text overlay */}
        <div className="absolute self-end inset-0 bg-slate-800/50 to-transparent overflow-hidden flex flex-col justify-end p-4 z-10">
            <div className="text-white font-semibold text-lg">{name}</div>
            <div className="text-gray-300 text-sm">{position}</div>

            {/* Only this part animates in */}
            <div className="h-0 group-hover:h-10 transition-all duration-500 overflow-hidden text-white text-xl font-bold">
                PIPE
            </div>
        </div>


        {/* Hover effect overlay */}
    </div>
  )
}
