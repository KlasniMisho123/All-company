'use client'
import { Urbanist } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import TeamMemberCard from './TeamMemberCard';

// https://dribbble.com/shots/23517715-Team-Section

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function OurTeamElement() {

    const [selectedPage, setSelectedPage] = useState(0)
    const pages = []

    for(let i=0; i <3; i++ ) {
        pages.push(i)
    }

    function selectPage(dir:string) {
        if(dir == "right" ) {
            if(selectedPage < (pages.length-1) ) {
                setSelectedPage(selectedPage + 1)
            } else {
                setSelectedPage(0)
            }
        } else {
            if(selectedPage != 0) {
                setSelectedPage(selectedPage - 1)
            } else {
                setSelectedPage(pages.length - 1)
            }
        }
    }

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
            <div className='flex justify-center items-center px-3 py-2 border-2 border-white rounded-full cursor-pointer '
            onClick={
                    ()=>{
                        selectPage("left")
                    }}
             >
                <i className="fa-solid fa-chevron-left text-2xl"></i>
            </div>

            {selectedPage == 0 && <div className='flex w-full px-6 justify-evenly overflow-hidden'>
                <TeamMemberCard 
                    imgSrc='teamMembers/member1.jpg'
                    name={"Ali"}
                    position={"Motion Graphics Artist"}
                />
                <TeamMemberCard 
                    imgSrc='teamMembers/members2-3.jpg'
                    name={"John Doe"}
                    position={"Brand Identity Designer"}
                />
                <TeamMemberCard 
                    imgSrc='teamMembers/member4.jpg'
                    name={"Ali"}
                    position={"Motion Graphics Artist"}
                />
            </div>
            }
            {selectedPage == 1 && <div className='flex w-full px-6 justify-evenly overflow-hidden'>
                <TeamMemberCard 
                    imgSrc='https://xtratheme.com/elementor/corporate/wp-content/uploads/sites/4/2018/07/t2.jpg'
                    name={"Elisabeth Green"}
                    position={"Senior Designer"}
                />
                <TeamMemberCard 
                    imgSrc='https://xtratheme.com/elementor/corporate/wp-content/uploads/sites/4/2018/07/t5.jpg'
                    name={"Lisa Browner"}
                    position={"Support Manager"}
                />
                <TeamMemberCard 
                    imgSrc='https://xtratheme.com/elementor/corporate/wp-content/uploads/sites/4/2018/07/t3.jpg'
                    name={"Mike Kingman"}
                    position={"Co Founder"}
                />
            </div>
            }
            {selectedPage == 2 && <div className='flex w-full px-6 justify-evenly overflow-hidden'>
                <TeamMemberCard 
                    imgSrc='https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg'
                    name={"Fiona Pugh"}
                    position={"Creative Director"}
                />
                <TeamMemberCard 
                    imgSrc='https://i.pinimg.com/736x/52/94/eb/5294eba5c7d674e4f14921309a36934a.jpg'
                    name={"Jake Smith"}
                    position={"Illustrator"}
                />
                <TeamMemberCard 
                    imgSrc='https://i.pinimg.com/736x/b2/da/f9/b2daf9019c4b08fa3a90c7d28a08a059.jpg'
                    name={"Emilly Henderson"}
                    position={"Motion Graphics Intern"}
                />
            </div>
            }

             <div className='flex justify-center items-center px-3 py-2 border-2 border-white rounded-full cursor-pointer '
                onClick={
                    ()=>{
                        selectPage("right")
                    }}
             >
                <i className="fa-solid fa-chevron-right text-2xl"></i>
            </div>

        </div>

        <div className='flex justify-center items-center gap-1 '>
            {pages.map((index)=> {
                 return (<div key={index} className={'h-0.5 w-10 transition-all duration-300 ' + (selectedPage == index? " bg-white " : " bg-gray-500 ")}></div>)
            })}
        </div>

    </div>
  )
}
