'use client'
import { Urbanist } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import UserFeedCard from './UserFeedCard';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function UserFeed() {
    const [totalYears,SetTotalYears] = useState(Number)

    useEffect(()=> {
        const year = new Date().getFullYear()
        SetTotalYears(year - 2021)
    },[])

    return (
    <div className='flex flex-col w-[80%] mx-auto bg-gradient-to-l from-slate-800/60 to-slate-900 gap-8 rounded-xl shadow-lg p-4 '>
        {/* Highlighted Feedback From useres */}
       <div> 
        Feedback Div?
       </div>
       <div className='grid grid-cols-3 justify-evenly gap-4 '>
            <UserFeedCard
                doubledSpan={false}
                stats={totalYears}
                icon={"fa-solid fa-clock"}
                color={'blue'}
                title={'Years'}
                subTitle={'In Your Service'}
                p={'Delivering quality, trust, and innovation since day one.'}
                linkHref={"/aboutus"}
            />
            <UserFeedCard
                doubledSpan={true}
                stats={150}
                icon={"fa-solid fa-cube"}
                color={'indigo'}
                title={'Product Designs Created'}
                subTitle={'Across Diverse Industries'}
                p={'Crafting unique, impactful products tailored to client needs.'}
                linkHref={'/aboutus'}
            /> 

            <UserFeedCard
                doubledSpan={false}
                stats={150}
                icon={"fa-solid fa-cube"}
                color={'indigo'}
                title={'Product Designs Created'}
                subTitle={'Across Diverse Industries'}
                p={'Crafting unique, impactful products tailored to client needs.'}
                linkHref={'/aboutus'}
            /> 

            <UserFeedCard
                doubledSpan={false}
                stats={15}
                icon={"fa-solid fa-champagne-glasses"}
                color={'pink'}
                title={'Events Organised'}
                subTitle={'Making Moments Memorable'}
                p={'Planning, managing, and delivering unforgettable experiences with precision and creativity.'}
                linkHref={'/aboutus'}
            />

            <UserFeedCard
                doubledSpan={false}
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
