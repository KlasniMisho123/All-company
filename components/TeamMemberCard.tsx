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

        <div className='absolute inset-0 bg-slate-800/50 h-[70px] transition-all duration-700 self-end group-hover:h-full '>
            <div className="absolute inset-0 z-20 flex flex-col-reverse justify-start">
                <div className="text-white text-xl font-bold flex px-4
                h-0 group-hover:h-[100%] transition-all duration-600 ease-in-out">
                    PIPE
                </div>

                <div className="flex flex-col justify-end p-4 text-white font-semibold text-lg">
                    <div>{name}</div>
                    <div className="text-sm text-gray-200">{position}</div>
                </div>
            </div>
        </div>

    </div>
  )
}
