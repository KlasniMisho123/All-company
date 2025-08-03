import React from 'react'
import Link from "next/link"
import { Urbanist } from 'next/font/google';
import { colorClassMap } from '../utils';
import { userFeedCardType } from '@/types/types';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });


export default function UserFeedCard(props:userFeedCardType) {
    const {stats, color, icon, title, subTitle, p, linkHref} = props

    const selectedColor = colorClassMap[color]

  return (
        <div className={`flex flex-col gap-4 border ${selectedColor.borderBase} p-4 sm:p-6 rounded-xl min-h-[200px] bg-slate-700/30 shadow-md w-full md:max-w-[320px]`}>
            <div className={`${selectedColor.bg} p-4 sm:p-5 rounded-full shadow-inner self-start`}>
                <i className={`${icon} text-3xl sm:text-4xl text-white`}></i>
            </div>

            <div>
                <h4 className={`text-xl sm:text-2xl font-semibold ${selectedColor.text} ` + urbanist.className}>
                {stats} {title}
                </h4>
                <h6 className={'text-gray-300 text-sm ' + urbanist.className}>{subTitle}</h6>
                <p className='text-gray-400 text-xs mt-2'>{p}</p>
            </div>

            <Link
                className={`mt-4 px-3 sm:px-4 py-2 ${selectedColor.bg} text-white transition self-end group overflow-hidden rounded-xl -mr-1 sm:-mr-3`}
                href={linkHref}
            >
                <i className="fa-solid fa-arrow-up rotate-45 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6"></i>
            </Link>
        </div>
  )
}
