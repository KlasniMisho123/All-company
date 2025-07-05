import React from 'react'
import { Urbanist } from 'next/font/google';
import StoryStatCard from '@/components/StoryStatCard';


const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function aboutus() {
  return (
    <div>
      <div className='relative h-[50vh] -mt-1 bg-cover bg-center flex items-center justify-center'
      style={{backgroundImage: "url(https://images.pexels.com/photos/17046790/pexels-photo-17046790.jpeg)"}}
      >
        <div className='absolute inset-0 w-full h-full z-10 bg-black opacity-35' />
          <div className='flex flex-col text-6xl font-semibold custom-selection-bg text-center text-white select-none '>
          <h2 className={'z-20 ' + urbanist.className}>About Us</h2>
        </div>
      </div>
      <div className='my-12 flex flex-col items-center gap-6 '>
        {/* Our Story */}
          <div className='flex gap-6 w-[80%] mx-auto '>
        <div className="flex flex-col flex-1 gap-6 max-w-3xl shadow-lg bg-slate-900/50 rounded-2xl py-8 px-6">
          <h5 className="text-white bg-[var(--light-red)] w-max px-3 py-1 rounded-sm text-xs md:text-sm tracking-wide uppercase font-semibold">
            How It Started
          </h5>

          <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--light-red)] to-transparent bg-clip-text text-transparent ${urbanist.className}`}>
            Our Story
          </h3>

          <div className='flex flex-col gap-4'>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-prose">
              What began as a small creative studio in a sunlit apartment has grown into a collective of passionate designers, developers, and storytellers.
              We didn&apos; start with big budgets or fancy titles — just an obsession with crafting beautiful, purposeful design.
            </p>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-prose">
              Over the years, we&apos;ve collaborated with clients across industries — from local startups to global brands — helping them shape visual identities,
              digital experiences, and products that speak to their audience. Every project is a new challenge, a new story waiting to be told.
            </p>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-prose">
              We believe great design isn&apos;t just about how things look — it&apos;s about how they make people feel. That&apos;s why we take the time to listen, explore,
              and create with intention. It&apos;s more than work to us — it&apos;s what we love to do.
            </p>
          </div>
        </div>

        <div className='flex-1 flex flex-col overflow-hidden rounded-2xl'>
          <div className='flex-1 bg-cover bg-center'>
            <img
              className='max-h-[450px] w-full object-cover rounded-2xl'
              src="https://i.pinimg.com/736x/71/45/85/7145858b0650bcacab83a58150c3268e.jpg"
              loading='lazy'
              alt="Team working in early days"
            />
          </div>

          <div className='flex-1 grid grid-cols-2 gap-4 shadow-lg bg-slate-900/50 rounded-2xl py-8 px-6 mt-4'>
            <StoryStatCard stat={`5+`} statTitle="Years of Service" />
            <StoryStatCard stat={`120+`} statTitle="Projects Completed" />
            <StoryStatCard stat={`15+`} statTitle="Companies Served" />
            <StoryStatCard stat={`5+`} statTitle="Team Members" />
          </div>
        </div>
      </div>


          {/* Our Goals */}
          <div className='flex flex-row-reverse gap-6 w-[80%] mt-10 mx-auto'>
          <div className="flex flex-col flex-1 gap-6 max-w-3xl shadow-lg bg-slate-900/50 rounded-2xl py-8 px-6">
            <h5 className="text-white bg-emerald-500 w-max px-3 py-1 rounded-sm text-xs md:text-sm tracking-wide uppercase font-semibold">
              Our Goals
            </h5>

            <h3
              className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-transparent bg-clip-text text-transparent ${urbanist.className}`}
            >
              Vision Forward
            </h3>

            <div className='flex flex-col gap-2'>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-prose">
                As we grow, our goal is to scale without losing what makes us unique — our hands-on creative spirit and attention to detail.
                We&apos;re expanding into new service areas and investing in tools that let our ideas reach farther and resonate deeper.
              </p>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-prose">
                We envision a future where our studio continues to shape brands, products, and experiences that are not only visually stunning,
                but also meaningful and human-centered. That&apos;s the impact we aim for.
              </p>
            </div>
          </div>

          <div className='flex-1 flex flex-col overflow-hidden rounded-2xl'>
            <div className='flex-1 bg-cover bg-center'>
              <img
                className='max-h-[450px] w-full object-cover rounded-2xl'
                src={"https://i.pinimg.com/736x/5b/d6/22/5bd6223f3f8702ba3154ec8808bfad33.jpg"}
                loading='lazy'
                alt="Future vision concept"
              />
            </div>

            <div className='flex-1 grid grid-cols-2 gap-4 shadow-lg bg-slate-900/50 rounded-2xl py-8 px-6 mt-4'>
              <StoryStatCard 
                stat={"100%"}
                statTitle={"Client Satisfaction Goal"}
              />
              <StoryStatCard 
                stat={`50+`}
                statTitle={"Brands to Launch"}
              />
              <StoryStatCard 
                stat={`10+`}
                statTitle={"Creative Events Ahead"}
              />
              <StoryStatCard 
                stat={`3+`}
                statTitle={"Services to Add"}
              />
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}
