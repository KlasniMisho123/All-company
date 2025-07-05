import React from 'react'

type TeamMemberInfo = {
    imgSrc: string,
    name: string,
    position: string,
}

export default function TeamMemberCard(props:TeamMemberInfo) {
    const {imgSrc, name, position} = props
  return (
    <div className="relative flex-1 rounded-2xl bg-slate-800 w-max max-h-[300px] max-w-[250px] overflow-hidden shadow-lg">
        <img
            src={imgSrc}
            className="w-full h-full object-cover"
            loading="lazy"
            alt="Team member"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
            <div className="text-white font-semibold text-lg">{name}</div>
            <div className="text-gray-300 text-sm">{position}</div>
            {/* Rest of card */}
        </div>
    </div>
  )
}
