import { colorClassMap } from '@/utils';
import Link from 'next/link';
import React from 'react'

type serviceProps = {
  color: string;
  icon: string;
  title: string;
  paragraph: string;
  linkSrc:string;
}
export default function ServicesCard(props: serviceProps) {

  const {color, icon, title, paragraph, linkSrc} = props

  

  return (
    <div className='flex mt-8 justify-evenly'>
      <div className="relative h-[280px] w-[240px] shadow-xl rounded-2xl overflow-hidden bg-white p-5">
        <div className='absolute -top-1 -left-1 bg-gray-200 h-[85px] w-[85px] rounded-br-2xl overflow-hidden'>
          <div className='absolute top-[4px] left-[4px] bg-red-200 h-[75px] w-[75px] rounded-br-2xl flex justify-center items-center'>
            <i className={` ${icon} text-red-600 text-3xl`}></i>
          </div>
        </div>
        
        <div className="pt-20"> 
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{paragraph}</p>
          <Link href={linkSrc} className="inline-block text-red-500 font-medium text-sm mt-3 hover:underline">
            Read more →
          </Link>
        </div>
      </div>
    </div>
  )
}
