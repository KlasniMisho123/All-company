'use client'
import { Urbanist } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import UserFeedCard from './UserFeedCard';

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function UserFeed() {
    const [totalYears,SetTotalYears] = useState(Number)
    
    // Smiles
    const moodData = [
        { key: "angry", icon: "fa-face-angry", color: "text-red-500" },
        { key: "frown", icon: "fa-face-frown", color: "text-orange-400" },
        { key: "meh", icon: "fa-face-meh", color: "text-yellow-400" },
        { key: "smile", icon: "fa-face-smile", color: "text-green-400" },
        { key: "grin", icon: "fa-face-grin-beam", color: "text-green-500" },   
    ];

    const moodFaces = moodData.map((mood)=>{
        <i key={mood.key} className={`fa-solid ${mood.icon} ${mood.color} `} ></i>
    })

    {/*Dummy Stats */}
    const avgRateing = 4.8
    const data = [
        { name: '5 Stars', value: 80 },
        { name: '4 Stars', value: 15 },
        { name: '3 Stars', value: 3 },
        { name: '2 Stars', value: 1 },
        { name: '1 Star', value: 1 }
    ];

    
    const COLORS = ['#0ea476', '#34d399', '#fbbf24', '#f97316', '#ef4444'];

    useEffect(()=> {
        const year = new Date().getFullYear()
        SetTotalYears(year - 2021)
    },[])

    return (
    <div className='flex flex-col w-[80%] mx-auto bg-gradient-to-l from-slate-800/60 to-slate-900 gap-8 rounded-xl shadow-lg py-2 px-2 '>
        <div className='flex justify-evenly gap-2 '>
            <div className='flex flex-col py-4 gap-2 p-4 bg-slate-800 rounded-lg shadow text-sm italic text-gray-300 '> 
                    <div className='flex gap-12 items-center'>
                        <div className='flex items-center gap-1'>
                            <div className='h-16 w-16 border-2 border-slate-600 rounded-full bg-center bg-cover '
                                style={{backgroundImage: "url(/zoe-kravitz.jpg)"}}
                            >
                            </div>
                            <div>userexample@gmail.com</div>
                        </div>
                        <div className='flex gap-1'>
                            <i className="fa-solid fa-star text-[var(--shiny-yellow)] "></i>
                            <i className="fa-solid fa-star text-[var(--shiny-yellow)]"></i>
                            <i className="fa-solid fa-star text-[var(--shiny-yellow)]"></i>
                            <i className="fa-solid fa-star text-[var(--shiny-yellow)]"></i>
                            <i className="fa-solid fa-star text-[var(--shiny-yellow)]"></i>
                        </div>
                    </div>
                    <div className="max-w-xs p-4 bg-slate-800 rounded-lg text-sm italic text-gray-300">
                        “This team truly understood our vision and brought it to life with care and creativity. I highly recommend them.  I highly recommend them.”
                    </div>
            </div>
            <div className='flex flex-col py-4 gap-2 p-4 bg-slate-800 rounded-lg shadow text-sm italic text-gray-300 '> 
                    <div className='flex gap-12 items-center'>
                        <div className='flex items-center gap-1'>
                            <div className='h-16 w-16 border-2 border-slate-600 rounded-full bg-center bg-cover '
                                style={{backgroundImage: "url(/zoe-kravitz.jpg)"}}
                            >
                            </div>
                            <div>userexample@gmail.com</div>
                        </div>
                        <div className='flex gap-1'>
                            <i className="fa-solid fa-star text-[var(--shiny-yellow)] "></i>
                            <i className="fa-solid fa-star text-[var(--shiny-yellow)]"></i>
                            <i className="fa-solid fa-star text-[var(--shiny-yellow)]"></i>
                            <i className="fa-solid fa-star text-[var(--shiny-yellow)]"></i>
                            <i className="fa-solid fa-star text-[var(--shiny-yellow)]"></i>
                        </div>
                    </div>
                    <div>
                        <span className=''> {moodFaces[0]} </span>
                        <div className="max-w-xs p-4 bg-slate-800 rounded-lg text-sm italic text-gray-300">
                            “This team truly understood our vision and brought it to life with care and creativity. I highly recommend them.  I highly recommend them.”
                        </div>
                    </div>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-slate-800 rounded-lg shadow text-sm text-gray-300">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                    <div
                        className="h-16 w-16 border-2 border-slate-600 rounded-full bg-center bg-cover"
                        style={{ backgroundImage: "url(/zoe-kravitz.jpg)" }}
                    ></div>
                    <span className="text-xs text-gray-400">userexample@gmail.com</span>
                    </div>

                    <div className="flex gap-1 text-[var(--shiny-yellow)]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </div>
                </div>

                <div className="bg-slate-700 p-3 rounded-md italic text-sm text-gray-300 leading-relaxed max-w-md">
                “This team truly understood our vision and brought it to life with care and creativity. I highly recommend them.”
                I highly recommend them.”
                </div>
                <span className="text-xl">{moodFaces[4]}</span>
            </div>
        </div>
       <div className='grid grid-cols-3 justify-evenly gap-4 border-t-2 p-4 '>
            <UserFeedCard
                stats={totalYears}
                icon={"fa-solid fa-clock"}
                color={'blue'}
                title={'Years'}
                subTitle={'In Your Service'}
                p={'Delivering quality, trust, and innovation since day one.'}
                linkHref={"/aboutus"}
            />

            <div className='row-span-2 b flex flex-col gap-6 border border-emerald-500 p-6 rounded-xl min-h-[200px] bg-slate-800 shadow-md'>
                <div className='bg-emerald-500 p-5 rounded-full shadow-inner self-start'>
                    <i className='fa-solid fa-face-smile-beam  text-4xl text-white'></i>
                </div>
                <div className=''>
                    <h4 className={'text-2xl font-semibold text-emerald-500 ' + urbanist.className}>98% Happy Clients</h4>
                    <h6 className={'text-gray-300 text-sm ' + urbanist.className}>Our Clients Come First</h6>
                    <p className='text-gray-400 text-xs mt-2'>We build lasting relationships by prioritizing quality and trust in every project.</p>
                </div>
                <div className='mt-2 '> 
                    <h3 className="mb-4 text-center text-emerald-500 text-xl font-semibold tracking-wide">
                        {avgRateing} Average Rating
                    </h3>
                    <div className='w-full h-64'>
                        <ResponsiveContainer>
                            <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label
                            >
                                {data.map((entry, index)=>(
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <Link className='mt-4 px-4 py-2 bg-emerald-500 text-white hover:bg-emerald-600 transition self-end group overflow-hidden rounded-xl -mr-3 '
                href={"/aboutus"}
                >   <i className="fa-solid fa-arrow-up rotate-45 transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6 "></i>  </Link>
            </div>

            <UserFeedCard
                stats={150}
                icon={"fa-solid fa-cube"}
                color={'indigo'}
                title={'Product Designs Created'}
                subTitle={'Across Diverse Industries'}
                p={'Crafting unique, impactful products tailored to client needs.'}
                linkHref={'/aboutus'}
            /> 

            <UserFeedCard
                stats={15}
                icon={"fa-solid fa-champagne-glasses"}
                color={'pink'}
                title={'Events Organised'}
                subTitle={'Making Moments Memorable'}
                p={'Planning, managing, and delivering unforgettable experiences with precision and creativity.'}
                linkHref={'/aboutus'}
            />

            <UserFeedCard
                stats={15}
                icon={"fa-solid fa-shapes"}
                color={'red'}
                title={'Logos Created'}
                subTitle={'Trusted by Businesses'}
                p={'Delivering memorable brand identities with creativity and care.'}
                linkHref={'/aboutus'}
            />
       </div>

    </div>
  )
}
