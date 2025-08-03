import React from 'react'
import Image from 'next/image'


const logos = [
  { src: "/companies/noctvrna.png", name: "Noctvrna" },
  { src: "/companies/need.png", name: "Need" },
  { src: "/companies/dune.png", name: "Dune" },
  { src: "/companies/star.png", name: "Star" },
  { src: "/companies/superlative.png", name: "Superlative" },
];


export default function ClientCompanies() {
  return (
    <div className='flex flex-wrap gap-2 justify-evenly items-center bg-gradient-to-r from-slate-900 to-slate-800 px-2 py-8'>
        {logos.map((logo, index) => (
            <div key={index} className='flex-shrink-0 basis-[150px] h-[120px] transition-all duration-300 grayscale hover:grayscale-0 opacity-50 hover:scale-110 hover:opacity-100'>
            <Image
                src={logo.src}
                className='object-contain w-full h-full'
                alt={`${logo.name} logo`}
                width={200}
                height={200}
            />
            </div>
        ))}
    </div>
  )
}
