import { Urbanist }  from 'next/font/google';
import React from 'react'
import { RevealSlide } from './animations/RevealSlide';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function WorkStages() {
  return (
    <section className='flex flex-col justify-evenly gap-2 lg:gap-4 xl:gap-8 lg:flex-row mx-4 sm:mx-8  md:mx-30 my-10 rounded-xl  p-4 py-10  '>
      <div className='flex flex-col gap-4'>
        <RevealSlide width='100%' direction='up'> 
          <div className='my-4'>
            <h4 className='text-xl sm:text-2xl truncate '> Work <span className='bg-gradient-to-r from-[var(--error-color)] to-[#1F2937] tracking-widest font-semibold px-1 '> Process </span> </h4>
            <h2 className='text-4xl font-semibold '> <span className=' truncate'> Our business </span>  <span className='text-[var(--error-color)] truncate'> Process Road </span> </h2>
              <p className='text-gray-100 mt-2 text-sm md:text-base line-clamp-7 '>
                  <span className='text-lg '> 🎨 </span> From the first pencil sketch to the final brand guidelines, our design process transforms raw ideas into iconic visual identities. 
                  Each phase blends strategic thinking with artistic mastery—keeping you engaged at every turn, while crafting results that don&apos;t just meet briefs,
                  but redefine categories.
              </p>
          </div>
        </RevealSlide>
        <div className='flex flex-col my-4 text-white gap-4 '>
          <RevealSlide width='100%' direction='right'>
            <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-600/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
              <i className="fa-solid fa-feather text-xl text-red-400/80 group-hover:bg-[var(--error-color)] transition-all transition-duration-300 group-hover:text-gray-300 rounded-full px-1.5 py-1.5 "></i>
              <h4 className='text-xs md:text-sm line-clamp-2 '> We explore your vision, define goals, and shape the creative direction. </h4> 
            </div>
          </RevealSlide>

          <RevealSlide width='100%' direction='right'>
            <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-600/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
              <i className="fa-solid fa-feather text-xl text-red-400/80 group-hover:bg-[var(--error-color)] transition-all transition-duration-300 group-hover:text-gray-300 rounded-full px-1.5 py-1.5"></i>
              <h4 className='text-xs md:text-sm line-clamp-2'> Initial visuals and interactive mockups are crafted for early feedback.</h4> 
            </div>
          </RevealSlide>

          <RevealSlide width='100%' direction='right'>
            <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-600/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
              <i className="fa-solid fa-feather text-lg text-red-400/80 group-hover:bg-[var(--error-color)] transition-all transition-duration-300 group-hover:text-gray-300 rounded-full px-1.5 py-1.5 "></i>
              <h4 className='text-xs md:text-sm line-clamp-2'> We present the demo, gather insights, and fine-tune the design iteratively. </h4>
            </div>
          </RevealSlide>

          <RevealSlide width='100%' direction='right'>
            <div className='flex items-center gap-4 transition-all transition-duration-300 bg-gray-600/50 p-3 rounded-lg shadow-md hover:shadow-none hover:bg-gray-600 group '>
              <i className="fa-solid fa-feather text-xl text-red-400/80 group-hover:bg-[var(--error-color)] transition-all transition-duration-300 group-hover:text-gray-300 rounded-full px-1.5 py-1.5 "></i>
              <h4 className='text-xs md:text-sm line-clamp-2'> The final product is polished, deployed, and ready to make an impact. </h4> 
            </div>
          </RevealSlide>
        </div>
      </div>

      <div className='flex flex-col items-center h-full gap-4 justify-start py-8 px-0 xl:px-8 md:justify-center md:gap-8 sm:flex-row md:items-start text-black mx-1 sm:mx-0 '>

        <div className='flex flex-col gap-4 sm:gap-8 '>
          <RevealSlide width='100%' direction='right'>
            <div className='flex flex-col p-4 py-12 bg-white gap-12 min-h-[325px] min-w-[250px] sm:w-[300px] rounded-md transition-all duration-300
              border-2 border-transparent shadow-[0_4px_12px_rgba(250,204,21,0.4)]
              hover:border-yellow-700 group overflow-hidden'>
              <div className='relative pt-8'>
                <i className="fa-solid fa-lightbulb fa-bounce text-8xl opacity-60 text-yellow-500 absolute top-0 left-0 z-0"></i>
                <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>01. Idea </h1> 
              </div>
              <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-yellow-500 transition-all duration-300'>
                <span className='text-yellow-500 text-base '> Define Your Goals </span> We begin by understanding the client&apos;s vision, exploring possibilities, 
                and generating innovative ideas that align with their goals.
              </p>
            </div>
          </RevealSlide>
          <RevealSlide width='100%' direction='right'>
            <div className='relative flex flex-col p-4 py-12 bg-white gap-12 min-h-[325px] min-w-[250px] sm:w-[300px] rounded-md transition-all duration-300 
              border-2 border-transparent shadow-[0_4px_12px_rgba(168,85,247,0.4)]
              hover:border-purple-700 group overflow-hidden'>
              <div className='relative pt-8'> 
                <i className="fa-solid fa-cubes text-8xl opacity-60 text-purple-500 absolute absolute top-0 left-0 z-0"></i>
                <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>03. Design Production </h1> 
              </div>
              <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-purple-500 transition-all duration-300'>
                <span className='text-purple-500 text-base '> Bring Ideas to Life </span> We develop high-quality design assets tailored to your needs—logos,
                 layouts, illustrations, and more. Your feedback fuels refinements to get everything just right.
              </p>
            </div>
          </RevealSlide>
        </div>
          <div className='flex flex-col gap-4 sm:gap-8 mt-8'>
            <RevealSlide width='100%' direction='left'>
              <div className='relative flex flex-col  p-4 py-12 bg-white gap-12 min-h-[325px] min-w-[250px] sm:w-[300px] rounded-md transition-all duration-300
                border-2 border-transparent shadow-[0_4px_12px_rgba(59,130,246,0.4)]
                hover:border-blue-700 group overflow-hidden'>
                  <div className='relative pt-8'> 
                    <i className="fa-solid fa-compass-drafting text-8xl opacity-60 text-blue-500 absolute absolute top-0 left-0 z-0"></i>
                    <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>02. Brief Strategy</h1> 
                  </div>
                  <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-blue-500 transition-all duration-300'>
                    <span className='text-blue-500 text-base '> Discover & Align </span> 
                      We kick off by learning about your brand, audience, and vision. 
                      Together, we shape a clear creative direction that aligns with your goals and sets the tone for the entire project.
                  </p>
                </div>
              </RevealSlide>
              <RevealSlide width='100%' direction='left'>
                <div className='flex flex-col p-4 py-12 bg-white gap-12 min-h-[325px] min-w-[250px] sm:w-[300px] rounded-md transition-all duration-300
                border-2 border-transparent shadow-[0_4px_12px_rgba(239,68,68,0.4)] 
                hover:border-red-700 group overflow-hidden group'>
                  <div className='relative pt-8'> 
                    <i className="fa-solid fa-bullseye text-8xl opacity-60 text-red-500 absolute absolute top-0 left-0 z-0"></i>
                    <h1 className={'relative z-10 font-bold text-2xl ml-2 ' + urbanist.className}>04. Delivery </h1> 
                  </div>
                  <p className='text-gray-600 tracking-wide text-sm mt-4 leading-relaxed group-hover:text-red-500 transition-all duration-300'>
                    <span className='text-red-500 text-base '>Make It Real </span> Once approved, we deliver all final files in the formats you need.
                     We also support you with guidelines or assets for launching your visuals across platforms.
                  </p>
                </div>
              </RevealSlide>
          </div>
      </div>
    </section>
  )
}
