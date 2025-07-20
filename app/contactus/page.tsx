'use client'
import React, { useState } from 'react'
import ResponseStep from '@/components/ResponseStep'
import { responseStepsColorContent, responseStepsContent } from '@/utils'

export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactTopic, setContactTopic] = useState("");
  const [addProjectInfo, setAddProjectInfo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  return (
    <div>
      {/* Header BAckground */}
      <section className='mx-auto flex flex-col items-center g w-[90%] my-16 '>
        <div className='flex flex-col items-center gap-8'>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">
              It&apos;s Time to Design Something <span className="text-red-500">Exciting</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Transform your ideas into visually compelling experiences. Let&apos;s create something extraordinary together.
            </p>
          </div>
        </div>

        <div className='p-4 bg-slate-900/50 rounded-2xl w-[50%] mt-12 '>
          <div className='text-center'> Contact Form</div>
          <form className='flex flex-col gap-4 rounded-xl'>
            <div className="flex w-full gap-4 my-4 flex-col md:flex-row">
              <input
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--error-color)] transition-all placeholder:text-gray-500 transition-all duration-300 "
                placeholder="Full Name"
                type="text"
              />
              <input
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--error-color)] transition-all placeholder:text-gray-500 transition-all duration-300 "
                placeholder="Email Address"
                type="email"
              />
            </div>

            <h5 className="text-lg font-semibold mb-1 flex items-center gap-2 text-gray-900">
              <i className="fa-solid fa-diagram-project text-base text-blue-800/80 "></i>
              <p className='text-white'> Project Inquiry </p>
            </h5>
            <div className="relative w-full">
              <select
                name="contactType"
                defaultValue=""
                className="w-full appearance-none px-4 py-3 rounded-lg border border-gray-300 bg-slate-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all pr-10"
              >
                <option className='text-gray-500' value="" disabled>-- Reason for Contact</option>
                <option value="project">Start a New Project</option>
                <option value="support">Get Support</option>
                <option value="consultation">Book a Consultation</option>
                <option value="quote">Request a Quote</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-700">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>

            <div className="flex w-full gap-4 my-4 flex-col md:flex-row">
              <input
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--error-color)] transition-all placeholder:text-gray-500 transition-all duration-300 "
                placeholder="Company Name"
                type="text"
              />
              <select
                name="projectType"
                defaultValue=""
                className="w-full appearance-none px-4 py-3 rounded-lg border border-gray-300 bg-slate-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all "
              >
                <option className='text-gray-500' value="" disabled>-- Select Project Type</option>
                <option value="wedding">Wedding Event</option>
                <option value="logo">Logo Design</option>
                <option value="product">Product Design</option>
                <option value="other">Product Design</option>
              </select>

            </div>

            <label className="block text-sm font-medium text-white ">
              More Details
            </label>
            <textarea
              id="details"
              name="details"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-100 placeholder:text-gray-300 max-h-[600px]"
              placeholder="Please provide more information about your request..."
            />

            <button className="relative flex items-center justify-center self-center px-6 py-1 bg-[var(--error-color)] text-white
             rounded-lg transition-all cursor-pointer shadow overflow-hidden group">
              <p className="z-[20] relative">Submit</p>
              <i className="fa-regular fa-circle absolute z-10 opacity-50 scale-0 group-hover:scale-[10] transition-transform duration-400 ease-out pointer-events-none"></i>
              <i className="fa-regular fa-circle absolute z-10 opacity-50 scale-0 group-hover:scale-[10] transition-transform duration-800 ease-out pointer-events-none"></i>
            </button>


          </form>
        </div>
        {/* Sucess Message */}

        <div className='flex w-[90%] justify-evenly my-12 '> 
          <div className='flex flex-col items-center gap-4 bg-slate-900/50 rounded-2xl w-[30%] px-4 py-8 shadow-lg group transition-all duration-300 hover:-translate-y-2'>
            <i className="fa-solid fa-phone text-3xl transition-all duration-300 group-hover:text-emerald-500"></i>
            <span className='text-xl'>Phone</span>
            <span>+0-123-456-789</span>
          </div>
          <div className='flex flex-col items-center gap-4 bg-slate-900/50 rounded-2xl w-[30%] px-4 py-8 shadow-lg group transition-all duration-300 hover:-translate-y-2'>
            <i className="fa-solid fa-envelope text-4xl transition-all duration-300 group-hover:text-[var(--light-red)]"></i>
            <span className='text-xl'>Email</span>
            <span>Alldesigns@gmail.com </span>
          </div>
          <div className='flex flex-col items-center gap-4 bg-slate-900/50 rounded-2xl w-[30%] px-4 py-6 shadow-lg group transition-all duration-300 hover:-translate-y-2'>
            <i className="fa-brands fa-instagram text-5xl transition-all duration-300 group-hover:text-orange-500"></i>
            <span className='text-xl'>Instagram</span>
            <span> alldesign.ge</span>
          </div>
        </div>
        
        <div className='my-12 shadow-xl bg-slate-900/50 rounded-lg p-4 py-6'> 
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-gradient-to-r from-red-400 to-red-700 bg-clip-text mb-4 uppercase tracking-wide">
            What Happens After You Submit a Form
          </h3>

          <div className='grid md:grid-cols-1 lg:grid-cols-2 w-full my-4 gap-4 '>
              {responseStepsContent.map((step, index) => {
                return(
                        <ResponseStep
                          key={index}
                          index={index+1}
                          title={step[0]}
                          icon={step[1]}
                          p={step[2]}
                          color={responseStepsColorContent[index]}
                        />
                    )
                })
                }
          </div>
        </div>
      </section>
      {/* Our Strong Sides */}
    </div>
  )
}

// 🏷️ Option Descriptions (for tooltips or labels, if needed):
// Start a New Project – You're ready to begin a design project with us.

// Get Support – You need help with something we've already delivered.

// Book a Consultation – You want expert guidance or strategic input.

// Request a Quote – You’re curious about pricing before starting.

// Other – Anything else you'd like to talk about.