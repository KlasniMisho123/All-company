import { Urbanist } from 'next/font/google';
import React from 'react'
import HeroGrid from './HeroGrid';
import Link from 'next/link';
import WorkStages from './WorkStages';
import StrongSidesScroll from './StrongSidesScroll';
import Button from './Button';
import Services from './Services';
import ClientCompanies from './ClientCompanies';
import ContactUsElement from './ContactUsElement';
import ProjectsElement from './ProjectsElement';
import { RevealSlide } from './animations/RevealSlide';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function Hero() {
  return (
    <div className=''>
      <section
        className="relative px-8 py-10 md:py-24 md:py-32 flex flex-col md:flex-row items-center gap-1 lg:gap-8 w-full min-h-screnn md:h-screen min-h-[600px] bg-center overflow-hidden"
        style={{ backgroundImage: "url(projects-bg.avif)" }}
      >
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="text-base md:text-lg font-semibold">
            Designs That Speak for You
          </h4>

          <h2 className={
            "text-2xl sm:text-3xl md:text-4xl lg:text-6xl max-w-[700px] font-semibold leading-tight " + 
            urbanist.className
          }>
            <span className="inline-block pl-2 pr-4 border-2 border-[var(--error-color)] text-[var(--error-color)] rounded-r-full rounded-l-none mb-2 lg:mb-4 truncate text-5xl sm:text-5xl md:text-4xl lg:text-5xl">
              Get Custom Visuals
            </span>
            <br />
            for Social Media, Branding, Events, and More
          </h2>

          <h4 className="text-base sm:text-lg font-semibold">
            <i className="fa-solid fa-hammer text-[var(--error-color)] forging mr-1"></i>
            Crafted <span className="text-[var(--error-color)]">Uniquely</span>. Designed Just for You.
          </h4>

          <Button
            title="Order Design"
            linkSrc="/contactus"
            icon={<></>}
            customClassName=""
          />
        </div>

        <HeroGrid />
      </section>
      <StrongSidesScroll />
      <RevealSlide width='100%' direction='right'>
        <section className="mx-auto px-6 md:px-20 py-10 w-[90%] lg:w-[80%] h-auto lg:h-[400px] shadow-sm rounded-lg 
        bg-gradient-to-r from-slate-900 to-slate-800 flex flex-col lg:flex-row justify-between gap-8 transition-all duration-500">

        <div className="flex-1">
          <div className="relative inline-block group mt-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold truncate text-white">
              All Design
              <div className="h-1 w-0 bg-[var(--error-color)] transition-all duration-500 group-hover:w-full"></div>
            </h1>
          </div>

          <p className="text-gray-200 max-w-2xl text-center lg:text-left text-base md:text-lg leading-relaxed mt-4">
            Where creativity meets strategy—explore our comprehensive design solutions. <br />
            See how we transform visions into brands.
          </p>

          <div className="flex flex-col gap-2 mt-6">
            <div className="flex items-center gap-3 group">
              <i className="fa-solid fa-lightbulb text-2xl p-2 px-3 transition-all duration-500 border-2 border-transparent 
                rounded-full group-hover:border-yellow-400 group-hover:bg-white group-hover:text-yellow-400 shadow-sm"></i>
              <span className="text-yellow-400">Client&apos;s Vision</span>
            </div>

            <div className="flex items-center gap-3 group">
              <i className="fa-solid fa-cubes text-2xl p-2 transition-all duration-500 border-2 border-transparent 
                rounded-full group-hover:border-teal-500 group-hover:bg-white group-hover:text-teal-500 shadow-sm"></i>
              <span className="text-teal-500">Quality Product</span>
            </div>

            <div className="flex items-center gap-3 group">
              <i className="fa-solid fa-handshake text-2xl p-2 px-2 transition-all duration-500 border-2 border-transparent 
                rounded-full group-hover:border-blue-500 group-hover:bg-white group-hover:text-blue-500 shadow-sm"></i>
              <span className="text-blue-500">Trusted Partnership</span>
            </div>
          </div>
        </div>
        
        <div className="self-center">
          <Link
            href="/aboutus"
            className="flex items-center gap-2 text-lg md:text-xl text-white bg-[var(--error-color)] 
            border-2 border-[var(--error-color)] font-semibold cursor-pointer rounded-full px-6 py-2.5 
            hover:bg-white hover:text-[var(--error-color)] transition-all duration-300 shadow-sm overflow-hidden plane-flight"
          >
            About Us <i className="fa-solid fa-paper-plane"></i>
          </Link>
        </div>
      </section>

      </RevealSlide>

      <Services />
      <RevealSlide width='100%' direction='left'>
        <ContactUsElement />
      </RevealSlide>

      <WorkStages />
      <RevealSlide width='100%' direction='up'>
        <ProjectsElement />
      </RevealSlide>
      <RevealSlide width='100%' direction='right'>
        <ClientCompanies />
      </RevealSlide>
    </div>
  )
}


