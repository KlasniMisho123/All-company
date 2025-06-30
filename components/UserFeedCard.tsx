import React from 'react'
import Link from "next/link"
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

type userFeedCardType = {
    stats: number
    color: string,
    icon: string,
    title: string,
    subTitle: string,
    p: string,
    linkHref: string
}

export default function UserFeedCard(props:userFeedCardType) {
    const {stats, color, icon, title, subTitle, p, linkHref} = props
  return (
    <div>
        <div className='flex flex-col gap-4 border border-blue-500 p-6 rounded-xl min-h-[200px] bg-slate-800 shadow-md'>
            <div className='bg-blue-500 p-5 rounded-full shadow-inner self-start'>
                <i className={`${icon} text-4xl text-white`}></i>
            </div>
            <div className=''>
                <h4 className={'text-2xl font-semibold text-blue-500 ' + urbanist.className}>{stats} {title}</h4>
                <h6 className={'text-gray-300 text-sm ' + urbanist.className}>{subTitle}</h6>
                <p className='text-gray-400 text-xs mt-2'>{p}</p>
            </div>
            <Link className='mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition self-end group overflow-hidden rounded-xl -mr-3 '
            href={linkHref}
            >   <i className="fa-solid fa-arrow-up rotate-45 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6 "></i>  </Link>
        </div>
    </div>
  )
}
