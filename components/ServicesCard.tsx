import { colorClassMap } from '@/utils';
import Link from 'next/link';
import React from 'react'

type ColorVariant = keyof typeof colorClassMap;

type serviceProps = {
  color: ColorVariant;
  icon: string;
  title: string;
  paragraph: string;
  linkSrc:string;
}

export default function ServicesCard(props: serviceProps) {

  const {color, icon, title, paragraph, linkSrc} = props

  const selectedColor = colorClassMap[color]

  return (
    <div className='flex mt-8 justify-evenly cursor-pointer transition-all duration-300 hover:-translate-y-2 group'>
      <div className="relative h-[280px] w-[240px] shadow-xl rounded-2xl overflow-hidden bg-white p-5">
       <div className='absolute -top-1 -left-1 bg-[var(--primary-dark)] h-[85px] w-[85px] rounded-br-2xl overflow-hidden'>
          <div className={`absolute top-[4px] left-[4px] ${selectedColor?.['lc-text']} h-[75px] w-[75px] rounded-br-xl flex justify-center items-center`}>
            <i className={`${icon} ${selectedColor?.['hc-text']} text-3xl transition-all duration-500 group-hover:rotate-360 `}></i>
          </div>
        </div>
        
        <div className="pt-20"> 
          <h3 className={`font-bold text-lg ${selectedColor?.text} `} >{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{paragraph}</p>
          <Link href={linkSrc} className={`inline-block font-medium ${selectedColor?.text} text-sm mt-3 hover:underline transition-all duration-300 hover:translate-x-4  `}>
            Read more →
          </Link>
        </div>
      </div>
    </div>
  )
}
