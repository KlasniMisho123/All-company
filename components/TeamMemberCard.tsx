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
    <div className="relative flex-1 rounded-2xl bg-slate-800 w-max h-[300px] max-w-[250px] overflow-hidden shadow-lg group">
        <Image
            height={400}
            width={400}
            src={imgSrc}
            className="w-full h-full object-cover"
            loading="lazy"
            alt="Team member"
        />

        <div className="absolute left-0 right-0 bottom-0 h-full bg-red-600 z-20 
            translate-y-full group-hover:translate-y-0 transition-transform duration-500
            flex flex-col justify-end p-4 text-white">
            
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-sm text-gray-200">{position}</div>
            <div className="text-xl font-bold mt-2 h-0 group-hover:h-full duration-1000 transition-all ">PIPE</div>
        </div>
    </div>
  )
}
