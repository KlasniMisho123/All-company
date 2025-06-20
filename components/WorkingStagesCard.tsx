import { Urbanist }  from 'next/font/google';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function WorkStages() {
  return (
    <section className='flex flex-col justify-evenly gap-2 lg:gap-4 xl:gap-8 lg:flex-row mx-30 my-10 rounded-xl  p-4 py-10  '>
      <div className='flex flex-col gap-4 '>
        <div className='my-4'>
          <h4 className='text-2xl'> Work <span className='bg-gradient-to-r from-[var(--error-color)] to-[#1F2937] tracking-widest font-semibold px-1 '> Process </span> </h4>
          <h2 className='text-4xl font-semibold '> Our business   <span className='text-[var(--error-color)]'> Process Road </span> </h2>
            <p className='text-gray-100 mt-2 '>
                <span className='text-lg'> 🎨 </span> From the first pencil sketch to the final brand guidelines, our design process transforms raw ideas into iconic visual identities. 
                Each phase blends strategic thinking with artistic mastery—keeping you engaged at every turn, while crafting results that don&apos;t just meet briefs,
                but redefine categories.
            </p>

        </div>
        <div className='flex flex-col my-4 text-white gap-4 '>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-600/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-feather text-xl text-red-400/80 group-hover:bg-[var(--error-color)] transition-all transition-duration-300 group-hover:text-gray-300 rounded-full px-1.5 py-1.5 "></i>
            <h4> Ideation and concept development for the client project </h4> 
          </div>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-700/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-feather text-xl text-red-400/80 group-hover:bg-[var(--error-color)] transition-all transition-duration-300 group-hover:text-gray-300 rounded-full px-1.5 py-1.5"></i>
            <h4> Initial design and prototyping phase </h4> 
          </div>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-700/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-feather text-xl text-red-400/80 group-hover:bg-[var(--error-color)] transition-all transition-duration-300 group-hover:text-gray-300 rounded-full px-1.5 py-1.5 "></i>
            <h4> Demo release, client feedback, and iterative testing </h4>
          </div>
          <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-700/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
            <i className="fa-solid fa-feather text-xl text-red-400/80 group-hover:bg-[var(--error-color)] transition-all transition-duration-300 group-hover:text-gray-300 rounded-full px-1.5 py-1.5 "></i>
            <h4> Finalized web application ready for deployment </h4> 
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center h-full gap-4 justify-start py-8 px-0 xl:px-8 md:justify-center md:gap-8 sm:flex-row sm:items-start text-black '>

        <div className='flex flex-col gap-4 sm:gap-8'>

          <div className='flex flex-col p-4 py-12 bg-white gap-12 min-h-[325px] w-[350px] sm:w-[300px] rounded-md transition-all duration-300
            border-2 border-transparent shadow-[0_4px_12px_rgba(250,204,21,0.4)]
            hover:border-yellow-700 group overflow-hidden'>
            <div className='relative pt-8'>
              <i className="fa-solid fa-lightbulb fa-bounce text-8xl opacity-60 text-yellow-500 absolute top-0 left-0 z-0"></i>
              <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>01. IDEA</h1> 
            </div>
            <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-yellow-500 transition-all duration-300'>
              <span className='text-yellow-500 text-base '> Define Your Goals </span> We begin by understanding the client's vision, exploring possibilities, 
              and generating innovative ideas that align with their goals.
            </p>
          </div>

          <div className='relative translate-y-[360px] sm:translate-y-0 flex flex-col p-4 py-12 bg-white gap-12 min-h-[325px] w-[350px] sm:w-[300px] rounded-md transition-all duration-300 
            border-2 border-transparent shadow-[0_4px_12px_rgba(168,85,247,0.4)]
            hover:border-purple-700 group overflow-hidden'>
            <div className='relative pt-8'> 
              <i className="fa-solid fa-cubes text-8xl opacity-60 text-purple-500 absolute absolute top-0 left-0 z-0"></i>
              <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>03. DEMO & TESTING</h1> 
            </div>
            <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-purple-500 transition-all duration-300'>
               <span className='text-purple-500 text-base '> Assign Stakeholders </span> Through interactive demos and rigorous testing, we ensure functionality, 
                performance, and usability across all major platforms and devices.
            </p>
          </div>

        </div>
        <div className='flex flex-col gap-4 sm:gap-8 mt-8'>

        <div className='relative translate-y-[-360px] sm:translate-y-0 flex flex-col  p-4 py-12 bg-white gap-12 min-h-[325px] w-[350px] sm:w-[300px] rounded-md transition-all duration-300
          border-2 border-transparent shadow-[0_4px_12px_rgba(59,130,246,0.4)]
          hover:border-blue-700 group overflow-hidden'>
            <div className='relative pt-8'> 
              <i className="fa-solid fa-compass-drafting text-8xl opacity-60 text-blue-500 absolute absolute top-0 left-0 z-0"></i>
              <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>02. WEB DESIGN</h1> 
            </div>
            <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-blue-500 transition-all duration-300'>
              <span className='text-blue-500 text-base '> Plan Your Process </span> We translate concepts into clean, responsive, and visually engaging 
               designs that reflect the brand’s identity and enhance user experience.
            </p>
          </div>
          
          <div className='flex flex-col p-4 py-12 bg-white gap-12 min-h-[325px] w-[350px] sm:w-[300px] rounded-md transition-all duration-300
           border-2 border-transparent shadow-[0_4px_12px_rgba(239,68,68,0.4)] 
           hover:border-red-700 group overflow-hidden group'>
            <div className='relative pt-8'> 
              <i className="fa-solid fa-bullseye text-8xl opacity-60 text-red-500 absolute absolute top-0 left-0 z-0"></i>
              <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>04. IDEA</h1> 
            </div>
            <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-red-500 transition-all duration-300'>
               <span className='text-red-500 text-base '> Process Implement </span> After final review, we launch the product smoothly, configure hosting,
              and set up maintenance tools to ensure long-term success.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
