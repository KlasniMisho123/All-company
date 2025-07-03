import React from 'react'

type RecentProjectsType = {
    imgSrc: Blob,
    type: String,
    title: String,
    desc: String,
    date: String,
}

export default function RecentProjectsCard(props:RecentProjectsType) {
    const {imgSrc, type, title, desc, date} = props
    

  return (
    <div className="relative h-64 rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105 shadow-lg group ">
        <img
            src={imgSrc}
            alt="Project Title"
            className='w-full h-full object-cover absolute inset-0 z-0 transition-all duration-300 group-hover:scale-120 '
        />

        <div className="relative z-10 h-full w-full flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-2 pb-0 ">
            <div className="relative z-10 p-4 p-2 ">
            <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-md"></div>
            <div className="relative z-10">
                <span className="text-sm text-slate-200 uppercase tracking-widest mb-1">Branding / UI Design</span>
                <h3 className="text-xl font-semibold text-white">EcoBrew Identity</h3>
                <p className="text-sm text-white mt-1 line-clamp-2">
                Clean, sustainable visual identity for an eco-conscious coffee brand.
                </p>
                <div className="mt-3 text-xs text-slate-300">7/2/2025</div>
            </div>
            </div>
        </div>
    </div>
  )
}
