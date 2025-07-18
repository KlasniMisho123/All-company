'use client'
import { Urbanist } from 'next/font/google';
import React, { useState } from 'react'
import RecentProjectsCard from './RecentProjectsCard';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function ProjectsElement() {
    const [isExpanded, setIsExpanded] = useState(false)
    // const [projectsMounted, setProjectsMounted ] = useState(false)

    const projects = [
        {
            imgSrc: "/fight-club.jpg",
            type: "Branding / UI Design",
            title: "EcoBrew Identity",
            desc: "Clean, sustainable visual identity for an eco-conscious coffee brand.",
            date: "7/2/2025",
        },
        {
            imgSrc: "/nenesProject.jpg",
            type: "Branding / UI Design",
            title: "ChildFood Packaging",
            desc: "Playful and safe packaging for a children's snack brand using vibrant pastel color schemes.",
            date: "7/2/2025",
        },
        {
            imgSrc: "/naturaleza.jpg",
            type: "Nature Campaign",
            title: "Naturaleza Posters",
            desc: "Minimalistic and earthy poster series to promote ecological awareness through design.",
            date: "2025-07-03",
        },
        {
            imgSrc: "/naturaleza.jpg",
            type: "Nature Campaign",
            title: "Naturaleza Posters",
            desc: "Minimalistic and earthy poster series to promote ecological awareness through design.",
            date: "2025-07-03",
        },
        {
            imgSrc: "/naturaleza.jpg",
            type: "Nature Campaign",
            title: "Naturaleza Posters",
            desc: "Minimalistic and earthy poster series to promote ecological awareness through design.",
            date: "2025-07-03",
        },
        {
            imgSrc: "/fight-club.jpg",
            type: "Branding / UI Design",
            title: "EcoBrew Identity",
            desc: "Clean, sustainable visual identity for an eco-conscious coffee brand.",
            date: "7/2/2025",
        },
      
    ];

    function expandProjectDisplay() {
        setIsExpanded(prev => {
            const newExpanded = !prev;
            
            // if (!newExpanded) {
            // setTimeout(() => {
            //     setProjectsMounted(false);
            // }, 1000);
            // } else {
            // setProjectsMounted(true);
            // }

            return newExpanded;
        })
    }    

  return (
    <section className='flex flex-col items-center gap-6 my-6 bg-gradient-to-r from-slate-900 to-slate-800 p-8'>
        <div className={`text-2xl font-semibold relative px-6 py-2 border-2 rounded-t rounded-b-2xl inline-block ${urbanist.className}`}>
          <span className="relative z-10">Recent Projects</span>
        </div>
        <div>
            <div className={'my-6 w-full gap-6 grid grid-cols-3 overflow-hidden transition-all duration-500 ease-in-out ' + (isExpanded ? 'max-h-[2000px]' : 'max-h-[500px]') }>
                {projects.slice(0,3).map((project, index)=>{
                    return(
                        <RecentProjectsCard key={index} {...project} />
                    )
                })}

            </div>

            <div
                className={`w-full gap-6 grid grid-cols-3 overflow-hidden transition-all duration-500 ease-in-out
                ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-90 pointer-events-none'}
                `}
            >
                {projects.slice(3).map((project, index) => (
                <RecentProjectsCard key={index} {...project} />
                ))}
            </div>
            </div>

        <button
          className='text-center transition-all duration-200 font-semibold hover:opacity-75 cursor-pointer ' 
          onClick={expandProjectDisplay}
        >
          {isExpanded? "See Less Projects" : "See More Projects"}
        </button>
      </section>
  )
}
