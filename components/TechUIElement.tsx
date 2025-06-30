import React from 'react'
import Link from 'next/link';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function TechUIElement() {
  return (
    <section className='flex flex-col gap-8 mx-auto w-[80%] p-4 bg-gradient-to-b from-transparent to-slate-900 mt-20 mb-12 rounded-xl shadow-lg  '>
          <div className={'flex item-center gap-2 justify-center text-xl ' + urbanist.className} > 
            <i className="fa-solid fa-lightbulb text-[var(--shiny-yellow)] animate-bounce text-3xl"></i>
            <p>
              We combine industry-leading tools with a human-centered approach to design that inspires and connects:
            </p>
          </div>
         <ul className='flex flex-col p-4 space-y-2 w-[60%]'>
          <li className='flex items-center justify-between py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-yellow-400 hover:translate-x-3'>
            <div className='flex items-center gap-3'>
              <i className='fas fa-paint-brush text-yellow-400'></i>
              <span className={'text-lg font-semibold group-hover:text-yellow-400 ' + urbanist.className}>Adobe Photoshop</span>
              <span className='text-slate-300'> - Image editing & retouching</span>
            </div>
            <Link 
              className='text-gray-500 transition-all duration-300 hover:text-white'
              href={"https://www.adobe.com/products/photoshop.html"}
              target='_blank'
            >Learn More</Link>
          </li>
          <li className='flex items-center justify-between py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-red-600 hover:translate-x-3'>
            <div className='flex items-center gap-3'>
              <i className='fas fa-vector-square text-red-600'></i>
              <span className={'text-lg font-semibold group-hover:text-red-600 ' + urbanist.className}>Adobe Illustrator</span>
              <span className='text-slate-300 '> - Vector graphics & logo design</span>
            </div>
            <Link 
              className='text-gray-500 transition-all duration-300 hover:text-white'
              href={"https://www.adobe.com/products/illustrator.html"}
              target='_blank'
            >Learn More</Link>
          </li>
          <li className='flex items-center justify-between py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-pink-600 hover:translate-x-3'>
            <div className='flex items-center gap-3'>
              <i className='fas fa-cubes text-pink-500'></i>
              <span className={'text-lg font-semibold group-hover:text-pink-500 '  + urbanist.className}>Figma</span>
              <span className='text-slate-300'> - Collaborative UI/UX design</span>
            </div>
            <Link 
              className='text-gray-500 transition-all duration-300 hover:text-white'
              href={"https://www.figma.com/"}
              target='_blank'
            >Learn More</Link>
          </li>
          <li className='flex items-center justify-between py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-purple-600 hover:translate-x-3'>
            <div className='flex items-center gap-3'>
              <i className='fas fa-film text-purple-600'></i>
              <span className={'text-lg font-semibold group-hover:text-purple-600 ' +  urbanist.className}>After Effects</span>
              <span className='text-slate-300'> - Motion graphics & animation</span>
            </div>
            <Link 
              className='text-gray-500 transition-all duration-300 hover:text-white'
              href={"https://www.adobe.com/products/aftereffects.html"}
              target='_blank'
            >Learn More</Link>
          </li>
          <li className='flex items-center justify-between py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-teal-600 hover:translate-x-3'>
            <div className='flex items-center gap-3'>
              <i className='fas fa-camera-retro text-teal-500'></i>
              <span className={'text-lg font-semibold group-hover:text-teal-500 ' +  urbanist.className}>Lightroom</span>
              <span className='text-slate-300'> - Photo color correction & enhancement</span>
            </div>
            <Link 
              className='text-gray-500 transition-all duration-300 hover:text-white'
              href={"https://www.adobe.com/products/photoshop-lightroom.html"}
              target='_blank'
            >Learn More</Link>
          </li>
          <li className='flex items-center justify-between py-2 px-6 border-2 w-full rounded-xl border-transparent bg-slate-700/40 shadow-lg translate-all duration-300 group hover:border-blue-600 hover:translate-x-3'>
            <div className='flex items-center gap-3'>
              <i className='fas fa-fingerprint text-blue-600'></i>
              <span className={'text-lg font-semibold group-hover:text-blue-600 ' +  urbanist.className}>Blender</span>
              <span className='text-slate-300'> - 3D modeling & product visualization</span>
            </div>
            <Link 
              className='text-gray-500 transition-all duration-300 hover:text-white'
              href={"https://www.blender.org/"}
              target='_blank'
            >Learn More</Link>
          </li>
        </ul>
        <div className='border-t-2 py-6 grid grid-cols-6 gap-4 px-2 '> 
            <div className='h-[180px] bg-center bg-cover bg-no-repeat bg-transparent rounded-lg transition-all duration-300 grayscale-50 hover:grayscale-0 hover:scale-105'
            style={{backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"}}
            title='Adobe Photoshop'
            ></div>   
            <div className='h-[180px] bg-center bg-cover rounded-lg transition-all duration-300 grayscale-50 hover:grayscale-0 hover:scale-105'
            style={{backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png)"}}
            title='Adobe Illustrator'
            ></div>   
            <div className='h-[180px] bg-center bg-contain bg-no-repeat bg-slate-800 rounded-lg transition-all duration-300 grayscale-50 hover:grayscale-0 hover:scale-105'
            style={{backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png)"}}
            title='Figma'
            ></div>   
            <div className='h-[180px] bg-center bg-cover rounded-lg transition-all duration-300 grayscale-50 hover:grayscale-0 hover:scale-105'
            style={{backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png)"}}
            title='After Effects'
            ></div>   
            <div className='h-[180px] bg-center bg-cover rounded-lg transition-all duration-300 grayscale-50 hover:grayscale-0 hover:scale-105'
            style={{backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Adobe_Photoshop_Lightroom_Classic_CC_icon.svg/2101px-Adobe_Photoshop_Lightroom_Classic_CC_icon.svg.png)"}}
            title='Lightroom'
            ></div>   
            <div className='h-[180px] bg-center bg-contain bg-no-repeat bg-[#1e1e1e] rounded-lg transition-all duration-300 grayscale-50 hover:grayscale-0 hover:scale-105'
            style={{backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/587px-Blender_logo_no_text.svg.png)"}}
            title='Blender'
            ></div>   
        </div>
      </section>
  )
}
