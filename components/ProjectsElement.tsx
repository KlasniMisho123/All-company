import { Urbanist } from 'next/font/google';
import React from 'react'
import Link from 'next/link';
import RecentProjectsCard from './RecentProjectsCard';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function ProjectsElement() {
  return (
    <section className='flex flex-col items-center gap-6 my-6 bg-gradient-to-r from-slate-900 to-slate-800 p-8'>
        <div className={`text-2xl font-semibold relative px-6 py-2 border-2 rounded-t rounded-b-2xl inline-block ${urbanist.className}`}>
          <span className="relative z-10">Recent Projects</span>
        </div>

        <div className='my-4 flex items-center justify-evenly w-full '>

          <RecentProjectsCard 
            imgSrc={"/fight-club.jpg"}
            type={"Branding / UI Design"}
            title={"EcoBrew Identity"}
            desc={"Clean, sustainable visual identity for an eco-conscious coffee brand."}
            date="7/2/2025"
          />

          <RecentProjectsCard 
            imgSrc={"/nenesProject.jpg"}
            type={"Branding / UI Design"}
            title={"ChildFood Packaging"}
            desc={"Playful and safe packaging for a children's snack brand using vibrant pastel color schemes."}
            date="7/2/2025"
          />

          <RecentProjectsCard 
            imgSrc="/naturaleza.jpg"
            type="Nature Campaign"
            title="Naturaleza Posters"
            desc="Minimalistic and earthy poster series to promote ecological awareness through design."
            date="2025-07-03"
          />
          
        </div>
        <Link
          className='text-center transition-all duration-200 font-semibold hover:opacity-75' 
          href={"/aboutus"}
        >
          See All Projects
        </Link>
      </section>
  )
}
