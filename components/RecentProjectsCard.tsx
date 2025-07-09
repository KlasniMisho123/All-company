import Image from 'next/image'
import React from 'react'

type RecentProjectsType = {
    imgSrc: string,
    type: string,
    title: string,
    desc: string,
    date: string,
}

export default function RecentProjectsCard(props:RecentProjectsType) {
    const {imgSrc, type, title, desc, date} = props
    
  return (
    <div className="w-full h-64 relative rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105 shadow-lg">
    {/* <div className="flex-1 min-w-[30%] relative h-64 rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105 shadow-lg group max-w-[31%] "> */}
        <Image
            src={imgSrc}
            height={400}
            width={400}
            alt="Project Title"
            className='w-full h-full object-cover absolute inset-0 z-0 transition-all duration-300 group-hover:scale-120 '
        />

        <div className="relative z-10 h-full w-full flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-2 pb-0 ">
            <div className="relative z-10 p-4 p-2 ">
            <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-md"></div>
            <div className="relative z-10">
                <span className="text-sm text-slate-200 uppercase tracking-widest mb-1">{type}</span>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-white mt-1 line-clamp-2">
                    {desc}
                </p>
                <div className="mt-3 text-xs text-slate-300">{date}</div>
            </div>
            </div>
        </div>
    </div>
  )
}
