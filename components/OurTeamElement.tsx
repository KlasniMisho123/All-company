'use client'
import { Urbanist } from 'next/font/google';
import React, { useState } from 'react'
import TeamMemberCard from './TeamMemberCard';

// https://dribbble.com/shots/23517715-Team-Section

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function OurTeamElement() {
    const [selectedPage, setSelectedPage] = useState(0);
    const [selectedPrev, setSelectedPrev] = useState(false);
    const [swipeCooldown, setSwipeCooldown] = useState(false);

    const pages = []

    for(let i=0; i <3; i++ ) {
        pages.push(i)
    }

    function selectPage(dir:string) {
        if (swipeCooldown) return;

        setSwipeCooldown(true);
    
        if(dir == "right" ) {
            if(selectedPage < (pages.length-1) ) {
                setSelectedPage(selectedPage + 1)
                setSelectedPrev(false)
            } else {
                setSelectedPage(0)
                setSelectedPrev(true)
            }
        } else {
            if(selectedPage != 0) {
                setSelectedPage(selectedPage - 1)
                setSelectedPrev(true)
            } else {
                setSelectedPage(pages.length - 1)
                setSelectedPrev(false)
            }
        }
        setTimeout(() => {
            setSwipeCooldown(false);
        }, 1000);
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
        <div className='flex justify-between items-center w-full gap-4 my-10 min-h-[300px] py-4'>
            <div className='flex justify-center items-center px-3 py-2 border-2 border-white rounded-full cursor-pointer '
            onClick={
                    ()=>{
                        selectPage("left")
                    }}>
                <i className="fa-solid fa-chevron-left text-2xl"></i>
            </div>

            <div className='relative overflow-hidden flex w-full gap-4 min-h-[300px] '> 
                <div className={'absolute inset-0 flex flex-col sm:flex-row items-center gap-6 sm:items-start sm:gap-2 w-full px-6 justify-evenly overflow-hidden ' + (selectedPage == 0? 
                    (selectedPrev? " scroll-in-left-content" : "scroll-in-right-content") : (selectedPrev? "scroll-out-right-content": "scroll-out-left-content") )}>

                   <TeamMemberCard 
                        imgSrc='/teamMembers/member1.jpg'
                        name="Ali"
                        position="Motion Graphics Artist"
                        desc="Creates animated visuals and graphic elements for videos, films, and digital media to enhance storytelling and visual appeal."
                    />
                    <TeamMemberCard 
                        imgSrc='/teamMembers/members2-3.jpg'
                        name="John Doe"
                        position="Brand Identity Designer"
                        desc="Develops cohesive visual branding systems including logos, color schemes, and typography that define a company’s identity and resonate with its audience."
                    />
                    <TeamMemberCard 
                        imgSrc='/teamMembers/member4.jpg'
                        name="Ali"
                        position="Motion Graphics Artist"
                        desc="Creates animated visuals and graphic elements for videos, films, and digital media to enhance storytelling and visual appeal."
                    />
                </div>

                <div className={'absolute inset-0 flex flex-col sm:flex-row items-center gap-6 sm:items-start sm:gap-2 w-full px-6 justify-evenly overflow-hidden '  + (selectedPage == 1? 
                    (selectedPrev? " scroll-in-left-content" : "scroll-in-right-content") : (selectedPrev? "scroll-out-right-content": "scroll-out-left-content") )}>
                    <TeamMemberCard 
                        imgSrc='/teamMembers/member5.jpg'
                        name="Elisabeth Green"
                        position="Senior Designer"
                        desc="Leads design projects by creating high-quality visuals and mentoring junior designers to ensure consistent brand and creative standards."
                    />
                    <TeamMemberCard 
                        imgSrc='/teamMembers/member6.jpg'
                        name="Lisa Browner"
                        position="Support Manager"
                        desc="Oversees customer support teams, ensuring timely and effective assistance while improving customer satisfaction and retention."
                    />
                    <TeamMemberCard 
                        imgSrc='/teamMembers/member7.jpg'
                        name="Mike Kingman"
                        position="Co Founder"
                        desc="Responsible for strategic vision and leadership, guiding company growth and fostering innovation across teams and projects."
                    />
                </div>

                <div className={'absolute inset-0 flex flex-col sm:flex-row items-center gap-6 sm:items-start sm:gap-2 w-full px-6 justify-evenly overflow-hidden ' +  (selectedPage == 2? 
                    (selectedPrev? " scroll-in-left-content" : "scroll-in-right-content") : (selectedPrev? "scroll-out-right-content": "scroll-out-left-content") )}>

                    <TeamMemberCard 
                        imgSrc='/teamMembers/member8.jpg'
                        name={"Fiona Pugh"}
                        position={"Creative Director"}
                    />
                    <TeamMemberCard 
                        imgSrc='/teamMembers/member9.jpg'
                        name={"Jake Smith"}
                        position={"Illustrator"}
                    />
                    <TeamMemberCard 
                        imgSrc='/teamMembers/member10.jpg'
                        name={"Emilly Henderson"}
                        position={"Motion Graphics Intern"}
                    />
                </div>
            </div>

             <div className='flex justify-center items-center px-3 py-2 border-2 border-white rounded-full cursor-pointer '
                onClick={
                    ()=>{
                        selectPage("right")
                    }}>
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
