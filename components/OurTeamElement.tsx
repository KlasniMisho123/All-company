import { Urbanist } from 'next/font/google';
import React from 'react'
import TeamMemberCard from './TeamMemberCard';

// https://dribbble.com/shots/23517715-Team-Section

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function OurTeamElement() {
  return (
    <div className='my-10 flex flex-col items-center w-[80%] '>
       <>
        <h3
            className={`text-5xl font-bold bg-gradient-to-r from-[var(--light-red)] to-red-500/60 bg-clip-text text-transparent tracking-tight ${urbanist.className}`}
        >
            Meet Our Team
        </h3>
        <p className="text-base md:text-lg text-red-400 mt-2 max-w-xl">
            Creative minds. Proven results.
        </p>
        </>
        {/* 3Card per page */}
        <div className='flex  justify-between items-center w-full gap-4 my-10 min-h-[300px] py-4'>
            <div className='flex justify-center items-center px-3 py-2 border-2 border-white rounded-full cursor-pointer '>
                <i className="fa-solid fa-chevron-left text-2xl"></i>
            </div>

            <div className='flex w-full px-6 justify-evenly overflow-hidden'>

            <TeamMemberCard 
                imgSrc='teamMembers/member1.jpg'
                name={"all"}
                position={"Designer"}
            />
            <TeamMemberCard 
                imgSrc='teamMembers/members2-3.jpg'
                name={"all"}
                position={"Designer"}
            />
            <TeamMemberCard 
                imgSrc='teamMembers/member4.jpg'
                name={"all"}
                position={"Designer"}
            />

            
            </div>

             <div className='flex justify-center items-center px-3 py-2 border-2 border-white rounded-full cursor-pointer '>
                <i className="fa-solid fa-chevron-right text-2xl"></i>
            </div>

        </div>

        <div className='flex justify-center items-center gap-1 '>
            <div className='h-0.5 bg-white w-8 '></div>
            <div className='h-0.5 bg-gray-400 w-8 '></div>
            <div className='h-0.5 bg-gray-400 w-8 '></div>
        </div>

    </div>
  )
}
